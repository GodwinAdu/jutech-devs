import { EnhancedSearch } from '@/components/enhanced-search'

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Search JuTech Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find tutorials, quizzes, services, and blog posts
          </p>
        </div>
        
        <EnhancedSearch />
      </div>
    </div>
  )
}