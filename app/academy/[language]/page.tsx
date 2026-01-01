import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { QuizInterface } from "@/components/academy/quiz-interface"
import { notFound } from "next/navigation"

const languages = ["javascript", "python", "react", "typescript", "nodejs", "css", "java", "vue", "angular", "php", "go", "rust", "mongodb", "nextjs", "reactnative", "html", "tailwindcss"]

interface Props {
  params: Promise<{ language: string }>
}

export async function generateStaticParams() {
  return languages.map((language) => ({
    language: language,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const {language }= await params
  
  if (!languages.includes(language)) {
    return {
      title: "Language Not Found | JuTech Academy",
    }
  }

  const languageName = language.charAt(0).toUpperCase() + language.slice(1)
  
  return {
    title: `${languageName} Quiz | JuTech Academy`,
    description: `Test your ${languageName} programming knowledge with interactive quizzes and coding challenges.`,
  }
}

export default async function LanguageQuizPage({ params }: Props) {
  const { language } = await params

  if (!languages.includes(language)) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <QuizInterface language={language} />
      </div>
    </main>
  )
}