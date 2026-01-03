import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Post, User } from '@/lib/models/community'
import { getAuthUser } from '@/lib/auth-utils'
import { logSecurityEvent, getClientInfo, checkSuspiciousActivity } from '@/lib/security-utils'

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    await connectDB()
    
    const user = getAuthUser(request)
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }
    
    // Check for suspicious voting activity
    const isSuspicious = await checkSuspiciousActivity(user.id, 'vote')
    if (isSuspicious) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
    }
    
    const { voteType } = await request.json() // 'upvote' or 'downvote'
    
    const post = await Post.findById(id)
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }
    
    const userId = user.id
    const hasUpvoted = post.upvotes.includes(userId)
    const hasDownvoted = post.downvotes.includes(userId)
    
    let updateData: any = {}
    
    if (voteType === 'upvote') {
      if (hasUpvoted) {
        // Remove upvote
        updateData.$pull = { upvotes: userId }
      } else {
        // Add upvote and remove downvote if exists
        updateData.$addToSet = { upvotes: userId }
        if (hasDownvoted) {
          updateData.$pull = { downvotes: userId }
        }
      }
    } else if (voteType === 'downvote') {
      if (hasDownvoted) {
        // Remove downvote
        updateData.$pull = { downvotes: userId }
      } else {
        // Add downvote and remove upvote if exists
        updateData.$addToSet = { downvotes: userId }
        if (hasUpvoted) {
          updateData.$pull = { upvotes: userId }
        }
      }
    }
    
    const updatedPost = await Post.findByIdAndUpdate(id, updateData, { new: true })
      .populate('author', 'name username avatar')
    
    // Calculate counts from arrays
    const upvoteCount = updatedPost.upvotes.length
    const downvoteCount = updatedPost.downvotes.length
    const netVotes = upvoteCount - downvoteCount
    
    // Update the votes field
    await Post.findByIdAndUpdate(id, { votes: netVotes })
    
    // Log security event
    const clientInfo = getClientInfo(request)
    await logSecurityEvent({
      userId: user.id,
      action: 'vote',
      details: {
        ...clientInfo,
        resource: id,
        metadata: { voteType, upvoteCount, downvoteCount }
      },
      severity: 'low'
    })
    
    return NextResponse.json({ 
      message: 'Vote updated successfully', 
      post: {
        ...updatedPost.toObject(),
        upvoteCount,
        downvoteCount
      },
      userVote: voteType === 'upvote' && !hasUpvoted ? 'upvote' : 
                voteType === 'downvote' && !hasDownvoted ? 'downvote' : null
    })
  } catch (error) {
    console.error('Failed to update vote:', error)
    return NextResponse.json({ error: 'Failed to update vote' }, { status: 500 })
  }
}