"use client"

import { motion } from "framer-motion"
import { Zap, TrendingUp, Clock, Cpu } from "lucide-react"

export function PerformanceBenchmarks() {
  const benchmarks = [
    {
      tool: "Quantum Query",
      metric: "Query Execution",
      jutechValue: "0.8ms",
      competitorValue: "8.2ms",
      improvement: "10x faster",
      icon: Zap
    },
    {
      tool: "Universal AI SDK",
      metric: "API Response Time",
      jutechValue: "120ms",
      competitorValue: "450ms",
      improvement: "3.8x faster",
      icon: Clock
    },
    {
      tool: "Rate Limiter",
      metric: "Throughput",
      jutechValue: "50k req/s",
      competitorValue: "12k req/s",
      improvement: "4x higher",
      icon: TrendingUp
    },
    {
      tool: "Auth Shield",
      metric: "CPU Usage",
      jutechValue: "2.1%",
      competitorValue: "8.7%",
      improvement: "4x efficient",
      icon: Cpu
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600/5 to-purple-600/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Performance</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for <span className="gradient-text">Performance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our tools consistently outperform alternatives. Here's how we stack up against the competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benchmarks.map((benchmark, index) => (
            <motion.div
              key={benchmark.tool}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl border border-border p-6 hover:border-accent/50 transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <benchmark.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">{benchmark.tool}</h3>
                  <p className="text-xs text-muted-foreground">{benchmark.metric}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Jutech</span>
                  <span className="font-bold text-accent">{benchmark.jutechValue}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Others</span>
                  <span className="font-medium text-muted-foreground">{benchmark.competitorValue}</span>
                </div>

                <div className="pt-3 border-t border-border">
                  <div className="text-center">
                    <span className="text-lg font-bold text-green-500">{benchmark.improvement}</span>
                    <p className="text-xs text-muted-foreground">improvement</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground mb-4">
            * Benchmarks run on identical hardware with realistic production workloads
          </p>
          <a
            href="/benchmarks"
            className="inline-block px-6 py-2 rounded-lg border border-accent text-accent font-medium hover:bg-accent/10 transition-all"
          >
            View Detailed Benchmarks
          </a>
        </motion.div>
      </div>
    </section>
  )
}