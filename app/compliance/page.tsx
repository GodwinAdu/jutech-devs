"use client"

import { motion } from "framer-motion"

export default function CompliancePage() {
  const complianceItems = [
    {
      title: "GDPR Compliance",
      description: "We comply with the General Data Protection Regulation (GDPR) for all EU residents.",
      details: ["Data protection", "User rights", "Data processing agreements"],
    },
    {
      title: "CCPA Compliance",
      description: "We comply with the California Consumer Privacy Act (CCPA) for California residents.",
      details: ["Consumer rights", "Data disclosure", "Opt-out mechanisms"],
    },
    {
      title: "SOC 2 Certification",
      description: "Our systems are SOC 2 Type II certified for security and reliability.",
      details: ["Security controls", "Availability", "Processing integrity"],
    },
    {
      title: "ISO 27001 Certification",
      description: "We maintain ISO 27001 certification for information security management.",
      details: ["Information security", "Risk management", "Continuous improvement"],
    },
    {
      title: "HIPAA Compliance",
      description: "For healthcare clients, we provide HIPAA-compliant solutions.",
      details: ["Protected health information", "Business associate agreements", "Audit controls"],
    },
    {
      title: "PCI DSS Compliance",
      description: "Our payment processing systems comply with PCI DSS standards.",
      details: ["Payment security", "Data encryption", "Access controls"],
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Compliance & Security</h1>
            <p className="text-lg text-muted-foreground">
              JuTech Devs is committed to maintaining the highest standards of compliance and security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {complianceItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 rounded-xl border border-border bg-card hover:border-accent/50 transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-accent">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.details.map((detail, detailIdx) => (
                    <li key={detailIdx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Security Measures</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-bold mb-3 text-accent">Data Encryption</h3>
              <p className="text-muted-foreground text-sm">
                All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-bold mb-3 text-accent">Access Controls</h3>
              <p className="text-muted-foreground text-sm">
                Multi-factor authentication and role-based access control for all systems.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-bold mb-3 text-accent">Regular Audits</h3>
              <p className="text-muted-foreground text-sm">
                Quarterly security audits and penetration testing by third-party experts.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-bold mb-3 text-accent">Incident Response</h3>
              <p className="text-muted-foreground text-sm">
                24/7 monitoring and rapid incident response procedures in place.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Questions About Compliance?</h2>
            <p className="text-muted-foreground mb-6">
              Contact our compliance team for more information about our security and compliance standards.
            </p>
            <a
              href="mailto:compliance@jutechdevs.com"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Contact Compliance Team
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
