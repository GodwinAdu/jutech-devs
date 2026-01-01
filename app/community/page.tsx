import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PostCard, EventCard, UserProfileCard } from "@/components/community/community-cards"
import { MessageSquare, ThumbsUp, Eye, HelpCircle, Lightbulb, ArrowRight, Calendar, Users, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Community Forum | JuTech Devs",
  description:
    "Join the JuTech Devs developer community. Ask questions, share knowledge, and vote on feature requests.",
}

const categories = [
  {
    id: "discussions",
    name: "Discussions",
    description: "General discussions about development",
    icon: MessageSquare,
    topics: 1243,
    posts: 8567,
    color: "text-blue-400",
    href: "/community/discussions"
  },
  {
    id: "qa",
    name: "Q&A",
    description: "Ask questions and get answers",
    icon: HelpCircle,
    topics: 2891,
    posts: 15432,
    color: "text-purple-400",
    href: "/community/qa"
  },
  {
    id: "feature-requests",
    name: "Feature Requests",
    description: "Suggest and vote on new features",
    icon: Lightbulb,
    topics: 456,
    posts: 3241,
    color: "text-cyan-400",
    href: "/community/feature-requests"
  },
]

const featuredPosts = [
  {
    id: '1',
    title: 'Best practices for scaling React applications',
    author: { name: 'Sarah Chen', avatar: '/api/placeholder/40/40', reputation: 4582 },
    category: 'discussions',
    tags: ['React', 'Performance', 'Best Practices'],
    votes: 45,
    replies: 23,
    views: 1245,
    solved: false,
    pinned: true,
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'How to implement real-time notifications in Next.js?',
    author: { name: 'Mike Johnson', avatar: '/api/placeholder/40/40', reputation: 3891 },
    category: 'qa',
    tags: ['Next.js', 'Real-time', 'WebSocket'],
    votes: 34,
    replies: 12,
    views: 892,
    solved: true,
    pinned: false,
    createdAt: '2024-01-14T15:30:00Z'
  }
]

const upcomingEvents = [
  {
    id: '1',
    title: 'React Performance Workshop',
    description: 'Learn advanced React optimization techniques',
    type: 'workshop',
    date: '2024-02-15T18:00:00Z',
    duration: 120,
    attendees: 156,
    maxAttendees: 200,
    host: { name: 'Sarah Chen', avatar: '/api/placeholder/40/40' },
    tags: ['React', 'Performance'],
    status: 'upcoming' as const
  }
]

const topContributors = [
  {
    name: 'Sarah Chen',
    username: 'sarahc',
    avatar: '/api/placeholder/40/40',
    reputation: 4582,
    badges: [
      { name: 'Expert', icon: '🏆', color: 'gold' },
      { name: 'Helper', icon: '🤝', color: 'blue' }
    ],
    posts: 342,
    location: 'San Francisco, CA'
  },
  {
    name: 'Mike Johnson',
    username: 'mikej',
    avatar: '/api/placeholder/40/40',
    reputation: 3891,
    badges: [
      { name: 'Mentor', icon: '👨🏫', color: 'purple' }
    ],
    posts: 289,
    location: 'New York, NY'
  }
]

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500">Community Forum</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Join Our Developer Community
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with thousands of developers. Ask questions, share knowledge, and help shape the future of JuTech
              Devs products.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                asChild
              >
                <Link href="/community/discussions">Start a Discussion</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/community/qa">Browse Topics</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                12.5K+
              </div>
              <div className="text-sm text-muted-foreground mt-2">Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                4.6K+
              </div>
              <div className="text-sm text-muted-foreground mt-2">Topics</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                27.2K+
              </div>
              <div className="text-sm text-muted-foreground mt-2">Posts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-sm text-muted-foreground mt-2">Solved Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Forum Categories</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Link key={category.id} href={category.href}>
                  <Card className="p-6 hover:border-blue-500/50 transition-all group cursor-pointer h-full">
                    <Icon className={`w-12 h-12 mb-4 ${category.color}`} />
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>{category.topics.toLocaleString()} topics</span>
                      <span>{category.posts.toLocaleString()} posts</span>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Featured Posts */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Featured Posts</h2>
                <Button variant="outline" asChild>
                  <Link href="/community/discussions">
                    View All <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="space-y-4">
                {featuredPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Upcoming Events</h2>
                <Button variant="outline" asChild>
                  <Link href="/community/events">
                    View All <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Contributors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Top Contributors</h2>
              <p className="text-muted-foreground">Our most active community members</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/community/leaderboard">
                View Leaderboard <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {topContributors.map((contributor, index) => (
              <UserProfileCard key={contributor.name} user={contributor} rank={index + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Conversation?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create an account to start asking questions, sharing knowledge, and connecting with developers worldwide.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              Sign Up Now
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
