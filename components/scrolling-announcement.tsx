"use client"

import { motion } from "framer-motion"

export function ScrollingAnnouncement() {
  const announcements = [
    "🌐 Web Development: React, Next.js, PWAs & E-commerce solutions",
    "📱 Mobile Apps: React Native & Flutter for iOS/Android",
    "💻 Desktop Apps: Cross-platform Electron applications",
    "🍽️ RestaurantPOS Pro: Complete restaurant management system",
    "🛍️ RetailPOS Elite: Smart retail point of sale solution",
    "📋 WaitlistPro: Smart waitlist management platform",
    "🛠️ Developer Tools: Powerful SDKs, APIs & libraries for seamless integration",
    "🎯 Code Playground: Live JavaScript, Python & Java execution",
    "📚 Programming Academy: Interactive quizzes for 17+ languages",
    "⚙️ Backend & APIs: RESTful, GraphQL & microservices architecture",
    "🚀 DevOps: CI/CD pipelines, Docker, Kubernetes & cloud deployment",
    "🔧 App Management: Performance monitoring, security updates & maintenance"
  ]

  return (
    <div className="fixed top-0 w-full z-50 bg-primary text-primary-foreground py-2 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -2400]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 36,
            ease: "linear"
          }
        }}
      >
        {[...announcements, ...announcements].map((announcement, index) => (
          <span key={index} className="mx-8 text-sm font-medium">
            {announcement}
          </span>
        ))}
      </motion.div>
    </div>
  )
}