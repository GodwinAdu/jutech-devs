"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles, Zap } from "lucide-react"
import { useRef } from "react"

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        type: "spring" as const,
        stiffness: 100
      },
    },
  }

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-28 overflow-hidden">
      {/* Enhanced animated background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 -z-10"
      >
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" 
        />
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible" 
          className="text-center space-y-8"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Transforming Ideas into Reality</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="gradient-text block">We Build Smart</span>
              <span className="text-foreground block">Applications</span>
              <span className="gradient-text block">for Every Platform</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From web to mobile to desktop — JuTech Devs delivers 
               <span className="text-accent font-semibold pl-1">seamless, scalable, and powerful</span> solutions that drive your business forward.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10">Start Your Project</span>
                <div className="relative z-10 p-1 rounded-full bg-primary-foreground/20 group-hover:bg-primary-foreground/30 transition-colors">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-accent/50 text-accent font-semibold text-lg backdrop-blur-sm hover:bg-accent/10 hover:border-accent transition-all duration-300"
              >
                <div className="p-1 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </div>
                <span>View Our Work</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 md:gap-8 pt-12 max-w-2xl mx-auto">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "30+", label: "Happy Clients" },
              { number: "8+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5
                }}
                className="group p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
