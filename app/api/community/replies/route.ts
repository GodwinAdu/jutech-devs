import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Post, Reply, User } from '@/lib/models/community'
import { getAuthUser } from '@/lib/auth-utils'
import { logSecurityEvent, getClientInfo, checkSuspiciousActivity } from '@/lib/security-utils'

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    
    const user = getAuthUser(request)
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }
    
    // Check for suspicious activity
    const isSuspicious = await checkSuspiciousActivity(user.id, 'reply_create')
    if (isSuspicious) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
    }
    
    const { postId, content, parentId } = await request.json()
    
    const reply = new Reply({
      content,
      author: user.id,
      post: postId,
      parentReply: parentId || undefined
    })
    
    await reply.save()
    await reply.populate('author', 'name username avatar')
    
    // Update post reply count
    await Post.findByIdAndUpdate(postId, { $inc: { replies: 1 } })
    
    // Log security event
    const clientInfo = getClientInfo(request)
    await logSecurityEvent({
      userId: user.id,
      action: 'reply_create',
      details: {
        ...clientInfo,
        resource: reply._id.toString(),
        metadata: { 
          postId, 
          parentId,
          contentLength: content.length 
        }
      },
      severity: 'low'
    })
    
    return NextResponse.json(reply, { status: 201 })
  } catch (error) {
    console.error('Failed to create reply:', error)
    return NextResponse.json({ error: 'Failed to create reply' }, { status: 500 })
  }
}