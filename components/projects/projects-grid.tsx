"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "Full-stack e-commerce solution with real-time inventory management",
      image: "/ecommerce-dashboard.png",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
    },
    {
      id: 2,
      title: "Mobile Fitness App",
      category: "mobile",
      description: "Cross-platform fitness app with AI-powered workout recommendations",
      image: "/fitness-app-interface.png",
      tags: ["React Native", "Firebase", "ML"],
      link: "#",
    },
    {
      id: 3,
      title: "Desktop Analytics Tool",
      category: "desktop",
      description: "Electron-based analytics dashboard with real-time data visualization",
      image: "/analytics-dashboard-desktop-app.jpg",
      tags: ["Electron", "D3.js", "Python"],
      link: "#",
    },
    {
      id: 4,
      title: "SaaS Project Management",
      category: "web",
      description: "Collaborative project management platform for remote teams",
      image: "/project-management-dashboard.jpg",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      link: "#",
    },
    {
      id: 5,
      title: "Mobile Banking App",
      category: "mobile",
      description: "Secure mobile banking application with biometric authentication",
      image: "/banking-app-interface.jpg",
      tags: ["Flutter", "Firebase", "Security"],
      link: "#",
    },
    {
      id: 6,
      title: "Video Editing Software",
      category: "desktop",
      description: "Professional video editing desktop application",
      image: "/video-editing-software.jpg",
      tags: ["Tauri", "FFmpeg", "Rust"],
      link: "#",
    },
    {
      id: 7,
      title: "Real Estate Portal",
      category: "web",
      description: "Modern real estate listing platform with virtual tours",
      image: "/real-estate-portal.jpg",
      tags: ["React", "Three.js", "Node.js"],
      link: "#",
    },
    {
      id: 8,
      title: "Health Tracking App",
      category: "mobile",
      description: "Comprehensive health and wellness tracking application",
      image: "/health-tracking-app.jpg",
      tags: ["React Native", "HealthKit", "Cloud"],
      link: "#",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "desktop", label: "Desktop" },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "border border-border text-foreground hover:border-accent/50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group rounded-xl overflow-hidden bg-card border border-border/50 hover:border-accent/50 transition-all cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-accent uppercase">{project.category}</span>
                  <a
                    href={project.link}
                    className="text-accent hover:text-accent/80 font-semibold text-sm transition-colors"
                  >
                    View →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
