"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Clock, CheckCircle, XCircle, Play, RotateCcw, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { questionDatabase, type Question } from "@/lib/questions"

interface QuizInterfaceProps {
  language: string
}

export function QuizInterface({ language }: QuizInterfaceProps) {
  const allQuestions = questionDatabase[language] || []
  const [questions, setQuestions] = useState<Question[]>([])
  const [quizLength, setQuizLength] = useState(5)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  useEffect(() => {
    // Shuffle questions when component mounts and slice to selected length
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
    setQuestions(shuffled.slice(0, quizLength))
  }, [allQuestions, quizLength])

  useEffect(() => {
    if (quizStarted && timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && !showResult) {
      handleNext()
    }
  }, [timeLeft, quizStarted, showResult])

  const handleAnswerSelect = (index: number) => {
    if (!showResult) {
      setSelectedAnswer(index)
    }
  }

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1)
    }
    
    setShowResult(true)
  }

  const handleContinue = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
      setTimeLeft(30)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setTimeLeft(30)
    setQuizStarted(false)
    setQuizCompleted(false)
  }

  const startQuiz = () => {
    setQuizStarted(true)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-green-500 bg-green-500/10"
      case "Medium": return "text-yellow-500 bg-yellow-500/10"
      case "Hard": return "text-red-500 bg-red-500/10"
      default: return "text-primary bg-primary/10"
    }
  }

  if (allQuestions.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Quiz Not Available</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Questions for {language} are not available yet.
        </p>
        <Link href="/academy">
          <Button className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Languages
          </Button>
        </Link>
      </div>
    )
  }

  if (!quizStarted) {
    const maxQuestions = allQuestions.length
    const lengthOptions = [5, 10, 15, 20, maxQuestions].filter(n => n <= maxQuestions)
    
    return (
      <div className="max-w-4xl mx-auto p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8"
        >
          <div className="flex justify-start mb-8">
            <Link href="/academy">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Languages
              </Button>
            </Link>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl font-bold gradient-text">
              {language.charAt(0).toUpperCase() + language.slice(1)} Quiz
            </h1>
            <p className="text-xl text-muted-foreground">
              Test your {language} knowledge with interactive questions
            </p>
          </div>

          {/* Quiz Length Selector */}
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4">Choose Quiz Length</h3>
            <div className="grid grid-cols-2 gap-3">
              {lengthOptions.map((length) => (
                <button
                  key={length}
                  onClick={() => setQuizLength(length)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    quizLength === length
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border/50 hover:border-primary/50"
                  }`}
                >
                  <div className="text-2xl font-bold">{length}</div>
                  <div className="text-sm text-muted-foreground">
                    {length === maxQuestions ? 'All' : 'Questions'}
                  </div>
                </button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Available: {maxQuestions} questions total
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="p-6 rounded-xl bg-card border border-border/50">
              <div className="text-2xl font-bold text-primary mb-2">{quizLength}</div>
              <div className="text-sm text-muted-foreground">Questions</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border/50">
              <div className="text-2xl font-bold text-primary mb-2">30s</div>
              <div className="text-sm text-muted-foreground">Per Question</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border/50">
              <div className="text-2xl font-bold text-primary mb-2">Mixed</div>
              <div className="text-sm text-muted-foreground">Difficulty</div>
            </div>
          </div>

          <Button onClick={startQuiz} size="lg" className="gap-2">
            <Play className="w-5 h-5" />
            Start Quiz ({quizLength} Questions)
          </Button>
        </motion.div>
      </div>
    )
  }

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <div className="max-w-4xl mx-auto p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Quiz Completed!</h1>
            <div className="text-6xl font-bold gradient-text">{percentage}%</div>
            <p className="text-xl text-muted-foreground">
              You scored {score} out of {questions.length} questions correctly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="p-6 rounded-xl bg-card border border-border/50">
              <div className="text-2xl font-bold text-green-500 mb-2">{score}</div>
              <div className="text-sm text-muted-foreground">Correct</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border/50">
              <div className="text-2xl font-bold text-red-500 mb-2">{questions.length - score}</div>
              <div className="text-sm text-muted-foreground">Incorrect</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border/50">
              <div className="text-2xl font-bold text-primary mb-2">{percentage}%</div>
              <div className="text-sm text-muted-foreground">Score</div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Button onClick={resetQuiz} size="lg" className="gap-2">
              <RotateCcw className="w-5 h-5" />
              Try Again
            </Button>
            <Link href="/academy">
              <Button variant="outline" size="lg" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Choose Another Language
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(question.difficulty)}`}>
            {question.difficulty}
          </span>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            {question.language}
          </span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4" />
          <span className={`font-mono ${timeLeft <= 10 ? 'text-red-500' : 'text-foreground'}`}>
            {timeLeft}s
          </span>
        </div>
      </div>

      <div className="w-full bg-muted rounded-full h-2 mb-8">
        <motion.div
          className="bg-primary h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{question.question}</h2>
            
            {question.code && (
              <div className="relative">
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <Code className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-primary">{question.language}</span>
                </div>
                <pre className="bg-card border border-border/50 rounded-xl p-6 pt-12 overflow-x-auto">
                  <code className="text-sm font-mono">{question.code}</code>
                </pre>
              </div>
            )}
          </div>

          <div className="grid gap-4">
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-xl border text-left transition-all ${
                  selectedAnswer === index
                    ? showResult
                      ? index === question.correct
                        ? 'border-green-500 bg-green-500/10 text-green-500'
                        : 'border-red-500 bg-red-500/10 text-red-500'
                      : 'border-primary bg-primary/10'
                    : showResult && index === question.correct
                      ? 'border-green-500 bg-green-500/10 text-green-500'
                      : 'border-border/50 hover:border-accent/50'
                }`}
                disabled={showResult}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center text-sm font-semibold">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                  {showResult && (
                    <div className="ml-auto">
                      {index === question.correct ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : selectedAnswer === index ? (
                        <XCircle className="w-5 h-5 text-red-500" />
                      ) : null}
                    </div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="p-6 rounded-xl bg-accent/5 border border-accent/20"
              >
                <h3 className="font-semibold mb-2 text-accent">Explanation</h3>
                <p className="text-sm text-muted-foreground">{question.explanation}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {selectedAnswer !== null && !showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center"
            >
              <Button onClick={handleNext} size="lg">
                Submit Answer
              </Button>
            </motion.div>
          )}

          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center"
            >
              <Button onClick={handleContinue} size="lg">
                {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}