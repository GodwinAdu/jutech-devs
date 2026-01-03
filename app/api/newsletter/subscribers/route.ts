import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Newsletter } from '@/lib/models/community'

export async function GET() {
  try {
    await connectDB()
    
    const count = await Newsletter.countDocuments({ status: 'active' })
    
    return NextResponse.json({ count })
  } catch (error) {
    console.error('Failed to get subscriber count:', error)
    return NextResponse.json({ error: 'Failed to get count' }, { status: 500 })
  }
}