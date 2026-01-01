import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { OpenSourceShowcase } from "@/components/open-source/showcase"

export const metadata: Metadata = {
  title: "Open Source Projects | JuTech Devs",
  description: "Explore our open source contributions and projects. Free tools and libraries for developers.",
}

export default function OpenSourcePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <OpenSourceShowcase />
      </div>
      <Footer />
    </main>
  )
}