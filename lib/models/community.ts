import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  avatar: { type: String, default: '' },
  bio: { type: String, default: '' },
  location: { type: String, default: '' },
  website: { type: String, default: '' },
  github: { type: String, default: '' },
  twitter: { type: String, default: '' },
  reputation: { type: Number, default: 0 },
  badges: [{
    id: String,
    name: String,
    description: String,
    icon: String,
    color: String,
    rarity: { type: String, enum: ['common', 'rare', 'epic', 'legendary'] },
    earnedAt: { type: Date, default: Date.now }
  }],
  joinDate: { type: Date, default: Date.now },
  lastActive: { type: Date, default: Date.now },
  isVerified: { type: Boolean, default: false },
  role: { type: String, enum: ['user', 'moderator', 'admin'], default: 'user' }
}, { timestamps: true })

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: String, required: true, enum: ['discussions', 'qa', 'feature-requests'] },
  tags: [{ type: String }],
  votes: { type: Number, default: 0 },
  upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  downvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  views: { type: Number, default: 0 },
  replies: { type: Number, default: 0 },
  solved: { type: Boolean, default: false },
  pinned: { type: Boolean, default: false },
  locked: { type: Boolean, default: false },
  acceptedAnswer: { type: mongoose.Schema.Types.ObjectId, ref: 'Reply' },
  lastReply: {
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: Date
  }
}, { timestamps: true })

const ReplySchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  parentReply: { type: mongoose.Schema.Types.ObjectId, ref: 'Reply' },
  votes: { type: Number, default: 0 },
  upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  downvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  isAccepted: { type: Boolean, default: false },
  edited: { type: Boolean, default: false },
  editedAt: Date
}, { timestamps: true })

const NewsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['active', 'unsubscribed'],
    default: 'active'
  },
  subscribedAt: {
    type: Date,
    default: Date.now
  },
  unsubscribedAt: Date,
  preferences: {
    updates: { type: Boolean, default: true },
    newsletters: { type: Boolean, default: true },
    announcements: { type: Boolean, default: true }
  }
}, { timestamps: true })

export const User = mongoose.models.User || mongoose.model('User', UserSchema)
export const Post = mongoose.models.Post || mongoose.model('Post', PostSchema)
export const Reply = mongoose.models.Reply || mongoose.model('Reply', ReplySchema)
export const Newsletter = mongoose.models.Newsletter || mongoose.model('Newsletter', NewsletterSchema)