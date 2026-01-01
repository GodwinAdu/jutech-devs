"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, Calendar, Clock, User, Tag } from "lucide-react"
import { blogPosts, categories } from "@/lib/blog-data"
import { BlogCard } from "./blog-card"
import { FeaturedPost } from "./featured-post"

export function BlogShowcase() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedTag, setSelectedTag] = useState("")

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  const filteredPosts = regularPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesTag = !selectedTag || post.tags.includes(selectedTag)
    
    return matchesSearch && matchesCategory && matchesTag
  })

  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))]

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Tag className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Tech Blog</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
          Latest Insights & Tutorials
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Stay ahead with expert insights on web development, mobile apps, cloud computing, 
          and the latest technology trends from our team of experienced developers.
        </p>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12 space-y-6"
      >
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setSelectedTag("")}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
              !selectedTag
                ? "bg-accent text-accent-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            All Tags
          </button>
          {allTags.slice(0, 10).map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedTag === tag
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <h2 className="text-2xl font-bold">Featured Articles</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <FeaturedPost key={post.id} post={post} index={index} />
            ))}
          </div>
        </motion.div>
      )}

      {/* Regular Posts */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <h2 className="text-2xl font-bold">All Articles</h2>
          </div>
          <div className="text-sm text-muted-foreground">
            {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold mb-2">No articles found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </motion.div>

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center"
      >
        <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get the latest articles and tutorials delivered to your inbox. 
          No spam, unsubscribe at any time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-xl bg-background border border-border/50 focus:outline-none focus:border-primary/50"
          />
          <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
            Subscribe
          </button>
        </div>
      </motion.div>
    </div>
  )
}