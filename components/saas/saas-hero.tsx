"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function SaaSHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="gradient-text">Powerful SaaS Solutions</span>
            <br />
            <span className="text-foreground">for Modern Teams</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Streamline your workflow with our suite of cloud-based applications designed for productivity and
            collaboration
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="#products"
              className="inline-block px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
            >
              Explore Products
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
