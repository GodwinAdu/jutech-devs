"use client"

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowLeft, Shield, AlertTriangle, Users, Ban, Eye, Lock } from 'lucide-react'
import Link from 'next/link'

interface SecurityData {
  overview: {
    totalUsers: number
    bannedUsers: number
    suspiciousUsers: number
    flaggedPosts: number
    failedLogins: number
    securityScore: number
  }
  recentUsers: Array<{
    _id: string
    name: string
    username: string
    email: string
    reputation: number
    role: string
    createdAt: string
  }>
  suspiciousActivity: Array<{
    _id: string
    name: string
    username: string
    reputation: number
    role: string
  }>
  riskPosts: Array<{
    _id: string
    title: string
    votes: number
    locked: boolean
    author: { name: string }
  }>
  recentLogs: Array<{
    _id: string
    action: string
    userId: { name: string; username: string }
    details: any
    severity: string
    timestamp: string
  }>
  criticalEvents: Array<{
    _id: string
    action: string
    userId: { name: string; username: string }
    details: any
    severity: string
    timestamp: string
  }>
}

export default function AdminSecurityPage() {
  const [data, setData] = useState<SecurityData | null>(null)
  const [loading, setLoading] = useState(true)
  const [timeframe, setTimeframe] = useState('7')

  useEffect(() => {
    fetchSecurityData()
  }, [timeframe])

  const fetchSecurityData = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/admin/security?timeframe=${timeframe}`)
      const securityData = await response.json()
      
      if (response.ok) {
        setData(securityData)
      }
    } catch (error) {
      console.error('Failed to fetch security data:', error)
    } finally {
      setLoading(false)
    }
  }

  const getSecurityLevel = (score: number) => {
    if (score >= 90) return { level: 'Excellent', color: 'text-green-600', bg: 'bg-green-100' }
    if (score >= 75) return { level: 'Good', color: 'text-blue-600', bg: 'bg-blue-100' }
    if (score >= 60) return { level: 'Fair', color: 'text-yellow-600', bg: 'bg-yellow-100' }
    return { level: 'Poor', color: 'text-red-600', bg: 'bg-red-100' }
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
          <h1 className="text-3xl font-bold">Security</h1>
        </div>
        <div className="text-center py-8">Loading security data...</div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="p-6">
        <div className="text-center py-8">Failed to load security data</div>
      </div>
    )
  }

  const security = getSecurityLevel(data.overview.securityScore)

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
          <h1 className="text-3xl font-bold">Security Dashboard</h1>
        </div>
        
        <Select value={timeframe} onValueChange={setTimeframe}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7">Last 7 days</SelectItem>
            <SelectItem value="30">Last 30 days</SelectItem>
            <SelectItem value="90">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Security Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Security Score</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.overview.securityScore}%</div>
            <Badge className={`${security.bg} ${security.color} border-0`}>
              {security.level}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Banned Users</CardTitle>
            <Ban className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.overview.bannedUsers}</div>
            <div className="text-xs text-muted-foreground">
              {((data.overview.bannedUsers / data.overview.totalUsers) * 100).toFixed(1)}% of total
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Suspicious Users</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.overview.suspiciousUsers}</div>
            <div className="text-xs text-muted-foreground">Require attention</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Flagged Posts</CardTitle>
            <Lock className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.overview.flaggedPosts}</div>
            <div className="text-xs text-muted-foreground">Need moderation</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Recent Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {data.recentUsers.map((user) => (
                <div key={user._id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-muted-foreground">@{user.username}</div>
                  </div>
                  <div className="text-right">
                    <Badge variant={user.role === 'admin' ? 'default' : 'outline'}>
                      {user.role}
                    </Badge>
                    <div className="text-xs text-muted-foreground mt-1">
                      Rep: {user.reputation}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              Suspicious Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {data.suspiciousActivity.map((user) => (
                <div key={user._id} className="flex items-center justify-between p-3 border rounded-lg border-red-200">
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-muted-foreground">@{user.username}</div>
                  </div>
                  <div className="text-right">
                    <Badge variant={user.role === 'banned' ? 'destructive' : 'secondary'}>
                      {user.role}
                    </Badge>
                    <div className="text-xs text-red-600 mt-1">
                      Rep: {user.reputation}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Security Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Recent Security Logs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {data.recentLogs?.map((log) => (
                <div key={log._id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium capitalize">{log.action.replace('_', ' ')}</div>
                    <div className="text-sm text-muted-foreground">
                      {log.userId?.name || 'System'} • {new Date(log.timestamp).toLocaleString()}
                    </div>
                  </div>
                  <Badge variant={log.severity === 'high' || log.severity === 'critical' ? 'destructive' : 'outline'}>
                    {log.severity}
                  </Badge>
                </div>
              )) || <div className="text-muted-foreground text-center py-4">No recent logs</div>}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              Critical Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {data.criticalEvents?.map((event) => (
                <div key={event._id} className="flex items-center justify-between p-3 border rounded-lg border-red-200">
                  <div>
                    <div className="font-medium capitalize text-red-700">{event.action.replace('_', ' ')}</div>
                    <div className="text-sm text-muted-foreground">
                      {event.userId?.name || 'System'} • {new Date(event.timestamp).toLocaleString()}
                    </div>
                    {event.details?.reason && (
                      <div className="text-xs text-red-600 mt-1">{event.details.reason}</div>
                    )}
                  </div>
                  <Badge variant="destructive">
                    {event.severity}
                  </Badge>
                </div>
              )) || <div className="text-muted-foreground text-center py-4">No critical events</div>}
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Risk Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            High-Risk Posts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.riskPosts.map((post) => (
              <div key={post._id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium line-clamp-1">{post.title}</h4>
                  <div className="text-sm text-muted-foreground">
                    by {post.author.name}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-sm font-medium">{post.votes}</div>
                    <div className="text-xs text-muted-foreground">votes</div>
                  </div>
                  {post.locked && (
                    <Badge variant="destructive">Locked</Badge>
                  )}
                  {post.votes < -2 && (
                    <Badge variant="outline" className="text-red-600">Low Score</Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}