import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import { Event, User } from '@/lib/models/community'

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const status = searchParams.get('status')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    const query: any = {}
    if (type) query.type = type
    if (status) query.status = status

    const events = await Event.find(query)
      .populate('host', 'name username avatar')
      .sort({ date: 1 })
      .limit(limit)
      .skip((page - 1) * limit)
      .lean()

    // Add attendee count
    const eventsWithCount = events.map(event => ({
      ...event,
      attendeeCount: event.attendees?.length || 0
    }))

    const total = await Event.countDocuments(query)

    return NextResponse.json({
      events: eventsWithCount,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    
    const body = await request.json()
    const { title, description, type, date, duration, hostId, maxAttendees, tags } = body

    const event = new Event({
      title,
      description,
      type,
      date: new Date(date),
      duration,
      host: hostId,
      maxAttendees,
      tags
    })

    await event.save()
    await event.populate('host', 'name username avatar')

    return NextResponse.json(event, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 })
  }
}