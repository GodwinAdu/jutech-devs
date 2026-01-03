export const websiteKnowledge = {
  // Company Information
  company: {
    name: "JuTech Devs",
    tagline: "Full-stack development services",
    description: "Professional web development, AI integration, and consulting services",
    founded: "2024",
    location: "Global (Remote-first)",
    email: "contact@jutechdevs.com",
    compliance_email: "compliance@jutechdevs.com"
  },

  // Services Offered
  services: {
    web_development: {
      name: "Web Development",
      description: "Full-stack web applications with Next.js, React, TypeScript",
      technologies: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "PostgreSQL"],
      features: ["Responsive design", "SEO optimization", "Performance optimization", "Security best practices"]
    },
    ai_integration: {
      name: "AI Integration", 
      description: "Custom AI solutions, chatbots, and automation",
      technologies: ["OpenAI", "Claude", "Custom ML models", "Natural Language Processing"],
      features: ["Chatbot development", "Process automation", "Data analysis", "Predictive modeling"]
    },
    mobile_development: {
      name: "Mobile Development",
      description: "React Native and Flutter mobile applications", 
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      features: ["Cross-platform apps", "Native performance", "App store deployment", "Push notifications"]
    },
    consulting: {
      name: "Consulting",
      description: "Code review, architecture design, team training",
      services: ["Technical audits", "Architecture planning", "Team mentoring", "Best practices training"]
    },
    cloud_solutions: {
      name: "Cloud Solutions",
      description: "AWS, Google Cloud, Azure deployment and optimization",
      platforms: ["AWS", "Google Cloud", "Microsoft Azure", "Vercel", "Netlify"],
      services: ["Infrastructure setup", "CI/CD pipelines", "Monitoring", "Cost optimization"]
    },
    api_development: {
      name: "API Development", 
      description: "RESTful and GraphQL API design and implementation",
      types: ["REST APIs", "GraphQL", "WebSocket", "Microservices"],
      features: ["Authentication", "Rate limiting", "Documentation", "Testing"]
    }
  },

  // Platform Features
  platform: {
    academy: {
      name: "Programming Academy",
      description: "Interactive programming quizzes and tutorials",
      languages: ["JavaScript", "Python", "React", "TypeScript", "Node.js", "CSS", "Java", "Vue.js", "Angular", "PHP", "Go", "Rust", "MongoDB", "Next.js", "React Native", "HTML", "Tailwind CSS"],
      features: ["130+ JavaScript questions", "Interactive quizzes", "Progress tracking", "Skill assessment"]
    },
    playground: {
      name: "Code Playground",
      description: "LeetCode-style coding environment with real-time execution",
      features: ["Real-time code execution", "Multiple languages", "Algorithm practice", "Problem solving"]
    },
    community: {
      name: "Developer Community",
      description: "Forum for discussions, Q&A, and feature requests",
      categories: ["Discussions", "Q&A", "Feature Requests"],
      features: ["Voting system", "Reputation points", "Badges", "Events", "Leaderboard", "User profiles"]
    },
    blog: {
      name: "Technical Blog",
      description: "Articles and tutorials on web development",
      topics: ["Modern Web Development", "AI Integration", "React Best Practices", "TypeScript", "Next.js Performance", "Database Design"]
    }
  },

  // Technical Stack
  technology: {
    frontend: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT Authentication"],
    deployment: ["Vercel", "MongoDB Atlas", "GitHub Actions"],
    tools: ["ESLint", "Prettier", "Husky", "Git"],
    ai_integration: ["OpenAI API", "Claude API", "Custom AI models"]
  },

  // Pages and Routes
  pages: {
    public: [
      { path: "/", name: "Home", description: "Landing page with services overview" },
      { path: "/about", name: "About", description: "Company information and team" },
      { path: "/services", name: "Services", description: "Detailed service offerings" },
      { path: "/contact", name: "Contact", description: "Contact form and information" },
      { path: "/blog", name: "Blog", description: "Technical articles and tutorials" },
      { path: "/open-source", name: "Open Source", description: "Open source contributions" },
      { path: "/academy", name: "Academy", description: "Programming quizzes and learning" },
      { path: "/playground", name: "Playground", description: "Code execution environment" },
      { path: "/search", name: "Search", description: "Site-wide search functionality" },
      { path: "/privacy", name: "Privacy Policy", description: "Privacy policy and data protection" },
      { path: "/terms", name: "Terms of Service", description: "Terms and conditions" },
      { path: "/compliance", name: "Compliance", description: "Security and compliance standards" }
    ],
    community: [
      { path: "/community", name: "Community Hub", description: "Main community page" },
      { path: "/community/discussions", name: "Discussions", description: "General development discussions" },
      { path: "/community/qa", name: "Q&A", description: "Questions and answers" },
      { path: "/community/feature-requests", name: "Feature Requests", description: "Feature suggestions and voting" },
      { path: "/community/events", name: "Events", description: "Community events and workshops" },
      { path: "/community/leaderboard", name: "Leaderboard", description: "Top contributors" },
      { path: "/community/create", name: "Create Post", description: "Create new community posts" },
      { path: "/community/profile", name: "Profile", description: "User profile and settings" }
    ],
    auth: [
      { path: "/login", name: "Login", description: "User authentication" },
      { path: "/register", name: "Register", description: "User registration" }
    ]
  },

  // API Endpoints
  api: {
    auth: [
      "POST /api/auth/login - User login",
      "POST /api/auth/register - User registration", 
      "POST /api/auth/logout - User logout",
      "GET /api/auth/me - Get current user"
    ],
    community: [
      "GET /api/community/posts - Get community posts",
      "POST /api/community/posts - Create new post",
      "GET /api/community/posts/[id] - Get specific post",
      "POST /api/community/posts/[id]/vote - Vote on post",
      "GET /api/community/posts/[id]/replies - Get post replies",
      "POST /api/community/replies - Create reply",
      "POST /api/community/replies/[id]/vote - Vote on reply",
      "POST /api/community/replies/[id]/accept - Accept answer",
      "GET /api/community/users - Get users",
      "GET /api/community/events - Get events",
      "POST /api/community/events - Create event (admin only)",
      "GET /api/community/stats - Get community statistics",
      "GET /api/community/categories - Get category statistics",
      "GET /api/community/profile - Get user profile",
      "PUT /api/community/profile - Update user profile"
    ]
  },

  // Features and Functionality
  features: {
    authentication: {
      type: "JWT-based",
      features: ["Login/Register", "Protected routes", "User sessions", "Password hashing"]
    },
    community_system: {
      features: ["Post creation", "Voting system", "Reply threads", "User reputation", "Badges", "Accept answers", "Real-time stats"]
    },
    search: {
      scope: "Site-wide search across all pages and content",
      categories: ["Pages", "Academy", "Community", "Services", "Blog"]
    },
    responsive_design: {
      breakpoints: ["Mobile", "Tablet", "Desktop"],
      framework: "Tailwind CSS with custom responsive utilities"
    }
  },

  // Compliance and Security
  compliance: {
    standards: ["GDPR", "CCPA", "SOC 2", "ISO 27001", "HIPAA", "PCI DSS"],
    security_measures: [
      "Data encryption (TLS 1.3, AES-256)",
      "Multi-factor authentication", 
      "Role-based access control",
      "Regular security audits",
      "24/7 monitoring",
      "Incident response procedures"
    ]
  },

  // User Roles and Permissions
  user_roles: {
    admin: {
      permissions: ["Create events", "Manage users", "Moderate content", "Access analytics"]
    },
    moderator: {
      permissions: ["Moderate posts", "Manage community", "Create events (with approval)"]
    },
    user: {
      permissions: ["Create posts", "Vote", "Reply", "Edit profile", "Join events"]
    }
  },

  // Recent Updates and Features
  recent_updates: [
    "Real community data integration",
    "Admin-only event creation",
    "Accept answer functionality", 
    "Sliding testimonials carousel",
    "Real category statistics",
    "Profile editing system",
    "Settings management",
    "Comprehensive search functionality"
  ]
}

// AI Context Provider
export class AIKnowledgeProvider {
  getWebsiteContext(query?: string) {
    const context = {
      ...websiteKnowledge,
      query_context: query ? `User asking about: ${query}` : "General website information",
      last_updated: new Date().toISOString(),
      version: "1.0.0"
    }
    
    return context
  }

  searchKnowledge(query: string) {
    const results: Array<{
      category: string;
      key: string;
      data: any;
      relevance: number;
    }> = []
    const searchTerm = query.toLowerCase()
    
    // Search through all knowledge areas
    Object.entries(websiteKnowledge).forEach(([category, data]) => {
      if (typeof data === 'object') {
        Object.entries(data).forEach(([key, value]) => {
          if (JSON.stringify(value).toLowerCase().includes(searchTerm)) {
            results.push({
              category,
              key,
              data: value,
              relevance: this.calculateRelevance(searchTerm, JSON.stringify(value))
            })
          }
        })
      }
    })
    
    return results.sort((a, b) => b.relevance - a.relevance)
  }

  private calculateRelevance(query: string, content: string): number {
    const matches = (content.toLowerCase().match(new RegExp(query, 'g')) || []).length
    return matches / content.length * 1000
  }
}

export const aiKnowledge = new AIKnowledgeProvider()