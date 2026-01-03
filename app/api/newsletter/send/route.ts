import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Newsletter } from '@/lib/models/community'
import { EmailService } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    
    const { subject, sections, template } = await request.json()
    
    if (!subject || !sections || sections.length === 0) {
      return NextResponse.json({ error: 'Subject and sections are required' }, { status: 400 })
    }

    // Get all active subscribers
    const subscribers = await Newsletter.find({ status: 'active' })
    
    if (subscribers.length === 0) {
      return NextResponse.json({ message: 'No active subscribers found' })
    }

    const emailService = new EmailService()
    let successCount = 0
    let failureCount = 0

    // Send emails in batches to avoid overwhelming the SMTP server
    for (const subscriber of subscribers) {
      try {
        const result = await emailService.sendNewsletterEmail(
          subscriber.email,
          subject,
          sections,
          template
        )
        
        if (result.success) {
          successCount++
        } else {
          failureCount++
        }
      } catch (error) {
        console.error(`Failed to send to ${subscriber.email}:`, error)
        failureCount++
      }
    }

    // Save to history
    const { NewsletterHistory } = await import('@/lib/models/newsletter')
    await new NewsletterHistory({
      subject,
      sections,
      template,
      recipientCount: subscribers.length,
      successCount,
      failureCount,
      sentBy: 'admin'
    }).save()

    return NextResponse.json({
      message: `Newsletter sent to ${successCount} subscribers. ${failureCount} failed.`,
      successCount,
      failureCount,
      totalSubscribers: subscribers.length
    })
  } catch (error) {
    console.error('Newsletter send error:', error)
    return NextResponse.json({ error: 'Failed to send newsletter' }, { status: 500 })
  }
}