import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Post, Reply, User } from '@/lib/models/community'
import { getAuthUser } from '@/lib/auth-utils'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: replyId } = await params
  try {
    await connectDB()
    
    const user = getAuthUser(request)
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    const reply = await Reply.findById(replyId).populate('post')
    if (!reply) {
      return NextResponse.json({ error: 'Reply not found' }, { status: 404 })
    }

    // Only post author can accept answers
    if (reply.post.author.toString() !== user.id) {
      return NextResponse.json({ error: 'Only post author can accept answers' }, { status: 403 })
    }

    // Update reply as accepted
    await Reply.findByIdAndUpdate(replyId, { isAccepted: true })
    
    // Update post as solved and set accepted answer
    await Post.findByIdAndUpdate(reply.post._id, { 
      solved: true, 
      acceptedAnswer: replyId 
    })

    // Give reputation to reply author
    await User.findByIdAndUpdate(reply.author, { $inc: { reputation: 15 } })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to accept answer:', error)
    return NextResponse.json({ error: 'Failed to accept answer' }, { status: 500 })
  }
}