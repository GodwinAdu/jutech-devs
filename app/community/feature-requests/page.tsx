"use client"

import { useEffect, useState } from 'react'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PostCard } from "@/components/community/community-cards"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Plus, Filter, TrendingUp, Lightbulb, Loader2 } from "lucide-react"
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
  replies: number
  views: number
  solved: boolean
  pinned: boolean
  createdAt: string
}

export default function FeatureRequestsPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('votes')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const fetchPosts = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams({
        category: 'feature-requests',
        page: page.toString(),
        sort,
        ...(search && { search })
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
  }, [page, sort, search])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-cyan-500 to-blue-500">Feature Requests</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Feature <span className="text-gradient">Requests</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Shape the future of our platform. Suggest new features and vote on community ideas.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              {/* Search and Filters */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input 
                    placeholder="Search feature requests..." 
                    className="pl-10"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-500" asChild>
                    <Link href="/community/create">
                      <Lightbulb className="w-4 h-4 mr-2" />
                      Suggest Feature
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Sort Options */}
              <div className="flex gap-2 mb-6">
                <Button 
                  variant={sort === 'votes' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setSort('votes')}
                >
                  <TrendingUp className="w-4 h-4 mr-1" />
                  Most Voted
                </Button>
                <Button 
                  variant={sort === 'createdAt' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setSort('createdAt')}
                >
                  Latest
                </Button>
                <Button 
                  variant={sort === 'replies' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setSort('replies')}
                >
                  Most Discussed
                </Button>
              </div>

              {/* Feature Requests List */}
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
                <h3 className="font-bold mb-4">Request Guidelines</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Describe the problem clearly</li>
                  <li>• Explain the proposed solution</li>
                  <li>• Consider existing alternatives</li>
                  <li>• Vote on similar requests</li>
                  <li>• Be open to feedback</li>
                </ul>
              </div>

              <div className="bg-card border border-border/50 rounded-lg p-6">
                <h3 className="font-bold mb-4">Popular Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {['UI/UX', 'API', 'Performance', 'Mobile', 'Integration', 'Security'].map((tag) => (
                    <Badge key={tag} variant="outline" className="hover:bg-accent/10 cursor-pointer">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border/50 rounded-lg p-6">
                <h3 className="font-bold mb-4">Request Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Requests</span>
                    <span className="font-semibold">456</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Implemented</span>
                    <span className="font-semibold text-green-500">23%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">In Progress</span>
                    <span className="font-semibold text-blue-500">12%</span>
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