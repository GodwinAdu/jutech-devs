"use client"

import { useEffect, useState } from 'react'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { UserProfileCard } from "@/components/community/community-cards"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Trophy, Star, TrendingUp, Award, Loader2 } from "lucide-react"

interface User {
  _id: string
  name: string
  username: string
  avatar: string
  reputation: number
  badges: Array<{
    name: string
    icon: string
    color: string
  }>
  location?: string
}

export default function LeaderboardPage() {
  const [topUsers, setTopUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [timeframe, setTimeframe] = useState('all')

  const fetchLeaderboard = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/community/users?sort=reputation&limit=20&timeframe=${timeframe}`)
      const data = await response.json()
      
      if (response.ok) {
        setTopUsers(data.users)
      }
    } catch (error) {
      console.error('Failed to fetch leaderboard:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLeaderboard()
  }, [timeframe])

  const achievements = [
    { title: 'Most Helpful Answers', winner: topUsers[0]?.name || 'Loading...', count: topUsers[0]?.reputation || 0, icon: '🤝' },
    { title: 'Best Questions', winner: topUsers[1]?.name || 'Loading...', count: Math.floor((topUsers[1]?.reputation || 0) * 0.6), icon: '❓' },
    { title: 'Most Upvoted Posts', winner: topUsers[2]?.name || 'Loading...', count: Math.floor((topUsers[2]?.reputation || 0) * 1.2), icon: '👍' },
    { title: 'Community Champion', winner: topUsers[3]?.name || 'Loading...', count: topUsers[3]?.badges?.length || 0, icon: '🏆' }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-28 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-yellow-500 to-orange-500">Leaderboard</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Community <span className="text-gradient">Champions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Celebrating our most active and helpful community members. Earn reputation, badges, and recognition.
            </p>
          </div>

          {/* Top 3 Podium */}
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
          ) : topUsers.length >= 3 ? (
            <div className="flex justify-center items-end gap-8 mb-16">
              {/* 2nd Place */}
              <div className="text-center">
                <div className="w-24 h-32 bg-gradient-to-t from-gray-400 to-gray-300 rounded-t-lg flex items-end justify-center pb-4 mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <UserProfileCard user={{
                  name: topUsers[1].name,
                  username: topUsers[1].username,
                  avatar: topUsers[1].avatar,
                  reputation: topUsers[1].reputation,
                  badges: topUsers[1].badges,
                  posts: Math.floor(topUsers[1].reputation / 15),
                  location: topUsers[1].location || 'Unknown'
                }} />
              </div>
              
              {/* 1st Place */}
              <div className="text-center">
                <div className="w-24 h-40 bg-gradient-to-t from-yellow-500 to-yellow-400 rounded-t-lg flex items-end justify-center pb-4 mb-4">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <UserProfileCard user={{
                  name: topUsers[0].name,
                  username: topUsers[0].username,
                  avatar: topUsers[0].avatar,
                  reputation: topUsers[0].reputation,
                  badges: topUsers[0].badges,
                  posts: Math.floor(topUsers[0].reputation / 15),
                  location: topUsers[0].location || 'Unknown'
                }} />
              </div>
              
              {/* 3rd Place */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-t from-orange-500 to-orange-400 rounded-t-lg flex items-end justify-center pb-4 mb-4">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <UserProfileCard user={{
                  name: topUsers[2].name,
                  username: topUsers[2].username,
                  avatar: topUsers[2].avatar,
                  reputation: topUsers[2].reputation,
                  badges: topUsers[2].badges,
                  posts: Math.floor(topUsers[2].reputation / 15),
                  location: topUsers[2].location || 'Unknown'
                }} />
              </div>
            </div>
          ) : null}

          {/* Achievements */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Monthly Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 text-center hover:border-accent/50 transition-all">
                  <div className="text-4xl mb-3">{achievement.icon}</div>
                  <h3 className="font-bold mb-2">{achievement.title}</h3>
                  <p className="text-accent font-semibold mb-1">{achievement.winner}</p>
                  <p className="text-sm text-muted-foreground">{achievement.count} points</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Full Leaderboard */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Full Leaderboard</h2>
              <div className="flex gap-2">
                <Button 
                  variant={timeframe === 'week' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setTimeframe('week')}
                >
                  This Week
                </Button>
                <Button 
                  variant={timeframe === 'month' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setTimeframe('month')}
                >
                  This Month
                </Button>
                <Button 
                  variant={timeframe === 'all' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setTimeframe('all')}
                >
                  All Time
                </Button>
              </div>
            </div>

            <Card className="overflow-hidden">
              <div className="p-6">
                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="w-6 h-6 animate-spin" />
                  </div>
                ) : (
                  <div className="space-y-4">
                    {topUsers.map((user, index) => (
                      <div key={user._id} className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden">
                          {user.avatar && (
                            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{user.name}</h3>
                            <div className="flex gap-1">
                              {user.badges?.map((badge, i) => (
                                <span key={i} className="text-sm" title={badge.name}>
                                  {badge.icon}
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">@{user.username}</p>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-accent font-semibold">
                            <Star className="w-4 h-4" />
                            {user.reputation.toLocaleString()}
                          </div>
                          <p className="text-sm text-muted-foreground">{Math.floor(user.reputation / 15)} posts</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  )
}