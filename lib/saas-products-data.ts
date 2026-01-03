export const saasProducts = {
  "restaurant-pos": {
    id: "restaurant-pos",
    name: "RestaurantPOS Pro",
    icon: "🍽️",
    image: "/images/saas/restaurant-pos.svg",
    website: "https://restaurant2026.vercel.app",
    isWaitlist: false,
    tagline: "Complete Restaurant Management System",
    description:
      "Transform your restaurant operations with our comprehensive POS system. Manage orders, inventory, staff, and customer relationships all in one powerful platform designed specifically for restaurants.",
    features: [
      {
        title: "Order Management",
        desc: "Streamline dine-in, takeout, and delivery orders with intuitive interface",
      },
      {
        title: "Kitchen Display System",
        desc: "Real-time order tracking and kitchen workflow optimization",
      },
      {
        title: "Inventory Management",
        desc: "Track ingredients, automate reordering, and reduce food waste",
      },
      { title: "Staff Management", desc: "Schedule shifts, track performance, and manage payroll seamlessly" },
      { title: "Customer Analytics", desc: "Understand customer preferences and boost loyalty programs" },
      { title: "Multi-location Support", desc: "Manage multiple restaurant locations from a single dashboard" },
    ],
    pricing: [
      {
        name: "Professional",
        price: "GH₵120",
        features: ["Up to 3 locations", "Advanced analytics", "Kitchen display", "Priority support", "Unlimited staff"],
        highlight: true,
      },
      {
        name: "Custom",
        price: "Custom",
        features: ["Unlimited locations", "Custom integrations", "Dedicated support", "Advanced reporting"],
      },
    ],
    formFields: ["name", "email", "restaurant_name", "locations_count"],
  },
  "retail-pos": {
    id: "retail-pos",
    name: "RetailPOS Elite",
    icon: "🛍️",
    image: "/images/saas/retail-pos.svg",
    website: "https://retail2026.vercel.app",
    isWaitlist: false,
    tagline: "Smart Retail Point of Sale System",
    description:
      "Revolutionize your retail business with our intelligent POS system. Handle sales, inventory, customer management, and analytics with ease. Perfect for single stores or multi-location retail chains.",
    features: [
      {
        title: "Smart Checkout",
        desc: "Fast, secure transactions with multiple payment options and receipt customization",
      },
      {
        title: "Inventory Tracking",
        desc: "Real-time stock levels, automated reordering, and barcode scanning",
      },
      {
        title: "Customer Management",
        desc: "Build customer profiles, loyalty programs, and targeted marketing campaigns",
      },
      { title: "Sales Analytics", desc: "Comprehensive reporting on sales trends, top products, and performance metrics" },
      { title: "Employee Management", desc: "Track sales performance, manage permissions, and schedule shifts" },
      { title: "E-commerce Integration", desc: "Sync with online stores and manage omnichannel inventory" },
    ],
    pricing: [
     
      {
        name: "Professional",
        price: "GH₵80",
        features: ["Up to 5 locations", "Advanced inventory", "Customer analytics", "Priority support", "Unlimited registers"],
        highlight: true,
      },
      {
        name: "Custom",
        price: "Custom",
        features: ["Unlimited locations", "Custom integrations", "24/7 support", "Advanced reporting", "API access"],
      },
    ],
    formFields: ["name", "email", "business_name", "store_type"],
  },
  
  waitlistpro: {
    id: "waitlistpro",
    name: "WaitlistPro",
    icon: "📋",
    image: "/images/saas/waitlistpro.svg",
    website: "https://waitlist2026.vercel.app",
    isWaitlist: false,
    tagline: "Smart Waitlist Management Platform",
    description:
      "Build anticipation and capture leads before your product launch. Create beautiful landing pages, manage signups, and engage your audience with automated email campaigns and analytics.",
    features: [
      {
        title: "Beautiful Landing Pages",
        desc: "Create stunning waitlist pages with customizable templates and branding",
      },
      {
        title: "Lead Management",
        desc: "Organize and segment your waitlist subscribers with advanced filtering",
      },
      {
        title: "Email Automation",
        desc: "Send automated welcome emails, updates, and launch notifications",
      },
      { title: "Analytics Dashboard", desc: "Track signups, conversion rates, and engagement metrics in real-time" },
      { title: "Referral System", desc: "Boost signups with built-in referral programs and social sharing" },
      { title: "API Integration", desc: "Connect with your existing tools and workflows via REST API" },
    ],
    pricing: [
      {
        name: "Starter",
        price: "$19",
        features: ["Up to 1,000 subscribers", "Basic templates", "Email support", "Basic analytics"],
      },
      {
        name: "Professional",
        price: "$49",
        features: ["Up to 10,000 subscribers", "Custom branding", "Email automation", "Advanced analytics", "Priority support"],
        highlight: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        features: ["Unlimited subscribers", "White-label solution", "Custom integrations", "Dedicated support"],
      },
    ],
    formFields: ["name", "email", "company", "expected_subscribers"],
  },
}

export type SaasProductId = keyof typeof saasProducts
export type SaasProduct = (typeof saasProducts)[SaasProductId]
