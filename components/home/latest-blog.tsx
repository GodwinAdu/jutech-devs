"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"

const blogPosts = [
  {
    title: "Building Scalable Web Applications with Next.js 15",
    excerpt:
      "Learn best practices for creating high-performance web apps using the latest Next.js features and server components.",
    category: "Web Development",
    date: "Dec 20, 2024",
    readTime: "8 min read",
    slug: "nextjs-15-scalable-apps",
  },
  {
    title: "Mobile App Development: Flutter vs React Native in 2025",
    excerpt:
      "A comprehensive comparison of the two leading cross-platform mobile frameworks to help you choose the right one.",
    category: "Mobile Development",
    date: "Dec 15, 2024",
    readTime: "6 min read",
    slug: "flutter-vs-react-native-2025",
  },
  {
    title: "The Importance of App Maintenance and Support",
    excerpt:
      "Why ongoing maintenance is crucial for your application's success and how to implement an effective support strategy.",
    category: "App Management",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    slug: "app-maintenance-importance",
  },
]

export function LatestBlog() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and best practices in app development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={`/blog`}>
                <div className="h-full rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-accent/20 text-primary">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/blog">
            <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 group bg-transparent">
              View All Articles
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
