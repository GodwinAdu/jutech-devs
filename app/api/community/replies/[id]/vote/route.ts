import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Reply, User } from '@/lib/models/community'
import { getAuthUser } from '@/lib/auth-utils'

export async function POST(
  request: NextRequest,
  { params }: { params:Promise<{ id: string }> }
) {
  try {
    await connectDB()
    
    const user = getAuthUser(request)
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }
    
    const { type } = await request.json()
    const { id: replyId } = await params
    
    const reply = await Reply.findById(replyId)
    if (!reply) {
      return NextResponse.json({ error: 'Reply not found' }, { status: 404 })
    }

    const userId = user.id
    const hasUpvoted = reply.upvotes.includes(userId)
    const hasDownvoted = reply.downvotes.includes(userId)

    let voteChange = 0

    if (type === 'up') {
      if (hasUpvoted) {
        reply.upvotes.pull(userId)
        voteChange = -1
      } else {
        if (hasDownvoted) {
          reply.downvotes.pull(userId)
          voteChange = 2
        } else {
          voteChange = 1
        }
        reply.upvotes.push(userId)
      }
    } else if (type === 'down') {
      if (hasDownvoted) {
        reply.downvotes.pull(userId)
        voteChange = 1
      } else {
        if (hasUpvoted) {
          reply.upvotes.pull(userId)
          voteChange = -2
        } else {
          voteChange = -1
        }
        reply.downvotes.push(userId)
      }
    }

    reply.votes += voteChange
    await reply.save()

    return NextResponse.json({
      votes: reply.votes,
      userVote: reply.upvotes.includes(userId) ? 'up' : reply.downvotes.includes(userId) ? 'down' : null
    })
  } catch (error) {
    console.error('Reply vote error:', error)
    return NextResponse.json({ error: 'Failed to vote' }, { status: 500 })
  }
}