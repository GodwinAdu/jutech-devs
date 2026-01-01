"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Users, Clock, Star } from "lucide-react"
import Link from "next/link"

interface Language {
  id: string
  name: string
  icon: string
  description: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  questions: number
  students: number
  rating: number
  color: string
}

const languages: Language[] = [
  {
    id: "javascript",
    name: "JavaScript",
    icon: "🟨",
    description: "Test your knowledge of modern JavaScript, ES6+, and web development concepts",
    difficulty: "Intermediate",
    questions: 3,
    students: 12500,
    rating: 4.8,
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: "python",
    name: "Python",
    icon: "🐍",
    description: "Explore Python fundamentals, data structures, and object-oriented programming",
    difficulty: "Beginner",
    questions: 3,
    students: 9800,
    rating: 4.9,
    color: "from-blue-500 to-green-500"
  },
  {
    id: "react",
    name: "React",
    icon: "⚛️",
    description: "Master React hooks, components, state management, and modern patterns",
    difficulty: "Intermediate",
    questions: 3,
    students: 8600,
    rating: 4.7,
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "🔷",
    description: "Advanced TypeScript concepts, generics, and type system mastery",
    difficulty: "Advanced",
    questions: 3,
    students: 5400,
    rating: 4.6,
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: "🟢",
    description: "Backend development, APIs, middleware, and server-side JavaScript",
    difficulty: "Intermediate",
    questions: 3,
    students: 7200,
    rating: 4.5,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "css",
    name: "CSS",
    icon: "🎨",
    description: "Modern CSS, Flexbox, Grid, animations, and responsive design",
    difficulty: "Beginner",
    questions: 3,
    students: 11200,
    rating: 4.4,
    color: "from-pink-500 to-purple-500"
  },
  {
    id: "java",
    name: "Java",
    icon: "☕",
    description: "Object-oriented programming, JVM concepts, and enterprise development",
    difficulty: "Intermediate",
    questions: 3,
    students: 15600,
    rating: 4.7,
    color: "from-orange-500 to-red-500"
  },
  {
    id: "vue",
    name: "Vue.js",
    icon: "💚",
    description: "Progressive framework, composition API, and reactive programming",
    difficulty: "Intermediate",
    questions: 3,
    students: 6800,
    rating: 4.6,
    color: "from-green-400 to-emerald-400"
  },
  {
    id: "angular",
    name: "Angular",
    icon: "🅰️",
    description: "TypeScript framework, dependency injection, and enterprise apps",
    difficulty: "Advanced",
    questions: 3,
    students: 4200,
    rating: 4.5,
    color: "from-red-500 to-pink-500"
  },
  {
    id: "php",
    name: "PHP",
    icon: "🐘",
    description: "Server-side scripting, web development, and modern PHP features",
    difficulty: "Beginner",
    questions: 3,
    students: 8900,
    rating: 4.3,
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: "go",
    name: "Go",
    icon: "🐹",
    description: "Concurrent programming, goroutines, and system programming",
    difficulty: "Intermediate",
    questions: 3,
    students: 3400,
    rating: 4.8,
    color: "from-cyan-400 to-blue-400"
  },
  {
    id: "rust",
    name: "Rust",
    icon: "🦀",
    description: "Memory safety, ownership, and systems programming concepts",
    difficulty: "Advanced",
    questions: 3,
    students: 2100,
    rating: 4.9,
    color: "from-orange-600 to-red-600"
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: "🍃",
    description: "NoSQL database, aggregation, and document-based data modeling",
    difficulty: "Intermediate",
    questions: 3,
    students: 6700,
    rating: 4.5,
    color: "from-green-600 to-emerald-600"
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "▲",
    description: "React framework, SSR, SSG, and full-stack web development",
    difficulty: "Intermediate",
    questions: 3,
    students: 8900,
    rating: 4.8,
    color: "from-gray-800 to-gray-900"
  },
  {
    id: "reactnative",
    name: "React Native",
    icon: "📱",
    description: "Cross-platform mobile development with React concepts",
    difficulty: "Intermediate",
    questions: 3,
    students: 5600,
    rating: 4.6,
    color: "from-blue-400 to-cyan-400"
  },
  {
    id: "html",
    name: "HTML",
    icon: "🌐",
    description: "Web markup, semantic elements, and accessibility fundamentals",
    difficulty: "Beginner",
    questions: 3,
    students: 18500,
    rating: 4.3,
    color: "from-orange-400 to-red-400"
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    icon: "💨",
    description: "Utility-first CSS framework and responsive design patterns",
    difficulty: "Beginner",
    questions: 3,
    students: 9200,
    rating: 4.7,
    color: "from-teal-400 to-blue-400"
  }
]

export function LanguageSelection() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "text-green-500 bg-green-500/10"
      case "Intermediate": return "text-yellow-500 bg-yellow-500/10"
      case "Advanced": return "text-red-500 bg-red-500/10"
      default: return "text-primary bg-primary/10"
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Code className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Choose Your Language</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
          Programming Quiz Academy
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Test your programming knowledge across different languages and frameworks. 
          Choose a language below to start your coding challenge.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {languages.map((language, index) => (
          <motion.div
            key={language.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group cursor-pointer"
          >
            <Link href={`/academy/${language.id}`}>
              <div className="relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${language.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Difficulty badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(language.difficulty)}`}>
                    {language.difficulty}
                  </span>
                </div>

                {/* Language icon and name */}
                <div className="relative z-10 mb-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {language.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {language.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {language.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="relative z-10 grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Code className="w-4 h-4" />
                    <span>{language.questions} questions</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>30s each</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{(language.students / 1000).toFixed(1)}k students</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{language.rating}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="relative z-10">
                  <div className="w-full py-3 px-4 rounded-xl bg-primary/10 text-primary font-semibold text-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    Start Quiz
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-20 text-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">17</div>
            <div className="text-sm text-muted-foreground">Languages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">51</div>
            <div className="text-sm text-muted-foreground">Questions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">139k+</div>
            <div className="text-sm text-muted-foreground">Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">4.7</div>
            <div className="text-sm text-muted-foreground">Avg Rating</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}