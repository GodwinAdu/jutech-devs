"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
      { label: "SaaS", href: "/saas" },
      { label: "Mobile Apps", href: "/mobile-apps" },
      { label: "Developer Tools", href: "/developer-tools" },
      { label: "Playground", href: "/playground" }, // Added Playground link to footer
      { label: "Support", href: "/contact" },
    ],
    Company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
    Resources: [
      { label: "Documentation", href: "/documentation" },
      { label: "API Reference", href: "/api-reference" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Community", href: "/community" }, // Added Community link
      { label: "Academy", href: "/academy" }, // Added Academy link
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Compliance", href: "/compliance" },
    ],
    Connect: [
      { label: "Email", href: "mailto:hello@jutechdevs.com" },
      { label: "WhatsApp", href: "https://wa.me/1234567890" },
      { label: "Phone", href: "tel:+1234567890" },
      { label: "Office", href: "/office-location" },
    ],
  }

  const socialLinks = [
    { label: "Twitter", href: "https://twitter.com", icon: "𝕏" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
    { label: "GitHub", href: "https://github.com", icon: "⚙" },
    { label: "Instagram", href: "https://instagram.com", icon: "📷" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold gradient-text mb-3">JuTech Devs</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Building smart applications for every platform. Web, mobile, desktop, and beyond.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-accent/10 hover:bg-accent/20 flex items-center justify-center text-accent transition-all hover:scale-110"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4 text-foreground">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 p-8 rounded-xl bg-primary/5 border border-primary/20"
        >
          <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
          <p className="text-muted-foreground mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:border-accent outline-none transition-colors"
            />
            <button className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} JuTech Devs. All rights reserved. | Crafted with innovation and expertise.
          </p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Privacy
            </a>
            <a href="/terms-of-service" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Sitemap
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
