"use client"

import { motion } from "framer-motion"
import { CheckCircle, XCircle, Clock } from "lucide-react"

interface TestResult {
  id: number
  input: any
  expected: any
  actual: any
  passed: boolean
  runtime: number
  error?: string
}

interface TestResultsProps {
  results: TestResult[]
}

export function TestResults({ results }: TestResultsProps) {
  const passedCount = results.filter(r => r.passed).length
  const totalCount = results.length
  const allPassed = passedCount === totalCount

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      className="p-4 space-y-4"
    >
      {/* Summary */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {allPassed ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <XCircle className="w-5 h-5 text-red-500" />
          )}
          <span className="font-semibold">
            {allPassed ? "All tests passed!" : `${passedCount}/${totalCount} tests passed`}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>Avg: {Math.round(results.reduce((acc, r) => acc + r.runtime, 0) / results.length)}ms</span>
        </div>
      </div>

      {/* Test Cases */}
      <div className="space-y-2 max-h-60 overflow-y-auto">
        {results.map((result, index) => (
          <div
            key={result.id}
            className={`p-3 rounded-lg border text-sm ${
              result.passed
                ? "border-green-500/20 bg-green-500/5"
                : "border-red-500/20 bg-red-500/5"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {result.passed ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-500" />
                )}
                <span className="font-medium">Test Case {index + 1}</span>
              </div>
              <span className="text-xs text-muted-foreground">{result.runtime}ms</span>
            </div>
            
            <div className="space-y-1 font-mono text-xs">
              <div><span className="text-muted-foreground">Input:</span> {JSON.stringify(result.input)}</div>
              <div><span className="text-muted-foreground">Expected:</span> {JSON.stringify(result.expected)}</div>
              <div><span className="text-muted-foreground">Actual:</span> {JSON.stringify(result.actual)}</div>
              {result.error && (
                <div className="text-red-400"><span className="text-muted-foreground">Error:</span> {result.error}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}