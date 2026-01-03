import { aiKnowledge } from './website-knowledge'

interface SearchResult {
  title: string
  snippet: string
  url: string
}

class MCPSearchClient {
  async search(query: string): Promise<SearchResult[]> {
    // Get website-specific knowledge first
    const knowledgeResults = aiKnowledge.searchKnowledge(query)
    const websiteContext = aiKnowledge.getWebsiteContext(query)
    
    // Enhanced results with actual website knowledge
    const enhancedResults: SearchResult[] = [
      {
        title: `${query} - JuTech Devs Platform`,
        snippet: `Find ${query} information across our academy, community, services, and documentation`,
        url: `/search?q=${encodeURIComponent(query)}`
      },
      ...knowledgeResults.slice(0, 3).map(result => ({
        title: `${result.key} - ${result.category}`,
        snippet: typeof result.data === 'string' ? result.data.substring(0, 150) + '...' : JSON.stringify(result.data).substring(0, 150) + '...',
        url: this.getRelevantUrl(result.category, result.key)
      })),
      {
        title: `${query} Documentation`,
        snippet: `Official documentation and guides for ${query}`,
        url: `https://docs.example.com/${query.toLowerCase()}`
      },
      {
        title: `${query} Tutorial - Programming Academy`,
        snippet: `Interactive tutorials and quizzes for ${query} in our academy`,
        url: `/academy/${query.toLowerCase()}`
      }
    ]
    
    return enhancedResults
  }

  private getRelevantUrl(category: string, key: string): string {
    const urlMap: {[key: string]: string} = {
      'services': '/services',
      'academy': '/academy', 
      'community': '/community',
      'platform': '/academy',
      'pages': '/',
      'api': '/api-reference',
      'company': '/about'
    }
    
    return urlMap[category] || '/'
  }

  async aiSearch(query: string, context?: string) {
    const webResults = await this.search(query)
    const websiteContext = aiKnowledge.getWebsiteContext(query)
    const knowledgeResults = aiKnowledge.searchKnowledge(query)
    
    // Generate comprehensive AI summary
    let aiSummary = `AI-enhanced search results for "${query}":\n\n`
    
    if (knowledgeResults.length > 0) {
      aiSummary += `Found ${knowledgeResults.length} relevant matches in JuTech Devs platform:\n`
      knowledgeResults.slice(0, 3).forEach((result, index) => {
        aiSummary += `${index + 1}. ${result.category}/${result.key}\n`
      })
      aiSummary += '\n'
    }
    
    // Add contextual information
    if (query.toLowerCase().includes('service')) {
      aiSummary += 'JuTech Devs offers: Web Development, AI Integration, Mobile Development, Consulting, Cloud Solutions, and API Development.\n\n'
    }
    
    if (query.toLowerCase().includes('academy') || query.toLowerCase().includes('learn')) {
      aiSummary += 'Our Programming Academy features 18+ programming languages with interactive quizzes, including 130+ JavaScript questions.\n\n'
    }
    
    if (query.toLowerCase().includes('community')) {
      aiSummary += 'Join our developer community for discussions, Q&A, feature requests, events, and networking with other developers.\n\n'
    }
    
    aiSummary += `Context: ${context || 'JuTech Devs comprehensive platform knowledge'}`
    
    return {
      webResults,
      aiSummary,
      context: websiteContext,
      knowledgeMatches: knowledgeResults.length,
      platformInfo: {
        totalPages: websiteContext.pages.public.length + websiteContext.pages.community.length + websiteContext.pages.auth.length,
        services: Object.keys(websiteContext.services).length,
        academyLanguages: websiteContext.platform.academy.languages.length,
        apiEndpoints: websiteContext.api.auth.length + websiteContext.api.community.length
      }
    }
  }

  // Get complete website knowledge for AI
  getFullKnowledge() {
    return aiKnowledge.getWebsiteContext()
  }

  // Answer specific questions about the website
  async answerQuestion(question: string) {
    const knowledge = this.getFullKnowledge()
    const searchResults = aiKnowledge.searchKnowledge(question)
    
    let answer = `Based on JuTech Devs platform knowledge:\n\n`
    
    if (searchResults.length > 0) {
      const topResult = searchResults[0]
      answer += `Most relevant: ${topResult.category}/${topResult.key}\n`
      answer += `Details: ${JSON.stringify(topResult.data, null, 2)}\n\n`
    }
    
    // Add general platform info
    answer += `Platform Overview:\n`
    answer += `- Company: ${knowledge.company.name} - ${knowledge.company.description}\n`
    answer += `- Services: ${Object.keys(knowledge.services).length} main services\n`
    answer += `- Academy: ${knowledge.platform.academy.languages.length} programming languages\n`
    answer += `- Community: Active developer forum with voting and reputation system\n`
    answer += `- Technology: ${knowledge.technology.frontend.join(', ')}\n`
    
    return {
      answer,
      confidence: searchResults.length > 0 ? 0.9 : 0.7,
      sources: searchResults.slice(0, 3)
    }
  }
}

export const mcpSearch = new MCPSearchClient()