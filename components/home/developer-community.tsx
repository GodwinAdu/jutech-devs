"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Users, MessageCircle, BookOpen, Calendar } from "lucide-react"

export function DeveloperCommunity() {
  const stats = [
    { label: "Active Developers", value: "12,000+", icon: Users },
    { label: "GitHub Stars", value: "8,500+", icon: MessageCircle },
    { label: "Documentation Pages", value: "200+", icon: BookOpen },
    { label: "Monthly Events", value: "4+", icon: Calendar }
  ]

  const communityFeatures = [
    {
      title: "Developer Discord",
      description: "Join 5,000+ developers discussing best practices, sharing code, and getting help.",
      action: "Join Discord",
      href: "#"
    },
    {
      title: "Weekly Webinars",
      description: "Learn from experts about new features, performance optimization, and real-world use cases.",
      action: "View Schedule",
      href: "/events"
    },
    {
      title: "Contributor Program",
      description: "Contribute to our open-source projects and get recognized in our developer hall of fame.",
      action: "Start Contributing",
      href: "/open-source"
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Developer Community</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the <span className="gradient-text">Jutech</span> Developer Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with thousands of developers, contribute to open source, and shape the future of development tools.
          </p>
        </motion.div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl border border-border p-6 hover:border-accent/50 transition-all hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-6">{feature.description}</p>
              <Link
                href={feature.href}
                className="inline-block px-6 py-2 rounded-lg bg-accent/10 text-accent font-medium hover:bg-accent/20 transition-all"
              >
                {feature.action}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}