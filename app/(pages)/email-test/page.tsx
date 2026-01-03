"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

export default function EmailTestPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [type, setType] = useState('test')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  const sendTestEmail = async () => {
    if (!email) {
      setResult('Email address is required')
      return
    }

    setLoading(true)
    setResult('')

    try {
      const response = await fetch('/api/email/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: email,
          type,
          name: name || 'Test User',
          resetToken: 'test-token-123'
        })
      })

      const data = await response.json()

      if (response.ok) {
        setResult(`✅ Email sent successfully! Message ID: ${data.messageId}`)
      } else {
        setResult(`❌ Failed to send email: ${data.error}`)
      }
    } catch (error) {
      setResult(`❌ Error: ${(error as Error).message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Email System Test</h1>
          <p className="text-muted-foreground">Test the email functionality of the application</p>
        </div>

        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="test@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Test User"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="type">Email Type</Label>
              <select 
                id="type"
                value={type} 
                onChange={(e) => setType(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="test">Test Email</option>
                <option value="welcome">Welcome Email</option>
                <option value="password-reset">Password Reset Email</option>
              </select>
            </div>

            <Button 
              onClick={sendTestEmail} 
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Sending...' : 'Send Test Email'}
            </Button>

            {result && (
              <div className={`p-4 rounded-lg ${
                result.includes('✅') 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {result}
              </div>
            )}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Setup Instructions</h2>
          <div className="space-y-3 text-sm">
            <div>
              <h3 className="font-semibold">Environment Variables (.env.local):</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                <li>SMTP_HOST=smtp.gmail.com</li>
                <li>SMTP_PORT=587</li>
                <li>SMTP_USER=your-email@gmail.com</li>
                <li>SMTP_PASS=your-app-password</li>
                <li>FROM_EMAIL=noreply@jutechdevs.com</li>
                <li>FROM_NAME=JuTech Devs</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}