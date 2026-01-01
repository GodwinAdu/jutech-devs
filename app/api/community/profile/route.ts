import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { User, Post, Reply } from '@/lib/models/community'
import { getAuthUser } from '@/lib/auth-utils'

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    
    const user = getAuthUser(request)
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    const userData = await User.findById(user.id).select('-password')
    if (!userData) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const [postCount, replyCount, totalVotes] = await Promise.all([
      Post.countDocuments({ author: user.id }),
      Reply.countDocuments({ author: user.id }),
      Post.aggregate([
        { $match: { author: userData._id } },
        { $group: { _id: null, totalVotes: { $sum: '$votes' } } }
      ])
    ])

    const userPosts = await Post.find({ author: user.id })
      .sort({ createdAt: -1 })
      .limit(10)
      .populate('author', 'name username avatar')
      .lean()

    return NextResponse.json({
      user: userData,
      stats: {
        posts: postCount,
        replies: replyCount,
        votesReceived: totalVotes[0]?.totalVotes || 0
      },
      recentPosts: userPosts
    })
  } catch (error) {
    console.error('Failed to fetch profile:', error)
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    await connectDB()
    
    const user = getAuthUser(request)
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    const body = await request.json()
    const { name, bio, location, website, github, twitter } = body

    const updatedUser = await User.findByIdAndUpdate(
      user.id,
      { name, bio, location, website, github, twitter },
      { new: true, select: '-password' }
    )

    return NextResponse.json({ user: updatedUser })
  } catch (error) {
    console.error('Failed to update profile:', error)
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 })
  }
}