import { NextRequest, NextResponse } from 'next/server'
import { emailService } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const { to, type, name, resetToken } = await request.json()

    if (!to || !type) {
      return NextResponse.json(
        { error: 'Email address and type are required' },
        { status: 400 }
      )
    }

    let result
    switch (type) {
      case 'welcome':
        if (!name) {
          return NextResponse.json(
            { error: 'Name is required for welcome email' },
            { status: 400 }
          )
        }
        result = await emailService.sendWelcomeEmail(to, name)
        break

      case 'password-reset':
        if (!name || !resetToken) {
          return NextResponse.json(
            { error: 'Name and reset token are required for password reset email' },
            { status: 400 }
          )
        }
        result = await emailService.sendPasswordResetEmail(to, name, resetToken)
        break

      case 'test':
        result = await emailService.sendEmail({
          to,
          subject: 'Test Email from JuTech Devs',
          html: `
            <h1>Test Email</h1>
            <p>This is a test email from JuTech Devs application.</p>
            <p>If you received this, the email system is working correctly!</p>
            <p>Sent at: ${new Date().toISOString()}</p>
          `
        })
        break

      default:
        return NextResponse.json(
          { error: 'Invalid email type' },
          { status: 400 }
        )
    }

    if (result.success) {
      return NextResponse.json({
        message: 'Email sent successfully',
        messageId: result.messageId
      })
    } else {
      return NextResponse.json(
        { error: 'Failed to send email', details: result.error },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Email API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}