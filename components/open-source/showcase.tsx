"use client"

import { motion } from "framer-motion"
import { Github, Star, GitFork, ExternalLink, Code, Users, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  name: string
  description: string
  longDescription: string
  language: string
  stars: number
  forks: number
  downloads: number
  githubUrl: string
  demoUrl?: string
  category: string
  tags: string[]
  status: "Active" | "Maintained" | "Archived" | "Coming Soon"
}

const projects: Project[] = [
  {
    id: 1,
    name: "Next.js Auth Template",
    description: "Production-ready Next.js template with complete authentication system",
    longDescription: "Enterprise-grade Next.js template featuring NextAuth.js, session management, 2FA, role-based access control, email verification, password reset, and security best practices. Ready for production deployment with MongoDB integration and modern UI components.",
    language: "TypeScript",
    stars: 127,
    forks: 34,
    downloads: 2847,
    githubUrl: "https://github.com/jutech-devs/nextjs-auth-template.git",
    demoUrl: "https://auth-template.vercel.app",
    category: "Template",
    tags: ["Next.js", "Authentication", "2FA", "Security", "Template", "MongoDB", "TypeScript"],
    status: "Active"
  }
]

export function OpenSourceShowcase() {
  const getLanguageColor = (language: string) => {
    const colors = {
      TypeScript: "bg-blue-500",
      JavaScript: "bg-yellow-500",
      Python: "bg-green-500",
      Java: "bg-red-500",
      Go: "bg-cyan-500",
      Rust: "bg-orange-500"
    }
    return colors[language as keyof typeof colors] || "bg-gray-500"
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "text-green-500 bg-green-500/10"
      case "Maintained": return "text-blue-500 bg-blue-500/10"
      case "Archived": return "text-gray-500 bg-gray-500/10"
      case "Coming Soon": return "text-orange-500 bg-orange-500/10"
      default: return "text-primary bg-primary/10"
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Code className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Open Source</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
          Open Source Projects
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explore our collection of open source tools, libraries, and applications. 
          Built with modern technologies and available for the community.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
      >
        <div className="text-center p-6 rounded-xl bg-card border border-border/50">
          <div className="text-3xl font-bold gradient-text mb-2">{projects.length}</div>
          <div className="text-sm text-muted-foreground">Projects</div>
        </div>
        <div className="text-center p-6 rounded-xl bg-card border border-border/50">
          <div className="text-3xl font-bold gradient-text mb-2">
            {projects.reduce((acc, p) => acc + p.stars, 0)}
          </div>
          <div className="text-sm text-muted-foreground">GitHub Stars</div>
        </div>
        <div className="text-center p-6 rounded-xl bg-card border border-border/50">
          <div className="text-3xl font-bold gradient-text mb-2">
            {projects.reduce((acc, p) => acc + p.forks, 0)}
          </div>
          <div className="text-sm text-muted-foreground">Forks</div>
        </div>
        <div className="text-center p-6 rounded-xl bg-card border border-border/50">
          <div className="text-3xl font-bold gradient-text mb-2">
            {projects.reduce((acc, p) => acc + p.downloads, 0)}
          </div>
          <div className="text-sm text-muted-foreground">Downloads</div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="flex justify-center">
        <div className="max-w-2xl w-full">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="group"
            >
            <div className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 h-full flex flex-col">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Language and Category */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`} />
                  <span className="text-sm text-muted-foreground">{project.language}</span>
                </div>
                <span className="px-2 py-1 rounded-lg bg-accent/10 text-accent text-xs font-medium">
                  {project.category}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-lg bg-muted text-muted-foreground text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  <span>{project.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="w-4 h-4" />
                  <span>{project.forks}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Download className="w-4 h-4" />
                  <span>{project.downloads}</span>
                </div>
              </div>

              {/* Long Description */}
              <p className="text-sm text-muted-foreground mb-6 flex-1">
                {project.longDescription}
              </p>

              {/* Actions */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 gap-2"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="w-4 h-4" />
                  View Code
                </Button>
                {project.demoUrl && (
                  <Button
                    className="flex-1 gap-2"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contribution CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-20 text-center p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
      >
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
              <Users className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Contribute to Open Source</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Join our community of developers and contribute to these projects. 
            Whether it's bug fixes, new features, or documentation improvements, 
            every contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gap-2"
              onClick={() => window.open('https://github.com/jutech', '_blank')}
            >
              <Github className="w-5 h-5" />
              View All Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Contribution Guide
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}