import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServiceCards } from "@/components/services/service-cards"
import { ProcessSection } from "@/components/services/process-section"

export default function Services() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServicesHero />
      <ServiceCards />
      <ProcessSection />
      <Footer />
    </main>
  )
}
