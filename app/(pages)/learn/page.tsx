"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Book, Code, Trophy, Users, Clock, Star, ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function LearnPage() {
  const learningPaths = [
    {
      id: "frontend",
      title: "Frontend Development",
      description: "Master modern frontend development with React, Next.js, and our tools",
      level: "Beginner to Advanced",
      duration: "8 weeks",
      students: "2,847",
      rating: 4.9,
      courses: 12,
      color: "from-blue-500 to-cyan-500",
      icon: "🎨",
      skills: ["HTML/CSS", "JavaScript", "React", "Next.js", "Quantum Query"]
    },
    {
      id: "backend",
      title: "Backend Development", 
      description: "Build scalable APIs and server-side applications",
      level: "Intermediate",
      duration: "10 weeks",
      students: "1,923",
      rating: 4.8,
      courses: 15,
      color: "from-green-500 to-emerald-500",
      icon: "⚙️",
      skills: ["Node.js", "Express", "Databases", "APIs", "Auth Shield"]
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      description: "Integrate AI into your applications with our Universal AI SDK",
      level: "Intermediate to Advanced", 
      duration: "12 weeks",
      students: "1,456",
      rating: 4.9,
      courses: 18,
      color: "from-purple-500 to-pink-500",
      icon: "🤖",
      skills: ["AI Fundamentals", "Universal AI SDK", "OpenAI", "Anthropic", "Groq"]
    },
    {
      id: "fullstack",
      title: "Full-Stack Development",
      description: "Complete web development with modern tools and frameworks",
      level: "All Levels",
      duration: "16 weeks", 
      students: "3,241",
      rating: 4.9,
      courses: 25,
      color: "from-orange-500 to-red-500",
      icon: "🚀",
      skills: ["Frontend", "Backend", "Database", "Deployment", "All Jutech Tools"]
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-purple-500">
              Interactive Learning Platform
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Learn <span className="gradient-text">Modern Development</span>
              <br />
              at Your Own Pace
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Master web development with interactive courses, hands-on projects, and real-world applications. 
              Learn our cutting-edge tools and industry best practices.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500">
                Start Learning Free
              </Button>
              <Button size="lg" variant="outline">
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Learning Path</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Structured learning paths designed to take you from beginner to expert in your chosen field.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all group cursor-pointer">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${path.color} flex items-center justify-center text-2xl mb-4`}>
                    {path.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{path.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {path.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {path.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{path.skills.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <div className="text-muted-foreground">Level</div>
                      <div className="font-medium">{path.level}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Duration</div>
                      <div className="font-medium">{path.duration}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Students</div>
                      <div className="font-medium">{path.students}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Rating</div>
                      <div className="font-medium flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        {path.rating}
                      </div>
                    </div>
                  </div>

                  <Button className="w-full" asChild>
                    <Link href={`/learn/${path.id}`}>
                      Start Learning <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}