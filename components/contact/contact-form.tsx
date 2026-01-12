"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Mail, User, MessageSquare, Building, Phone, AlertCircle, CheckCircle } from "lucide-react"
import { generateCSRFToken } from "@/lib/csrf"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(100, "Subject must be less than 100 characters"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
  inquiryType: z.enum(["general", "development", "consultation", "support", "partnership"]),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange"
  })

  const messageLength = watch("message")?.length || 0

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
      if (response.ok) {
        const result = await response.json()
        setSubmitted(true)
        reset()
        
        // Show warning if email validation failed
        if (result.warning === 'email_validation_failed') {
          setError('Message sent, but please verify your email address. You may not receive our confirmation.')
        }
        
        setTimeout(() => {
          setSubmitted(false)
          setError(null)
        }, 5000)
      } else {
        const errorData = await response.json()
        setError(errorData.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "development", label: "Custom Development" },
    { value: "consultation", label: "Technical Consultation" },
    { value: "support", label: "Support & Maintenance" },
    { value: "partnership", label: "Partnership Opportunity" }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="bg-card border border-border/50 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-accent/10">
            <Mail className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-muted-foreground">Let's discuss your project requirements</p>
          </div>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-3"
          >
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <p className="text-red-500 text-sm">{error}</p>
          </motion.div>
        )}

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12 text-center"
          >
            <div className="p-4 rounded-full bg-green-500/10 w-fit mx-auto mb-4">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
            <p className="text-muted-foreground mb-4">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <p className="text-sm text-muted-foreground">
              Check your email for a confirmation message.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-sm font-semibold mb-2 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className={`w-full px-4 py-3 rounded-lg bg-background border transition-all ${
                    errors.name 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                      : 'border-border/50 focus:border-accent/50 focus:ring-accent/20'
                  } text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.name.message}
                  </p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-sm font-semibold mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={`w-full px-4 py-3 rounded-lg bg-background border transition-all ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                      : 'border-border/50 focus:border-accent/50 focus:ring-accent/20'
                  } text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2`}
                  placeholder="john@company.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email.message}
                  </p>
                )}
              </motion.div>
            </div>

            {/* Company and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="company" className="block text-sm font-semibold mb-2 flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  {...register("company")}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="Your Company"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="phone" className="block text-sm font-semibold mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </motion.div>
            </div>

            {/* Inquiry Type */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <label htmlFor="inquiryType" className="block text-sm font-semibold mb-2">
                Type of Inquiry *
              </label>
              <select
                id="inquiryType"
                {...register("inquiryType")}
                className={`w-full px-4 py-3 rounded-lg bg-background border transition-all ${
                  errors.inquiryType 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                    : 'border-border/50 focus:border-accent/50 focus:ring-accent/20'
                } text-foreground focus:outline-none focus:ring-2`}
              >
                <option value="">Select inquiry type</option>
                {inquiryTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              {errors.inquiryType && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.inquiryType.message}
                </p>
              )}
            </motion.div>

            {/* Subject */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                {...register("subject")}
                className={`w-full px-4 py-3 rounded-lg bg-background border transition-all ${
                  errors.subject 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                    : 'border-border/50 focus:border-accent/50 focus:ring-accent/20'
                } text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2`}
                placeholder="Brief description of your project or inquiry"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.subject.message}
                </p>
              )}
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <label htmlFor="message" className="block text-sm font-semibold mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Message *
              </label>
              <textarea
                id="message"
                {...register("message")}
                rows={6}
                className={`w-full px-4 py-3 rounded-lg bg-background border transition-all ${
                  errors.message 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                    : 'border-border/50 focus:border-accent/50 focus:ring-accent/20'
                } text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 resize-none`}
                placeholder="Please provide details about your project, timeline, specific requirements, or any questions you have..."
              />
              <div className="flex justify-between items-center mt-2">
                {errors.message ? (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message.message}
                  </p>
                ) : (
                  <div></div>
                )}
                <span className={`text-xs ${
                  messageLength > 900 ? 'text-red-500' : 
                  messageLength > 800 ? 'text-yellow-500' : 'text-muted-foreground'
                }`}>
                  {messageLength}/1000
                </span>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading || !isValid}
              className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>

            <p className="text-xs text-muted-foreground text-center">
              By submitting this form, you agree to our privacy policy. We'll never share your information.
            </p>
          </form>
        )}
      </div>
    </motion.div>
  )
}
