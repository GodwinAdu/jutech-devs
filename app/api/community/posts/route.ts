import { NextRequest, NextResponse } from 'next/server'
import {connectDB} from '@/lib/mongodb'
import { Post, User } from '@/lib/models/community'
import { getAuthUser } from '@/lib/auth-utils'
import { logSecurityEvent, getClientInfo, checkSuspiciousActivity } from '@/lib/security-utils'

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const status = searchParams.get('status')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const sort = searchParams.get('sort') || 'createdAt'
    const search = searchParams.get('search')
    const tags = searchParams.get('tags')?.split(',')
    const solved = searchParams.get('solved')

    const query: any = {}
    if (category) query.category = category
    if (status === 'pinned') query.pinned = true
    if (status === 'locked') query.locked = true
    if (status === 'solved') query.solved = true
    if (solved === 'true') query.solved = true
    if (solved === 'false') query.solved = false
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } }
      ]
    }
    if (tags?.length) query.tags = { $in: tags }

    const sortOptions: any = {}
    switch (sort) {
      case 'popular':
        sortOptions.votes = -1
        break
      case 'views':
        sortOptions.views = -1
        break
      case 'replies':
        sortOptions.replies = -1
        break
      default:
        sortOptions.createdAt = -1
    }

    const posts = await Post.find(query)
      .populate('author', 'name username avatar reputation badges')
      .sort(sortOptions)
      .limit(limit)
      .skip((page - 1) * limit)
      .lean()

    // Add calculated vote counts
    const postsWithCounts = posts.map(post => ({
      ...post,
      upvoteCount: Array.isArray(post.upvotes) ? post.upvotes.length : 0,
      downvoteCount: Array.isArray(post.downvotes) ? post.downvotes.length : 0
    }))

    const total = await Post.countDocuments(query)

    return NextResponse.json({
      posts: postsWithCounts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    
    const user = getAuthUser(request)
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }
    
    // Check for suspicious activity
    const isSuspicious = await checkSuspiciousActivity(user.id, 'post_create')
    if (isSuspicious) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
    }
    
    const body = await request.json()
    const { title, content, category, tags } = body

    const post = new Post({
      title,
      content,
      category,
      tags,
      author: user.id
    })

    await post.save()
    await post.populate('author', 'name username avatar reputation badges')

    // Log security event
    const clientInfo = getClientInfo(request)
    await logSecurityEvent({
      userId: user.id,
      action: 'post_create',
      details: {
        ...clientInfo,
        resource: post._id.toString(),
        metadata: { category, title: title.substring(0, 50) }
      },
      severity: 'low'
    })

    await User.findByIdAndUpdate(user.id, { $inc: { reputation: 5 } })

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    if (error instanceof Error && error.message === 'Authentication required') {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}