import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SaaSHero } from "@/components/saas/saas-hero"
import { SaaSProducts } from "@/components/saas/saas-products"
import { PricingSection } from "@/components/saas/pricing-section"

export default function SaaS() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <SaaSHero />
      <SaaSProducts />
      <PricingSection />
      <Footer />
    </main>
  )
}
