"use client"

import { useEffect, useState } from 'react'
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PostCard, EventCard, UserProfileCard } from "@/components/community/community-cards"
import { MessageSquare, ThumbsUp, Eye, HelpCircle, Lightbulb, ArrowRight, Calendar, Users, Trophy, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"



const categories = [
  {
    id: "discussions",
    name: "Discussions",
    description: "General discussions about development",
    icon: MessageSquare,
    topics: 0,
    posts: 0,
    color: "text-blue-400",
    href: "/community/discussions"
  },
  {
    id: "qa",
    name: "Q&A",
    description: "Ask questions and get answers",
    icon: HelpCircle,
    topics: 0,
    posts: 0,
    color: "text-purple-400",
    href: "/community/qa"
  },
  {
    id: "feature-requests",
    name: "Feature Requests",
    description: "Suggest and vote on new features",
    icon: Lightbulb,
    topics: 0,
    posts: 0,
    color: "text-cyan-400",
    href: "/community/feature-requests"
  },
]

interface Post {
  _id: string
  title: string
  author: {
    name: string
    username: string
    avatar: string
    reputation: number
  }
  category: string
  tags: string[]
  votes: number
  upvoteCount: number
  downvoteCount: number
  replies: number
  views: number
  solved: boolean
  pinned: boolean
  createdAt: string
}

interface Event {
  _id: string
  title: string
  description: string
  type: string
  date: string
  duration: number
  attendees: any[]
  maxAttendees: number
  host: {
    name: string
    avatar: string
  }
  tags: string[]
  status: 'upcoming' | 'live' | 'completed'
}

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

export default function CommunityPage() {
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([])
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([])
  const [topContributors, setTopContributors] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    members: 0,
    topics: 0,
    posts: 0,
    solvedRate: 0
  })
  const [categoryStats, setCategoryStats] = useState<{[key: string]: {topics: number, posts: number}}>({})

  useEffect(() => {
    fetchCommunityData()
  }, [])

  const fetchCommunityData = async () => {
    try {
      // Fetch real stats
      const statsResponse = await fetch('/api/community/stats')
      if (statsResponse.ok) {
        const statsData = await statsResponse.json()
        setStats(statsData)
      }

      // Fetch category stats
      const categoryResponse = await fetch('/api/community/categories')
      if (categoryResponse.ok) {
        const categoryData = await categoryResponse.json()
        setCategoryStats(categoryData)
      }

      // Fetch featured posts (pinned and high-voted posts)
      const postsResponse = await fetch('/api/community/posts?limit=4&sort=popular')
      const postsData = await postsResponse.json()
      if (postsResponse.ok) {
        setFeaturedPosts(postsData.posts)
      }

      // Fetch upcoming events
      const eventsResponse = await fetch('/api/events?limit=3&status=upcoming')
      if (eventsResponse.ok) {
        const eventsData = await eventsResponse.json()
        setUpcomingEvents(eventsData.events || [])
      }

      // Fetch top contributors
      const usersResponse = await fetch('/api/community/users?sort=reputation&limit=4')
      if (usersResponse.ok) {
        const usersData = await usersResponse.json()
        setTopContributors(usersData.users || [])
      }
    } catch (error) {
      console.error('Failed to fetch community data:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500">Community Forum</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Join Our Developer Community
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with thousands of developers. Ask questions, share knowledge, and help shape the future of JuTech
              Devs products.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                asChild
              >
                <Link href="/community/discussions">Start a Discussion</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/community/qa">Browse Topics</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {stats.members.toLocaleString()}+
              </div>
              <div className="text-sm text-muted-foreground mt-2">Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {stats.topics.toLocaleString()}+
              </div>
              <div className="text-sm text-muted-foreground mt-2">Topics</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {stats.posts.toLocaleString()}+
              </div>
              <div className="text-sm text-muted-foreground mt-2">Posts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {stats.solvedRate}%
              </div>
              <div className="text-sm text-muted-foreground mt-2">Solved Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Forum Categories</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {categories.map((category) => {
              const Icon = category.icon
              const stats = categoryStats[category.id] || { topics: 0, posts: 0 }
              return (
                <Link key={category.id} href={category.href}>
                  <Card className="p-6 hover:border-blue-500/50 transition-all group cursor-pointer h-full">
                    <Icon className={`w-12 h-12 mb-4 ${category.color}`} />
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>{stats.topics.toLocaleString()} topics</span>
                      <span>{stats.posts.toLocaleString()} posts</span>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Featured Posts */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Featured Posts</h2>
                <Button variant="outline" asChild>
                  <Link href="/community/discussions">
                    View All <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-6 h-6 animate-spin" />
                </div>
              ) : (
                <div className="space-y-4">
                  {featuredPosts.map((post) => (
                    <PostCard key={post._id} post={{
                      id: post._id,
                      title: post.title,
                      author: post.author,
                      category: post.category,
                      tags: post.tags,
                      votes: post.votes,
                      upvoteCount: post.upvoteCount || 0,
                      downvoteCount: post.downvoteCount || 0,
                      replies: post.replies,
                      views: post.views,
                      solved: post.solved,
                      pinned: post.pinned,
                      createdAt: post.createdAt
                    }} />
                  ))}
                </div>
              )}
            </div>

            {/* Upcoming Events */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Upcoming Events</h2>
                <Button variant="outline" asChild>
                  <Link href="/admin/events">
                    View All <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-6 h-6 animate-spin" />
                </div>
              ) : (
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <EventCard key={event._id} event={{
                      id: event._id,
                      title: event.title,
                      description: event.description,
                      type: event.type,
                      date: event.date,
                      duration: event.duration,
                      attendees: event.attendees.length,
                      maxAttendees: event.maxAttendees,
                      host: event.host,
                      tags: event.tags,
                      status: event.status
                    }} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Top Contributors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Top Contributors</h2>
              <p className="text-muted-foreground">Our most active community members</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/community/leaderboard">
                View Leaderboard <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {topContributors.map((contributor, index) => (
                <UserProfileCard key={contributor._id} user={{
                  name: contributor.name,
                  username: contributor.username,
                  avatar: contributor.avatar,
                  reputation: contributor.reputation,
                  badges: contributor.badges,
                  posts: Math.floor(contributor.reputation / 15),
                  location: contributor.location || 'Unknown'
                }} rank={index + 1} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Conversation?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create an account to start asking questions, sharing knowledge, and connecting with developers worldwide.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              Sign Up Now
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
