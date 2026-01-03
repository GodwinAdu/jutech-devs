import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Post, User, Newsletter } from '@/lib/models/community'
import { Event } from '@/lib/models/events'

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    
    const { searchParams } = new URL(request.url)
    const timeframe = searchParams.get('timeframe') || '30'
    const days = parseInt(timeframe)
    
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)
    
    // User Analytics
    const totalUsers = await User.countDocuments()
    const newUsers = await User.countDocuments({ createdAt: { $gte: startDate } })
    const activeUsers = await User.countDocuments({ lastActive: { $gte: startDate } })
    
    // Post Analytics
    const totalPosts = await Post.countDocuments()
    const newPosts = await Post.countDocuments({ createdAt: { $gte: startDate } })
    const solvedPosts = await Post.countDocuments({ solved: true })
    const totalViews = await Post.aggregate([
      { $group: { _id: null, total: { $sum: '$views' } } }
    ])
    
    // Category breakdown
    const categoryStats = await Post.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 }, views: { $sum: '$views' } } }
    ])
    
    // Top posts by views
    const topPosts = await Post.find()
      .populate('author', 'name username')
      .sort({ views: -1 })
      .limit(5)
      .select('title views category createdAt author')
    
    // User growth over time
    const userGrowth = await User.aggregate([
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
    
    // Newsletter Analytics
    const totalSubscribers = await Newsletter.countDocuments({ status: 'active' })
    const newSubscribers = await Newsletter.countDocuments({ 
      status: 'active',
      subscribedAt: { $gte: startDate } 
    })
    
    // Event Analytics
    const totalEvents = await Event.countDocuments()
    const upcomingEvents = await Event.countDocuments({ 
      date: { $gte: new Date() },
      status: 'published'
    })
    
    return NextResponse.json({
      overview: {
        totalUsers,
        newUsers,
        activeUsers,
        totalPosts,
        newPosts,
        solvedPosts,
        totalViews: totalViews[0]?.total || 0,
        totalSubscribers,
        newSubscribers,
        totalEvents,
        upcomingEvents,
        solveRate: totalPosts > 0 ? Math.round((solvedPosts / totalPosts) * 100) : 0
      },
      categoryStats,
      topPosts,
      userGrowth
    })
  } catch (error) {
    console.error('Analytics fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 })
  }
}