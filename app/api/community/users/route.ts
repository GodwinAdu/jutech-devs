import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import { User, Post } from '@/lib/models/community'

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    
    const { searchParams } = new URL(request.url)
    const sort = searchParams.get('sort') || 'reputation'
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    const sortOptions: any = {}
    switch (sort) {
      case 'reputation':
        sortOptions.reputation = -1
        break
      case 'posts':
        // We'll calculate this with aggregation
        break
      case 'recent':
        sortOptions.joinDate = -1
        break
      default:
        sortOptions.reputation = -1
    }

    let users
    if (sort === 'posts') {
      users = await User.aggregate([
        {
          $lookup: {
            from: 'posts',
            localField: '_id',
            foreignField: 'author',
            as: 'userPosts'
          }
        },
        {
          $addFields: {
            postCount: { $size: '$userPosts' }
          }
        },
        {
          $sort: { postCount: -1 }
        },
        {
          $skip: (page - 1) * limit
        },
        {
          $limit: limit
        },
        {
          $project: {
            name: 1,
            username: 1,
            avatar: 1,
            reputation: 1,
            badges: 1,
            location: 1,
            joinDate: 1,
            postCount: 1
          }
        }
      ])
    } else {
      users = await User.find({})
        .select('name username avatar reputation badges location joinDate')
        .sort(sortOptions)
        .limit(limit)
        .skip((page - 1) * limit)
        .lean()

      // Add post count for each user
      for (let user of users) {
        const postCount = await Post.countDocuments({ author: user._id })
        user.postCount = postCount
      }
    }

    const total = await User.countDocuments({})

    return NextResponse.json({
      users,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    
    const body = await request.json()
    const { name, username, email, avatar, bio, location, website, github, twitter } = body

    const existingUser = await User.findOne({
      $or: [{ username }, { email }]
    })

    if (existingUser) {
      return NextResponse.json({ error: 'Username or email already exists' }, { status: 400 })
    }

    const user = new User({
      name,
      username,
      email,
      avatar,
      bio,
      location,
      website,
      github,
      twitter,
      badges: [{
        id: 'newcomer',
        name: 'Newcomer',
        description: 'Welcome to the community!',
        icon: '👋',
        color: 'blue',
        rarity: 'common'
      }]
    })

    await user.save()

    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 })
  }
}