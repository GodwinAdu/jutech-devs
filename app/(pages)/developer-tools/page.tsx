"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { Code2, MessageSquare, Zap, BarChart3, Bell, Shield, Database } from "lucide-react"

export default function DeveloperTools() {
  const tools = [
    {
      name: "Customer Agent SDK",
      description:
        "Intelligent AI-powered customer support chat widget that integrates seamlessly into any application.",
      icon: MessageSquare,
      features: ["AI-powered responses", "Multi-language support", "Custom branding", "Analytics dashboard"],
      category: "Communication",
      docsLink: "/documentation/customer-agent",
      pricing: "Free tier available",
    },
    {
      name: "Auth Shield",
      description:
        "Complete authentication and authorization solution with OAuth, SSO, and multi-factor authentication.",
      icon: Shield,
      features: ["OAuth 2.0", "Social login", "2FA/MFA", "Role-based access control"],
      category: "Security",
      docsLink: "/documentation/auth-shield",
      pricing: "Coming soon",
    },
    {
      name: "Universal AI SDK",
      description:
        "Unified SDK for interacting with ALL major AI providers including OpenAI, Anthropic, Google, Groq, and more.",
      icon: BarChart3,
      features: ["42+ AI models", "React hooks", "Streaming support", "Multi-provider"],
      category: "AI/ML",
      docsLink: "/documentation/universal-ai",
      pricing: "Free & open source",
    },
    {
      name: "React Hooks Collection",
      description:
        "Ultimate collection of 42 production-ready React hooks for modern web development.",
      icon: Code2,
      features: ["42 hooks", "TypeScript", "Zero dependencies", "Tree shakeable"],
      category: "React",
      docsLink: "/documentation/react-hooks",
      pricing: "Free open source",
    },
    {
      name: "Quantum Query SDK",
      description:
        "Revolutionary React Query replacement with 10x faster performance, AI optimization, and quantum-inspired features.",
      icon: Zap,
      features: ["10x faster execution", "AI optimization", "Real-time sync", "100% React Query compatible"],
      category: "Performance",
      docsLink: "/documentation/quantum-query",
      pricing: "Free open source",
    },
    {
      name: "API Rate Limiter",
      description: "Advanced API rate limiting SDK with multiple strategies and React hooks support.",
      icon: Database,
      features: ["Multiple strategies", "React hooks", "Batch processing", "Multi-API support"],
      category: "Performance",
      docsLink: "/documentation/rate-limiter",
      pricing: "Free open source",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Code2 className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Public APIs & SDKs</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Developer Tools</span>
              <br />
              for Every Application
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Integrate powerful, production-ready features into your applications with our easy-to-use SDKs and APIs.
              Built by developers, for developers.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/documentation"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                View Documentation
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready-to-Integrate Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our collection of battle-tested tools and integrate them into your application in minutes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-background rounded-xl border border-border p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:scale-110 transition-transform">
                    <tool.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-medium text-accent">{tool.category}</span>
                    <h3 className="text-xl font-bold mt-1">{tool.name}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{tool.description}</p>

                <div className="space-y-2 mb-4">
                  {tool.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-medium text-accent">{tool.pricing}</span>
                  <Link href={tool.docsLink} className="text-sm font-medium text-accent hover:underline">
                    View Docs →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-accent/20 rounded-2xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Integration</h2>
                <p className="text-muted-foreground mb-6">
                  Get started in minutes with our comprehensive SDKs supporting JavaScript, Python, PHP, Ruby, and more.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent text-sm">✓</span>
                    </div>
                    <span>Install via NPM, pip, or composer</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent text-sm">✓</span>
                    </div>
                    <span>Comprehensive documentation and guides</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent text-sm">✓</span>
                    </div>
                    <span>24/7 developer support</span>
                  </li>
                </ul>
                <Link
                  href="/documentation"
                  className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  Get Started
                </Link>
              </div>

              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="text-sm text-muted-foreground mb-2">JavaScript</div>
                <pre className="bg-card p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm text-accent">
                    {`// Install Quantum Query SDK
npm install quantum-query

// Drop-in React Query replacement
import { QuantumQueryClient, useQuery } from 'quantum-query'

const client = new QuantumQueryClient()

// 10x faster with quantum features
const { data } = useQuery({
  queryKey: ['user', id],
  queryFn: fetchUser,
  quantum: { enabled: true }
})`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Integration?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We can build custom tools and APIs tailored specifically for your needs.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
