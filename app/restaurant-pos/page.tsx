import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { POSShowcase } from "@/components/saas/pos-showcase"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "RestaurantPOS Pro - Complete Restaurant Management System | JuTech",
  description: "Transform your restaurant operations with our comprehensive POS system. Manage orders, inventory, staff, and customer relationships all in one powerful platform.",
}

export default function RestaurantPOSPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6 p-4 rounded-full bg-gradient-to-br from-orange-500 to-red-500">
              <span className="text-5xl">🍽️</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              RestaurantPOS <span className="text-gradient">Pro</span>
            </h1>
            <p className="text-2xl text-accent mb-4">Complete Restaurant Management System</p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Transform your restaurant operations with our comprehensive POS system. 
              Manage orders, inventory, staff, and customer relationships all in one powerful platform 
              designed specifically for restaurants.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="/saas/restaurant-pos"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all"
              >
                Start Free Trial
              </a>
              <a
                href="#features"
                className="px-8 py-4 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-all"
              >
                View Features
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">10,000+</div>
                <div className="text-muted-foreground">Restaurants Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-muted-foreground">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <POSShowcase type="restaurant" />
      
      <Footer />
    </main>
  )
}