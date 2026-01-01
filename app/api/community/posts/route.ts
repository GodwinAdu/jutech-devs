import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import { Post, User } from '@/lib/models/community'
import { getAuthUser } from '@/lib/auth-utils'

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const sort = searchParams.get('sort') || 'createdAt'
    const search = searchParams.get('search')
    const tags = searchParams.get('tags')?.split(',')

    const query: any = {}
    if (category) query.category = category
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

    const total = await Post.countDocuments(query)

    return NextResponse.json({
      posts,
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
    
    // Require authentication for creating posts
    const user = getAuthUser(request)
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
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

    // Update user reputation
    await User.findByIdAndUpdate(user.id, { $inc: { reputation: 5 } })

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    if (error instanceof Error && error.message === 'Authentication required') {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}