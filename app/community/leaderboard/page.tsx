import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { UserProfileCard } from "@/components/community/community-cards"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Trophy, Star, TrendingUp, Award } from "lucide-react"

const topUsers = [
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
      { name: 'Mentor', icon: '👨‍🏫', color: 'purple' },
      { name: 'Contributor', icon: '💡', color: 'green' }
    ],
    posts: 289,
    location: 'New York, NY'
  },
  {
    name: 'Alex Rivera',
    username: 'alexr',
    avatar: '/api/placeholder/40/40',
    reputation: 3654,
    badges: [
      { name: 'Innovator', icon: '🚀', color: 'orange' },
      { name: 'Problem Solver', icon: '🧩', color: 'cyan' }
    ],
    posts: 267,
    location: 'Austin, TX'
  }
]

const achievements = [
  { title: 'Most Helpful Answers', winner: 'Sarah Chen', count: 156, icon: '🤝' },
  { title: 'Best Questions', winner: 'Mike Johnson', count: 89, icon: '❓' },
  { title: 'Most Upvoted Posts', winner: 'Alex Rivera', count: 1247, icon: '👍' },
  { title: 'Community Champion', winner: 'Emma Davis', count: 45, icon: '🏆' }
]

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-yellow-500 to-orange-500">Leaderboard</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Community <span className="text-gradient">Champions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Celebrating our most active and helpful community members. Earn reputation, badges, and recognition.
            </p>
          </div>

          {/* Top 3 Podium */}
          <div className="flex justify-center items-end gap-8 mb-16">
            {/* 2nd Place */}
            <div className="text-center">
              <div className="w-24 h-32 bg-gradient-to-t from-gray-400 to-gray-300 rounded-t-lg flex items-end justify-center pb-4 mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <UserProfileCard user={topUsers[1]} />
            </div>
            
            {/* 1st Place */}
            <div className="text-center">
              <div className="w-24 h-40 bg-gradient-to-t from-yellow-500 to-yellow-400 rounded-t-lg flex items-end justify-center pb-4 mb-4">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <UserProfileCard user={topUsers[0]} />
            </div>
            
            {/* 3rd Place */}
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-t from-orange-500 to-orange-400 rounded-t-lg flex items-end justify-center pb-4 mb-4">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <UserProfileCard user={topUsers[2]} />
            </div>
          </div>

          {/* Achievements */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Monthly Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 text-center hover:border-accent/50 transition-all">
                  <div className="text-4xl mb-3">{achievement.icon}</div>
                  <h3 className="font-bold mb-2">{achievement.title}</h3>
                  <p className="text-accent font-semibold mb-1">{achievement.winner}</p>
                  <p className="text-sm text-muted-foreground">{achievement.count} points</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Full Leaderboard */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Full Leaderboard</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">This Week</Button>
                <Button variant="outline" size="sm">This Month</Button>
                <Button size="sm">All Time</Button>
              </div>
            </div>

            <Card className="overflow-hidden">
              <div className="p-6">
                <div className="space-y-4">
                  {topUsers.map((user, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{user.name}</h3>
                          <div className="flex gap-1">
                            {user.badges.map((badge, i) => (
                              <span key={i} className="text-sm" title={badge.name}>
                                {badge.icon}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">@{user.username}</p>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-accent font-semibold">
                          <Star className="w-4 h-4" />
                          {user.reputation.toLocaleString()}
                        </div>
                        <p className="text-sm text-muted-foreground">{user.posts} posts</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  )
}