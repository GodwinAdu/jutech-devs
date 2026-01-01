import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { User } from '@/lib/models/community'

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    const sort = searchParams.get('sort') || 'reputation'

    const sortOptions: any = {}
    switch (sort) {
      case 'reputation':
        sortOptions.reputation = -1
        break
      case 'joinDate':
        sortOptions.joinDate = -1
        break
      default:
        sortOptions.reputation = -1
    }

    const users = await User.find({})
      .select('name username avatar reputation badges location')
      .sort(sortOptions)
      .limit(limit)
      .lean()

    return NextResponse.json({ users })
  } catch (error) {
    console.error('Failed to fetch users:', error)
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}