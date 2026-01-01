import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectsGrid } from "@/components/projects/projects-grid"

export default function Projects() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ProjectsHero />
      <ProjectsGrid />
      <Footer />
    </main>
  )
}
