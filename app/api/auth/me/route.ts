import { NextRequest, NextResponse } from 'next/server'
import { getAuthUser } from '@/lib/auth-utils'
import connectDB from '@/lib/mongodb'
import { User } from '@/lib/models/community'

export async function GET(request: NextRequest) {
  try {
    const user = getAuthUser(request)
    
    if (!user) {
      return NextResponse.json(
        { error: 'Not authenticated' }, 
        { status: 401 }
      )
    }

    // Verify user still exists in database
    await connectDB()
    const dbUser = await User.findById(user.id).lean()
    
    if (!dbUser) {
      return NextResponse.json(
        { error: 'User not found' }, 
        { status: 404 }
      )
    }

    // Update last active
    await User.findByIdAndUpdate(user.id, { 
      lastActive: new Date() 
    })

    return NextResponse.json({ 
      user: {
        id: dbUser._id,
        username: dbUser.username,
        name: dbUser.name,
        email: dbUser.email,
        avatar: dbUser.avatar,
        role: dbUser.role || 'user',
        reputation: dbUser.reputation || 0,
        badges: dbUser.badges || []
      }
    })
  } catch (error) {
    console.error('Auth check error:', error)
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}