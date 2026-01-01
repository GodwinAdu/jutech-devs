"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    {
      name: "David Park",
      company: "FinTech Solutions",
      role: "CTO",
      content: "Outstanding technical expertise and project management. They delivered our complex platform on time and within budget.",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      company: "E-commerce Plus",
      role: "Marketing Director",
      content: "The mobile app they built increased our customer engagement by 300%. Incredible results!",
      rating: 5,
    },
    {
      name: "James Wilson",
      company: "Healthcare Innovations",
      role: "VP of Technology",
      content: "Their AI integration transformed our patient management system. Professional and innovative team.",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= testimonials.length ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, testimonials.length - itemsPerView) : prev - 1
    )
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [itemsPerView])

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

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-xl bg-background border border-border/50 hover:border-accent/50 transition-all h-full"
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
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background/80 backdrop-blur-sm"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background/80 backdrop-blur-sm"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(testimonials.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(currentIndex / itemsPerView) === index
                    ? 'bg-accent'
                    : 'bg-muted-foreground/30'
                }`}
                onClick={() => setCurrentIndex(index * itemsPerView)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
