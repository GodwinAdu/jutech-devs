import { NextRequest, NextResponse } from 'next/server'
import { EmailService } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Received request body:', body)
    
    const { email, subject, content } = body
    
    // Decode HTML entities and trim whitespace
    const cleanSubject = subject?.replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').trim()
    const cleanContent = content?.replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').trim()
    
    console.log('Cleaned values:', { email, cleanSubject, cleanContent })
    
    if (!email || !cleanSubject || !cleanContent) {
      console.log('Missing fields after cleaning:', { email: !!email, subject: !!cleanSubject, content: !!cleanContent })
      return NextResponse.json({ error: 'Email, subject and content are required' }, { status: 400 })
    }

    const emailService = new EmailService()
    
    // Send simple email with content
    const result = await emailService.sendEmail({
      to: email,
      subject: cleanSubject,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>${cleanSubject}</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">JuTech Devs</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0;">Building the Future of Technology</p>
            </div>
            
            <div style="background: white; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
              <h2 style="color: #1f2937; margin: 0 0 20px 0;">${cleanSubject}</h2>
              <div style="color: #374151; line-height: 1.8;">
                ${cleanContent.replace(/\n/g, '<br>')}
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
                <p>Best regards,<br>The JuTech Devs Team</p>
              </div>
            </div>
          </body>
        </html>
      `
    })
    
    if (result.success) {
      return NextResponse.json({ message: 'Email sent successfully!' })
    } else {
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }
  } catch (error) {
    console.error('Individual email send error:', error)
    console.error('Error details:', error instanceof Error ? error.message : 'Unknown error')
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}