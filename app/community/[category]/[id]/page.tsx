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
import { ArrowLeft, ThumbsUp, ThumbsDown, MessageSquare, Eye, Calendar, Loader2, Trophy } from "lucide-react"
import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'

interface Reply {
  _id: string
  content: string
  author: {
    name: string
    username: string
    avatar: string
    reputation: number
  }
  votes: number
  createdAt: string
  parentReply?: string
}

interface NestedReply extends Reply {
  children: Reply[]
}

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
  const [replies, setReplies] = useState<Reply[]>([])
  const [loading, setLoading] = useState(true)
  const [replyContent, setReplyContent] = useState('')
  const [submittingReply, setSubmittingReply] = useState(false)
  const [votes, setVotes] = useState(0)
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null)
  const [voting, setVoting] = useState(false)
  const [replyVotes, setReplyVotes] = useState<{[key: string]: number}>({})
  const [replyUserVotes, setReplyUserVotes] = useState<{[key: string]: 'up' | 'down' | null}>({})
  const [showReplyForm, setShowReplyForm] = useState<{[key: string]: boolean}>({})
  const [nestedReplyContent, setNestedReplyContent] = useState<{[key: string]: string}>({})

  // Organize replies into nested structure
  const organizeReplies = (replies: Reply[]) => {
    const topLevel = replies.filter(reply => !reply.parentReply)
    const nested = replies.filter(reply => reply.parentReply)
    
    return topLevel.map(parent => ({
      ...parent,
      children: nested.filter(child => child.parentReply === parent._id)
    }))
  }

  useEffect(() => {
    fetchPost()
    fetchReplies()
  }, [params.id])

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/community/posts/${params.id}`)
      const data = await response.json()
      
      if (response.ok) {
        setPost(data.post)
        setVotes(data.post.votes)
      } else {
        console.error('Post fetch error:', data.error)
      }
    } catch (error) {
      console.error('Failed to fetch post:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchReplies = async () => {
    try {
      const response = await fetch(`/api/community/posts/${params.id}/replies`)
      if (response.ok) {
        const data = await response.json()
        setReplies(data.replies)
        // Initialize reply votes
        const votes = {}
        data.replies.forEach((reply: Reply) => {
          votes[reply._id] = reply.votes
        })
        setReplyVotes(votes)
      }
    } catch (error) {
      console.error('Failed to fetch replies:', error)
    }
  }

  const handleVote = async (type: 'up' | 'down') => {
    if (!user || voting) return
    
    setVoting(true)
    try {
      const response = await fetch(`/api/community/posts/${params.id}/vote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type })
      })
      
      if (response.ok) {
        const data = await response.json()
        setVotes(data.votes)
        setUserVote(data.userVote)
      }
    } catch (error) {
      console.error('Vote failed:', error)
    } finally {
      setVoting(false)
    }
  }

  const handleReplyVote = async (replyId: string, type: 'up' | 'down') => {
    if (!user) return
    
    try {
      const response = await fetch(`/api/community/replies/${replyId}/vote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type })
      })
      
      if (response.ok) {
        const data = await response.json()
        setReplyVotes(prev => ({ ...prev, [replyId]: data.votes }))
        setReplyUserVotes(prev => ({ ...prev, [replyId]: data.userVote }))
      }
    } catch (error) {
      console.error('Reply vote failed:', error)
    }
  }

  const handleShare = async (replyId?: string) => {
    const url = `${window.location.origin}${window.location.pathname}${replyId ? `#reply-${replyId}` : ''}`
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title || 'Discussion',
          url: url
        })
      } catch (error) {
        // User cancelled sharing
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(url)
        // You could add a toast notification here
        alert('Link copied to clipboard!')
      } catch (error) {
        console.error('Failed to copy link:', error)
      }
    }
  }

  const toggleReplyForm = (replyId: string) => {
    setShowReplyForm(prev => ({ ...prev, [replyId]: !prev[replyId] }))
  }

  const handleNestedReply = async (parentReplyId: string) => {
    if (!user || !nestedReplyContent[parentReplyId]?.trim()) return

    try {
      const response = await fetch('/api/community/replies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          postId: params.id,
          content: nestedReplyContent[parentReplyId],
          parentId: parentReplyId
        })
      })

      if (response.ok) {
        setNestedReplyContent(prev => ({ ...prev, [parentReplyId]: '' }))
        setShowReplyForm(prev => ({ ...prev, [parentReplyId]: false }))
        fetchReplies()
        fetchPost()
      }
    } catch (error) {
      console.error('Failed to submit nested reply:', error)
    }
  }

  const handleAcceptAnswer = async (replyId: string) => {
    if (!user) return
    
    try {
      const response = await fetch(`/api/community/replies/${replyId}/accept`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })
      
      if (response.ok) {
        fetchPost()
        fetchReplies()
      }
    } catch (error) {
      console.error('Failed to accept answer:', error)
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
        fetchReplies()
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
        {/* <Navigation /> */}
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
      {/* <Navigation /> */}
      
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

          <Card className="p-8 mb-8 shadow-lg border-0 bg-gradient-to-br from-card to-card/50">
            <div className="flex items-start gap-8 mb-6">
              <div className="flex flex-col items-center gap-3 bg-muted/30 rounded-xl p-4">
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className={`p-3 rounded-lg transition-all ${userVote === 'up' ? 'bg-green-500/20 text-green-500 hover:bg-green-500/30' : 'hover:bg-green-500/10 hover:text-green-500'}`}
                  onClick={() => handleVote('up')}
                  disabled={!user || voting}
                >
                  <ThumbsUp className="w-6 h-6" />
                </Button>
                <span className="text-3xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                  {votes}
                </span>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className={`p-3 rounded-lg transition-all ${userVote === 'down' ? 'bg-red-500/20 text-red-500 hover:bg-red-500/30' : 'hover:bg-red-500/10 hover:text-red-500'}`}
                  onClick={() => handleVote('down')}
                  disabled={!user || voting}
                >
                  <ThumbsDown className="w-6 h-6" />
                </Button>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  {post.pinned && <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-md">📌 Pinned</Badge>}
                  {post.solved && <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white border-0 shadow-md">✅ Solved</Badge>}
                  <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5">{post.category}</Badge>
                </div>

                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">{post.title}</h1>

                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none mb-8 leading-relaxed">
                  <p className="whitespace-pre-wrap text-foreground/90">{post.content}</p>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-border/50">
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50">
                      <MessageSquare className="w-4 h-4" />
                      <span className="font-medium">{post.replies}</span> replies
                    </span>
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50">
                      <Eye className="w-4 h-4" />
                      <span className="font-medium">{post.views}</span> views
                    </span>
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-muted/30 to-muted/50 border border-border/30">
                    <Avatar className="w-12 h-12 ring-2 ring-primary/20">
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-bold">{post.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{post.author.name}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <Trophy className="w-3 h-3" />
                        {post.author.reputation} reputation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Replies Section */}
          {replies.length > 0 && (
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-semibold text-foreground">{replies.length} Comment{replies.length !== 1 ? 's' : ''}</h3>
                <div className="h-px bg-border flex-1" />
              </div>
              
              {organizeReplies(replies).map((reply) => (
                <div key={reply._id}>
                  {/* Main Reply */}
                  <div className="bg-background border border-border/50 rounded-lg hover:border-border transition-colors">
                    {/* Reply Header */}
                    <div className="flex items-center gap-3 p-4 pb-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={reply.author.avatar} />
                        <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-semibold">
                          {reply.author.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-foreground hover:text-primary cursor-pointer">
                            {reply.author.name}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Trophy className="w-3 h-3" />
                            {reply.author.reputation}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {new Date(reply.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Reply Content */}
                    <div className="px-4 pb-3">
                      <p className="text-foreground/90 leading-relaxed whitespace-pre-wrap">
                        {reply.content}
                      </p>
                    </div>

                    {/* Reply Actions */}
                    <div className="flex items-center gap-1 px-4 pb-3 border-t border-border/30 pt-3 mt-3">
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className={`h-8 px-3 rounded-full transition-colors ${
                          replyUserVotes[reply._id] === 'up' 
                            ? 'text-green-600 bg-green-50 dark:bg-green-950' 
                            : 'text-muted-foreground hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-950'
                        }`}
                        onClick={() => handleReplyVote(reply._id, 'up')}
                        disabled={!user}
                      >
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">{replyVotes[reply._id] || reply.votes}</span>
                      </Button>
                      
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className={`h-8 px-3 rounded-full transition-colors ${
                          replyUserVotes[reply._id] === 'down' 
                            ? 'text-red-600 bg-red-50 dark:bg-red-950' 
                            : 'text-muted-foreground hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950'
                        }`}
                        onClick={() => handleReplyVote(reply._id, 'down')}
                        disabled={!user}
                      >
                        <ThumbsDown className="w-4 h-4" />
                      </Button>

                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-8 px-3 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full transition-colors ml-2"
                        onClick={() => toggleReplyForm(reply._id)}
                        disabled={!user}
                      >
                        <MessageSquare className="w-4 h-4 mr-1" />
                        <span className="text-sm">Reply</span>
                      </Button>

                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-8 px-3 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full transition-colors"
                        onClick={() => handleShare(reply._id)}
                      >
                        <span className="text-sm">Share</span>
                      </Button>

                      {user && user.id === post?.author._id && post?.category === 'qa' && !post?.solved && (
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="h-8 px-3 text-green-600 hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-950 rounded-full transition-colors ml-2"
                          onClick={() => handleAcceptAnswer(reply._id)}
                        >
                          <span className="text-sm">✓ Accept Answer</span>
                        </Button>
                      )}
                    </div>

                    {/* Nested Reply Form */}
                    {showReplyForm[reply._id] && user && (
                      <div className="px-4 pb-4 border-t border-border/30">
                        <div className="flex gap-3 mt-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-semibold text-xs">
                              {user.name[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <Textarea
                              placeholder={`Reply to ${reply.author.name}...`}
                              value={nestedReplyContent[reply._id] || ''}
                              onChange={(e) => setNestedReplyContent(prev => ({ ...prev, [reply._id]: e.target.value }))}
                              className="min-h-[60px] resize-none border-border/50 focus:border-primary/50 bg-background rounded-lg text-sm mb-2"
                            />
                            <div className="flex items-center gap-2">
                              <Button 
                                size="sm"
                                className="bg-primary hover:bg-primary/90 text-white px-3 py-1 rounded-full font-medium text-xs"
                                disabled={!nestedReplyContent[reply._id]?.trim()}
                                onClick={() => handleNestedReply(reply._id)}
                              >
                                Reply
                              </Button>
                              <Button 
                                size="sm"
                                variant="ghost"
                                className="text-muted-foreground hover:text-foreground px-3 py-1 rounded-full text-xs"
                                onClick={() => toggleReplyForm(reply._id)}
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Nested Replies */}
                  {reply.children.length > 0 && (
                    <div className="ml-12 mt-3 space-y-3">
                      {reply.children.map((childReply) => (
                        <div key={childReply._id} className="bg-muted/20 border border-border/30 rounded-lg hover:border-border/50 transition-colors relative">
                          {/* Connection Line */}
                          <div className="absolute -left-6 top-0 bottom-0 w-px bg-border/50" />
                          <div className="absolute -left-6 top-6 w-6 h-px bg-border/50" />
                          
                          {/* Child Reply Header */}
                          <div className="flex items-center gap-3 p-3 pb-2">
                            <Avatar className="w-8 h-8">
                              <AvatarImage src={childReply.author.avatar} />
                              <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-semibold text-xs">
                                {childReply.author.name[0]}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-foreground text-sm hover:text-primary cursor-pointer">
                                  {childReply.author.name}
                                </span>
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Trophy className="w-2.5 h-2.5" />
                                  {childReply.author.reputation}
                                </span>
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {new Date(childReply.createdAt).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </div>
                            </div>
                          </div>

                          {/* Child Reply Content */}
                          <div className="px-3 pb-2">
                            <p className="text-foreground/90 leading-relaxed whitespace-pre-wrap text-sm">
                              {childReply.content}
                            </p>
                          </div>

                          {/* Child Reply Actions */}
                          <div className="flex items-center gap-1 px-3 pb-2 border-t border-border/20 pt-2 mt-2">
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className={`h-7 px-2 rounded-full transition-colors text-xs ${
                                replyUserVotes[childReply._id] === 'up' 
                                  ? 'text-green-600 bg-green-50 dark:bg-green-950' 
                                  : 'text-muted-foreground hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-950'
                              }`}
                              onClick={() => handleReplyVote(childReply._id, 'up')}
                              disabled={!user}
                            >
                              <ThumbsUp className="w-3 h-3 mr-1" />
                              <span className="font-medium">{replyVotes[childReply._id] || childReply.votes}</span>
                            </Button>
                            
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className={`h-7 px-2 rounded-full transition-colors text-xs ${
                                replyUserVotes[childReply._id] === 'down' 
                                  ? 'text-red-600 bg-red-50 dark:bg-red-950' 
                                  : 'text-muted-foreground hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950'
                              }`}
                              onClick={() => handleReplyVote(childReply._id, 'down')}
                              disabled={!user}
                            >
                              <ThumbsDown className="w-3 h-3" />
                            </Button>

                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="h-7 px-2 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full transition-colors ml-1 text-xs"
                              onClick={() => handleShare(childReply._id)}
                            >
                              Share
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {user ? (
            <div className="bg-background border border-border/50 rounded-lg p-4">
              <div className="flex gap-3 mb-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-semibold">
                    {user.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <form onSubmit={handleReply} className="space-y-3">
                    <Textarea
                      placeholder={`What are your thoughts, ${user.name}?`}
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      className="min-h-[80px] resize-none border-border/50 focus:border-primary/50 bg-background rounded-lg text-sm"
                      required
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span className="text-xs">Press Enter to post</span>
                      </div>
                      <Button 
                        type="submit" 
                        disabled={submittingReply || !replyContent.trim()}
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full font-medium"
                      >
                        {submittingReply ? 'Posting...' : 'Comment'}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-muted/30 border border-border/50 rounded-lg p-6 text-center">
              <div className="mb-4">
                <MessageSquare className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground mb-1">Join the conversation</p>
                <p className="text-sm text-muted-foreground">Sign in to share your thoughts</p>
              </div>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-medium">
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}