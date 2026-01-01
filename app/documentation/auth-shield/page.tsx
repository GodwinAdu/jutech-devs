"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Shield, Clock } from "lucide-react"

export default function AuthShieldDocs() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link href="/documentation" className="inline-flex items-center gap-2 text-accent hover:underline mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Documentation
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Auth Shield</h1>
                <p className="text-muted-foreground">Complete authentication and authorization solution</p>
              </div>
            </div>
          </motion.div>

          <div className="text-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto"
            >
              <div className="p-6 rounded-full bg-orange-500/10 border border-orange-500/20 w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                <Clock className="w-12 h-12 text-orange-500" />
              </div>
              
              <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Auth Shield is currently under development. We're building a comprehensive authentication 
                and authorization solution with enterprise-grade security features.
              </p>

              <div className="bg-card p-8 rounded-xl border border-border mb-8">
                <h3 className="text-2xl font-bold mb-6">Planned Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">🔐 Authentication</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• OAuth 2.0 & OpenID Connect</li>
                      <li>• Social login (Google, GitHub, etc.)</li>
                      <li>• Multi-factor authentication (2FA/MFA)</li>
                      <li>• Passwordless authentication</li>
                      <li>• Biometric authentication</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">🛡️ Authorization</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Role-based access control (RBAC)</li>
                      <li>• Attribute-based access control (ABAC)</li>
                      <li>• Fine-grained permissions</li>
                      <li>• Resource-level security</li>
                      <li>• Dynamic policy evaluation</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">🔒 Security</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• JWT token management</li>
                      <li>• Session security</li>
                      <li>• Rate limiting & DDoS protection</li>
                      <li>• Audit logging</li>
                      <li>• Compliance (SOC 2, GDPR)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">⚡ Developer Experience</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• React hooks & components</li>
                      <li>• Next.js integration</li>
                      <li>• TypeScript support</li>
                      <li>• Comprehensive documentation</li>
                      <li>• Easy migration tools</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-accent/20 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Get Notified</h3>
                <p className="text-muted-foreground mb-4">
                  Be the first to know when Auth Shield launches. Join our waitlist for early access and special pricing.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  Join Waitlist
                </Link>
              </div>

              <div className="text-sm text-muted-foreground">
                <p>Expected launch: Q2 2024</p>
                <p>For enterprise inquiries, contact us at enterprise@jutech-devs.com</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}