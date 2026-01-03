"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Transformation",
      client: "RetailCo Inc.",
      challenge: "Legacy system unable to handle peak traffic during sales events",
      solution: "Rebuilt platform using modern web technologies with cloud infrastructure",
      result: "300% increase in transaction capacity, 45% reduction in load times",
      industry: "Retail",
    },
    {
      id: 2,
      title: "Mobile Banking App Launch",
      client: "FinanceHub Bank",
      challenge: "Need for secure, user-friendly mobile banking solution",
      solution: "Developed cross-platform mobile app with advanced security features",
      result: "500K+ downloads, 4.8-star rating, 99.9% uptime",
      industry: "Finance",
    },
    {
      id: 3,
      title: "Enterprise Desktop Application",
      client: "ManufactureCo Ltd.",
      challenge: "Complex workflow management across multiple departments",
      solution: "Built custom desktop application with real-time collaboration",
      result: "40% efficiency improvement, $2M annual savings",
      industry: "Manufacturing",
    },
    {
      id: 4,
      title: "SaaS Platform Migration",
      client: "CloudServices Pro",
      challenge: "Migrate from monolithic to microservices architecture",
      solution: "Architected and implemented microservices with Kubernetes",
      result: "60% cost reduction, improved scalability and reliability",
      industry: "Technology",
    },
  ]

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Case Studies</h1>
            <p className="text-lg text-muted-foreground">
              Real-world examples of how JuTech Devs has helped businesses transform through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                variants={itemVariants}
                className="p-8 rounded-xl border border-border bg-card hover:border-accent/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                    <p className="text-muted-foreground">{study.client}</p>
                  </div>
                  <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold whitespace-nowrap">
                    {study.industry}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Challenge</h4>
                    <p className="text-muted-foreground text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Solution</h4>
                    <p className="text-muted-foreground text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Result</h4>
                    <p className="text-muted-foreground text-sm">{study.result}</p>
                  </div>
                </div>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground mb-6">Let's discuss how JuTech Devs can help you achieve your goals.</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
