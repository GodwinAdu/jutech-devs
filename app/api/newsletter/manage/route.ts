import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Newsletter } from '@/lib/models/community'

export async function GET() {
  try {
    await connectDB()
    
    const subscribers = await Newsletter.find({})
      .sort({ subscribedAt: -1 })
      .select('email status subscribedAt unsubscribedAt')
    
    return NextResponse.json({ subscribers })
  } catch (error) {
    console.error('Failed to fetch subscribers:', error)
    return NextResponse.json({ error: 'Failed to fetch subscribers' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await connectDB()
    
    const { id } = await request.json()
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }

    await Newsletter.findByIdAndDelete(id)
    
    return NextResponse.json({ message: 'Subscriber deleted successfully' })
  } catch (error) {
    console.error('Failed to delete subscriber:', error)
    return NextResponse.json({ error: 'Failed to delete subscriber' }, { status: 500 })
  }
}