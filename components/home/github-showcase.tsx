"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Star, GitFork, Download } from "lucide-react"

export function GitHubShowcase() {
  const repos = [
    {
      name: "quantum-query",
      description: "10x faster React Query replacement with AI optimization",
      stars: "2.1k",
      forks: "156",
      downloads: "45k/month",
      language: "TypeScript",
      url: "https://github.com/jutech/quantum-query"
    },
    {
      name: "universal-ai-sdk",
      description: "Unified SDK for 42+ AI providers",
      stars: "1.8k",
      forks: "203",
      downloads: "32k/month",
      language: "TypeScript",
      url: "https://github.com/jutech/universal-ai-sdk"
    },
    {
      name: "react-hooks-collection",
      description: "42 production-ready React hooks",
      stars: "3.2k",
      forks: "287",
      downloads: "78k/month",
      language: "TypeScript",
      url: "https://github.com/jutech/react-hooks-collection"
    }
  ]

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Github className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Open Source</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="gradient-text">50,000+</span> Developers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our open-source tools are used by developers worldwide. Join the community and contribute to the future of development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl border border-border p-6 hover:border-accent/50 transition-all hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold mb-2">{repo.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{repo.description}</p>
                </div>
                <Github className="w-5 h-5 text-muted-foreground" />
              </div>

              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  <span>{repo.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="w-4 h-4" />
                  <span>{repo.forks}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Download className="w-4 h-4" />
                  <span>{repo.downloads}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
                  {repo.language}
                </span>
                <Link 
                  href={repo.url}
                  className="text-sm font-medium text-accent hover:underline"
                  target="_blank"
                >
                  View on GitHub →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/open-source"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}