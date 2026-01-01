'use client'

import { useState } from 'react'
import { Search, Book, Code, Lightbulb } from 'lucide-react'
import Link from 'next/link'

export function EnhancedSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])

  const searchContent = {
    pages: [
      { title: 'Home', path: '/', description: 'JuTech Devs - Full-stack development services' },
      { title: 'About', path: '/about', description: 'Learn about our team and expertise' },
      { title: 'Services', path: '/services', description: 'Web development, AI integration, consulting' },
      { title: 'Contact', path: '/contact', description: 'Get in touch for your next project' },
      { title: 'Open Source', path: '/open-source', description: 'Our open source contributions and projects' },
      { title: 'Blog', path: '/blog', description: 'Latest articles and tutorials' },
      { title: 'Privacy Policy', path: '/privacy', description: 'Our privacy policy and data protection practices' },
      { title: 'Terms of Service', path: '/terms', description: 'Terms and conditions for using our services' },
      { title: 'Compliance', path: '/compliance', description: 'Security standards and compliance certifications' }
    ],
    community: [
      { title: 'Community Forum', path: '/community', description: 'Developer community discussions and Q&A' },
      { title: 'Discussions', path: '/community/discussions', description: 'General development discussions' },
      { title: 'Q&A', path: '/community/qa', description: 'Ask questions and get answers from the community' },
      { title: 'Feature Requests', path: '/community/feature-requests', description: 'Suggest and vote on new features' },
      { title: 'Community Events', path: '/community/events', description: 'Workshops, webinars, and community meetups' },
      { title: 'Leaderboard', path: '/community/leaderboard', description: 'Top community contributors and champions' },
      { title: 'Create Post', path: '/community/create', description: 'Share your knowledge with the community' },
      { title: 'Profile', path: '/community/profile', description: 'Your community profile and activity' }
    ],
    academy: [
      { title: 'Programming Academy', path: '/academy', description: 'Interactive programming quizzes and tutorials' },
      { title: 'JavaScript Quiz', path: '/academy/javascript', description: 'Test your JavaScript knowledge with 130+ questions' },
      { title: 'Python Quiz', path: '/academy/python', description: 'Python programming challenges and exercises' },
      { title: 'React Quiz', path: '/academy/react', description: 'React framework questions and concepts' },
      { title: 'TypeScript Quiz', path: '/academy/typescript', description: 'TypeScript type system and advanced features' },
      { title: 'Node.js Quiz', path: '/academy/nodejs', description: 'Server-side JavaScript with Node.js' },
      { title: 'CSS Quiz', path: '/academy/css', description: 'CSS styling and layout techniques' },
      { title: 'Java Quiz', path: '/academy/java', description: 'Java programming fundamentals and OOP' },
      { title: 'Vue.js Quiz', path: '/academy/vue', description: 'Vue.js framework and composition API' },
      { title: 'Angular Quiz', path: '/academy/angular', description: 'Angular framework and TypeScript' },
      { title: 'PHP Quiz', path: '/academy/php', description: 'PHP server-side programming' },
      { title: 'Go Quiz', path: '/academy/go', description: 'Go programming language fundamentals' },
      { title: 'Rust Quiz', path: '/academy/rust', description: 'Rust systems programming language' },
      { title: 'MongoDB Quiz', path: '/academy/mongodb', description: 'NoSQL database with MongoDB' },
      { title: 'Next.js Quiz', path: '/academy/nextjs', description: 'Next.js React framework' },
      { title: 'React Native Quiz', path: '/academy/reactnative', description: 'Mobile development with React Native' },
      { title: 'HTML Quiz', path: '/academy/html', description: 'HTML markup and semantic elements' },
      { title: 'Tailwind CSS Quiz', path: '/academy/tailwindcss', description: 'Utility-first CSS framework' }
    ],
    playground: [
      { title: 'Code Playground', path: '/playground', description: 'LeetCode-style coding environment with real-time execution' },
      { title: 'Algorithm Practice', path: '/playground', description: 'Solve coding problems and algorithms' },
      { title: 'JavaScript Execution', path: '/playground', description: 'Run JavaScript code in real-time' },
      { title: 'Python Simulation', path: '/playground', description: 'Practice Python programming' },
      { title: 'Java Simulation', path: '/playground', description: 'Java coding challenges' }
    ],
    blog: [
      { title: 'Modern Web Development', path: '/blog/1', description: 'Latest trends in web development and frameworks' },
      { title: 'AI Integration Guide', path: '/blog/2', description: 'How to integrate AI into your applications' },
      { title: 'React Best Practices', path: '/blog/3', description: 'Advanced React patterns and optimization' },
      { title: 'TypeScript Deep Dive', path: '/blog/4', description: 'Advanced TypeScript features and patterns' },
      { title: 'Next.js Performance', path: '/blog/5', description: 'Optimizing Next.js applications for speed' },
      { title: 'Database Design', path: '/blog/6', description: 'SQL and NoSQL database design principles' }
    ],
    services: [
      { title: 'Web Development', path: '/services', description: 'Full-stack web applications with Next.js, React, TypeScript' },
      { title: 'AI Integration', path: '/services', description: 'Custom AI solutions, chatbots, and automation' },
      { title: 'Mobile Development', path: '/services', description: 'React Native and Flutter mobile applications' },
      { title: 'Consulting', path: '/services', description: 'Code review, architecture design, team training' },
      { title: 'Cloud Solutions', path: '/services', description: 'AWS, Google Cloud, Azure deployment and optimization' },
      { title: 'API Development', path: '/services', description: 'RESTful and GraphQL API design and implementation' }
    ],
    search: [
      { title: 'Search', path: '/search', description: 'Search through all JuTech resources and content' }
    ]
  }

  const handleSearch = () => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const allContent = Object.values(searchContent).flat()
    const filtered = allContent.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    )
    setResults(filtered)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="relative mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            if (e.target.value) handleSearch()
            else setResults([])
          }}
          placeholder="Search tutorials, quizzes, services, blog posts..."
          className="w-full px-4 py-3 pl-12 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
      </div>

      {results.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Search Results</h3>
          {results.map((result, index) => (
            <Link key={index} href={result.path} className="block">
              <div className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <h4 className="font-medium text-primary hover:underline">
                  {result.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {result.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {query && results.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No results found for "{query}"</p>
        </div>
      )}

      {!query && (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <Book className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Learning</h3>
            </div>
            {searchContent.academy.slice(0, 6).map((item, index) => (
              <Link key={index} href={item.path} className="block p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <h4 className="font-medium text-primary">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Link>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <Code className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Community</h3>
            </div>
            {searchContent.community.slice(0, 6).map((item, index) => (
              <Link key={index} href={item.path} className="block p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <h4 className="font-medium text-primary">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Link>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Services</h3>
            </div>
            {searchContent.services.slice(0, 4).map((item, index) => (
              <Link key={index} href={item.path} className="block p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <h4 className="font-medium text-primary">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Link>
            ))}
            
            {searchContent.playground.slice(0, 2).map((item, index) => (
              <Link key={index} href={item.path} className="block p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <h4 className="font-medium text-primary">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}