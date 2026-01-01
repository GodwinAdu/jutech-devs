"use client"

import { motion } from "framer-motion"
import { Code2, Play, Terminal, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PlaygroundPreview() {
  const features = [
    {
      icon: Code2,
      title: "Multiple Languages",
      description: "JavaScript, Python, cURL, React and more",
    },
    {
      icon: Play,
      title: "Instant Execution",
      description: "Run code and see results in real-time",
    },
    {
      icon: Terminal,
      title: "Live Editor",
      description: "Full-featured code editor in your browser",
    },
    {
      icon: Zap,
      title: "Pre-built Examples",
      description: "Start with ready-to-use code snippets",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Interactive Playground</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Test Our APIs Live
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Try our SDKs and APIs directly in your browser. No installation, no setup—just code and run.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all"
              >
                <feature.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Code Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg overflow-hidden"
          >
            <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="ml-2 text-sm text-muted-foreground">playground.js</span>
            </div>
            <div className="p-6 bg-background font-mono text-sm">
              <pre className="text-foreground">
                <code>{`import { CustomerAgent } from '@jutech/sdk';

const agent = new CustomerAgent({
  apiKey: 'your_api_key',
});

const response = await agent.chat({
  message: 'Hello, I need help'
});

console.log(response.message);
// "Hello! How can I assist you today?"`}</code>
              </pre>
            </div>
            <div className="p-4 bg-muted/50 border-t border-border">
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/playground">
                  <Play className="w-4 h-4 mr-2" />
                  Try in Playground
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Experiment with all our APIs and see the power of JuTech Devs SDKs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" size="lg">
              <Link href="/documentation">View Documentation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/api-reference">API Reference</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
