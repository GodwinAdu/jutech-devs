import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'

const JWT_SECRET = process.env.JWT_SECRET

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is required')
}

export interface AuthUser {
  id: string
  username: string
  name: string
  email: string
  avatar?: string
  role: 'user' | 'moderator' | 'admin'
  iat?: number
  exp?: number
}

export function signToken(user: Omit<AuthUser, 'iat' | 'exp'>): string {
  return jwt.sign(
    { 
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      role: user.role
    }, 
    JWT_SECRET, 
    { 
      expiresIn: '7d',
      issuer: 'jutech-community',
      audience: 'jutech-users'
    }
  )
}

export function verifyToken(token: string): AuthUser | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET, {
      issuer: 'jutech-community',
      audience: 'jutech-users'
    }) as AuthUser
    
    // Ensure required fields exist
    if (!decoded.id || !decoded.username || !decoded.email) {
      return null
    }
    
    return decoded
  } catch (error) {
    console.error('Token verification failed:', error)
    return null
  }
}

export function getAuthUser(request: NextRequest): AuthUser | null {
  try {
    const token = request.cookies.get('auth-token')?.value || 
                  request.headers.get('authorization')?.replace('Bearer ', '')
    
    if (!token) return null
    return verifyToken(token)
  } catch (error) {
    console.error('Failed to get auth user:', error)
    return null
  }
}

export function requireAuth(request: NextRequest): AuthUser {
  const user = getAuthUser(request)
  if (!user) {
    throw new Error('Authentication required')
  }
  return user
}

export class AuthError extends Error {
  constructor(message: string, public statusCode: number = 401) {
    super(message)
    this.name = 'AuthError'
  }
}