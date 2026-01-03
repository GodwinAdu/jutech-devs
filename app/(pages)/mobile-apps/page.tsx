import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileAppsHero } from "@/components/mobile-apps/mobile-apps-hero"
import { MobileAppsGrid } from "@/components/mobile-apps/mobile-apps-grid"

export const metadata = {
  title: "Mobile Applications - JuTech Devs",
  description: "Download our powerful mobile applications for iOS and Android",
}

export default function MobileAppsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <MobileAppsHero />
      <MobileAppsGrid />
      <Footer />
    </main>
  )
}
