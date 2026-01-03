"use client"

import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Mail, Users, CheckCircle, XCircle, Trash2, RotateCcw } from 'lucide-react'

interface HistoryItem {
  _id: string
  subject: string
  sections: any[]
  template: string
  recipientCount: number
  successCount: number
  failureCount: number
  sentBy: string
  sentAt: string
}

export default function NewsletterHistoryPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/community/profile')
      return
    }
    fetchHistory()
  }, [user, router])

  const fetchHistory = async () => {
    try {
      const response = await fetch('/api/newsletter/history')
      const data = await response.json()
      setHistory(data.history || [])
    } catch (error) {
      console.error('Failed to fetch history:', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteHistory = async (id: string) => {
    if (!confirm('Delete this newsletter from history?')) return

    try {
      const response = await fetch('/api/newsletter/history', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      })

      if (response.ok) {
        setHistory(prev => prev.filter(item => item._id !== id))
        setMessage('Newsletter deleted from history')
      } else {
        setMessage('Failed to delete newsletter')
      }
    } catch (error) {
      setMessage('Error deleting newsletter')
    }
    setTimeout(() => setMessage(''), 3000)
  }

  const resendNewsletter = async (item: HistoryItem) => {
    if (!confirm('Resend this newsletter to all active subscribers?')) return

    try {
      const response = await fetch('/api/newsletter/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          subject: item.subject, 
          sections: item.sections, 
          template: item.template 
        })
      })

      const data = await response.json()
      setMessage(data.message || 'Newsletter resent successfully!')
      fetchHistory()
    } catch (error) {
      setMessage('Failed to resend newsletter')
    }
    setTimeout(() => setMessage(''), 5000)
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
          <h1 className="text-3xl font-bold">Newsletter History</h1>
        </div>

        {message && (
          <div className={`p-3 rounded-md text-sm mb-6 ${
            message.includes('success') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}>
            {message}
          </div>
        )}

        {loading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <div className="space-y-4">
            {history.map((item) => (
              <Card key={item._id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Mail className="w-5 h-5" />
                        {item.subject}
                      </CardTitle>
                      <div className="text-sm text-muted-foreground mt-1">
                        Sent on {new Date(item.sentAt).toLocaleDateString()} at {new Date(item.sentAt).toLocaleTimeString()}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium capitalize">{item.template}</div>
                      <div className="flex gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => resendNewsletter(item)}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          <RotateCcw className="w-4 h-4 mr-1" />
                          Resend
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteHistory(item._id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">
                        <span className="font-medium">{item.recipientCount}</span> recipients
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">
                        <span className="font-medium">{item.successCount}</span> delivered
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-500" />
                      <span className="text-sm">
                        <span className="font-medium">{item.failureCount}</span> failed
                      </span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">Content Preview:</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      {item.sections.slice(0, 2).map((section, index) => (
                        <div key={index}>
                          {section.type === 'heading' ? (
                            <div className="font-medium">{section.content}</div>
                          ) : (
                            <div className="line-clamp-2">{section.content}</div>
                          )}
                        </div>
                      ))}
                      {item.sections.length > 2 && (
                        <div className="text-xs">... and {item.sections.length - 2} more sections</div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {history.length === 0 && (
              <Card>
                <CardContent className="text-center py-8">
                  <Mail className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No newsletters sent yet</h3>
                  <p className="text-muted-foreground">
                    Once you send newsletters, they'll appear here with delivery statistics.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  )
}