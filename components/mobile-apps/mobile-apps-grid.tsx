"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { mobileApps } from "@/lib/mobile-apps-data"
import { Download, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function MobileAppsGrid() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {Object.values(mobileApps).map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-border hover:border-primary/50 transition-all duration-300 h-full group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform">{app.icon}</div>
                    <div className="flex gap-2">
                      {app.platforms.map((platform) => (
                        <div key={platform} className="px-2 py-1 bg-primary/10 rounded text-xs">
                          {platform}
                        </div>
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{app.name}</CardTitle>
                  <CardDescription className="text-base">{app.tagline}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {app.screenshots[0] && (
                    <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                      <Image
                        src={app.screenshots[0] || "/placeholder.svg"}
                        alt={app.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <p className="text-sm text-muted-foreground">{app.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {app.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {feature.title}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4">
                    <Button asChild className="gap-2">
                      <Link href={`/mobile-apps/${app.id}`}>
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="gap-2 bg-transparent">
                      <a href={app.downloadLinks.ios} target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
