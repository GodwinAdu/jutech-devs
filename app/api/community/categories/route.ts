import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Post } from '@/lib/models/community'

export async function GET() {
  try {
    await connectDB()
    
    const [discussionsCount, qaCount, featureRequestsCount] = await Promise.all([
      Post.countDocuments({ category: 'discussions' }),
      Post.countDocuments({ category: 'qa' }),
      Post.countDocuments({ category: 'feature-requests' })
    ])

    return NextResponse.json({
      discussions: { topics: discussionsCount, posts: discussionsCount },
      qa: { topics: qaCount, posts: qaCount },
      'feature-requests': { topics: featureRequestsCount, posts: featureRequestsCount }
    })
  } catch (error) {
    console.error('Failed to fetch category stats:', error)
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }
}