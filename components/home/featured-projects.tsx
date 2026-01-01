"use client"

import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import { useRef } from "react"

export function FeaturedProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack web application with real-time inventory management and AI-powered recommendations",
      image: "/ecommerce-dashboard.png",
      tags: ["React", "Node.js", "PostgreSQL", "AI"],
      category: "Web App",
      status: "Live",
    },
    {
      id: 2,
      title: "Mobile Fitness App",
      description: "Cross-platform mobile app with AI-powered workout recommendations and social features",
      image: "/fitness-app-interface.png",
      tags: ["React Native", "Firebase", "ML", "Social"],
      category: "Mobile App",
      status: "In Development",
    },
    {
      id: 3,
      title: "Desktop Analytics Tool",
      description: "Electron-based desktop application for real-time data visualization and business intelligence",
      image: "/analytics-dashboard-desktop-app.jpg",
      tags: ["Electron", "D3.js", "Python", "BI"],
      category: "Desktop App",
      status: "Live",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      },
    },
  }

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-accent">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Our Latest Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how we transform ideas into powerful digital solutions across web, mobile, and desktop platforms
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              <div className="relative rounded-3xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                    project.status === 'Live' 
                      ? 'bg-primary/20 text-primary border border-primary/30' 
                      : 'bg-accent/20 text-accent border border-accent/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-full bg-primary/90 text-primary-foreground backdrop-blur-sm hover:bg-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-full bg-card/90 text-foreground backdrop-blur-sm hover:bg-card transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-accent">{project.category}</span>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * tagIndex }}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group/link"
                  >
                    Explore Project
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-primary/50 text-primary font-semibold hover:bg-primary/10 transition-all duration-300 hover:border-primary group"
            >
              View All Projects
              <div className="p-1 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
