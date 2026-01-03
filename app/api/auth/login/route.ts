import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { User } from '@/lib/models/community'
import { logSecurityEvent, getClientInfo } from '@/lib/security-utils'
import { AuthError, signToken } from '@/lib/auth-utils'

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    
    const { email, password } = await request.json()
    const clientInfo = getClientInfo(request)
    
    const user = await User.findOne({ email }).select('+password')
    
    if (!user || user.password !== password) {
      // Log failed login attempt
      await logSecurityEvent({
        userId: user?._id?.toString(),
        action: 'failed_login',
        details: {
          ...clientInfo,
          reason: 'Invalid credentials',
          metadata: { email }
        },
        severity: 'medium'
      })
      
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }
    
    // Update last active
    await User.findByIdAndUpdate(user._id, { lastActive: new Date() })
    
    // Log successful login
    await logSecurityEvent({
      userId: user._id.toString(),
      action: 'login',
      details: {
        ...clientInfo,
        metadata: { username: user.username }
      },
      severity: 'low'
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