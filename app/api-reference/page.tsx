"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function ApiReferencePage() {
  const apiEndpoints = [
    {
      method: "GET",
      endpoint: "/api/projects",
      description: "Retrieve all projects",
      params: ["limit", "offset", "category"],
    },
    {
      method: "POST",
      endpoint: "/api/projects",
      description: "Create a new project",
      params: ["name", "description", "category"],
    },
    {
      method: "GET",
      endpoint: "/api/projects/:id",
      description: "Get a specific project",
      params: ["id"],
    },
    {
      method: "PUT",
      endpoint: "/api/projects/:id",
      description: "Update a project",
      params: ["id", "name", "description"],
    },
    {
      method: "DELETE",
      endpoint: "/api/projects/:id",
      description: "Delete a project",
      params: ["id"],
    },
    {
      method: "GET",
      endpoint: "/api/services",
      description: "Retrieve all services",
      params: ["type", "limit"],
    },
  ]

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET":
        return "bg-blue-500/10 text-blue-400"
      case "POST":
        return "bg-green-500/10 text-green-400"
      case "PUT":
        return "bg-yellow-500/10 text-yellow-400"
      case "DELETE":
        return "bg-red-500/10 text-red-400"
      default:
        return "bg-gray-500/10 text-gray-400"
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">API Reference</h1>
            <p className="text-lg text-muted-foreground">
              Complete API documentation for integrating with JuTech Devs services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Authentication Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Authentication</h2>
          <div className="p-6 rounded-xl border border-border bg-card">
            <p className="text-muted-foreground mb-4">
              All API requests require authentication using an API key. Include your API key in the request header:
            </p>
            <div className="bg-background p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <code className="text-accent">Authorization: Bearer YOUR_API_KEY</code>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Endpoints</h2>
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
            {apiEndpoints.map((endpoint, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 rounded-xl border border-border bg-card hover:border-accent/50 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className={`px-3 py-1 rounded font-semibold text-sm ${getMethodColor(endpoint.method)}`}>
                    {endpoint.method}
                  </span>
                  <code className="flex-1 text-accent font-mono">{endpoint.endpoint}</code>
                </div>
                <p className="text-muted-foreground mb-3">{endpoint.description}</p>
                {endpoint.params.length > 0 && (
                  <div className="text-sm">
                    <span className="text-foreground font-semibold">Parameters: </span>
                    <span className="text-muted-foreground">{endpoint.params.join(", ")}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Integrate?</h2>
            <p className="text-muted-foreground mb-6">Get your API key and start building with JuTech Devs.</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Get API Key
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
