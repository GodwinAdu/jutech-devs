import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import { Post } from '@/lib/models/community'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB()
    
    const post = await Post.findById(params.id)
      .populate('author', 'name username avatar reputation badges')
      .lean()

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    // Increment view count
    await Post.findByIdAndUpdate(params.id, { $inc: { views: 1 } })

    return NextResponse.json({ post })
  } catch (error) {
    console.error('Failed to fetch post:', error)
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 })
  }
}