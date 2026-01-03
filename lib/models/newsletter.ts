import mongoose from 'mongoose'

const NewsletterDraftSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  sections: [{ 
    id: String,
    type: { type: String, enum: ['heading', 'paragraph'] },
    content: String 
  }],
  template: { type: String, default: 'newsletter' },
  createdBy: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

const NewsletterTemplateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  subject: String,
  sections: [{ 
    id: String,
    type: { type: String, enum: ['heading', 'paragraph'] },
    content: String 
  }],
  template: { type: String, default: 'newsletter' },
  createdAt: { type: Date, default: Date.now }
})

const NewsletterHistorySchema = new mongoose.Schema({
  subject: { type: String, required: true },
  sections: [{ 
    id: String,
    type: { type: String, enum: ['heading', 'paragraph'] },
    content: String 
  }],
  template: { type: String, required: true },
  recipientCount: { type: Number, required: true },
  successCount: { type: Number, required: true },
  failureCount: { type: Number, required: true },
  sentBy: { type: String, required: true },
  sentAt: { type: Date, default: Date.now }
})

const SubscriberGroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  subscribers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Newsletter' }],
  createdAt: { type: Date, default: Date.now }
})

export const NewsletterDraft = mongoose.models.NewsletterDraft || mongoose.model('NewsletterDraft', NewsletterDraftSchema)
export const NewsletterTemplate = mongoose.models.NewsletterTemplate || mongoose.model('NewsletterTemplate', NewsletterTemplateSchema)
export const NewsletterHistory = mongoose.models.NewsletterHistory || mongoose.model('NewsletterHistory', NewsletterHistorySchema)
export const SubscriberGroup = mongoose.models.SubscriberGroup || mongoose.model('SubscriberGroup', SubscriberGroupSchema)