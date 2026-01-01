"use client"

import { motion } from "framer-motion"

export function MissionVision() {
  const sections = [
    {
      title: "Our Mission",
      description:
        "To empower businesses with cutting-edge technology solutions that drive growth, innovation, and digital transformation. We believe in creating applications that are not just functional, but truly transformative.",
      icon: "🎯",
    },
    {
      title: "Our Vision",
      description:
        "To be the leading development partner for businesses seeking to build smart, scalable applications across all platforms. We envision a future where technology seamlessly integrates into every aspect of business operations.",
      icon: "🚀",
    },
    {
      title: "Our Values",
      description:
        "Excellence, Innovation, Reliability, and Collaboration. We are committed to delivering the highest quality solutions while maintaining transparent communication and building lasting partnerships with our clients.",
      icon: "⭐",
    },
  ]

  return (
    <section className="py-20 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-xl bg-background border border-border/50 hover:border-accent/50 transition-all"
            >
              <div className="text-4xl mb-4">{section.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{section.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
