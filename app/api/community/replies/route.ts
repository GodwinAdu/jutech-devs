import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import { Reply, Post, User } from '@/lib/models/community'
import { getAuthUser } from '@/lib/auth-utils'

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    
    const user = getAuthUser(request)
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }
    
    const body = await request.json()
    const { postId, content, parentId } = body

    if (!postId || !content?.trim()) {
      return NextResponse.json({ error: 'Post ID and content are required' }, { status: 400 })
    }

    const reply = new Reply({
      content: content.trim(),
      author: user.id,
      post: postId,
      ...(parentId && { parentReply: parentId })
    })

    await reply.save()
    await reply.populate('author', 'name username avatar reputation badges')

    // Update post reply count and last reply
    await Post.findByIdAndUpdate(postId, {
      $inc: { replies: 1 },
      lastReply: {
        author: user.id,
        createdAt: new Date()
      }
    })

    // Update user reputation
    await User.findByIdAndUpdate(user.id, { $inc: { reputation: 2 } })

    return NextResponse.json({ reply }, { status: 201 })
  } catch (error) {
    console.error('Failed to create reply:', error)
    return NextResponse.json({ error: 'Failed to create reply' }, { status: 500 })
  }
}