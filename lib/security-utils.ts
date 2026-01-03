import { connectDB } from '@/lib/mongodb'
import { SecurityLog } from '@/lib/models/security'

interface SecurityEvent {
  userId?: string
  action: string
  details?: {
    ip?: string
    userAgent?: string
    resource?: string
    reason?: string
    metadata?: any
  }
  severity?: 'low' | 'medium' | 'high' | 'critical'
}

export async function logSecurityEvent(event: SecurityEvent) {
  try {
    await connectDB()
    
    const log = new SecurityLog({
      userId: event.userId || null,
      action: event.action,
      details: event.details || {},
      severity: event.severity || 'low'
    })
    
    await log.save()
  } catch (error) {
    console.error('Failed to log security event:', error)
  }
}

export function getClientInfo(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'
  const userAgent = request.headers.get('user-agent') || 'unknown'
  
  return { ip, userAgent }
}

export async function checkSuspiciousActivity(userId: string, action: string) {
  try {
    await connectDB()
    
    const recentLogs = await SecurityLog.countDocuments({
      userId,
      action,
      timestamp: { $gte: new Date(Date.now() - 5 * 60 * 1000) } // Last 5 minutes
    })
    
    // Flag as suspicious if more than 10 actions in 5 minutes
    if (recentLogs > 10) {
      await logSecurityEvent({
        userId,
        action: 'suspicious_activity',
        details: {
          reason: `Excessive ${action} attempts`,
          metadata: { count: recentLogs }
        },
        severity: 'high'
      })
      return true
    }
    
    return false
  } catch (error) {
    console.error('Failed to check suspicious activity:', error)
    return false
  }
}