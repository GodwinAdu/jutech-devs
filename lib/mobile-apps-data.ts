export const mobileApps = {
  fitnesstrack: {
    id: "fitnesstrack",
    name: "FitnessTrack Pro",
    icon: "💪",
    tagline: "Complete Fitness & Workout Tracker",
    description:
      "Transform your fitness journey with comprehensive workout tracking, nutrition planning, and AI-powered coaching. Track your progress, set goals, and achieve results with personalized fitness plans.",
    features: [
      {
        title: "Workout Planning",
        desc: "Create custom workout routines or choose from 500+ pre-built programs",
      },
      {
        title: "Progress Tracking",
        desc: "Monitor your fitness journey with detailed analytics and body measurements",
      },
      {
        title: "Nutrition Planner",
        desc: "Track calories, macros, and get personalized meal recommendations",
      },
      { title: "AI Coach", desc: "Get real-time form corrections and personalized workout suggestions" },
      { title: "Social Features", desc: "Connect with friends, share workouts, and compete on leaderboards" },
      { title: "Wearable Integration", desc: "Sync with Apple Watch, Fitbit, Garmin, and more" },
    ],
    platforms: ["iOS", "Android"],
    screenshots: ["/fitness-app-interface.png"],
    pricing: [
      {
        name: "Basic",
        price: "Free",
        features: ["Basic workout tracking", "Limited exercises", "Community access"],
      },
      {
        name: "Premium",
        price: "$9.99/mo",
        features: ["Unlimited workouts", "AI coaching", "Nutrition planning", "Ad-free experience"],
        highlight: true,
      },
      {
        name: "Lifetime",
        price: "$99.99",
        features: ["All Premium features", "Lifetime access", "Priority support", "Exclusive content"],
      },
    ],
    downloadLinks: {
      ios: "https://apps.apple.com/fitnesstrack",
      android: "https://play.google.com/store/apps/fitnesstrack",
    },
    formFields: ["name", "email", "phone", "fitness_goals"],
  },
  shopsmart: {
    id: "shopsmart",
    name: "ShopSmart",
    icon: "🛍️",
    tagline: "Smart Shopping & Deals Finder",
    description:
      "Never miss a deal again. ShopSmart helps you find the best prices, track products, get instant alerts for price drops, and discover exclusive deals from thousands of retailers.",
    features: [
      {
        title: "Price Tracking",
        desc: "Monitor prices on your favorite products and get alerts when they drop",
      },
      {
        title: "Deal Finder",
        desc: "Discover the best deals and exclusive offers from thousands of stores",
      },
      {
        title: "Barcode Scanner",
        desc: "Scan products in-store to compare prices and read reviews instantly",
      },
      { title: "Wishlist & Alerts", desc: "Create wishlists and receive notifications when items go on sale" },
      { title: "Cashback Rewards", desc: "Earn cashback on purchases from partner retailers" },
      { title: "Smart Recommendations", desc: "Get personalized product recommendations based on your preferences" },
    ],
    platforms: ["iOS", "Android"],
    screenshots: ["/ecommerce-dashboard.png"],
    pricing: [
      {
        name: "Free",
        price: "$0",
        features: ["Price tracking", "Basic deals", "Barcode scanner"],
      },
      {
        name: "Plus",
        price: "$4.99/mo",
        features: ["Advanced alerts", "Exclusive deals", "5% extra cashback", "Ad-free"],
        highlight: true,
      },
      {
        name: "Pro",
        price: "$9.99/mo",
        features: ["All Plus features", "10% cashback", "Priority support", "Personal shopper"],
      },
    ],
    downloadLinks: {
      ios: "https://apps.apple.com/shopsmart",
      android: "https://play.google.com/store/apps/shopsmart",
    },
    formFields: ["name", "email", "phone", "shopping_interests"],
  },
  taskmaster: {
    id: "taskmaster",
    name: "TaskMaster",
    icon: "✅",
    tagline: "AI-Powered Task & Project Manager",
    description:
      "Boost your productivity with intelligent task management. Organize projects, set priorities, collaborate with teams, and let AI help you optimize your workflow for maximum efficiency.",
    features: [
      {
        title: "Smart Task Organization",
        desc: "AI automatically categorizes and prioritizes your tasks based on importance",
      },
      {
        title: "Team Collaboration",
        desc: "Assign tasks, share projects, and communicate seamlessly with your team",
      },
      {
        title: "Calendar Integration",
        desc: "Sync with Google Calendar, Outlook, and Apple Calendar for unified scheduling",
      },
      { title: "Voice Input", desc: "Create tasks and reminders using natural voice commands" },
      { title: "Smart Reminders", desc: "Get context-aware reminders based on location and time" },
      { title: "Analytics Dashboard", desc: "Track productivity metrics and identify workflow bottlenecks" },
    ],
    platforms: ["iOS", "Android"],
    screenshots: ["/project-management-dashboard.jpg"],
    pricing: [
      {
        name: "Personal",
        price: "Free",
        features: ["Unlimited tasks", "Basic organization", "Mobile app"],
      },
      {
        name: "Professional",
        price: "$6.99/mo",
        features: ["AI prioritization", "Team collaboration", "Calendar sync", "Analytics"],
        highlight: true,
      },
      {
        name: "Business",
        price: "$14.99/mo",
        features: ["All Pro features", "Advanced analytics", "Custom integrations", "Priority support"],
      },
    ],
    downloadLinks: {
      ios: "https://apps.apple.com/taskmaster",
      android: "https://play.google.com/store/apps/taskmaster",
    },
    formFields: ["name", "email", "phone", "use_case"],
  },
  languagebuddy: {
    id: "languagebuddy",
    name: "LanguageBuddy",
    icon: "🌍",
    tagline: "Learn Languages with AI Conversations",
    description:
      "Master new languages through natural AI conversations. Practice speaking, improve pronunciation, learn grammar, and build vocabulary with personalized lessons and real-time feedback.",
    features: [
      {
        title: "AI Conversation Practice",
        desc: "Have natural conversations with AI tutors in 40+ languages",
      },
      {
        title: "Pronunciation Feedback",
        desc: "Get instant feedback on your pronunciation with speech recognition",
      },
      {
        title: "Personalized Lessons",
        desc: "Adaptive learning paths based on your level and learning style",
      },
      { title: "Cultural Context", desc: "Learn phrases in cultural context with real-world scenarios" },
      { title: "Progress Tracking", desc: "Monitor your fluency level and vocabulary growth" },
      { title: "Offline Mode", desc: "Download lessons for learning without internet connection" },
    ],
    platforms: ["iOS", "Android"],
    screenshots: ["/fitness-app-interface.png"],
    pricing: [
      {
        name: "Starter",
        price: "Free",
        features: ["1 language", "Basic lessons", "Limited practice"],
      },
      {
        name: "Premium",
        price: "$12.99/mo",
        features: ["All languages", "Unlimited practice", "AI conversations", "Offline access"],
        highlight: true,
      },
      {
        name: "Lifetime",
        price: "$199.99",
        features: ["All Premium features", "Lifetime access", "Family sharing (5 members)"],
      },
    ],
    downloadLinks: {
      ios: "https://apps.apple.com/languagebuddy",
      android: "https://play.google.com/store/apps/languagebuddy",
    },
    formFields: ["name", "email", "phone", "target_language"],
  },
}

export type MobileAppId = keyof typeof mobileApps
export type MobileApp = (typeof mobileApps)[MobileAppId]
