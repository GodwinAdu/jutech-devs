"use client"

import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Plus, Edit, Trash2, Calendar, MapPin, Users, Clock } from 'lucide-react'

interface Event {
  _id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  type: 'online' | 'in-person' | 'hybrid'
  maxAttendees: number | null
  registrationRequired: boolean
  status: 'draft' | 'published' | 'cancelled'
  attendees: any[]
  createdAt: string
}

export default function AdminEventsPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')
  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    type: 'online' as 'online' | 'in-person' | 'hybrid',
    category: 'meetup' as 'webinar' | 'workshop' | 'hackathon' | 'meetup' | 'conference',
    maxAttendees: '',
    registrationRequired: true,
    status: 'draft' as 'draft' | 'published' | 'cancelled',
    featured: false,
    tags: '',
    image: '',
    meetingLink: '',
    price: '',
    currency: 'USD'
  })

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/community/profile')
      return
    }
    fetchEvents()
  }, [user, router])

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events')
      const data = await response.json()
      setEvents(data.events || [])
    } catch (error) {
      console.error('Failed to fetch events:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const url = editingEvent ? `/api/events/${editingEvent._id}` : '/api/events'
      const method = editingEvent ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          maxAttendees: formData.maxAttendees ? parseInt(formData.maxAttendees) : null,
          price: formData.price ? parseFloat(formData.price) : 0,
          tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : []
        })
      })

      if (response.ok) {
        setMessage(editingEvent ? 'Event updated successfully' : 'Event created successfully')
        resetForm()
        fetchEvents()
      } else {
        setMessage('Failed to save event')
      }
    } catch (error) {
      setMessage('Error saving event')
    }
    setTimeout(() => setMessage(''), 3000)
  }

  const deleteEvent = async (id: string) => {
    if (!confirm('Delete this event?')) return

    try {
      const response = await fetch(`/api/events/${id}`, { method: 'DELETE' })
      
      if (response.ok) {
        setEvents(prev => prev.filter(event => event._id !== id))
        setMessage('Event deleted successfully')
      } else {
        setMessage('Failed to delete event')
      }
    } catch (error) {
      setMessage('Error deleting event')
    }
    setTimeout(() => setMessage(''), 3000)
  }

  const editEvent = (event: Event) => {
    setEditingEvent(event)
    setFormData({
      title: event.title,
      description: event.description,
      date: event.date.split('T')[0],
      time: event.time,
      location: event.location,
      type: event.type,
      category: (event as any).category || 'meetup',
      maxAttendees: (event as any).maxAttendees?.toString() || '',
      registrationRequired: event.registrationRequired,
      status: event.status,
      featured: (event as any).featured || false,
      tags: (event as any).tags?.join(', ') || '',
      image: (event as any).image || '',
      meetingLink: (event as any).meetingLink || '',
      price: (event as any).price?.toString() || '',
      currency: (event as any).currency || 'USD'
    })
  }

  const resetForm = () => {
    setEditingEvent(null)
    setFormData({
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      type: 'online',
      category: 'meetup',
      maxAttendees: '',
      registrationRequired: true,
      status: 'draft',
      featured: false,
      tags: '',
      image: '',
      meetingLink: '',
      price: '',
      currency: 'USD'
    })
  }

  if (!user || user.role !== 'admin') return null

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push('/admin')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Admin
          </Button>
          <h1 className="text-3xl font-bold">Event Management</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Events ({events.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {message && (
                  <div className={`p-3 rounded-md text-sm mb-4 ${
                    message.includes('success') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                  }`}>
                    {message}
                  </div>
                )}

                {loading ? (
                  <div className="text-center py-8">Loading...</div>
                ) : (
                  <div className="space-y-4">
                    {events.map((event) => (
                      <div key={event._id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold">{event.title}</h3>
                              <Badge variant={
                                event.status === 'published' ? 'default' : 
                                event.status === 'cancelled' ? 'destructive' : 'secondary'
                              }>
                                {event.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(event.date).toLocaleDateString()}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {event.time}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {event.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {event.attendees.length} attendees
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={() => editEvent(event)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => deleteEvent(event._id)}>
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    {events.length === 0 && (
                      <div className="text-center py-8 text-muted-foreground">
                        No events created yet
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  {editingEvent ? 'Edit Event' : 'Create Event'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Event title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    required
                  />
                  
                  <Textarea
                    placeholder="Event description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    rows={3}
                    required
                  />
                  
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    required
                  />
                  
                  <Input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    required
                  />
                  
                  <Input
                    placeholder="Location"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    required
                  />
                  
                  <Select value={formData.type} onValueChange={(value: any) => setFormData({...formData, type: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="online">Online</SelectItem>
                      <SelectItem value="in-person">In-Person</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select value={formData.category} onValueChange={(value: any) => setFormData({...formData, category: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="webinar">Webinar</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="hackathon">Hackathon</SelectItem>
                      <SelectItem value="meetup">Meetup</SelectItem>
                      <SelectItem value="conference">Conference</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Input
                    placeholder="Tags (comma separated)"
                    value={formData.tags}
                    onChange={(e) => setFormData({...formData, tags: e.target.value})}
                  />
                  
                  <Input
                    placeholder="Meeting link (for online events)"
                    value={formData.meetingLink}
                    onChange={(e) => setFormData({...formData, meetingLink: e.target.value})}
                  />
                  
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      type="number"
                      step="0.01"
                      placeholder="Price (0 for free)"
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                    />
                    <Select value={formData.currency} onValueChange={(value: any) => setFormData({...formData, currency: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD</SelectItem>
                        <SelectItem value="EUR">EUR</SelectItem>
                        <SelectItem value="GBP">GBP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={formData.featured}
                      onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                    />
                    <label htmlFor="featured" className="text-sm">Featured Event</label>
                  </div>
                  
                  <Input
                    type="number"
                    placeholder="Max attendees (optional)"
                    value={formData.maxAttendees}
                    onChange={(e) => setFormData({...formData, maxAttendees: e.target.value})}
                  />
                  
                  <Select value={formData.status} onValueChange={(value: any) => setFormData({...formData, status: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <div className="flex gap-2">
                    <Button type="submit" className="flex-1">
                      {editingEvent ? 'Update Event' : 'Create Event'}
                    </Button>
                    {editingEvent && (
                      <Button type="button" variant="outline" onClick={resetForm}>
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}