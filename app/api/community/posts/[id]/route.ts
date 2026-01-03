import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Post, User } from '@/lib/models/community'
import { getAuthUser } from '@/lib/auth-utils'
import { logSecurityEvent, getClientInfo } from '@/lib/security-utils'

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    await connectDB()
    
    // Increment view count and get post with calculated vote counts
    const post = await Post.findByIdAndUpdate(
      id,
      { $inc: { views: 1 } },
      { new: true }
    ).populate('author', 'name username avatar reputation badges')
      .lean()
    
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }
    
    // Add calculated vote counts
    const postWithCounts = {
      ...post,
      upvoteCount: Array.isArray(post.upvotes) ? post.upvotes.length : 0,
      downvoteCount: Array.isArray(post.downvotes) ? post.downvotes.length : 0
    }
    
    return NextResponse.json({ post: postWithCounts })
  } catch (error) {
    console.error('Failed to fetch post:', error)
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    await connectDB()
    
    const user = getAuthUser(request)
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }
    
    // Check if user is admin
    const userData = await User.findById(user.id)
    if (!userData || userData.role !== 'admin') {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
    }
    
    const { action, value } = await request.json()
    
    let updateData: any = {}
    
    switch (action) {
      case 'pin':
        updateData.pinned = value
        break
      case 'lock':
        updateData.locked = value
        break
      case 'solve':
        updateData.solved = value
        break
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }
    
    const post = await Post.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    ).populate('author', 'name username avatar')
    
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }
    
    return NextResponse.json({ message: 'Post updated successfully', post })
  } catch (error) {
    console.error('Failed to update post:', error)
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    await connectDB()
    
    const user = getAuthUser(request)
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }
    
    const userData = await User.findById(user.id)
    if (!userData || userData.role !== 'admin') {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
    }
    
    const post = await Post.findByIdAndDelete(id)
    
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }
    
    // Log security event for post deletion
    const clientInfo = getClientInfo(request)
    await logSecurityEvent({
      userId: user.id,
      action: 'post_delete',
      details: {
        ...clientInfo,
        resource: id,
        reason: 'Admin deletion',
        metadata: { title: post.title }
      },
      severity: 'medium'
    })
    
    return NextResponse.json({ message: 'Post deleted successfully' })
  } catch (error) {
    console.error('Failed to delete post:', error)
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 })
  }
}