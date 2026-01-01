"use client"

import { motion } from "framer-motion"

export function ScrollingAnnouncement() {
  const announcements = [
    "🚀 Full-Stack Development: Custom web & mobile apps with modern tech stacks",
    "💻 SaaS Solutions: Enterprise-grade software as a service platforms",
    "📱 Mobile Apps: Cross-platform iOS & Android development with React Native",
    "🛠️ Developer Tools: Open source libraries and productivity tools for developers",
    "🎯 Code Playground: Real-time JavaScript, Python & Java execution environment",
    "📚 Programming Academy: Interactive quizzes for 17+ languages with explanations",
    "⭐ Open Source: Contributing to the developer community with free tools",
    "🤝 Custom Solutions: Tailored software development for your business needs",
    "🔧 API Development: RESTful APIs, GraphQL, and microservices architecture",
    "☁️ Cloud Services: AWS, Azure deployment and DevOps automation"
  ]

  return (
    <div className="fixed top-0 w-full z-50 bg-primary text-primary-foreground py-2 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -2000]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
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