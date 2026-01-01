"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function SaaSPreview() {
  const saasProducts = [
    {
      id: 1,
      name: "DevFlow",
      description: "Project management tool for development teams",
      features: ["Real-time collaboration", "Sprint planning", "Code integration"],
    },
    {
      id: 2,
      name: "CloudSync",
      description: "Seamless file synchronization and backup solution",
      features: ["Auto-sync", "Version control", "Team sharing"],
    },
    {
      id: 3,
      name: "AnalyticsPro",
      description: "Advanced analytics and reporting platform",
      features: ["Real-time dashboards", "Custom reports", "Data export"],
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our SaaS Products</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful tools designed to streamline your workflow and boost productivity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {saasProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-xl bg-background border border-border/50 hover:border-accent/50 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 mb-4" />
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-muted-foreground mb-6">{product.description}</p>

              <ul className="space-y-2 mb-6">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <Link
                  href="/saas"
                  className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold text-center hover:bg-primary/90 transition-all"
                >
                  Try Now
                </Link>
                <Link
                  href="/saas"
                  className="flex-1 px-4 py-2 rounded-lg border border-accent text-accent text-sm font-semibold text-center hover:bg-accent/10 transition-all"
                >
                  Sign Up
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/saas"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
          >
            Explore All Products
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
