import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Post, User } from '@/lib/models/community'
import { getAuthUser } from '@/lib/auth-utils'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()
    
    const user = getAuthUser(request)
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }
    
    const { type } = await request.json() // 'up' or 'down'
    const { id: postId } = await params
    
    const post = await Post.findById(postId)
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    const userId = user.id
    const hasUpvoted = post.upvotes.includes(userId)
    const hasDownvoted = post.downvotes.includes(userId)

    let voteChange = 0
    let reputationChange = 0

    if (type === 'up') {
      if (hasUpvoted) {
        // Remove upvote
        post.upvotes.pull(userId)
        voteChange = -1
        reputationChange = -1
      } else {
        // Add upvote, remove downvote if exists
        if (hasDownvoted) {
          post.downvotes.pull(userId)
          voteChange = 2
          reputationChange = 2
        } else {
          voteChange = 1
          reputationChange = 1
        }
        post.upvotes.push(userId)
      }
    } else if (type === 'down') {
      if (hasDownvoted) {
        // Remove downvote
        post.downvotes.pull(userId)
        voteChange = 1
        reputationChange = 1
      } else {
        // Add downvote, remove upvote if exists
        if (hasUpvoted) {
          post.upvotes.pull(userId)
          voteChange = -2
          reputationChange = -2
        } else {
          voteChange = -1
          reputationChange = -1
        }
        post.downvotes.push(userId)
      }
    }

    post.votes += voteChange
    await post.save()

    // Update author reputation
    if (reputationChange !== 0) {
      await User.findByIdAndUpdate(post.author, { 
        $inc: { reputation: reputationChange } 
      })
    }

    return NextResponse.json({
      votes: post.votes,
      userVote: post.upvotes.includes(userId) ? 'up' : post.downvotes.includes(userId) ? 'down' : null
    })
  } catch (error) {
    console.error('Vote error:', error)
    return NextResponse.json({ error: 'Failed to vote' }, { status: 500 })
  }
}