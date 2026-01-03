import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { NewsletterDraft } from '@/lib/models/newsletter'

export async function GET() {
  try {
    await connectDB()
    
    const drafts = await NewsletterDraft.find({}).sort({ updatedAt: -1 })
    
    return NextResponse.json({ drafts })
  } catch (error) {
    console.error('Failed to fetch drafts:', error)
    return NextResponse.json({ error: 'Failed to fetch drafts' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    
    const { title, subject, sections, template } = await request.json()
    
    const draft = new NewsletterDraft({
      title,
      subject,
      sections,
      template,
      createdBy: 'admin',
      updatedAt: new Date()
    })
    
    await draft.save()
    
    return NextResponse.json({ message: 'Draft saved successfully' })
  } catch (error) {
    console.error('Failed to save draft:', error)
    return NextResponse.json({ error: 'Failed to save draft' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await connectDB()
    
    const { id } = await request.json()
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }

    await NewsletterDraft.findByIdAndDelete(id)
    
    return NextResponse.json({ message: 'Draft deleted successfully' })
  } catch (error) {
    console.error('Failed to delete draft:', error)
    return NextResponse.json({ error: 'Failed to delete draft' }, { status: 500 })
  }
}