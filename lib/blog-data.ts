export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar: string
    role: string
  }
  publishedAt: string
  readTime: number
  category: string
  tags: string[]
  image: string
  featured: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable React Applications with Next.js 14",
    excerpt: "Learn how to leverage Next.js 14's latest features including Server Components, App Router, and improved performance optimizations for building production-ready applications.",
    content: "Full article content here...",
    author: {
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      role: "Senior Full-Stack Developer"
    },
    publishedAt: "2024-01-15",
    readTime: 8,
    category: "Web Development",
    tags: ["React", "Next.js", "JavaScript", "Performance"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: "2", 
    title: "Mobile App Development: React Native vs Flutter in 2024",
    excerpt: "A comprehensive comparison of React Native and Flutter for cross-platform mobile development, including performance benchmarks and developer experience.",
    content: "Full article content here...",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      role: "Mobile App Specialist"
    },
    publishedAt: "2024-01-12",
    readTime: 12,
    category: "Mobile Development",
    tags: ["React Native", "Flutter", "Mobile", "Cross-platform"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: "3",
    title: "Mastering TypeScript: Advanced Patterns and Best Practices",
    excerpt: "Dive deep into TypeScript's advanced features including conditional types, mapped types, and utility types to write more robust and maintainable code.",
    content: "Full article content here...",
    author: {
      name: "Michael Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      role: "TypeScript Expert"
    },
    publishedAt: "2024-01-10",
    readTime: 15,
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Programming", "Best Practices"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: "4",
    title: "Cloud Architecture: Deploying Applications on AWS",
    excerpt: "Learn how to design and deploy scalable applications on AWS using modern cloud architecture patterns, including serverless and containerization.",
    content: "Full article content here...",
    author: {
      name: "Emily Davis",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      role: "Cloud Architect"
    },
    publishedAt: "2024-01-08",
    readTime: 10,
    category: "Cloud Computing",
    tags: ["AWS", "Cloud", "DevOps", "Architecture"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: "5",
    title: "AI Integration in Web Applications: Practical Examples",
    excerpt: "Explore how to integrate AI and machine learning capabilities into your web applications using modern APIs and frameworks.",
    content: "Full article content here...",
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      role: "AI/ML Engineer"
    },
    publishedAt: "2024-01-05",
    readTime: 14,
    category: "Artificial Intelligence",
    tags: ["AI", "Machine Learning", "Web Development", "APIs"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: "6",
    title: "Database Optimization: PostgreSQL Performance Tuning",
    excerpt: "Advanced techniques for optimizing PostgreSQL databases, including indexing strategies, query optimization, and performance monitoring.",
    content: "Full article content here...",
    author: {
      name: "Lisa Thompson",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      role: "Database Engineer"
    },
    publishedAt: "2024-01-03",
    readTime: 11,
    category: "Database",
    tags: ["PostgreSQL", "Database", "Performance", "Optimization"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    featured: false
  }
]

export const categories = [
  "All",
  "Web Development", 
  "Mobile Development",
  "Programming",
  "Cloud Computing",
  "Artificial Intelligence",
  "Database"
]