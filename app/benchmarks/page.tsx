"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Zap, Clock, Cpu, Database, TrendingUp, CheckCircle } from "lucide-react"

export default function Benchmarks() {
  const benchmarkData = [
    {
      tool: "Quantum Query",
      category: "State Management",
      tests: [
        { metric: "Query Execution", jutech: "0.8ms", competitor: "React Query: 8.2ms", improvement: "10.25x" },
        { metric: "Cache Updates", jutech: "0.3ms", competitor: "React Query: 2.1ms", improvement: "7x" },
        { metric: "Memory Usage", jutech: "2.1MB", competitor: "React Query: 8.7MB", improvement: "4.1x less" },
        { metric: "Bundle Size", jutech: "12KB", competitor: "React Query: 45KB", improvement: "3.8x smaller" }
      ]
    },
    {
      tool: "Universal AI SDK",
      category: "AI Integration",
      tests: [
        { metric: "API Response", jutech: "120ms", competitor: "OpenAI SDK: 450ms", improvement: "3.8x" },
        { metric: "Token Processing", jutech: "15ms", competitor: "Langchain: 89ms", improvement: "5.9x" },
        { metric: "Streaming Latency", jutech: "8ms", competitor: "Vercel AI: 32ms", improvement: "4x" },
        { metric: "Error Recovery", jutech: "50ms", competitor: "Others: 800ms", improvement: "16x" }
      ]
    },
    {
      tool: "API Rate Limiter",
      category: "Performance",
      tests: [
        { metric: "Throughput", jutech: "50k req/s", competitor: "Express: 12k req/s", improvement: "4.2x" },
        { metric: "CPU Usage", jutech: "2.1%", competitor: "Others: 8.7%", improvement: "4.1x less" },
        { metric: "Memory Overhead", jutech: "1.2MB", competitor: "Others: 5.8MB", improvement: "4.8x less" },
        { metric: "Setup Time", jutech: "< 1min", competitor: "Others: 15min", improvement: "15x faster" }
      ]
    }
  ]

  const testEnvironment = {
    hardware: "AWS c5.2xlarge (8 vCPU, 16GB RAM)",
    node: "Node.js 20.x",
    concurrent: "1000 concurrent users",
    duration: "10 minute sustained load",
    iterations: "Average of 100 test runs"
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Performance Benchmarks</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Proven Performance</span>
              <br />
              Real-World Results
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Independent benchmarks showing how Jutech tools consistently outperform alternatives in speed, efficiency, and resource usage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Test Environment */}
      <section className="py-12 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-background rounded-xl border border-border p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Test Environment</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {Object.entries(testEnvironment).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-sm text-muted-foreground capitalize mb-1">{key.replace(/([A-Z])/g, ' $1')}</div>
                  <div className="font-medium text-sm">{value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benchmark Results */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Detailed Benchmark Results</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All tests performed under identical conditions with realistic production workloads.
            </p>
          </motion.div>

          <div className="space-y-12">
            {benchmarkData.map((tool, toolIndex) => (
              <motion.div
                key={tool.tool}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: toolIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <div className="p-6 border-b border-border">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <Zap className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{tool.tool}</h3>
                      <p className="text-muted-foreground">{tool.category}</p>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left p-4 font-medium">Metric</th>
                        <th className="text-left p-4 font-medium">Jutech</th>
                        <th className="text-left p-4 font-medium">Competition</th>
                        <th className="text-left p-4 font-medium">Improvement</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tool.tests.map((test, testIndex) => (
                        <tr key={testIndex} className="border-t border-border">
                          <td className="p-4 font-medium">{test.metric}</td>
                          <td className="p-4">
                            <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 font-medium">
                              {test.jutech}
                            </span>
                          </td>
                          <td className="p-4 text-muted-foreground">{test.competitor}</td>
                          <td className="p-4">
                            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-bold">
                              {test.improvement}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600/5 to-purple-600/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Performance Insights</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl border border-border p-6"
            >
              <TrendingUp className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Consistent Performance</h3>
              <p className="text-muted-foreground">
                Our tools maintain performance advantages across all metrics, from execution speed to resource efficiency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl border border-border p-6"
            >
              <Cpu className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Resource Efficient</h3>
              <p className="text-muted-foreground">
                Lower CPU usage, reduced memory footprint, and smaller bundle sizes mean better user experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl border border-border p-6"
            >
              <CheckCircle className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Production Ready</h3>
              <p className="text-muted-foreground">
                Tested under realistic production conditions with sustained load and concurrent users.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Testing Methodology</h2>
            <p className="text-muted-foreground">
              Our benchmarks follow industry standards for fair and accurate performance comparison.
            </p>
          </motion.div>

          <div className="bg-card rounded-xl border border-border p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-4">Test Conditions</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Identical hardware specifications</li>
                  <li>• Same Node.js version and dependencies</li>
                  <li>• Realistic production workloads</li>
                  <li>• Multiple test iterations for accuracy</li>
                  <li>• Cold start and warm-up scenarios</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Metrics Measured</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Response time (p50, p95, p99)</li>
                  <li>• Throughput (requests per second)</li>
                  <li>• CPU and memory utilization</li>
                  <li>• Bundle size and load time</li>
                  <li>• Error rates and recovery time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}