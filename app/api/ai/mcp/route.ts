import { NextRequest, NextResponse } from 'next/server'
import { mcpSearch } from '@/lib/mcp-client'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')
    const type = searchParams.get('type') || 'search'

    if (type === 'knowledge') {
      const knowledge = mcpSearch.getFullKnowledge()
      return NextResponse.json({
        type: 'knowledge',
        data: knowledge,
        timestamp: new Date().toISOString()
      })
    }

    if (type === 'question' && query) {
      const answer = await mcpSearch.answerQuestion(query)
      return NextResponse.json({
        type: 'question',
        query,
        ...answer,
        timestamp: new Date().toISOString()
      })
    }

    if (query) {
      const results = await mcpSearch.aiSearch(query, 'JuTech Devs platform search')
      return NextResponse.json({
        type: 'search',
        query,
        ...results,
        timestamp: new Date().toISOString()
      })
    }

    return NextResponse.json({
      error: 'Missing query parameter',
      usage: {
        search: '/api/ai/mcp?q=your-query',
        knowledge: '/api/ai/mcp?type=knowledge',
        question: '/api/ai/mcp?type=question&q=your-question'
      }
    }, { status: 400 })

  } catch (error) {
    console.error('MCP API error:', error)
    return NextResponse.json({ 
      error: 'Failed to process request',
      details: (error as Error).message 
    }, { status: 500 })
  }
}