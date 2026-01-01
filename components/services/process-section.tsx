"use client"

import { motion } from "framer-motion"

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We understand your business goals, target audience, and technical requirements",
    },
    {
      number: "02",
      title: "Planning",
      description: "Create a detailed roadmap with timelines, milestones, and deliverables",
    },
    {
      number: "03",
      title: "Development",
      description: "Build your application using best practices and cutting-edge technologies",
    },
    {
      number: "04",
      title: "Testing",
      description: "Comprehensive QA testing to ensure quality, performance, and security",
    },
    {
      number: "05",
      title: "Deployment",
      description: "Launch your application with zero downtime and full monitoring",
    },
    {
      number: "06",
      title: "Support",
      description: "Ongoing maintenance, updates, and support for long-term success",
    },
  ]

  return (
    <section className="py-20 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven methodology to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-lg bg-background border border-border/50 hover:border-accent/50 transition-all"
            >
              {/* Step number */}
              <div className="text-5xl font-bold gradient-text mb-4 opacity-50">{step.number}</div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm">{step.description}</p>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
