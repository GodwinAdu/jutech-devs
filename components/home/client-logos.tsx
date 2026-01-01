"use client"

import { motion } from "framer-motion"

const clients = [
  { name: "TechCorp", industry: "Technology" },
  { name: "FinanceHub", industry: "Finance" },
  { name: "HealthPlus", industry: "Healthcare" },
  { name: "EduLearn", industry: "Education" },
  { name: "RetailPro", industry: "E-commerce" },
  { name: "LogiTrack", industry: "Logistics" },
  { name: "MediaStream", industry: "Media" },
  { name: "FoodHub", industry: "Food & Beverage" },
]

export function ClientLogos() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Trusted by Leading Brands
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We partner with innovative companies across diverse industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3">
                <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {client.name.substring(0, 2)}
                </span>
              </div>
              <h3 className="font-semibold text-foreground text-center mb-1">{client.name}</h3>
              <p className="text-xs text-muted-foreground text-center">{client.industry}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
