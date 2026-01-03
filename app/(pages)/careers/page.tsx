"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CareersPage() {
  const openPositions = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "We are looking for an experienced full-stack developer to join our core team.",
    },
    {
      id: 2,
      title: "Mobile App Developer (React Native)",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build cross-platform mobile applications using React Native and modern development practices.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create beautiful and intuitive user interfaces for our web and mobile applications.",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      description: "Manage and optimize our cloud infrastructure and deployment pipelines.",
    },
    {
      id: 5,
      title: "QA Automation Engineer",
      department: "Quality Assurance",
      location: "Remote",
      type: "Full-time",
      description: "Develop and maintain automated testing frameworks for our applications.",
    },
    {
      id: 6,
      title: "Technical Project Manager",
      department: "Management",
      location: "Remote",
      type: "Full-time",
      description: "Lead technical projects and coordinate between teams to deliver exceptional results.",
    },
  ]

  const values = [
    { title: "Innovation", description: "We embrace new technologies and creative solutions." },
    { title: "Collaboration", description: "Teamwork and open communication drive our success." },
    { title: "Excellence", description: "We strive for the highest quality in everything we do." },
    { title: "Growth", description: "We invest in our team's professional development." },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Join Our Team</h1>
            <p className="text-lg text-muted-foreground">
              We're hiring talented developers, designers, and innovators to help us build the future of application
              development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 rounded-xl border border-border bg-card hover:border-accent/50 transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-accent">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Open Positions</h2>
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
            {openPositions.map((position) => (
              <motion.div
                key={position.id}
                variants={itemVariants}
                className="p-6 rounded-xl border border-border bg-card hover:border-accent/50 transition-all group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {position.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">{position.description}</p>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent">{position.department}</span>
                      <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400">{position.location}</span>
                      <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400">{position.type}</span>
                    </div>
                  </div>
                  <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all whitespace-nowrap">
                    Apply Now
                  </button>
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
            <h2 className="text-3xl font-bold mb-4">Don't see a position that fits?</h2>
            <p className="text-muted-foreground mb-6">
              Send us your resume and let us know how you can contribute to JuTech Devs.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
