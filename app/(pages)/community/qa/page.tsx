"use client"

import { useEffect, useState } from 'react'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PostCard } from "@/components/community/community-cards"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Plus, Filter, CheckCircle, Loader2 } from "lucide-react"
import Link from 'next/link'

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

export default function QAPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('createdAt')
  const [filter, setFilter] = useState('all')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const fetchPosts = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams({
        category: 'qa',
        page: page.toString(),
        sort,
        ...(search && { search }),
        ...(filter === 'unsolved' && { solved: 'false' }),
        ...(filter === 'solved' && { solved: 'true' })
      })
      
      const response = await fetch(`/api/community/posts?${params}`)
      const data = await response.json()
      
      if (response.ok) {
        setPosts(data.posts)
        setTotalPages(data.pagination.pages)
      }
    } catch (error) {
      console.error('Failed to fetch posts:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [page, sort, search, filter])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-28 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500">Q&A</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Questions & <span className="text-gradient">Answers</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get help from the community. Ask questions, provide answers, and learn together.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              {/* Search and Filters */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input 
                    placeholder="Search questions..." 
                    className="pl-10"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500" asChild>
                    <Link href="/community/create">
                      <Plus className="w-4 h-4 mr-2" />
                      Ask Question
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Filter Options */}
              <div className="flex gap-2 mb-6">
                <Button 
                  variant={filter === 'all' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setFilter('all')}
                >
                  All Questions
                </Button>
                <Button 
                  variant={filter === 'unsolved' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setFilter('unsolved')}
                >
                  Unanswered
                </Button>
                <Button 
                  variant={filter === 'solved' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setFilter('solved')}
                >
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Solved
                </Button>
              </div>

              {/* Questions List */}
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin" />
                </div>
              ) : (
                <div className="space-y-4">
                  {posts.map((post) => (
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

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                  <Button 
                    variant="outline" 
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                  >
                    Previous
                  </Button>
                  <span className="flex items-center px-4">
                    Page {page} of {totalPages}
                  </span>
                  <Button 
                    variant="outline" 
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 space-y-6">
              <div className="bg-card border border-border/50 rounded-lg p-6">
                <h3 className="font-bold mb-4">How to Ask</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Be specific and clear</li>
                  <li>• Include relevant code</li>
                  <li>• Describe what you've tried</li>
                  <li>• Add appropriate tags</li>
                  <li>• Accept helpful answers</li>
                </ul>
              </div>

              <div className="bg-card border border-border/50 rounded-lg p-6">
                <h3 className="font-bold mb-4">Q&A Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Questions</span>
                    <span className="font-semibold">2,891</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Solved Rate</span>
                    <span className="font-semibold text-green-500">94%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Avg Response Time</span>
                    <span className="font-semibold text-blue-500">2.3h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}