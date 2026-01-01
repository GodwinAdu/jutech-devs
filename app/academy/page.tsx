import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { LanguageSelection } from "@/components/academy/language-selection"

export const metadata: Metadata = {
  title: "Academy - Programming Quiz | JuTech Devs",
  description: "Test your programming knowledge with interactive quizzes covering JavaScript, Python, and more.",
}

export default function Academy() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <LanguageSelection />
      </div>
    </main>
  )
}
