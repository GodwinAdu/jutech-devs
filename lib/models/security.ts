import mongoose from 'mongoose'

const SecurityLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  action: { 
    type: String, 
    required: true,
    enum: ['login', 'failed_login', 'logout', 'post_create', 'post_delete', 'user_ban', 'user_unban', 'vote', 'suspicious_activity']
  },
  details: {
    ip: String,
    userAgent: String,
    resource: String,
    reason: String,
    metadata: mongoose.Schema.Types.Mixed
  },
  severity: {
    type: String,
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'low'
  },
  timestamp: { type: Date, default: Date.now }
}, { timestamps: true })

export const SecurityLog = mongoose.models.SecurityLog || mongoose.model('SecurityLog', SecurityLogSchema)