import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EventCard } from "@/components/community/community-cards"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, MapPin } from "lucide-react"

const events = [
  {
    id: '1',
    title: 'React Performance Workshop',
    description: 'Learn advanced React optimization techniques and best practices for building high-performance applications.',
    type: 'workshop',
    date: '2024-02-15T18:00:00Z',
    duration: 120,
    attendees: 156,
    maxAttendees: 200,
    host: { name: 'Sarah Chen', avatar: '/api/placeholder/40/40' },
    tags: ['React', 'Performance', 'Workshop'],
    status: 'upcoming' as const
  },
  {
    id: '2',
    title: 'AI in Development Webinar',
    description: 'Explore how AI is transforming software development and learn about the latest tools and techniques.',
    type: 'webinar',
    date: '2024-02-20T19:00:00Z',
    duration: 90,
    attendees: 342,
    maxAttendees: 500,
    host: { name: 'Mike Johnson', avatar: '/api/placeholder/40/40' },
    tags: ['AI', 'Development', 'Webinar'],
    status: 'live' as const
  },
  {
    id: '3',
    title: 'Hackathon 2024: Build the Future',
    description: '48-hour hackathon focused on creating innovative solutions for modern development challenges.',
    type: 'hackathon',
    date: '2024-03-01T09:00:00Z',
    duration: 2880,
    attendees: 89,
    maxAttendees: 100,
    host: { name: 'Alex Rivera', avatar: '/api/placeholder/40/40' },
    tags: ['Hackathon', 'Innovation', 'Competition'],
    status: 'upcoming' as const
  }
]

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500">Community Events</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Developer <span className="text-gradient">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join workshops, webinars, hackathons, and meetups. Learn from experts, network with peers, and grow your skills.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500">All Events</Button>
            <Button variant="outline">Workshops</Button>
            <Button variant="outline">Webinars</Button>
            <Button variant="outline">Hackathons</Button>
            <Button variant="outline">Meetups</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
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