"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function ServiceCards() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Modern, responsive web applications built with the latest technologies",
      features: ["React & Next.js", "Full-stack development", "Progressive Web Apps", "E-commerce solutions"],
      icon: "🌐",
    },
    {
      id: 2,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android",
      features: ["React Native", "Flutter development", "App Store optimization", "Push notifications"],
      icon: "📱",
    },
    {
      id: 3,
      title: "Desktop Applications",
      description: "Powerful desktop software for Windows, macOS, and Linux",
      features: ["Electron apps", "Cross-platform support", "Native performance", "System integration"],
      icon: "💻",
    },
    {
      id: 4,
      title: "App Management",
      description: "Ongoing support, maintenance, and optimization for your applications",
      features: ["Performance monitoring", "Security updates", "Bug fixes & patches", "Feature enhancements"],
      icon: "🔧",
    },
    {
      id: 5,
      title: "Backend & APIs",
      description: "Scalable backend infrastructure and RESTful/GraphQL APIs",
      features: ["Database design", "API development", "Cloud deployment", "Microservices"],
      icon: "⚙️",
    },
    {
      id: 6,
      title: "DevOps & Deployment",
      description: "CI/CD pipelines and deployment automation for seamless releases",
      features: ["GitHub Actions", "Docker & Kubernetes", "Cloud infrastructure", "Monitoring & logging"],
      icon: "🚀",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group p-8 rounded-xl bg-card border border-border/50 hover:border-accent/50 transition-all cursor-pointer"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">{service.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/contact"
                className="inline-block text-accent hover:text-accent/80 font-semibold text-sm transition-colors group-hover:translate-x-1 transition-transform"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
