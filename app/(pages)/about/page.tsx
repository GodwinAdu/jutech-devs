import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { MissionVision } from "@/components/about/mission-vision"
import { TeamExpertise } from "@/components/about/team-expertise"

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      <MissionVision />
      <TeamExpertise />
      <Footer />
    </main>
  )
}
