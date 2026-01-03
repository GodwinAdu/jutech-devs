"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function OfficeLocationPage() {
  const offices = [
    {
      city: "San Francisco",
      country: "USA",
      address: "123 Tech Street, San Francisco, CA 94105",
      phone: "+1 (415) 555-0123",
      email: "sf@jutechdevs.com",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM PST",
    },
    {
      city: "London",
      country: "UK",
      address: "456 Innovation Lane, London, UK EC1A 1BB",
      phone: "+44 (20) 7946 0958",
      email: "london@jutechdevs.com",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM GMT",
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "789 Digital Hub, Singapore 018956",
      phone: "+65 6511 1234",
      email: "singapore@jutechdevs.com",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM SGT",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Our Offices</h1>
            <p className="text-lg text-muted-foreground">
              Visit us at any of our global offices. We're here to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {offices.map((office, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-8 rounded-xl border border-border bg-card hover:border-accent/50 transition-all"
              >
                <h3 className="text-2xl font-bold mb-1 text-accent">{office.city}</h3>
                <p className="text-muted-foreground mb-6">{office.country}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground text-sm">{office.address}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a
                      href={`tel:${office.phone}`}
                      className="text-accent hover:text-accent/80 transition-colors text-sm"
                    >
                      {office.phone}
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a
                      href={`mailto:${office.email}`}
                      className="text-accent hover:text-accent/80 transition-colors text-sm"
                    >
                      {office.email}
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Hours</h4>
                    <p className="text-muted-foreground text-sm">{office.hours}</p>
                  </div>

                  <button className="w-full mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                    Get Directions
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
            <h2 className="text-3xl font-bold mb-4">Schedule a Meeting</h2>
            <p className="text-muted-foreground mb-6">
              Want to meet with our team? Schedule a meeting at any of our offices.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Schedule a Meeting
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
