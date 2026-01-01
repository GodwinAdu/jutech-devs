"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { ScrollingAnnouncement } from "./scrolling-announcement"
import { useAuth } from "@/lib/auth-context"
import { UserMenu } from "./auth-modal"
import { Button } from "./ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, loading } = useAuth()

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Learn", href: "/academy" },
    { label: "Search", href: "/search" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <>
      <ScrollingAnnouncement />
      <nav className="fixed top-8 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold gradient-text"
              >
                JuTech
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Auth Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden md:flex items-center gap-3"
            >
              {loading ? (
                <div className="w-8 h-8 rounded-full bg-muted animate-pulse" />
              ) : user ? (
                <UserMenu />
              ) : (
                <div className="flex items-center gap-2">
                  <Button variant="ghost" asChild>
                    <Link href="/login">Sign In</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/register">Get Started</Link>
                  </Button>
                </div>
              )}
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-card transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden pb-4 space-y-2"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 rounded-lg hover:bg-card transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Auth */}
              <div className="px-4 py-2 space-y-2">
                {user ? (
                  <UserMenu />
                ) : (
                  <div className="space-y-2">
                    <Button 
                      variant="ghost"
                      className="w-full"
                      asChild
                    >
                      <Link href="/login" onClick={() => setIsOpen(false)}>Sign In</Link>
                    </Button>
                    <Button 
                      className="w-full"
                      asChild
                    >
                      <Link href="/register" onClick={() => setIsOpen(false)}>Get Started</Link>
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  )
}