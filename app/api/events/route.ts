import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Event } from '@/lib/models/events'
import { logSecurityEvent, getClientInfo } from '@/lib/security-utils'

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    const status = searchParams.get('status')
    const type = searchParams.get('type')

    const query: any = { status: 'published' }
    if (status === 'upcoming') {
      query.date = { $gte: new Date() }
    }
    if (type) query.type = type

    const events = await Event.find(query)
      .sort({ date: 1 })
      .limit(limit)
      .lean()

    // Add host field for compatibility
    const eventsWithHost = events.map(event => ({
      ...event,
      host: { name: 'Admin', avatar: '' },
      duration: 60 // Default duration for compatibility
    }))
    
    return NextResponse.json({ events: eventsWithHost })
  } catch (error) {
    console.error('Failed to fetch events:', error)
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    
    const data = await request.json()
    
    const event = new Event({
      ...data,
      createdBy: 'admin', // In real app, get from auth
      updatedAt: new Date()
    })
    
    await event.save()
    
    // Log security event
    const clientInfo = getClientInfo(request)
    await logSecurityEvent({
      action: 'event_create',
      details: {
        ...clientInfo,
        resource: event._id.toString(),
        metadata: { title: data.title, category: data.category }
      },
      severity: 'low'
    })
    
    return NextResponse.json({ message: 'Event created successfully', event })
  } catch (error) {
    console.error('Failed to create event:', error)
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 })
  }
}