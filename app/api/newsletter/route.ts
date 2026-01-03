import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Newsletter } from '@/lib/models/community'
import { logSecurityEvent, getClientInfo } from '@/lib/security-utils'
import { EmailService } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    
    const { email } = await request.json()
    
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Check if already subscribed
    const existing = await Newsletter.findOne({ email: email.toLowerCase() })
    
    if (existing) {
      if (existing.status === 'active') {
        return NextResponse.json({ message: 'Already subscribed' })
      } else {
        // Reactivate subscription
        existing.status = 'active'
        existing.subscribedAt = new Date()
        existing.unsubscribedAt = undefined
        await existing.save()
        return NextResponse.json({ message: 'Subscription reactivated' })
      }
    }

    // Create new subscription
    const subscription = new Newsletter({ email: email.toLowerCase() })
    await subscription.save()

    // Log security event
    const clientInfo = getClientInfo(request)
    await logSecurityEvent({
      action: 'newsletter_subscribe',
      details: {
        ...clientInfo,
        metadata: { email }
      },
      severity: 'low'
    })

    // Send welcome email
    const emailService = new EmailService()
    await emailService.sendWelcomeEmail(email, 'Subscriber')

    return NextResponse.json({ message: 'Successfully subscribed' })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await connectDB()
    
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')
    
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const subscription = await Newsletter.findOne({ email: email.toLowerCase() })
    
    if (!subscription) {
      return NextResponse.json({ error: 'Subscription not found' }, { status: 404 })
    }

    subscription.status = 'unsubscribed'
    subscription.unsubscribedAt = new Date()
    await subscription.save()

    return NextResponse.json({ message: 'Successfully unsubscribed' })
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error)
    return NextResponse.json({ error: 'Failed to unsubscribe' }, { status: 500 })
  }
}