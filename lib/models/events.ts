import mongoose from 'mongoose'

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, enum: ['online', 'in-person', 'hybrid'], default: 'online' },
  category: { type: String, enum: ['webinar', 'workshop', 'hackathon', 'meetup', 'conference'], required: true },
  maxAttendees: { type: Number, default: null },
  registrationRequired: { type: Boolean, default: true },
  status: { type: String, enum: ['draft', 'published', 'cancelled'], default: 'draft' },
  featured: { type: Boolean, default: false },
  tags: [{ type: String }],
  image: { type: String, default: '' },
  meetingLink: { type: String, default: '' },
  price: { type: Number, default: 0 },
  currency: { type: String, default: 'USD' },
  createdBy: { type: String, required: true },
  attendees: [{ 
    userId: String,
    name: String,
    email: String,
    registeredAt: { type: Date, default: Date.now },
    attended: { type: Boolean, default: false },
    checkedInAt: Date
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

export const Event = mongoose.models.Event || mongoose.model('Event', EventSchema)