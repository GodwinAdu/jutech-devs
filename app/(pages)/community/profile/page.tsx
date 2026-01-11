"use client"

import { useEffect, useState } from 'react'
import { ProtectedRoute } from '@/components/protected-route'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/lib/auth-context'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Calendar, MapPin, Globe, Github, Twitter, Trophy, Star, Loader2 } from 'lucide-react'
import { PostCard } from '@/components/community/community-cards'
import Link from 'next/link'
import { Skeleton } from '@/components/ui/skeleton'

interface ProfileData {
  user: {
    _id: string
    name: string
    username: string
    email: string
    avatar: string
    bio: string
    location: string
    website: string
    github: string
    twitter: string
    reputation: number
    badges: Array<{
      name: string
      icon: string
      color: string
      description: string
    }>
    joinDate: string
  }
  stats: {
    posts: number
    replies: number
    votesReceived: number
  }
  recentPosts: any[]
}

export default function ProfilePage() {
  const { user } = useAuth()
  const [profileData, setProfileData] = useState<ProfileData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      fetchProfile()
    }
  }, [user])

  const fetchProfile = async () => {
    try {
      const response = await fetch('/api/community/profile')
      if (response.ok) {
        const data = await response.json()
        setProfileData(data)
      }
    } catch (error) {
      console.error('Failed to fetch profile:', error)
    } finally {
      setLoading(false)
    }
  }

  if (!user) return null

  if (loading) {
    return (
      <ProtectedRoute>
        <main className="min-h-screen bg-background">
          <Navigation />
          <section className="pt-28">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Profile Info Skeleton */}
                <div className="lg:col-span-2">
                  <Card className="p-8 mb-8">
                    <div className="flex items-start gap-6 mb-6">
                      <Skeleton className="w-24 h-24 rounded-full" />
                      <div className="flex-1 space-y-3">
                        <Skeleton className="h-8 w-48" />
                        <Skeleton className="h-5 w-32" />
                        <div className="flex gap-4">
                          <Skeleton className="h-4 w-24" />
                          <Skeleton className="h-4 w-20" />
                        </div>
                        <div className="flex gap-2">
                          <Skeleton className="h-8 w-24" />
                          <Skeleton className="h-8 w-20" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <Skeleton className="h-5 w-16" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </Card>
                  
                  {/* Recent Posts Skeleton */}
                  <Card className="p-8">
                    <Skeleton className="h-6 w-32 mb-6" />
                    <div className="space-y-4">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="p-4 border rounded-lg">
                          <div className="flex items-start gap-3">
                            <Skeleton className="h-10 w-10 rounded-full" />
                            <div className="flex-1 space-y-2">
                              <Skeleton className="h-5 w-3/4" />
                              <div className="flex gap-2">
                                <Skeleton className="h-4 w-16" />
                                <Skeleton className="h-4 w-12" />
                              </div>
                              <div className="flex gap-4">
                                <Skeleton className="h-4 w-8" />
                                <Skeleton className="h-4 w-8" />
                                <Skeleton className="h-4 w-8" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Sidebar Skeleton */}
                <div className="space-y-6">
                  {/* Stats Skeleton */}
                  <Card className="p-6">
                    <Skeleton className="h-5 w-20 mb-4" />
                    <div className="space-y-4">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <Skeleton className="h-4 w-16" />
                          <Skeleton className="h-4 w-12" />
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Badges Skeleton */}
                  <Card className="p-6">
                    <Skeleton className="h-5 w-16 mb-4" />
                    <div className="space-y-3">
                      {Array.from({ length: 2 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                          <Skeleton className="h-8 w-8 rounded" />
                          <div className="space-y-1">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-3 w-32" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </main>
      </ProtectedRoute>
    )
  }

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-background">
        <Navigation />
        
        <section className="pt-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Profile Info */}
              <div className="lg:col-span-2">
                <Card className="p-8 mb-8">
                  <div className="flex items-start gap-6 mb-6">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={profileData?.user.avatar} />
                      <AvatarFallback className="text-2xl">{profileData?.user.name[0]}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <h1 className="text-3xl font-bold mb-2">{profileData?.user.name}</h1>
                      <p className="text-lg text-muted-foreground mb-4">@{profileData?.user.username}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Joined {new Date(profileData?.user.joinDate || '').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </div>
                        {profileData?.user.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {profileData.user.location}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex gap-2 mb-4">
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/community/profile/edit">Edit Profile</Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/community/profile/settings">Settings</Link>
                        </Button>
                        {user?.role === 'admin' && (
                          <Button variant="default" size="sm" asChild>
                            <Link href="/admin">Admin Dashboard</Link>
                          </Button>
                        )}
                        {/* Debug: Show user role */}
                        <div className="text-xs text-muted-foreground">
                          Role: {user?.role || 'No role'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  {profileData?.user.bio && (
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">About</h3>
                      <p className="text-muted-foreground">{profileData.user.bio}</p>
                    </div>
                  )}

                  {/* Links */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Links</h3>
                    <div className="flex gap-4">
                      {profileData?.user.website && (
                        <Button variant="ghost" size="sm" className="p-2" asChild>
                          <a href={profileData.user.website} target="_blank" rel="noopener noreferrer">
                            <Globe className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {profileData?.user.github && (
                        <Button variant="ghost" size="sm" className="p-2" asChild>
                          <a href={`https://github.com/${profileData.user.github}`} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {profileData?.user.twitter && (
                        <Button variant="ghost" size="sm" className="p-2" asChild>
                          <a href={`https://twitter.com/${profileData.user.twitter}`} target="_blank" rel="noopener noreferrer">
                            <Twitter className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>

                {/* Recent Posts */}
                <Card className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Recent Posts</h3>
                  <div className="space-y-4">
                    {profileData?.recentPosts.map((post) => (
                      <PostCard key={post._id} post={{
                        id: post._id,
                        title: post.title,
                        author: post.author,
                        category: post.category,
                        tags: post.tags,
                        votes: post.votes,
                        replies: post.replies,
                        views: post.views,
                        solved: post.solved,
                        pinned: post.pinned,
                        createdAt: post.createdAt
                      }} />
                    ))}
                  </div>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Stats */}
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Statistics</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Reputation</span>
                      <div className="flex items-center gap-1 text-accent font-semibold">
                        <Star className="w-4 h-4" />
                        {profileData?.user.reputation.toLocaleString()}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Posts</span>
                      <span className="font-semibold">{profileData?.stats.posts}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Replies</span>
                      <span className="font-semibold">{profileData?.stats.replies}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Votes Received</span>
                      <span className="font-semibold">{profileData?.stats.votesReceived}</span>
                    </div>
                  </div>
                </Card>

                {/* Badges */}
                <Card className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Trophy className="w-4 h-4" />
                    Badges
                  </h3>
                  <div className="space-y-3">
                    {profileData?.user.badges?.map((badge, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                        <span className="text-2xl">{badge.icon}</span>
                        <div>
                          <div className="font-medium text-sm">{badge.name}</div>
                          <div className="text-xs text-muted-foreground">{badge.description}</div>
                        </div>
                      </div>
                    )) || (
                      <p className="text-sm text-muted-foreground">No badges earned yet</p>
                    )}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ProtectedRoute>
  )
}