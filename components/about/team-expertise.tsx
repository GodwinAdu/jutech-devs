"use client"

import { motion } from "framer-motion"

export function TeamExpertise() {
  const expertise = [
    {
      category: "Web Development",
      skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Node.js"],
    },
    {
      category: "Mobile Development",
      skills: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "App Store Optimization"],
    },
    {
      category: "Desktop Applications",
      skills: ["Electron", "Tauri", "C#", ".NET", "Python", "Cross-platform Development"],
    },
    {
      category: "Backend & Infrastructure",
      skills: ["PostgreSQL", "MongoDB", "AWS", "Docker", "Kubernetes", "GraphQL"],
    },
    {
      category: "DevOps & Deployment",
      skills: ["CI/CD", "GitHub Actions", "Vercel", "Heroku", "Linux", "Monitoring"],
    },
    {
      category: "App Management",
      skills: ["Performance Optimization", "Security Audits", "Maintenance", "Scaling", "Support"],
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive range of skills and technologies to bring your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all"
            >
              <h3 className="text-lg font-bold mb-4 gradient-text">{item.category}</h3>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
