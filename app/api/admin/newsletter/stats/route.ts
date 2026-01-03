import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Newsletter } from '@/lib/models/community'

export async function GET() {
  try {
    await connectDB()
    
    const [total, active, unsubscribed] = await Promise.all([
      Newsletter.countDocuments(),
      Newsletter.countDocuments({ status: 'active' }),
      Newsletter.countDocuments({ status: 'unsubscribed' })
    ])

    return NextResponse.json({
      total,
      active,
      unsubscribed,
      growth: {
        thisMonth: 0, // Could calculate actual growth
        lastMonth: 0
      }
    })
  } catch (error) {
    console.error('Failed to fetch newsletter stats:', error)
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }
}