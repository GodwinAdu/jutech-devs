"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { Code2, MessageSquare, Zap, BarChart3, Shield, Book, Lightbulb } from "lucide-react"

export default function Documentation() {
  const sdks = [
    {
      name: "Customer Agent SDK",
      description: "AI-powered customer support chat widget",
      icon: MessageSquare,
      link: "/documentation/customer-agent",
      category: "Communication"
    },
    {
      name: "Auth Shield",
      description: "Complete authentication solution",
      icon: Shield,
      link: "/documentation/auth-shield",
      category: "Security"
    },
    {
      name: "Universal AI SDK",
      description: "Unified AI provider integration",
      icon: BarChart3,
      link: "/documentation/universal-ai",
      category: "AI/ML"
    },
    {
      name: "React Hooks Collection",
      description: "42 production-ready React hooks",
      icon: Code2,
      link: "/documentation/react-hooks",
      category: "React"
    },
    {
      name: "API Rate Limiter",
      description: "Advanced rate limiting strategies",
      icon: Zap,
      link: "/documentation/rate-limiter",
      category: "Performance"
    },
    {
      name: "Quantum Query",
      description: "Advanced React Query enhancement",
      icon: Lightbulb,
      link: "/documentation/quantum-query",
      category: "React Query"
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Book className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Documentation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              SDK Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete guides, API references, and examples for all our developer tools.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sdks.map((sdk, index) => (
              <motion.div
                key={sdk.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={sdk.link}>
                  <div className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all hover:shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                        <sdk.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-accent">{sdk.category}</span>
                        <h3 className="text-lg font-bold">{sdk.name}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{sdk.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}