"use client"

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Users, Code, Award, Clock, TrendingUp } from "lucide-react"
import { useEffect, useRef } from "react"

function AnimatedCounter({ value, duration = 2 }: { value: string; duration?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const displayValue = useTransform(springValue, (latest) => {
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''))
    return Math.round(latest).toString() + value.replace(/[0-9.]/g, '')
  })

  useEffect(() => {
    if (isInView) {
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''))
      motionValue.set(numericValue)
    }
  }, [isInView, value, motionValue])

  return <motion.span ref={ref}>{displayValue}</motion.span>
}

const stats = [
  {
    icon: Code,
    value: "500+",
    label: "Projects Completed",
    description: "Successful deliveries",
    color: "from-primary to-accent",
  },
  {
    icon: Users,
    value: "200+",
    label: "Happy Clients",
    description: "Worldwide",
    color: "from-accent to-primary",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "Industry expertise",
    color: "from-primary to-accent",
  },
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "Success Rate",
    description: "Client satisfaction",
    color: "from-accent to-primary",
  },
]

export function StatsMetrics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Impact</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Trusted by Businesses</span>
            <br />
            <span className="text-foreground">Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our track record speaks for itself. We deliver excellence consistently across all projects and partnerships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: { 
                  delay: index * 0.1,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              } : {}}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              <div className="relative p-8 rounded-3xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} p-0.5`}>
                    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-3">
                    <span className="gradient-text">
                      <AnimatedCounter value={stat.value} />
                    </span>
                  </div>
                  <div className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {stat.description}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to become our next success story?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25"
            >
              Start Your Project
              <div className="p-1 rounded-full bg-primary-foreground/20">
                <Code className="w-4 h-4" />
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
