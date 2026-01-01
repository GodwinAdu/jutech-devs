"use client"

import { motion } from "framer-motion"
import { Smartphone, Download } from "lucide-react"

export function MobileAppsHero() {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Smartphone className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Mobile Applications</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Powerful Apps for iOS & Android
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Download our suite of mobile applications designed to enhance your productivity, fitness, shopping, and
            learning experiences on the go.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg">
              <Download className="h-5 w-5 text-primary" />
              <span className="font-medium">Available on iOS & Android</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
