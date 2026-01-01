"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, ThumbsUp, Eye, Calendar, Users, Trophy, Star } from "lucide-react"
import Link from "next/link"

interface PostCardProps {
  post: {
    id: string
    title: string
    author: { name: string; avatar: string; reputation: number }
    category: string
    tags: string[]
    votes: number
    replies: number
    views: number
    solved: boolean
    pinned: boolean
    createdAt: string
  }
}

export function PostCard({ post }: PostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="p-6 hover:border-accent/50 transition-all cursor-pointer">
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-2 min-w-[60px]">
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-green-500/20">
              <ThumbsUp className="w-4 h-4" />
            </Button>
            <span className="text-lg font-bold text-accent">{post.votes}</span>
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                {post.pinned && <Badge className="bg-yellow-500/20 text-yellow-400">📌 Pinned</Badge>}
                {post.solved && <Badge className="bg-green-500/20 text-green-400">✅ Solved</Badge>}
              </div>
            </div>

            <Link href={`/community/${post.category}/${post.id}`}>
              <h3 className="text-lg font-semibold hover:text-accent transition-colors mb-2">
                {post.title}
              </h3>
            </Link>

            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs hover:bg-accent/10">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  {post.replies}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {post.views.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage src={post.author.avatar} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">{post.author.name}</span>
                <div className="flex items-center gap-1 text-xs text-accent">
                  <Trophy className="w-3 h-3" />
                  {post.author.reputation}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

interface EventCardProps {
  event: {
    id: string
    title: string
    description: string
    type: string
    date: string
    duration: number
    attendees: number
    maxAttendees?: number
    host: { name: string; avatar: string }
    tags: string[]
    status: 'upcoming' | 'live' | 'completed'
  }
}

export function EventCard({ event }: EventCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-red-500/20 text-red-400'
      case 'upcoming': return 'bg-blue-500/20 text-blue-400'
      case 'completed': return 'bg-gray-500/20 text-gray-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden hover:border-accent/50 transition-all">
        <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
          <div className="text-4xl">{event.type === 'workshop' ? '🛠️' : '📅'}</div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <Badge className={getStatusColor(event.status)}>
              {event.status === 'live' && '🔴'} {event.status.toUpperCase()}
            </Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              {event.attendees}{event.maxAttendees && `/${event.maxAttendees}`}
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{event.description}</p>

          <div className="flex flex-wrap gap-1 mb-4">
            {event.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src={event.host.avatar} />
                <AvatarFallback>{event.host.name[0]}</AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">{event.host.name}</span>
            </div>
            
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {new Date(event.date).toLocaleDateString()}
            </div>
          </div>

          <Button className="w-full mt-4" variant={event.status === 'live' ? 'default' : 'outline'}>
            {event.status === 'live' ? 'Join Now' : 'Register'}
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}

interface UserProfileCardProps {
  user: {
    name: string
    username: string
    avatar: string
    reputation: number
    badges: Array<{ name: string; icon: string; color: string }>
    posts: number
    location?: string
  }
  rank?: number
}

export function UserProfileCard({ user, rank }: UserProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="p-6 text-center hover:border-accent/50 transition-all relative">
        {rank && (
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-sm font-bold">
            #{rank}
          </div>
        )}
        
        <Avatar className="w-16 h-16 mx-auto mb-4">
          <AvatarImage src={user.avatar} />
          <AvatarFallback className="text-lg">{user.name[0]}</AvatarFallback>
        </Avatar>

        <h3 className="font-bold mb-1">{user.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">@{user.username}</p>
        
        {user.location && (
          <p className="text-xs text-muted-foreground mb-3">{user.location}</p>
        )}

        <div className="flex justify-center gap-1 mb-3">
          {user.badges.slice(0, 3).map((badge, index) => (
            <span key={index} className="text-lg" title={badge.name}>
              {badge.icon}
            </span>
          ))}
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Reputation</span>
            <div className="flex items-center gap-1 text-accent font-semibold">
              <Star className="w-3 h-3" />
              {user.reputation.toLocaleString()}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Posts</span>
            <span className="font-semibold">{user.posts}</span>
          </div>
        </div>

        <Button className="w-full mt-4" variant="outline" size="sm">
          View Profile
        </Button>
      </Card>
    </motion.div>
  )
}