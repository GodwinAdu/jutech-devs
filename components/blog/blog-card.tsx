"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import { BlogPost } from "@/lib/blog-data"
import Link from "next/link"

interface BlogCardProps {
  post: BlogPost
  index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <Link href={`/blog/${post.id}`}>
        <div className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Meta Info */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{post.readTime} min read</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded-lg bg-muted text-muted-foreground text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Author & Read More */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-medium">{post.author.name}</div>
                  <div className="text-xs text-muted-foreground">{post.author.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}