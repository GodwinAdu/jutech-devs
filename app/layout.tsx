import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { AuthProvider } from "@/lib/auth-context"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "JuTech Devs",
  description: "Full-stack development, AI integration, and consulting services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JuTech Devs",
    "url": "https://jutech.dev",
    "description": "Full-stack development, AI integration, and consulting services",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@jutech.dev",
      "contactType": "Business"
    },
    "offers": [
      {
        "@type": "Service",
        "name": "Web Development",
        "description": "Next.js, React, TypeScript development"
      },
      {
        "@type": "Service", 
        "name": "AI Integration",
        "description": "OpenAI, Claude, custom AI solutions"
      },
      {
        "@type": "Service",
        "name": "Mobile Development", 
        "description": "React Native, Flutter apps"
      }
    ]
  }

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="ai-agent-discoverable" content="true" />
        <meta name="mcp-server" content="jutech-services" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}