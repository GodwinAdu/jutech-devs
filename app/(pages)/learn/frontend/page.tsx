"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { CheckCircle, Clock, Users, Star, Play, Code, BookOpen, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { allLessons, courseStructure } from "@/lib/lessons"
import Link from "next/link"

export default function FrontendPath() {
  const [completedLessons, setCompletedLessons] = useState<string[]>([])

  const modules = courseStructure.frontend.modules.map(module => ({
    ...module,
    lessons_list: module.lessons.map(lessonId => {
      const lesson = allLessons[lessonId as keyof typeof allLessons]
      return {
        id: lessonId,
        title: lesson?.title || lessonId,
        duration: lesson?.duration || "30 min",
        difficulty: lesson?.difficulty || "Beginner",
        type: module.id === 'javascript' ? 'interactive' : 'video'
      }
    })
  }))

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play className="w-4 h-4" />
      case 'interactive': return <Code className="w-4 h-4" />
      case 'project': return <Trophy className="w-4 h-4" />
      default: return <BookOpen className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-blue-500/10 text-blue-500'
      case 'interactive': return 'bg-green-500/10 text-green-500'
      case 'project': return 'bg-purple-500/10 text-purple-500'
      default: return 'bg-gray-500/10 text-gray-500'
    }
  }

  const totalLessons = modules.reduce((acc, module) => acc + module.lessons.length, 0)
  const totalCompleted = 0 // Will be dynamic based on user progress
  const progressPercentage = (totalCompleted / totalLessons) * 100

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Link href="/learn" className="text-muted-foreground hover:text-foreground">
                Learn
              </Link>
              <span className="text-muted-foreground">/</span>
              <span>Frontend Development</span>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="text-6xl mb-4">🎨</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Frontend Development Path
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Master modern frontend development with React, Next.js, and our cutting-edge tools. 
                  Build beautiful, performant user interfaces.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <Badge variant="secondary">Beginner Friendly</Badge>
                  <Badge variant="secondary">8 Weeks</Badge>
                  <Badge variant="secondary">2,847 Students</Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    4.9 Rating
                  </Badge>
                </div>

                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500">
                  Continue Learning
                </Button>
              </div>

              <div className="lg:col-span-1">
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Your Progress</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Overall Progress</span>
                        <span>{totalCompleted}/{totalLessons} lessons</span>
                      </div>
                      <Progress value={progressPercentage} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-accent">{totalCompleted}</div>
                        <div className="text-xs text-muted-foreground">Completed</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">{Math.round(progressPercentage)}%</div>
                        <div className="text-xs text-muted-foreground">Progress</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Course Modules</h2>
          
          <div className="space-y-6">
            {modules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-bold">{module.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-3">Learn {module.title.toLowerCase()}</p>
                        
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {module.lessons.length} lessons
                          </span>
                          <Badge variant="outline" className="text-xs">
                            Beginner
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground mb-1">
                          0/{module.lessons.length} completed
                        </div>
                        <Progress 
                          value={0} 
                          className="w-24 h-2"
                        />
                      </div>
                    </div>

                    {/* Lessons Preview */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {module.lessons_list.map((lesson) => (
                        <Link 
                          key={lesson.id}
                          href={`/learn/${module.id}/${lesson.id}`}
                          className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
                        >
                          <div className={`p-2 rounded ${getTypeColor(lesson.type)}`}>
                            {getTypeIcon(lesson.type)}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm">{lesson.title}</div>
                            <div className="text-xs text-muted-foreground">{lesson.duration}</div>
                          </div>
                          {completedLessons.includes(lesson.id) && (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          )}
                        </Link>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t">
                      <Link href={`/learn/${module.id}/${module.lessons[0]}`}>
                        <Button className="w-full">
                          Start Module
                        </Button>
                      </Link>
                    </div>
                  </div>
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