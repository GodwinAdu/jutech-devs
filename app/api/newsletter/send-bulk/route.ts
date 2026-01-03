import { NextRequest, NextResponse } from 'next/server'
import { EmailService } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const { subject, content, subscribers } = await request.json()
    
    if (!subject || !content || !subscribers || subscribers.length === 0) {
      return NextResponse.json({ error: 'Subject, content and subscribers are required' }, { status: 400 })
    }

    const emailService = new EmailService()
    let successCount = 0
    let failureCount = 0

    // Send emails in batches to avoid overwhelming SMTP server
    for (const email of subscribers) {
      try {
        const result = await emailService.sendEmail({
          to: email,
          subject,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <title>${subject}</title>
              </head>
              <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
                  <h1 style="color: white; margin: 0; font-size: 24px;">JuTech Devs</h1>
                  <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0;">Building the Future of Technology</p>
                </div>
                
                <div style="background: white; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
                  <h2 style="color: #1f2937; margin: 0 0 20px 0;">${subject}</h2>
                  <div style="color: #374151; line-height: 1.8;">
                    ${content.replace(/\n/g, '<br>')}
                  </div>
                  
                  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
                    <p>Best regards,<br>The JuTech Devs Team</p>
                    <p><a href="${process.env.NEXTAUTH_URL}/api/newsletter?email=${email}" style="color: #2563eb;">Unsubscribe</a></p>
                  </div>
                </div>
              </body>
            </html>
          `
        })
        
        if (result.success) {
          successCount++
        } else {
          failureCount++
        }
      } catch (error) {
        console.error(`Failed to send to ${email}:`, error)
        failureCount++
      }
    }
    
    return NextResponse.json({
      message: `Bulk email sent to ${successCount} subscribers. ${failureCount} failed.`,
      successCount,
      failureCount,
      totalSubscribers: subscribers.length
    })
  } catch (error) {
    console.error('Bulk email send error:', error)
    return NextResponse.json({ error: 'Failed to send bulk email' }, { status: 500 })
  }
}