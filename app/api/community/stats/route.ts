import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { User, Post } from '@/lib/models/community'

export async function GET() {
  try {
    await connectDB()
    
    const [userCount, postCount, solvedCount] = await Promise.all([
      User.countDocuments({}),
      Post.countDocuments({}),
      Post.countDocuments({ solved: true })
    ])

    const solvedRate = postCount > 0 ? Math.round((solvedCount / postCount) * 100) : 0

    return NextResponse.json({
      members: userCount,
      topics: postCount,
      posts: postCount,
      solvedRate
    })
  } catch (error) {
    console.error('Failed to fetch stats:', error)
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }
}