"use client"

import { useEffect, useRef } from "react"

interface CodeEditorProps {
  code: string
  onChange: (code: string) => void
  language: string
}

export function CodeEditor({ code, onChange, language }: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      // Auto-resize textarea
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = Math.max(400, textareaRef.current.scrollHeight) + 'px'
    }
  }, [code])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const textarea = e.target as HTMLTextAreaElement
      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const newValue = code.substring(0, start) + '    ' + code.substring(end)
      onChange(newValue)
      
      // Set cursor position after the inserted tab
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 4
      }, 0)
    }
  }

  return (
    <div className="relative h-full bg-[#1e1e1e] text-white">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Line numbers */}
        <div className="absolute left-0 top-0 w-12 h-full bg-[#252526] border-r border-[#3e3e42] text-[#858585] text-sm font-mono leading-6 pt-4 text-center select-none">
          {code.split('\n').map((_, index) => (
            <div key={index} className="h-6">
              {index + 1}
            </div>
          ))}
        </div>
        
        {/* Code textarea */}
        <textarea
          ref={textareaRef}
          value={code}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full h-full pl-16 pr-4 py-4 bg-transparent border-0 outline-0 resize-none font-mono text-sm leading-6 text-white"
          placeholder="Write your code here..."
          spellCheck={false}
          style={{ 
            minHeight: '400px',
            fontFamily: 'Consolas, "Courier New", monospace'
          }}
        />
      </div>
    </div>
  )
}