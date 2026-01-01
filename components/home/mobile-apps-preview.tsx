"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { mobileApps } from "@/lib/mobile-apps-data"
import { ArrowRight, Smartphone } from "lucide-react"
import Link from "next/link"

export function MobileAppsPreview() {
  const featuredApps = Object.values(mobileApps).slice(0, 3)

  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Smartphone className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Mobile Applications</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Download Our Mobile Apps</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful applications for iOS and Android to enhance your daily life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featuredApps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-border hover:border-primary/50 transition-all duration-300 h-full group">
                <CardHeader>
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{app.icon}</div>
                  <CardTitle>{app.name}</CardTitle>
                  <CardDescription>{app.tagline}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 mb-4">
                    {app.platforms.map((platform) => (
                      <div key={platform} className="px-2 py-1 bg-primary/10 rounded text-xs">
                        {platform}
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full gap-2 bg-transparent">
                    <Link href={`/mobile-apps/${app.id}`}>
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/mobile-apps">
              View All Mobile Apps
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
