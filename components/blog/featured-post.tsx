"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, User, ArrowRight, Star } from "lucide-react"
import { BlogPost } from "@/lib/blog-data"
import Link from "next/link"

interface FeaturedPostProps {
  post: BlogPost
  index: number
}

export function FeaturedPost({ post, index }: FeaturedPostProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="group cursor-pointer"
    >
      <Link href={`/blog/${post.id}`}>
        <div className="relative bg-card border border-border/50 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
          {/* Featured Badge */}
          <div className="absolute top-4 right-4 z-10">
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-accent/90 text-accent-foreground text-xs font-semibold backdrop-blur-sm">
              <Star className="w-3 h-3 fill-current" />
              <span>Featured</span>
            </div>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden h-64">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm font-semibold backdrop-blur-sm">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Meta Info */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-muted text-muted-foreground text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Author & Read More */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-border/50"
                />
                <div>
                  <div className="font-semibold">{post.author.name}</div>
                  <div className="text-sm text-muted-foreground">{post.author.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                <span>Read Article</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}