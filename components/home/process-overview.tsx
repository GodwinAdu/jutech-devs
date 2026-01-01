"use client"

import { motion } from "framer-motion"
import { Search, Palette, Code2, Rocket, HeadphonesIcon, CheckCircle } from "lucide-react"

const processSteps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We analyze your requirements and define project scope",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Create stunning UI/UX that users love",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Build robust, scalable applications",
  },
  {
    icon: CheckCircle,
    title: "Testing",
    description: "Rigorous QA to ensure quality",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Deploy to production seamlessly",
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description: "Ongoing maintenance and updates",
  },
]

export function ProcessOverview() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Our Development Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven methodology that delivers results from concept to launch and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
                      <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
