"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Menu } from "lucide-react"
import { CodeEditor } from "@/components/learn/code-editor"
import { lessons, courseStructure } from "@/lib/lesson-data"
import { notFound, useParams } from "next/navigation"
import Link from "next/link"


export default function LessonPage() {

  const params = useParams()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const lessonData = lessons[params.lesson as keyof typeof lessons]
  if (!lessonData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson Not Found</h1>
          <p className="text-muted-foreground mb-4">The lesson "{params.lesson}" does not exist.</p>
          <Link href="/learn/frontend" className="text-blue-500 hover:underline">
            Back to Frontend Course
          </Link>
        </div>
      </div>
    )
  }

  const allLessons = courseStructure.frontend.modules.flatMap(module => 
    module.lessons.map(lessonId => ({
      id: lessonId,
      title: lessons[lessonId as keyof typeof lessons]?.title || lessonId,
      active: lessonId === params.lesson
    }))
  )

  const currentStepData = lessonData.steps[currentStep]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="flex pt-16">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static`}>
          <div className="p-4 space-y-4 h-full overflow-y-auto">
            <div>
              <h3 className="font-semibold text-sm text-muted-foreground mb-2">Frontend Lessons</h3>
              <div className="space-y-1">
                {allLessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    href={`/learn/frontend/${lesson.id}`}
                    className={`block px-3 py-2 text-sm rounded-md ${
                      lesson.active ? 'bg-accent text-accent-foreground' : 'hover:bg-muted'
                    }`}
                  >
                    {lesson.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="lg:hidden p-4 border-b">
            <Button variant="outline" size="sm" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-4 h-4 mr-2" />
              Course Menu
            </Button>
          </div>

          <div className="max-w-4xl mx-auto p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">{lessonData.title}</h1>
              <p className="text-muted-foreground mb-4">{lessonData.description}</p>
              <div className="flex gap-4">
                <Badge variant="secondary">{lessonData.difficulty}</Badge>
                <Badge variant="secondary">{lessonData.duration}</Badge>
                <Badge variant="secondary">Step {currentStep + 1} of {lessonData.steps.length}</Badge>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">{currentStepData.title}</h2>
                <div 
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: currentStepData.content }}
                />
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4">Example</h3>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  {params.lesson?.toString().includes('html') && (
                    <pre>{currentStepData.code.html}</pre>
                  )}
                  {params.lesson?.toString().includes('css') && (
                    <pre>{currentStepData.code.css}</pre>
                  )}
                  {params.lesson?.toString().includes('javascript') && (
                    <pre>{currentStepData.code.js}</pre>
                  )}
                  {params.lesson?.toString().includes('quantum') && (
                    <div>
                      <div className="mb-2 text-xs text-muted-foreground">HTML:</div>
                      <pre className="mb-4">{currentStepData.code.html}</pre>
                      <div className="mb-2 text-xs text-muted-foreground">JavaScript:</div>
                      <pre>{currentStepData.code.js}</pre>
                    </div>
                  )}
                </div>
              </Card>
            </div>

            <Card className="mb-8">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold">Try It Yourself</h3>
              </div>
              <div className="p-6">
                {params.lesson?.toString().includes('html') && (
                  <CodeEditor
                    initialHtml={currentStepData.code.html}
                    lesson={currentStepData.title}
                    htmlOnly={true}
                  />
                )}
                {params.lesson?.toString().includes('css') && (
                  <CodeEditor
                    initialHtml={currentStepData.code.html}
                    initialCss={currentStepData.code.css}
                    lesson={currentStepData.title}
                    cssOnly={true}
                  />
                )}
                {params.lesson?.toString().includes('javascript') && (
                  <CodeEditor
                    initialHtml={currentStepData.code.html}
                    initialCss={currentStepData.code.css}
                    initialJs={currentStepData.code.js}
                    lesson={currentStepData.title}
                    jsOnly={true}
                  />
                )}
                {params.lesson?.toString().includes('quantum') && (
                  <CodeEditor
                    initialHtml={currentStepData.code.html}
                    initialCss={currentStepData.code.css}
                    initialJs={currentStepData.code.js}
                    lesson={currentStepData.title}
                  />
                )}
              </div>
            </Card>

            <div className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <Button 
                onClick={() => setCurrentStep(Math.min(lessonData.steps.length - 1, currentStep + 1))}
                disabled={currentStep === lessonData.steps.length - 1}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}