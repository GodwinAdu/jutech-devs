"use client"

import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, Trash2, Search, Users, Mail, Send } from 'lucide-react'

interface Subscriber {
  _id: string
  email: string
  status: string
  subscribedAt: string
}

export default function AdminSubscribersPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [filteredSubscribers, setFilteredSubscribers] = useState<Subscriber[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')
  const [emailSubject, setEmailSubject] = useState('')
  const [emailContent, setEmailContent] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [bulkEmailSubject, setBulkEmailSubject] = useState('')
  const [bulkEmailContent, setBulkEmailContent] = useState('')
  const [isSendingBulk, setIsSendingBulk] = useState(false)

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/community/profile')
      return
    }
    fetchSubscribers()
  }, [user, router])

  useEffect(() => {
    const filtered = subscribers.filter(sub => 
      sub.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredSubscribers(filtered)
  }, [searchTerm, subscribers])

  const fetchSubscribers = async () => {
    try {
      const response = await fetch('/api/newsletter/manage')
      const data = await response.json()
      setSubscribers(data.subscribers || [])
      setFilteredSubscribers(data.subscribers || [])
    } catch (error) {
      console.error('Failed to fetch subscribers:', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteSubscriber = async (id: string, email: string) => {
    if (!confirm(`Delete subscriber ${email}?`)) return

    try {
      const response = await fetch('/api/newsletter/manage', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      })

      if (response.ok) {
        setSubscribers(prev => prev.filter(sub => sub._id !== id))
        setMessage('Subscriber deleted successfully')
      } else {
        setMessage('Failed to delete subscriber')
      }
    } catch (error) {
      setMessage('Error deleting subscriber')
    }
    setTimeout(() => setMessage(''), 3000)
  }

  const sendEmailToSubscriber = async (email: string) => {
    if (!emailSubject || !emailContent) {
      setMessage('Subject and content are required')
      setTimeout(() => setMessage(''), 3000)
      return
    }

    setIsSending(true)
    try {
      const response = await fetch('/api/newsletter/send-individual', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          subject: emailSubject, 
          content: emailContent 
        })
      })

      const data = await response.json()
      setMessage(data.message || 'Email sent successfully!')
      setEmailSubject('')
      setEmailContent('')
    } catch (error) {
      setMessage('Failed to send email')
    } finally {
      setIsSending(false)
      setTimeout(() => setMessage(''), 5000)
    }
  }

  const sendBulkEmail = async () => {
    if (!bulkEmailSubject || !bulkEmailContent) {
      setMessage('Subject and content are required')
      setTimeout(() => setMessage(''), 3000)
      return
    }

    const activeSubscribers = filteredSubscribers.filter(sub => sub.status === 'active')
    if (activeSubscribers.length === 0) {
      setMessage('No active subscribers to send to')
      setTimeout(() => setMessage(''), 3000)
      return
    }

    if (!confirm(`Send email to ${activeSubscribers.length} active subscribers?`)) return

    setIsSendingBulk(true)
    try {
      const response = await fetch('/api/newsletter/send-bulk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          subject: bulkEmailSubject, 
          content: bulkEmailContent,
          subscribers: activeSubscribers.map(sub => sub.email)
        })
      })

      const data = await response.json()
      setMessage(data.message || 'Bulk email sent successfully!')
      setBulkEmailSubject('')
      setBulkEmailContent('')
    } catch (error) {
      setMessage('Failed to send bulk email')
    } finally {
      setIsSendingBulk(false)
      setTimeout(() => setMessage(''), 5000)
    }
  }

  if (!user || user.role !== 'admin') return null

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push('/admin/newsletter')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Newsletter
          </Button>
          <h1 className="text-3xl font-bold">Subscriber Management</h1>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Subscribers ({filteredSubscribers.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search subscribers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Bulk Email
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Send Bulk Email</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      Sending to {filteredSubscribers.filter(sub => sub.status === 'active').length} active subscribers
                    </div>
                    <Input
                      placeholder="Subject..."
                      value={bulkEmailSubject}
                      onChange={(e) => setBulkEmailSubject(e.target.value)}
                    />
                    <Textarea
                      placeholder="Email content..."
                      value={bulkEmailContent}
                      onChange={(e) => setBulkEmailContent(e.target.value)}
                      rows={8}
                    />
                    <Button 
                      onClick={sendBulkEmail}
                      disabled={isSendingBulk}
                      className="w-full"
                    >
                      {isSendingBulk ? 'Sending...' : 'Send to All Active Subscribers'}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

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
              <div className="space-y-2">
                {filteredSubscribers.map((subscriber) => (
                  <div key={subscriber._id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">{subscriber.email}</div>
                      <div className="text-sm text-muted-foreground">
                        Subscribed: {new Date(subscriber.subscribedAt).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        subscriber.status === 'active' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {subscriber.status}
                      </span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-blue-600 hover:text-blue-700"
                          >
                            <Mail className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Send Email to {subscriber.email}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <Input
                              placeholder="Subject..."
                              value={emailSubject}
                              onChange={(e) => setEmailSubject(e.target.value)}
                            />
                            <Textarea
                              placeholder="Email content..."
                              value={emailContent}
                              onChange={(e) => setEmailContent(e.target.value)}
                              rows={6}
                            />
                            <Button 
                              onClick={() => sendEmailToSubscriber(subscriber.email)}
                              disabled={isSending}
                              className="w-full"
                            >
                              {isSending ? 'Sending...' : 'Send Email'}
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteSubscriber(subscriber._id, subscriber.email)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                {filteredSubscribers.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    No subscribers found
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}