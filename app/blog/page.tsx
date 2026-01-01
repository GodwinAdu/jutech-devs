import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogShowcase } from "@/components/blog/blog-showcase"

export const metadata: Metadata = {
  title: "Blog - Tech Insights & Tutorials | JuTech Devs",
  description: "Stay updated with the latest in web development, mobile apps, and technology trends. Expert insights and tutorials from JuTech Devs.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <BlogShowcase />
      </div>
      <Footer />
    </main>
  )
}