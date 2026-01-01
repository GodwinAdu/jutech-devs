"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Tag } from "lucide-react"
import { BlogPost as BlogPostType } from "@/lib/blog-data"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface BlogPostProps {
  post: BlogPostType
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Link href="/blog">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Button>
        </Link>
      </motion.div>

      {/* Article Header */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-8"
      >
        {/* Category & Meta */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              {post.category}
            </span>
            {post.featured && (
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold">
                Featured
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Author & Meta Info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-6 border-y border-border/50">
          <div className="flex items-center gap-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-border/50"
            />
            <div>
              <div className="font-semibold text-lg">{post.author.name}</div>
              <div className="text-muted-foreground">{post.author.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              In today's rapidly evolving tech landscape, staying ahead of the curve requires not just 
              understanding current technologies, but also anticipating future trends and preparing for 
              the challenges they bring.
            </p>
            
            <p>
              This comprehensive guide explores the key concepts, best practices, and real-world 
              applications that every developer should know. We'll dive deep into practical examples 
              and provide actionable insights you can implement immediately.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Concepts</h2>
            
            <p>
              Understanding the fundamental principles is crucial for building robust and scalable 
              applications. Let's explore the core concepts that form the foundation of modern 
              development practices.
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Performance optimization techniques</li>
              <li>Security best practices</li>
              <li>Scalability considerations</li>
              <li>User experience improvements</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Implementation Guide</h2>
            
            <p>
              Now that we've covered the theoretical aspects, let's move on to practical implementation. 
              The following examples demonstrate how to apply these concepts in real-world scenarios.
            </p>

            <div className="bg-card border border-border/50 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold mb-3">Pro Tip</h3>
              <p className="text-muted-foreground">
                Always test your implementations thoroughly in different environments before 
                deploying to production. This helps catch potential issues early and ensures 
                a smooth user experience.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            
            <p>
              By following these guidelines and best practices, you'll be well-equipped to tackle 
              complex development challenges and build applications that stand the test of time. 
              Remember, continuous learning and adaptation are key to success in the tech industry.
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Tags</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-muted text-muted-foreground text-sm hover:bg-accent/10 hover:text-accent transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share & Actions */}
        <div className="flex items-center justify-between pt-8 border-t border-border/50">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Bookmark className="w-4 h-4" />
              Save
            </Button>
          </div>
          
          <Link href="/blog">
            <Button className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              More Articles
            </Button>
          </Link>
        </div>
      </motion.article>
    </div>
  )
}