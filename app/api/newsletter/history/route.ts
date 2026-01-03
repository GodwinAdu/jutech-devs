import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { NewsletterHistory } from '@/lib/models/newsletter'

export async function GET() {
  try {
    await connectDB()
    
    const history = await NewsletterHistory.find({}).sort({ sentAt: -1 }).limit(50)
    
    return NextResponse.json({ history })
  } catch (error) {
    console.error('Failed to fetch history:', error)
    return NextResponse.json({ error: 'Failed to fetch history' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await connectDB()
    
    const { id } = await request.json()
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }

    await NewsletterHistory.findByIdAndDelete(id)
    
    return NextResponse.json({ message: 'Newsletter deleted from history' })
  } catch (error) {
    console.error('Failed to delete history:', error)
    return NextResponse.json({ error: 'Failed to delete history' }, { status: 500 })
  }
}