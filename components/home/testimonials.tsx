"use client"

import { motion } from "framer-motion"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content:
        "JuTech Devs transformed our vision into reality. Their team's expertise and dedication were exceptional.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Digital Solutions Ltd.",
      role: "Product Manager",
      content:
        "The support and maintenance services have been invaluable. Our app runs flawlessly with their team behind it.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      company: "Innovation Labs",
      role: "Founder",
      content: "From concept to launch, JuTech Devs delivered beyond expectations. Highly recommended!",
      rating: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by leading companies to deliver exceptional results
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 rounded-xl bg-background border border-border/50 hover:border-accent/50 transition-all"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-accent">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>

              {/* Author */}
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
