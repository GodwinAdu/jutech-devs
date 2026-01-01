"use client"

import { motion } from "framer-motion"

export function ContactInfo() {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      description: "Send us an email anytime",
      value: "jutechdevs@gmail.com",
      link: "mailto:jutechdevs@gmail.com",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      description: "Chat with us on WhatsApp",
      value: "+233 551 556 650",
      link: "https://wa.me/233551556650",
    },
    {
      icon: "📞",
      title: "Phone",
      description: "Call us during business hours",
      value: "+233 551 556 650",
      link: "tel:+233551556650",
    },
    {
      icon: "📍",
      title: "Office",
      description: "Visit us in person",
      value: "Suame Kumasi, Ghana",
      link: "#",
    },
  ]

  const socialLinks = [
    { name: "Twitter", url: "#", icon: "𝕏" },
    { name: "LinkedIn", url: "#", icon: "in" },
    { name: "GitHub", url: "#", icon: "⚙️" },
    { name: "Instagram", url: "#", icon: "📷" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Contact Methods */}
      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <motion.a
            key={index}
            href={method.link}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ x: 10 }}
            className="block p-6 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all group"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">{method.icon}</span>
              <div className="flex-1">
                <h3 className="font-semibold mb-1 group-hover:gradient-text transition-all">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                <p className="text-accent font-semibold text-sm">{method.value}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="p-6 rounded-lg bg-card border border-border/50"
      >
        <h3 className="font-semibold mb-4">Follow Us</h3>
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-lg bg-background border border-border/50 hover:border-accent/50 flex items-center justify-center text-lg font-semibold hover:text-accent transition-colors"
              title={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Quick Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="p-6 rounded-lg bg-primary/5 border border-primary/30"
      >
        <h3 className="font-semibold mb-3">Response Time</h3>
        <p className="text-sm text-muted-foreground mb-3">
          We typically respond to inquiries within 24 hours during business days.
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-semibold">Available for new projects</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
