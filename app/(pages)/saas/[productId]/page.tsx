"use client"

import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { saasProducts, type SaasProductId } from "@/lib/saas-products-data"
import { useParams } from "next/navigation"

export default function SaasProductPage() {
  const params = useParams()
  const productId = params.productId as SaasProductId
  const product = saasProducts[productId]

  if (!product) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <Link href="/saas" className="text-accent hover:text-accent/80 transition-colors">
              ← Back to SaaS Products
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-6 mt-8 p-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-400">
              <span className="text-5xl">{product.icon}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{product.name}</h1>
            <p className="text-2xl text-accent mb-4">{product.tagline}</p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{product.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Powerful Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-10 bg-background/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Simple, Transparent Pricing
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-lg border transition-all ${
                  plan.highlight
                    ? "bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-accent"
                    : "bg-card border-border/50"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold text-accent mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-xl p-8 text-center"
          >
            {product.isWaitlist ? (
              <>
                <h2 className="text-3xl font-bold mb-4">Join the Waitlist</h2>
                <p className="text-muted-foreground mb-8">
                  {product.name} is coming soon! Be the first to know when we launch and get exclusive early access.
                </p>
                
                <motion.a
                  href="https://waitlist.jutech.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  Join Waitlist - Get Early Access
                </motion.a>
                
                <p className="text-sm text-muted-foreground mt-4">
                  Be notified when we launch • Exclusive beta access • Special launch pricing
                </p>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-muted-foreground mb-8">
                  Start your free trial today and experience the power of {product.name}.
                  No credit card required for the first month.
                </p>
                
                <motion.a
                  href={product.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  Start Free Trial - 1 Month Free
                </motion.a>
                
                <p className="text-sm text-muted-foreground mt-4">
                  Free for 30 days • No setup fees • Cancel anytime
                </p>
              </>
            )}
          </motion.div>

          <div className="text-center mt-8">
            <Link href="/saas" className="text-accent hover:text-accent/80 transition-colors">
              ← Back to SaaS Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
