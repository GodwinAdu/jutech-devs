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
import { ArrowLeft, Send, Users, Mail, Plus, X, Eye, Save, FileText, History, Layers, Trash2 } from 'lucide-react'

interface ContentSection {
  id: string
  type: 'heading' | 'paragraph'
  content: string
}

interface Draft {
  _id: string
  title: string
  subject: string
  sections: ContentSection[]
  template: string
  updatedAt: string
}

interface Template {
  _id: string
  name: string
  description: string
  subject: string
  sections: ContentSection[]
  template: string
}

export default function AdminNewsletterPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [subject, setSubject] = useState('')
  const [sections, setSections] = useState<ContentSection[]>([{ id: '1', type: 'paragraph', content: '' }])
  const [template, setTemplate] = useState('announcement')
  const [isSending, setIsSending] = useState(false)
  const [subscriberCount, setSubscriberCount] = useState(0)
  const [message, setMessage] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [drafts, setDrafts] = useState<Draft[]>([])
  const [templates, setTemplates] = useState<Template[]>([])
  const [draftTitle, setDraftTitle] = useState('')

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/community/profile')
      return
    }
    fetchSubscriberCount()
    fetchDrafts()
    fetchTemplates()
  }, [user, router])

  const fetchSubscriberCount = async () => {
    try {
      const response = await fetch('/api/newsletter/subscribers')
      const data = await response.json()
      setSubscriberCount(data.count || 0)
    } catch (error) {
      console.error('Failed to fetch subscriber count:', error)
    }
  }

  const fetchDrafts = async () => {
    try {
      const response = await fetch('/api/newsletter/drafts')
      const data = await response.json()
      setDrafts(data.drafts || [])
    } catch (error) {
      console.error('Failed to fetch drafts:', error)
    }
  }

  const fetchTemplates = async () => {
    try {
      const response = await fetch('/api/newsletter/templates')
      const data = await response.json()
      setTemplates(data.templates || [])
    } catch (error) {
      console.error('Failed to fetch templates:', error)
    }
  }

  const saveDraft = async () => {
    if (!draftTitle || !subject) {
      setMessage('Title and subject are required to save draft')
      setTimeout(() => setMessage(''), 3000)
      return
    }

    try {
      const response = await fetch('/api/newsletter/drafts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: draftTitle, subject, sections, template })
      })

      if (response.ok) {
        setMessage('Draft saved successfully')
        fetchDrafts()
        setDraftTitle('')
      } else {
        setMessage('Failed to save draft')
      }
    } catch (error) {
      setMessage('Error saving draft')
    }
    setTimeout(() => setMessage(''), 3000)
  }

  const loadDraft = (draft: Draft) => {
    setSubject(draft.subject)
    setSections(draft.sections)
    setTemplate(draft.template)
    setDraftTitle(draft.title)
  }

  const deleteDraft = async (id: string) => {
    if (!confirm('Delete this draft?')) return

    try {
      const response = await fetch('/api/newsletter/drafts', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      })

      if (response.ok) {
        setDrafts(prev => prev.filter(draft => draft._id !== id))
        setMessage('Draft deleted successfully')
      } else {
        setMessage('Failed to delete draft')
      }
    } catch (error) {
      setMessage('Error deleting draft')
    }
    setTimeout(() => setMessage(''), 3000)
  }

  const loadTemplate = (template: Template) => {
    setSubject(template.subject)
    setSections(template.sections)
    setTemplate(template.template)
  }

  const addSection = (type: 'heading' | 'paragraph') => {
    const newSection: ContentSection = {
      id: Date.now().toString(),
      type,
      content: ''
    }
    setSections([...sections, newSection])
  }

  const updateSection = (id: string, content: string) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, content } : section
    ))
  }

  const removeSection = (id: string) => {
    if (sections.length > 1) {
      setSections(sections.filter(section => section.id !== id))
    }
  }

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!subject || sections.every(s => !s.content.trim())) return

    setIsSending(true)
    try {
      const response = await fetch('/api/newsletter/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, sections, template })
      })

      const data = await response.json()
      setMessage(data.message || 'Newsletter sent successfully!')
      if (response.ok) {
        setSubject('')
        setSections([{ id: '1', type: 'paragraph', content: '' }])
      }
    } catch (error) {
      setMessage('Failed to send newsletter. Please try again.')
    } finally {
      setIsSending(false)
      setTimeout(() => setMessage(''), 5000)
    }
  }

  const templateTypes = {
    announcement: 'Product Announcement',
    update: 'Platform Update',
    newsletter: 'Weekly Newsletter',
    promotion: 'Special Promotion'
  }

  if (!user || user.role !== 'admin') {
    return null
  }

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
          <h1 className="text-3xl font-bold">Newsletter Management</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Subscribers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{subscriberCount}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Drafts</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{drafts.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Templates</CardTitle>
              <Layers className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{templates.length}</div>
            </CardContent>
          </Card>
          <Card className="cursor-pointer" onClick={() => router.push('/admin/newsletter/history')}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">History</CardTitle>
              <History className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">View sent</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Create Newsletter
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSend} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Template Type</label>
                      <Select value={template} onValueChange={setTemplate}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(templateTypes).map(([key, label]) => (
                            <SelectItem key={key} value={key}>{label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Recipients</label>
                      <div className="flex gap-2">
                        <div className="px-3 py-2 bg-muted rounded-md text-sm flex-1">
                          All Active ({subscriberCount})
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => router.push('/admin/subscribers')}
                        >
                          Manage
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject Line</label>
                    <Input
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Enter newsletter subject..."
                      required
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <label className="text-sm font-medium">Content Sections</label>
                      <div className="flex gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => addSection('heading')}
                        >
                          <Plus className="w-4 h-4 mr-1" />
                          Heading
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => addSection('paragraph')}
                        >
                          <Plus className="w-4 h-4 mr-1" />
                          Paragraph
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {sections.map((section, index) => (
                        <div key={section.id} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium capitalize">
                              {section.type} {index + 1}
                            </span>
                            {sections.length > 1 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeSection(section.id)}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                          {section.type === 'heading' ? (
                            <Input
                              value={section.content}
                              onChange={(e) => updateSection(section.id, e.target.value)}
                              placeholder="Enter heading text..."
                            />
                          ) : (
                            <Textarea
                              value={section.content}
                              onChange={(e) => updateSection(section.id, e.target.value)}
                              placeholder="Enter paragraph content..."
                              rows={4}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {message && (
                    <div className={`p-3 rounded-md text-sm ${
                      message.includes('success') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                    }`}>
                      {message}
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button type="button" variant="outline">
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Email Preview</DialogTitle>
                        </DialogHeader>
                        <div className="border rounded-lg p-4 bg-gray-50">
                          <div className="bg-white rounded shadow-sm p-6">
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t text-center">
                              <h1 className="text-2xl font-bold">JuTech Devs</h1>
                              <p className="opacity-90">Building the Future of Technology</p>
                            </div>
                            <div className="p-6">
                              <h2 className="text-xl font-semibold mb-4">{subject}</h2>
                              {sections.map((section, index) => (
                                <div key={index} className="mb-4">
                                  {section.type === 'heading' ? (
                                    <h3 className="text-lg font-semibold text-gray-800">{section.content}</h3>
                                  ) : (
                                    <p className="text-gray-600 leading-relaxed">{section.content}</p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button type="button" variant="outline">
                          <Save className="w-4 h-4 mr-2" />
                          Save Draft
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Save Draft</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <Input
                            placeholder="Draft title..."
                            value={draftTitle}
                            onChange={(e) => setDraftTitle(e.target.value)}
                          />
                          <Button onClick={saveDraft} className="w-full">
                            Save Draft
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button type="submit" disabled={isSending} className="flex-1">
                      <Send className="w-4 h-4 mr-2" />
                      {isSending ? 'Sending...' : 'Send Newsletter'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Drafts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {drafts.map((draft) => (
                    <div key={draft._id} className="p-3 border rounded hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 cursor-pointer" onClick={() => loadDraft(draft)}>
                          <div className="font-medium text-sm">{draft.title}</div>
                          <div className="text-xs text-muted-foreground">{new Date(draft.updatedAt).toLocaleDateString()}</div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteDraft(draft._id)}
                          className="text-red-600 hover:text-red-700 ml-2"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  {drafts.length === 0 && (
                    <div className="text-sm text-muted-foreground text-center py-4">No drafts saved</div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {templates.map((template) => (
                    <div key={template._id} className="p-3 border rounded cursor-pointer hover:bg-gray-50" onClick={() => loadTemplate(template)}>
                      <div className="font-medium text-sm">{template.name}</div>
                      <div className="text-xs text-muted-foreground">{template.description}</div>
                    </div>
                  ))}
                  {templates.length === 0 && (
                    <div className="text-sm text-muted-foreground text-center py-4">No templates available</div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}