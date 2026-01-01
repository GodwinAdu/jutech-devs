"use client"

import { motion } from "framer-motion"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: "🚀",
      title: "Lightning Fast Development",
      description: "We deliver projects on time with cutting-edge technologies and agile methodologies.",
    },
    {
      icon: "🛡️",
      title: "Enterprise Security",
      description: "Your data is protected with industry-leading security standards and compliance certifications.",
    },
    {
      icon: "📱",
      title: "Multi-Platform Expertise",
      description: "From web to mobile to desktop, we build seamless experiences across all platforms.",
    },
    {
      icon: "🔧",
      title: "Ongoing Support",
      description: "We don't just build—we maintain, update, and optimize your applications continuously.",
    },
    {
      icon: "💡",
      title: "Innovation Focused",
      description: "We stay ahead of trends and implement the latest technologies for your competitive edge.",
    },
    {
      icon: "👥",
      title: "Dedicated Team",
      description: "Your project gets a dedicated team of experts committed to your success.",
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
    <section className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose JuTech Devs?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine technical excellence with strategic thinking to deliver solutions that matter
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-background border border-border/50 hover:border-accent/50 transition-all"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
