import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import { User } from '@/lib/models/community'
import { signToken, AuthError } from '@/lib/auth-utils'

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    
    const body = await request.json()
    const { email, password } = body

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' }, 
        { status: 400 }
      )
    }

    // Find user
    const user = await User.findOne({ 
      email: email.toLowerCase().trim() 
    }).select('+password').lean()
    
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' }, 
        { status: 401 }
      )
    }

    // Simple demo auth - in production use bcrypt
    const isValid = password === 'demo123'
    
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' }, 
        { status: 401 }
      )
    }

    // Update last login
    await User.findByIdAndUpdate(user._id, { 
      lastActive: new Date() 
    })

    // Generate token
    const token = signToken({
      id: user._id.toString(),
      username: user.username,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      role: user.role || 'user'
    })

    // Create response
    const response = NextResponse.json({
      user: {
        id: user._id,
        username: user.username,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        role: user.role || 'user'
      },
      message: 'Login successful'
    })

    // Set secure cookie
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/'
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    
    if (error instanceof AuthError) {
      return NextResponse.json(
        { error: error.message }, 
        { status: error.statusCode }
      )
    }
    
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}