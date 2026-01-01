import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Post } from '@/lib/models/community'
import mongoose from 'mongoose'

export async function GET(
  request: NextRequest,
  { params }: { params:Promise< { id: string }> }
) {
  const { id: postId } = await params
  try {
    await connectDB()
    
    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(postId)) {
      return NextResponse.json({ error: 'Invalid post ID format' }, { status: 400 })
    }

    const post = await Post.findById(postId)
      .populate('author', 'name username avatar reputation badges')
      .lean()

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    // Increment view count
    await Post.findByIdAndUpdate(postId, { $inc: { views: 1 } })

    return NextResponse.json({ post })
  } catch (error) {
    console.error('Failed to fetch post:', error)
    return NextResponse.json({ error: 'Failed to fetch post', details: (error as Error).message }, { status: 500 })
  }
}