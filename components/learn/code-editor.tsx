"use client"

import { useState } from "react"
import { Play, RotateCcw, Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CodeEditorProps {
  initialHtml?: string
  initialCss?: string
  initialJs?: string
  lesson?: string
  onComplete?: () => void
  htmlOnly?: boolean
  cssOnly?: boolean
  jsOnly?: boolean
}

export function CodeEditor({ 
  initialHtml = "", 
  initialCss = "", 
  initialJs = "",
  lesson = "Interactive Lesson",
  onComplete,
  htmlOnly = false,
  cssOnly = false,
  jsOnly = false
}: CodeEditorProps) {
  const [html, setHtml] = useState(initialHtml)
  const [css, setCss] = useState(initialCss)
  const [js, setJs] = useState(initialJs)
  const [output, setOutput] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)

  const runCode = () => {
    const combinedCode = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `
    setOutput(combinedCode)
  }

  const resetCode = () => {
    setHtml(initialHtml)
    setCss(initialCss)
    setJs(initialJs)
    setOutput("")
    setIsCompleted(false)
  }

  const markComplete = () => {
    setIsCompleted(true)
    onComplete?.()
  }

  return (
    <div className="grid lg:grid-cols-2 gap-6 h-[600px]">
      {/* Code Editor */}
      <Card className="flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-semibold">{lesson}</h3>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={resetCode}>
              <RotateCcw className="w-4 h-4 mr-1" />
              Reset
            </Button>
            <Button size="sm" onClick={runCode}>
              <Play className="w-4 h-4 mr-1" />
              Run
            </Button>
          </div>
        </div>

        <Tabs defaultValue={htmlOnly ? "html" : cssOnly ? "css" : jsOnly ? "js" : "html"} className="flex-1 flex flex-col">
          <TabsList className="mx-4 mt-4">
            {!cssOnly && !jsOnly && <TabsTrigger value="html">HTML</TabsTrigger>}
            {!htmlOnly && !jsOnly && <TabsTrigger value="css">CSS</TabsTrigger>}
            {!htmlOnly && !cssOnly && <TabsTrigger value="js">JavaScript</TabsTrigger>}
          </TabsList>

          {!cssOnly && !jsOnly && (
            <TabsContent value="html" className="flex-1 m-4 mt-2">
              <textarea
                value={html}
                onChange={(e) => setHtml(e.target.value)}
                className="w-full h-full p-4 font-mono text-sm bg-muted rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter your HTML code here..."
              />
            </TabsContent>
          )}

          {!htmlOnly && !jsOnly && (
            <TabsContent value="css" className="flex-1 m-4 mt-2">
              <textarea
                value={css}
                onChange={(e) => setCss(e.target.value)}
                className="w-full h-full p-4 font-mono text-sm bg-muted rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter your CSS code here..."
              />
            </TabsContent>
          )}

          {!htmlOnly && !cssOnly && (
            <TabsContent value="js" className="flex-1 m-4 mt-2">
              <textarea
                value={js}
                onChange={(e) => setJs(e.target.value)}
                className="w-full h-full p-4 font-mono text-sm bg-muted rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter your JavaScript code here..."
              />
            </TabsContent>
          )}
        </Tabs>
      </Card>

      {/* Output Preview */}
      <Card className="flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-semibold">Preview</h3>
          {!isCompleted && (
            <Button size="sm" variant="outline" onClick={markComplete}>
              <Check className="w-4 h-4 mr-1" />
              Mark Complete
            </Button>
          )}
          {isCompleted && (
            <div className="flex items-center gap-2 text-green-500 text-sm">
              <Check className="w-4 h-4" />
              Completed
            </div>
          )}
        </div>

        <div className="flex-1 p-4">
          {output ? (
            <iframe
              srcDoc={output}
              className="w-full h-full border rounded-lg"
              title="Code Output"
            />
          ) : (
            <div className="w-full h-full border rounded-lg flex items-center justify-center text-muted-foreground">
              Click "Run" to see your code output
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}