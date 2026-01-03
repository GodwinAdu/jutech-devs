import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { CodePlayground } from "@/components/playground/code-playground"

export const metadata: Metadata = {
  title: "Code Playground | JuTech Academy",
  description: "Practice coding with our interactive playground featuring real-time code execution and test cases.",
}

export default function PlaygroundPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <CodePlayground />
      </div>
    </main>
  )
}