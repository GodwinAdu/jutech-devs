"use client"

import { motion } from "framer-motion"
import { ChevronDown, Hash, Clock, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Problem {
  id: number
  title: string
  difficulty: "Easy" | "Medium" | "Hard"
  description: string
  examples: Array<{
    input: string
    output: string
    explanation?: string
  }>
  constraints: string[]
  starterCode: string
  testCases: Array<{
    input: any
    expected: any
  }>
}

interface ProblemDescriptionProps {
  problem: Problem
  selectedProblem: number
  onProblemChange: (index: number) => void
  problems: Problem[]
}

export function ProblemDescription({ 
  problem, 
  selectedProblem, 
  onProblemChange, 
  problems 
}: ProblemDescriptionProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-green-500 bg-green-500/10"
      case "Medium": return "text-yellow-500 bg-yellow-500/10"
      case "Hard": return "text-red-500 bg-red-500/10"
      default: return "text-primary bg-primary/10"
    }
  }

  return (
    <div className="bg-card border border-border/50 rounded-xl flex-1 flex flex-col">
      {/* Problem Selector */}
      <div className="p-4 border-b border-border/50">
        <div className="relative">
          <select
            value={selectedProblem}
            onChange={(e) => onProblemChange(Number(e.target.value))}
            className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 text-sm appearance-none cursor-pointer"
          >
            {problems.map((p, index) => (
              <option key={p.id} value={index}>
                {p.id}. {p.title}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        </div>
      </div>

      {/* Problem Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Title and Difficulty */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold">{problem.id}. {problem.title}</h1>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(problem.difficulty)}`}>
              {problem.difficulty}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            {problem.description}
          </p>
        </div>

        {/* Stats */}
        <div className="space-y-3">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${getDifficultyColor(problem.difficulty).split(' ')[0]}`} />
              <span className="text-muted-foreground">Difficulty:</span>
              <span className="font-medium">{problem.difficulty}</span>
            </div>
            <div className="flex items-center gap-2">
              <Hash className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Problem {problem.id}</span>
            </div>
          </div>
        </div>

        {/* Examples */}
        <div className="space-y-4">
          <h3 className="font-semibold">Examples:</h3>
          {problem.examples.map((example, index) => (
            <div key={index} className="bg-accent/5 border border-accent/20 rounded-lg p-4 space-y-2">
              <div className="font-semibold text-sm">Example {index + 1}:</div>
              <div className="space-y-1 text-sm font-mono">
                <div><span className="text-muted-foreground">Input:</span> {example.input}</div>
                <div><span className="text-muted-foreground">Output:</span> {example.output}</div>
                {example.explanation && (
                  <div className="text-muted-foreground text-xs mt-2">
                    <span className="font-semibold">Explanation:</span> {example.explanation}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Constraints */}
        <div className="space-y-3">
          <h3 className="font-semibold">Constraints:</h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {problem.constraints.map((constraint, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{constraint}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}