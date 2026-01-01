"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { saasProducts } from "@/lib/saas-products-data"

export function SaaSProducts() {
  const products = Object.values(saasProducts).map((product) => ({
    ...product,
    color: "from-primary to-accent",
    href: `/saas/${product.id}`,
  }))

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect tool for your team's needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group rounded-xl overflow-hidden bg-card border border-border/50 hover:border-accent/50 transition-all"
            >
              {/* Header with product image */}
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-4 left-4">
                  <span className="text-3xl bg-white/90 p-2 rounded-lg shadow-sm">{product.icon}</span>
                </div>
                {product.isWaitlist && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                <p className="text-accent text-sm font-semibold mb-4">{product.tagline}</p>
                <p className="text-muted-foreground text-sm mb-6">{product.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {product.features.slice(0, 6).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature.title}
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  {product.isWaitlist ? (
                    <>
                      <a
                        href="https://waitlist.jutech.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 transition-all text-center"
                      >
                        Join Waitlist
                      </a>
                      <Link
                        href={product.href}
                        className="flex-1 px-4 py-2 rounded-lg border border-accent text-accent text-sm font-semibold hover:bg-accent/10 transition-all text-center"
                      >
                        Learn More
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        href={product.href}
                        className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all text-center"
                      >
                        Try Now
                      </Link>
                     
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
