import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { User } from '@/lib/models/community'
import { getAuthUser } from '@/lib/auth-utils'
import { logSecurityEvent, getClientInfo } from '@/lib/security-utils'

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB()
    
    const adminUser = getAuthUser(request)
    if (!adminUser) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }
    
    const adminData = await User.findById(adminUser.id)
    if (!adminData || adminData.role !== 'admin') {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
    }
    
    const { id } = params
    const targetUser = await User.findById(id)
    
    if (!targetUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }
    
    await User.findByIdAndDelete(id)
    
    // Log critical security event
    const clientInfo = getClientInfo(request)
    await logSecurityEvent({
      userId: adminUser.id,
      action: 'user_delete',
      details: {
        ...clientInfo,
        resource: id,
        reason: 'Admin user deletion',
        metadata: {
          deletedUser: targetUser.username,
          deletedUserEmail: targetUser.email,
          deletedUserRole: targetUser.role
        }
      },
      severity: 'critical'
    })
    
    return NextResponse.json({ message: 'User deleted successfully' })
  } catch (error) {
    console.error('Failed to delete user:', error)
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 })
  }
}