"use client"

import { motion } from "framer-motion"

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Cookie Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 text-muted-foreground"
          >
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit our website. They help us
                remember your preferences and understand how you use our services. Cookies can be either "persistent"
                cookies or "session" cookies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Types of Cookies We Use</h2>
              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Essential Cookies</h3>
                  <p>These cookies are necessary for the website to function properly and cannot be disabled.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Performance Cookies</h3>
                  <p>
                    These cookies help us understand how visitors interact with our website by collecting and reporting
                    information anonymously.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Functional Cookies</h3>
                  <p>These cookies enable the website to provide enhanced functionality and personalization.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Marketing Cookies</h3>
                  <p>These cookies are used to track visitors across websites to display relevant advertisements.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Cookies</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>To remember your preferences and settings</li>
                <li>To understand how you use our website</li>
                <li>To improve our website and services</li>
                <li>To provide personalized content and advertisements</li>
                <li>To analyze website traffic and usage patterns</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Managing Cookies</h2>
              <p>
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your
                computer and you can set most browsers to prevent them from being placed. However, if you do this, you
                may have to manually adjust some preferences every time you visit our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Third-Party Cookies</h2>
              <p>
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics
                of the website, deliver advertisements on and off the website, and so on.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
              <p>If you have any questions about our Cookie Policy, please contact us at cookies@jutechdevs.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
