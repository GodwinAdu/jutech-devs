"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Code2, MessageSquare, Shield, BarChart3, Zap } from "lucide-react"

export function DeveloperToolsPreview() {
  const tools = [
    {
      name: "Customer Agent SDK",
      description: "AI-powered customer support widget",
      icon: MessageSquare,
    },
    {
      name: "Auth Shield",
      description: "Complete authentication solution",
      icon: Shield,
    },
    {
      name: "Analytics Pro SDK",
      description: "Real-time analytics tracking",
      icon: BarChart3,
    },
    {
      name: "API Gateway",
      description: "Secure, scalable API management",
      icon: Zap,
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Code2 className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">For Developers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Public APIs & SDKs for Integration</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful tools developers can integrate into their applications. Built for scale, designed for simplicity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl border border-border p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                <tool.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">{tool.name}</h3>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/developer-tools"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
          >
            Explore All Tools
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
