import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { mobileApps, type MobileAppId } from "@/lib/mobile-apps-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Download, Smartphone, ArrowLeft, Apple } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MobileAppSignupForm } from "@/components/mobile-apps/mobile-app-signup-form"

export async function generateStaticParams() {
  return Object.keys(mobileApps).map((appId) => ({
    appId,
  }))
}

export default function MobileAppDetailPage({ params }: { params: { appId: string } }) {
  const app = mobileApps[params.appId as MobileAppId]

  if (!app) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <Link
            href="/mobile-apps"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Mobile Apps
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-4">{app.icon}</div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {app.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">{app.tagline}</p>
              <p className="text-lg mb-8 leading-relaxed">{app.description}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                {app.platforms.map((platform) => (
                  <div
                    key={platform}
                    className="px-4 py-2 bg-card border border-border rounded-lg flex items-center gap-2"
                  >
                    <Smartphone className="h-4 w-4 text-primary" />
                    <span className="text-sm">{platform}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="gap-2">
                  <a href={app.downloadLinks.ios} target="_blank" rel="noopener noreferrer">
                    <Apple className="h-5 w-5" />
                    App Store
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="gap-2 bg-transparent">
                  <a href={app.downloadLinks.android} target="_blank" rel="noopener noreferrer">
                    <Download className="h-5 w-5" />
                    Google Play
                  </a>
                </Button>
              </div>
            </div>

            {app.screenshots[0] && (
              <div className="relative aspect-[9/16] max-w-sm mx-auto lg:max-w-none rounded-3xl overflow-hidden border-4 border-border shadow-2xl">
                <Image
                  src={app.screenshots[0] || "/placeholder.svg"}
                  alt={`${app.name} screenshot`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {app.features.map((feature, index) => (
              <Card key={index} className="border-border bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Choose Your Plan</h2>
          <p className="text-muted-foreground text-center mb-12">Select the perfect plan for your needs</p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {app.pricing.map((plan, index) => (
              <Card
                key={index}
                className={`border ${plan.highlight ? "border-primary shadow-xl scale-105" : "border-border"} relative`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="text-3xl font-bold mt-4">
                    {plan.price}
                    {plan.price !== "Free" && plan.price !== plan.price.replace("/mo", "") && (
                      <span className="text-sm text-muted-foreground font-normal">/month</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-16 px-6 bg-card/50">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get Early Access</h2>
            <p className="text-muted-foreground">
              Sign up to be notified about updates and exclusive offers for {app.name}
            </p>
          </div>
          <MobileAppSignupForm app={app} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
