import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { SaaSPreview } from "@/components/home/saas-preview"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { SupportServices } from "@/components/home/support-services"
import { Testimonials } from "@/components/home/testimonials"
import { DeveloperToolsPreview } from "@/components/home/developer-tools-preview"
import { MobileAppsPreview } from "@/components/home/mobile-apps-preview"
import { StatsMetrics } from "@/components/home/stats-metrics"
import { TechStack } from "@/components/home/tech-stack"
import { ClientLogos } from "@/components/home/client-logos"
import { ProcessOverview } from "@/components/home/process-overview"
import { LatestBlog } from "@/components/home/latest-blog"
import { CTASection } from "@/components/home/cta-section"
import { PlaygroundPreview } from "@/components/home/playground-preview"
import { GitHubShowcase } from "@/components/home/github-showcase"
import { DeveloperCommunity } from "@/components/home/developer-community"
import { PerformanceBenchmarks } from "@/components/home/performance-benchmarks"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsMetrics />
      <WhyChooseUs />
      <DeveloperToolsPreview />
      <PerformanceBenchmarks />
      <GitHubShowcase />
      <PlaygroundPreview />
      <DeveloperCommunity />
      <FeaturedProjects />
      <ProcessOverview />
      <SupportServices />
      <MobileAppsPreview />
      <TechStack />
      <ClientLogos />
      <Testimonials />
      <SaaSPreview />
      <LatestBlog />
      <CTASection />
      <Footer />
    </main>
  )
}
