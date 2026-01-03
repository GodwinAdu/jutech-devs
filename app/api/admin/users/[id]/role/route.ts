import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { User } from '@/lib/models/community'
import { getAuthUser } from '@/lib/auth-utils'
import { logSecurityEvent, getClientInfo } from '@/lib/security-utils'

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB()
    
    const adminUser = getAuthUser(request)
    if (!adminUser) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }
    
    const { role } = await request.json()
    const { id } = params
    
    if (!['user', 'moderator', 'admin'].includes(role)) {
      return NextResponse.json({ error: 'Invalid role' }, { status: 400 })
    }

    const targetUser = await User.findById(id)
    if (!targetUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    await User.findByIdAndUpdate(id, { role })
    
    // Log security event
    const clientInfo = getClientInfo(request)
    await logSecurityEvent({
      userId: adminUser.id,
      action: role === 'banned' ? 'user_ban' : 'user_role_change',
      details: {
        ...clientInfo,
        resource: id,
        reason: `Role changed to ${role}`,
        metadata: { 
          targetUser: targetUser.username,
          oldRole: targetUser.role,
          newRole: role
        }
      },
      severity: role === 'admin' ? 'high' : 'medium'
    })
    
    return NextResponse.json({ message: 'Role updated successfully' })
  } catch (error) {
    console.error('Failed to update user role:', error)
    return NextResponse.json({ error: 'Failed to update role' }, { status: 500 })
  }
}