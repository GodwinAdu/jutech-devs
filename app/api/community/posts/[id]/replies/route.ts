import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Reply } from '@/lib/models/community'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()
    
    const { id: postId } = await params
    const replies = await Reply.find({ post: postId })
      .populate('author', 'name username avatar reputation badges')
      .sort({ createdAt: 1 })
      .lean()

    return NextResponse.json({ replies })
  } catch (error) {
    console.error('Failed to fetch replies:', error)
    return NextResponse.json({ error: 'Failed to fetch replies' }, { status: 500 })
  }
}