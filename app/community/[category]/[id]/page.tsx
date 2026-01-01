"use client"

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ThumbsUp, ThumbsDown, MessageSquare, Eye, Calendar, Loader2 } from "lucide-react"
import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'

interface Post {
  _id: string
  title: string
  content: string
  author: {
    name: string
    username: string
    avatar: string
    reputation: number
  }
  category: string
  tags: string[]
  votes: number
  replies: number
  views: number
  solved: boolean
  pinned: boolean
  createdAt: string
}

export default function PostDetailPage() {
  const params = useParams()
  const { user } = useAuth()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [replyContent, setReplyContent] = useState('')
  const [submittingReply, setSubmittingReply] = useState(false)

  useEffect(() => {
    fetchPost()
  }, [params.id])

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/community/posts/${params.id}`)
      if (response.ok) {
        const data = await response.json()
        setPost(data.post)
      }
    } catch (error) {
      console.error('Failed to fetch post:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user || !replyContent.trim()) return

    setSubmittingReply(true)
    try {
      const response = await fetch('/api/community/replies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          postId: params.id,
          content: replyContent
        })
      })

      if (response.ok) {
        setReplyContent('')
        fetchPost()
      }
    } catch (error) {
      console.error('Failed to submit reply:', error)
    } finally {
      setSubmittingReply(false)
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin" />
        </div>
        <Footer />
      </main>
    )
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
            <Link href="/community" className="text-accent hover:underline">
              Back to Community
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link 
              href={`/community/${post.category}`} 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to {post.category === 'qa' ? 'Q&A' : post.category === 'feature-requests' ? 'Feature Requests' : 'Discussions'}
            </Link>
          </div>

          <Card className="p-8 mb-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex flex-col items-center gap-2">
                <Button size="sm" variant="ghost" className="p-2">
                  <ThumbsUp className="w-5 h-5" />
                </Button>
                <span className="text-2xl font-bold text-accent">{post.votes}</span>
                <Button size="sm" variant="ghost" className="p-2">
                  <ThumbsDown className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  {post.pinned && <Badge className="bg-yellow-500/20 text-yellow-400">📌 Pinned</Badge>}
                  {post.solved && <Badge className="bg-green-500/20 text-green-400">✅ Solved</Badge>}
                  <Badge variant="outline">{post.category}</Badge>
                </div>

                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="prose prose-neutral dark:prose-invert max-w-none mb-6">
                  <p className="whitespace-pre-wrap">{post.content}</p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      {post.replies} replies
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {post.views} views
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm">{post.author.name}</div>
                      <div className="text-xs text-muted-foreground">{post.author.reputation} reputation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {user ? (
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Your Answer</h3>
              <form onSubmit={handleReply}>
                <Textarea
                  placeholder="Write your answer here..."
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  className="min-h-[120px] mb-4"
                  required
                />
                <Button type="submit" disabled={submittingReply || !replyContent.trim()}>
                  {submittingReply ? 'Posting...' : 'Post Answer'}
                </Button>
              </form>
            </Card>
          ) : (
            <Card className="p-6 text-center">
              <p className="text-muted-foreground mb-4">Sign in to post an answer</p>
              <Button asChild>
                <Link href="/login">Sign In</Link>
              </Button>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}