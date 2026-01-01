"use client"

import { motion } from "framer-motion"

export function ProjectsHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="gradient-text">Our Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our latest projects across web, mobile, and desktop platforms
          </p>
        </motion.div>
      </div>
    </section>
  )
}
