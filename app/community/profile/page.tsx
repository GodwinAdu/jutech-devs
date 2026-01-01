"use client"

import { ProtectedRoute } from '@/components/protected-route'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/lib/auth-context'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Calendar, MapPin, Globe, Github, Twitter, Trophy, Star } from 'lucide-react'

export default function ProfilePage() {
  const { user } = useAuth()

  if (!user) return null

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-background">
        <Navigation />
        
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Profile Info */}
                <div className="flex-1">
                  <div className="flex items-start gap-6 mb-6">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback className="text-2xl">{user.name[0]}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                      <p className="text-lg text-muted-foreground mb-4">@{user.username}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Joined January 2024
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          Location
                        </div>
                      </div>
                      
                      <div className="flex gap-2 mb-4">
                        <Button variant="outline" size="sm">Edit Profile</Button>
                        <Button variant="outline" size="sm">Settings</Button>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">About</h3>
                    <p className="text-muted-foreground">
                      Passionate developer interested in modern web technologies, AI, and open source contributions.
                    </p>
                  </div>

                  {/* Links */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Links</h3>
                    <div className="flex gap-4">
                      <Button variant="ghost" size="sm" className="p-2">
                        <Globe className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2">
                        <Twitter className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Stats & Badges */}
                <div className="md:w-80 space-y-6">
                  {/* Stats */}
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">Statistics</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Reputation</span>
                        <div className="flex items-center gap-1 text-accent font-semibold">
                          <Star className="w-4 h-4" />
                          1,234
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Posts</span>
                        <span className="font-semibold">42</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Replies</span>
                        <span className="font-semibold">156</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Votes Received</span>
                        <span className="font-semibold">89</span>
                      </div>
                    </div>
                  </Card>

                  {/* Badges */}
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Trophy className="w-4 h-4" />
                      Badges
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                        <span className="text-2xl">👋</span>
                        <div>
                          <div className="font-medium text-sm">Newcomer</div>
                          <div className="text-xs text-muted-foreground">Welcome to the community!</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                        <span className="text-2xl">💡</span>
                        <div>
                          <div className="font-medium text-sm">First Post</div>
                          <div className="text-xs text-muted-foreground">Created your first post</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <Footer />
      </main>
    </ProtectedRoute>
  )
}