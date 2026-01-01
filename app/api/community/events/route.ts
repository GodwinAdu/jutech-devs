import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Event, User } from '@/lib/models/community'
import { getAuthUser } from '@/lib/auth-utils'

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    const status = searchParams.get('status')
    const type = searchParams.get('type')

    const query: any = {}
    if (status) query.status = status
    if (type) query.type = type

    const events = await Event.find(query)
      .populate('host', 'name avatar')
      .sort({ date: 1 })
      .limit(limit)
      .lean()

    return NextResponse.json({ events })
  } catch (error) {
    console.error('Failed to fetch events:', error)
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    
    const user = getAuthUser(request)
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }
    
    // Check if user is admin
    const userData = await User.findById(user.id)
    if (!userData || userData.role !== 'admin') {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
    }
    
    const body = await request.json()
    const { title, description, type, date, duration, maxAttendees, tags } = body

    const event = new Event({
      title,
      description,
      type,
      date,
      duration,
      maxAttendees,
      tags,
      host: user.id
    })

    await event.save()
    await event.populate('host', 'name avatar')

    return NextResponse.json(event, { status: 201 })
  } catch (error) {
    console.error('Failed to create event:', error)
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 })
  }
}