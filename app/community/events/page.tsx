"use client"

import { useEffect, useState } from 'react'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EventCard } from "@/components/community/community-cards"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, MapPin, Loader2 } from "lucide-react"
import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'

interface Event {
  _id: string
  title: string
  description: string
  type: string
  date: string
  duration: number
  attendees: any[]
  maxAttendees: number
  host: {
    name: string
    avatar: string
  }
  tags: string[]
  status: 'upcoming' | 'live' | 'completed'
}

export default function EventsPage() {
  const { user } = useAuth()
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  const fetchEvents = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams({
        limit: '20',
        ...(filter !== 'all' && { type: filter })
      })
      
      const response = await fetch(`/api/community/events?${params}`)
      const data = await response.json()
      
      if (response.ok) {
        setEvents(data.events)
      }
    } catch (error) {
      console.error('Failed to fetch events:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEvents()
  }, [filter])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-28 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500">Community Events</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Developer <span className="text-gradient">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join workshops, webinars, hackathons, and meetups. Learn from experts, network with peers, and grow your skills.
            </p>
            {user?.role === 'admin' && (
              <Button className="bg-gradient-to-r from-green-500 to-blue-500" asChild>
                <Link href="/community/events/create">Create Event</Link>
              </Button>
            )}
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              className={filter === 'all' ? 'bg-gradient-to-r from-blue-500 to-purple-500' : ''}
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
            >
              All Events
            </Button>
            <Button 
              variant={filter === 'workshop' ? 'default' : 'outline'}
              onClick={() => setFilter('workshop')}
            >
              Workshops
            </Button>
            <Button 
              variant={filter === 'webinar' ? 'default' : 'outline'}
              onClick={() => setFilter('webinar')}
            >
              Webinars
            </Button>
            <Button 
              variant={filter === 'hackathon' ? 'default' : 'outline'}
              onClick={() => setFilter('hackathon')}
            >
              Hackathons
            </Button>
            <Button 
              variant={filter === 'meetup' ? 'default' : 'outline'}
              onClick={() => setFilter('meetup')}
            >
              Meetups
            </Button>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <EventCard key={event._id} event={{
                  id: event._id,
                  title: event.title,
                  description: event.description,
                  type: event.type,
                  date: event.date,
                  duration: event.duration,
                  attendees: event.attendees.length,
                  maxAttendees: event.maxAttendees,
                  host: event.host,
                  tags: event.tags,
                  status: event.status
                }} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Host Your Own Event</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Share your knowledge with the community. Host workshops, webinars, or organize meetups.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500">
            Create Event
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}