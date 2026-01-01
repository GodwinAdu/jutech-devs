import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { User } from '@/lib/models/community'
import { signToken, AuthError } from '@/lib/auth-utils'
import { emailService } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    await connectDB()

    const body = await request.json()
    const { name, username, email, password } = body

    // Validate input
    if (!name?.trim() || !username?.trim() || !email?.trim() || !password?.trim()) {
      return NextResponse.json(
        { error: 'Name, username, email, and password are required' },
        { status: 400 }
      )
    }

    // Validate password strength
    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate username format
    const usernameRegex = /^[a-z0-9]{3,20}$/
    if (!usernameRegex.test(username)) {
      return NextResponse.json(
        { error: 'Username must be 3-20 characters, lowercase letters and numbers only' },
        { status: 400 }
      )
    }

    // Check for existing user
    const existingUser = await User.findOne({
      $or: [
        { username: username.toLowerCase().trim() },
        { email: email.toLowerCase().trim() }
      ]
    })

    if (existingUser) {
      const field = existingUser.email === email.toLowerCase().trim() ? 'email' : 'username'
      return NextResponse.json(
        { error: `This ${field} is already registered` },
        { status: 409 }
      )
    }

    // Create user
    const user = new User({
      name: name.trim(),
      username: username.toLowerCase().trim(),
      email: email.toLowerCase().trim(),
      password: password, // In production, hash with bcrypt
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
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

    // Send welcome email
    try {
      await emailService.sendWelcomeEmail(user.email, user.name)
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError)
      // Don't fail registration if email fails
    }

    // Generate token
    const token = signToken({
      id: user._id.toString(),
      username: user.username,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      role: user.role
    })

    // Create response
    const response = NextResponse.json({
      user: {
        id: user._id,
        username: user.username,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        role: user.role
      },
      message: 'Account created successfully'
    }, { status: 201 })

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
    console.error('Registration error:', error)

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