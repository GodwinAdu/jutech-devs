"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface POSShowcaseProps {
  type: "restaurant" | "retail"
}

export function POSShowcase({ type }: POSShowcaseProps) {
  const isRestaurant = type === "restaurant"
  
  const features = isRestaurant ? [
    {
      title: "Order Management",
      description: "Streamline dine-in, takeout, and delivery orders",
      icon: "📋",
      demo: "Live order tracking with kitchen integration"
    },
    {
      title: "Kitchen Display",
      description: "Real-time order updates for kitchen staff",
      icon: "👨‍🍳",
      demo: "Color-coded order priorities and timing"
    },
    {
      title: "Table Management",
      description: "Visual table layout and reservation system",
      icon: "🪑",
      demo: "Interactive floor plan with real-time status"
    },
    {
      title: "Menu Management",
      description: "Dynamic menu updates and pricing control",
      icon: "📖",
      demo: "Instant menu modifications and seasonal items"
    }
  ] : [
    {
      title: "Smart Checkout",
      description: "Fast, secure transactions with multiple payment options",
      icon: "💳",
      demo: "Contactless payments and digital receipts"
    },
    {
      title: "Inventory Tracking",
      description: "Real-time stock levels and automated reordering",
      icon: "📦",
      demo: "Barcode scanning and low-stock alerts"
    },
    {
      title: "Customer Profiles",
      description: "Build loyalty programs and track purchase history",
      icon: "👥",
      demo: "Personalized offers and reward points"
    },
    {
      title: "Sales Analytics",
      description: "Comprehensive reporting and performance insights",
      icon: "📊",
      demo: "Real-time dashboards and trend analysis"
    }
  ]

  const screenshots = isRestaurant ? [
    {
      title: "Order Dashboard",
      description: "Manage all orders from a single interface",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Kitchen Display",
      description: "Real-time order tracking for kitchen staff",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Table Layout",
      description: "Visual table management and reservations",
      image: "/api/placeholder/600/400"
    }
  ] : [
    {
      title: "Checkout Interface",
      description: "Intuitive point-of-sale terminal",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Inventory Management",
      description: "Track stock levels and manage products",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Analytics Dashboard",
      description: "Sales insights and performance metrics",
      image: "/api/placeholder/600/400"
    }
  ]

  return (
    <div className="space-y-20">
      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {isRestaurant ? "Restaurant" : "Retail"} Features
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to run your {isRestaurant ? "restaurant" : "retail business"} efficiently
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-xl bg-card border border-border/50 hover:border-accent/50 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-3">{feature.description}</p>
                    <div className="text-sm text-accent font-medium">
                      ✨ {feature.demo}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">See It In Action</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Take a look at our intuitive interface designed for {isRestaurant ? "restaurant" : "retail"} operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-1">
                  <div className="bg-card rounded-lg p-6">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">{isRestaurant ? "🍽️" : "🛍️"}</div>
                        <div className="text-sm text-muted-foreground">Screenshot Preview</div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{screenshot.title}</h3>
                    <p className="text-sm text-muted-foreground">{screenshot.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Seamless Integrations</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Connect with your favorite tools and services
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "Stripe", icon: "💳" },
              { name: "PayPal", icon: "🅿️" },
              { name: "QuickBooks", icon: "📊" },
              { name: "Mailchimp", icon: "📧" },
              { name: "Shopify", icon: "🛒" },
              { name: "Slack", icon: "💬" }
            ].map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all"
              >
                <div className="text-3xl mb-2">{integration.icon}</div>
                <div className="text-sm font-medium">{integration.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your {isRestaurant ? "Restaurant" : "Business"}?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of {isRestaurant ? "restaurants" : "retailers"} already using our platform to streamline operations and boost profits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/saas/${isRestaurant ? "restaurant-pos" : "retail-pos"}`}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-all"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}