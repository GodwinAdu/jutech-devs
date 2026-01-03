"use client"

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowLeft, Users, FileText, Eye, MessageSquare, TrendingUp, TrendingDown, Calendar, Mail, Trophy, BarChart3 } from 'lucide-react'
import Link from 'next/link'

interface AnalyticsData {
  overview: {
    totalUsers: number
    newUsers: number
    activeUsers: number
    totalPosts: number
    newPosts: number
    solvedPosts: number
    totalViews: number
    totalSubscribers: number
    newSubscribers: number
    totalEvents: number
    upcomingEvents: number
    solveRate: number
  }
  categoryStats: Array<{
    _id: string
    count: number
    views: number
  }>
  topPosts: Array<{
    _id: string
    title: string
    views: number
    category: string
    author: { name: string; username: string }
    createdAt: string
  }>
  userGrowth: Array<{
    _id: string
    count: number
  }>
}

export default function AdminAnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [timeframe, setTimeframe] = useState('30')

  useEffect(() => {
    fetchAnalytics()
  }, [timeframe])

  const fetchAnalytics = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/admin/analytics?timeframe=${timeframe}`)
      const analyticsData = await response.json()
      
      if (response.ok) {
        setData(analyticsData)
      }
    } catch (error) {
      console.error('Failed to fetch analytics:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
    return num.toString()
  }

  const getGrowthPercentage = (current: number, total: number) => {
    if (total === 0) return 0
    return Math.round((current / total) * 100)
  }

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" size="sm" asChild>
            <Link href="/admin">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Analytics</h1>
        </div>
        <div className="text-center py-8">Loading analytics...</div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="p-6">
        <div className="text-center py-8">Failed to load analytics data</div>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/admin">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        </div>
        
        <Select value={timeframe} onValueChange={setTimeframe}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7">Last 7 days</SelectItem>
            <SelectItem value="30">Last 30 days</SelectItem>
            <SelectItem value="90">Last 90 days</SelectItem>
            <SelectItem value="365">Last year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(data.overview.totalUsers)}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
              +{data.overview.newUsers} new ({getGrowthPercentage(data.overview.newUsers, data.overview.totalUsers)}%)
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(data.overview.totalPosts)}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
              +{data.overview.newPosts} new ({getGrowthPercentage(data.overview.newPosts, data.overview.totalPosts)}%)
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(data.overview.totalViews)}</div>
            <div className="text-xs text-muted-foreground">
              Avg: {data.overview.totalPosts > 0 ? Math.round(data.overview.totalViews / data.overview.totalPosts) : 0} per post
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Solve Rate</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.overview.solveRate}%</div>
            <div className="text-xs text-muted-foreground">
              {data.overview.solvedPosts} of {data.overview.totalPosts} posts solved
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(data.overview.activeUsers)}</div>
            <div className="text-xs text-muted-foreground">
              {getGrowthPercentage(data.overview.activeUsers, data.overview.totalUsers)}% of total users
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Newsletter Subscribers</CardTitle>
            <Mail className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(data.overview.totalSubscribers)}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
              +{data.overview.newSubscribers} new
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Events</CardTitle>
            <Calendar className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.overview.totalEvents}</div>
            <div className="text-xs text-muted-foreground">
              {data.overview.upcomingEvents} upcoming
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Category Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.categoryStats.map((category) => (
              <div key={category._id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="capitalize">
                    {category._id === 'qa' ? 'Q&A' : category._id.replace('-', ' ')}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {category.count} posts
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">
                    {formatNumber(category.views)} views
                  </span>
                  <div className="w-32 bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ 
                        width: `${Math.min((category.count / Math.max(...data.categoryStats.map(c => c.count))) * 100, 100)}%` 
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Top Posts by Views
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.topPosts.map((post, index) => (
              <div key={post._id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium line-clamp-1">{post.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Badge variant="outline" className="text-xs">
                        {post.category === 'qa' ? 'Q&A' : post.category}
                      </Badge>
                      <span>by {post.author.name}</span>
                      <span>•</span>
                      <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium">{formatNumber(post.views)}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* User Growth Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            User Growth ({timeframe} days)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 relative">
            {data.userGrowth.length > 0 ? (
              <div className="w-full h-full flex items-end justify-between gap-1 px-4">
                {data.userGrowth.map((point, index) => {
                  const maxCount = Math.max(...data.userGrowth.map(p => p.count))
                  const height = maxCount > 0 ? (point.count / maxCount) * 200 : 0
                  
                  return (
                    <div key={point._id} className="flex flex-col items-center group">
                      <div 
                        className="bg-primary rounded-t-sm min-w-[8px] transition-all hover:bg-primary/80 cursor-pointer"
                        style={{ height: `${Math.max(height, 4)}px`, width: `${Math.max(100 / data.userGrowth.length - 2, 8)}%` }}
                        title={`${new Date(point._id).toLocaleDateString()}: ${point.count} users`}
                      />
                      <div className="text-xs text-muted-foreground mt-2 rotate-45 origin-left whitespace-nowrap">
                        {new Date(point._id).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-muted-foreground/50 mx-auto mb-2" />
                  <p className="text-muted-foreground">No growth data available</p>
                  <p className="text-sm text-muted-foreground">for the selected timeframe</p>
                </div>
              </div>
            )}
          </div>
          {data.userGrowth.length > 0 && (
            <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
              <span>Total new users: {data.userGrowth.reduce((sum, point) => sum + point.count, 0)}</span>
              <span>Peak day: {Math.max(...data.userGrowth.map(p => p.count))} users</span>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}