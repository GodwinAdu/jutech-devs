import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { NewsletterTemplate } from '@/lib/models/newsletter'

export async function GET() {
  try {
    await connectDB()
    
    // Check if templates exist, if not create default ones
    const count = await NewsletterTemplate.countDocuments()
    
    if (count === 0) {
      const defaultTemplates = [
        {
          name: 'Weekly Update',
          description: 'Standard weekly newsletter template',
          subject: 'JuTech Devs Weekly Update',
          sections: [
            { id: '1', type: 'heading', content: 'This Week at JuTech Devs' },
            { id: '2', type: 'paragraph', content: 'Welcome to our weekly update! Here\'s what\'s been happening in our community and development projects.' },
            { id: '3', type: 'heading', content: 'New Features & Updates' },
            { id: '4', type: 'paragraph', content: 'We\'ve been working hard to bring you new features and improvements. Check out what\'s new this week.' },
            { id: '5', type: 'heading', content: 'Community Highlights' },
            { id: '6', type: 'paragraph', content: 'Celebrating our amazing community members and their contributions to the JuTech Devs ecosystem.' }
          ],
          template: 'newsletter'
        },
        {
          name: 'Product Launch',
          description: 'Template for announcing new products',
          subject: 'Exciting New Product Launch!',
          sections: [
            { id: '1', type: 'heading', content: 'Introducing Our Latest Innovation' },
            { id: '2', type: 'paragraph', content: 'We\'re thrilled to announce the launch of our newest product that will revolutionize how you work with technology.' },
            { id: '3', type: 'heading', content: 'Key Features' },
            { id: '4', type: 'paragraph', content: 'Discover the powerful features that make this product stand out from the competition.' },
            { id: '5', type: 'heading', content: 'Get Started Today' },
            { id: '6', type: 'paragraph', content: 'Ready to experience the future? Get started with our new product today and see the difference it makes.' }
          ],
          template: 'announcement'
        },
        {
          name: 'Event Invitation',
          description: 'Template for community events',
          subject: 'You\'re Invited: JuTech Devs Community Event',
          sections: [
            { id: '1', type: 'heading', content: 'Join Us for an Exclusive Event' },
            { id: '2', type: 'paragraph', content: 'We\'re hosting a special community event and you\'re invited! Connect with fellow developers and learn about the latest in technology.' },
            { id: '3', type: 'heading', content: 'Event Details' },
            { id: '4', type: 'paragraph', content: 'Date: [Event Date]\nTime: [Event Time]\nLocation: [Event Location]\nFormat: [Online/In-Person]' },
            { id: '5', type: 'heading', content: 'What to Expect' },
            { id: '6', type: 'paragraph', content: 'Join us for networking, technical talks, and hands-on workshops designed to enhance your development skills.' }
          ],
          template: 'update'
        }
      ]
      
      await NewsletterTemplate.insertMany(defaultTemplates)
    }
    
    const templates = await NewsletterTemplate.find({}).sort({ createdAt: -1 })
    
    return NextResponse.json({ templates })
  } catch (error) {
    console.error('Failed to fetch templates:', error)
    return NextResponse.json({ error: 'Failed to fetch templates' }, { status: 500 })
  }
}