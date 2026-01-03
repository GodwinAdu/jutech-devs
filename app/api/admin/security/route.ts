import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { User, Post } from '@/lib/models/community'
import { SecurityLog } from '@/lib/models/security'

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    
    const { searchParams } = new URL(request.url)
    const timeframe = searchParams.get('timeframe') || '7'
    const days = parseInt(timeframe)
    
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)
    
    // Security Metrics
    const totalUsers = await User.countDocuments()
    const bannedUsers = await User.countDocuments({ role: 'banned' })
    const newUsers = await User.countDocuments({ createdAt: { $gte: startDate } })
    const suspiciousUsers = await User.countDocuments({ 
      reputation: { $lt: -10 }
    })
    
    // Content Moderation
    const totalPosts = await Post.countDocuments()
    const flaggedPosts = await Post.countDocuments({ 
      $or: [
        { votes: { $lt: -5 } },
        { locked: true }
      ]
    })
    const recentPosts = await Post.countDocuments({ createdAt: { $gte: startDate } })
    
    // Recent Activity Logs
    const recentUsers = await User.find({ createdAt: { $gte: startDate } })
      .select('name username email createdAt lastActive reputation role')
      .sort({ createdAt: -1 })
      .limit(10)
    
    const suspiciousActivity = await User.find({
      $or: [
        { reputation: { $lt: -5 } },
        { role: 'banned' }
      ]
    })
      .select('name username email reputation role lastActive')
      .sort({ reputation: 1 })
      .limit(10)
    
    // High-risk posts
    const riskPosts = await Post.find({
      $or: [
        { votes: { $lt: -3 } },
        { locked: true },
        { views: { $gt: 1000, $lt: 10 } } // High views but low engagement
      ]
    })
      .populate('author', 'name username')
      .select('title content category votes views locked createdAt author')
      .sort({ votes: 1 })
      .limit(10)
    
    // User registration patterns
    const registrationPattern = await User.aggregate([
      {
        $match: { createdAt: { $gte: startDate } }
      },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$createdAt' }
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ])
    
    // Recent Security Logs
    const recentLogs = await SecurityLog.find({ timestamp: { $gte: startDate } })
      .populate('userId', 'name username')
      .sort({ timestamp: -1 })
      .limit(20)
    
    // Critical events
    const criticalEvents = await SecurityLog.find({ 
      severity: { $in: ['high', 'critical'] },
      timestamp: { $gte: startDate }
    })
      .populate('userId', 'name username')
      .sort({ timestamp: -1 })
      .limit(10)
    
    return NextResponse.json({
      overview: {
        totalUsers,
        bannedUsers,
        newUsers,
        suspiciousUsers,
        totalPosts,
        flaggedPosts,
        recentPosts,
        failedLogins: await SecurityLog.countDocuments({ action: 'failed_login', timestamp: { $gte: startDate } }),
        blockedIPs: await SecurityLog.distinct('details.ip', { severity: 'high', timestamp: { $gte: startDate } }).then(ips => ips.length),
        securityScore: Math.max(85 - (bannedUsers * 2) - (suspiciousUsers * 3), 60)
      },
      recentUsers,
      suspiciousActivity,
      riskPosts,
      registrationPattern,
      recentLogs,
      criticalEvents
    })
  } catch (error) {
    console.error('Security data fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch security data' }, { status: 500 })
  }
}