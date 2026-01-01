"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Sparkles, Zap } from "lucide-react"

const technologies = [
  { name: "React", category: "Frontend", level: 95, description: "Modern UI library" },
  { name: "Next.js", category: "Framework", level: 90, description: "Full-stack React framework" },
  { name: "TypeScript", category: "Language", level: 88, description: "Type-safe JavaScript" },
  { name: "Node.js", category: "Backend", level: 92, description: "Server-side JavaScript" },
  { name: "Flutter", category: "Mobile", level: 85, description: "Cross-platform mobile" },
  { name: "Swift", category: "iOS", level: 80, description: "Native iOS development" },
  { name: "Kotlin", category: "Android", level: 82, description: "Modern Android development" },
  { name: "PostgreSQL", category: "Database", level: 90, description: "Advanced SQL database" },
  { name: "MongoDB", category: "Database", level: 87, description: "NoSQL document database" },
  { name: "Docker", category: "DevOps", level: 85, description: "Containerization platform" },
  { name: "AWS", category: "Cloud", level: 88, description: "Cloud computing services" },
  { name: "Firebase", category: "Backend", level: 83, description: "Google's app platform" },
]

const categories = ["All", "Frontend", "Backend", "Mobile", "Database", "DevOps", "Cloud"]

export function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const filteredTechnologies = selectedCategory === "All" 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory)

  return (
    <section ref={ref} className="py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Technology Stack</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Powered by Modern</span>
            <br />
            <span className="text-foreground">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We work with cutting-edge tools and frameworks to deliver top-tier solutions that scale with your business.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card/50 border border-border/50 text-foreground hover:border-primary/50 hover:bg-primary/5"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              animate={isInView ? { 
                opacity: 1, 
                scale: 1, 
                rotateY: 0,
                transition: { 
                  delay: index * 0.05,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              } : {}}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredTech(tech.name)}
              onHoverEnd={() => setHoveredTech(null)}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              <div className="relative p-6 rounded-3xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
                {/* Skill Level Indicator */}
                <div className="absolute top-3 right-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Icon Container */}
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-primary">
                        {tech.name.charAt(0)}
                      </span>
                    </div>
                    {hoveredTech === tech.name && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                      >
                        <Sparkles className="w-3 h-3 text-primary-foreground" />
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-accent font-medium mb-2">
                      {tech.category}
                    </p>
                    
                    {/* Skill Level Bar */}
                    <div className="w-full bg-muted rounded-full h-1.5 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${tech.level}%` } : {}}
                        transition={{ delay: index * 0.05 + 0.5, duration: 1 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                    
                    <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {tech.description}
                    </p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "12+", label: "Technologies Mastered" },
              { number: "5+", label: "Years of Experience" },
              { number: "100%", label: "Modern Stack" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
