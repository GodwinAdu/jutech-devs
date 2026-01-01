"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function SupportServices() {
  const services = [
    {
      title: "24/7 Monitoring",
      description: "Continuous monitoring of your applications to ensure optimal performance and uptime.",
      features: ["Real-time alerts", "Performance tracking", "Uptime guarantees"],
    },
    {
      title: "Bug Fixes & Patches",
      description: "Rapid response to issues with priority-based bug fixing and security patches.",
      features: ["Quick turnaround", "Security updates", "Version management"],
    },
    {
      title: "Feature Updates",
      description: "Regular updates and new features to keep your application competitive and modern.",
      features: ["Roadmap planning", "Agile development", "User feedback integration"],
    },
    {
      title: "Performance Optimization",
      description: "Continuous optimization to ensure your app runs at peak efficiency.",
      features: ["Speed improvements", "Resource optimization", "Scalability planning"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Application Support & Maintenance</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide comprehensive support for your existing applications to ensure they run smoothly and stay ahead
            of the curve
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ borderColor: "var(--accent)" }}
              className="p-8 rounded-xl bg-card border border-border/50 hover:border-accent/50 transition-all"
            >
              <h3 className="text-2xl font-bold mb-3 gradient-text">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
          >
            Get Support Plan
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
