"use client"

import { useAuth } from '@/lib/auth-context'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

export default function AuthTestPage() {
  const { user, login, register, logout, loading } = useAuth()
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [registerForm, setRegisterForm] = useState({ 
    name: '', 
    username: '', 
    email: '', 
    password: '' 
  })
  const [message, setMessage] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await login(loginForm.email, loginForm.password)
    setMessage(result.success ? 'Login successful!' : result.error || 'Login failed')
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await register(
      registerForm.name, 
      registerForm.username, 
      registerForm.email, 
      registerForm.password
    )
    setMessage(result.success ? 'Registration successful!' : result.error || 'Registration failed')
  }

  if (loading) {
    return <div className="p-8">Loading...</div>
  }

  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Authentication Test</h1>
        
        {message && (
          <div className={`p-4 rounded ${message.includes('successful') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {message}
          </div>
        )}

        {user ? (
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Logged in as:</h2>
            <div className="space-y-2">
              <p><strong>ID:</strong> {user.id}</p>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Role:</strong> {user.role}</p>
              <p><strong>Avatar:</strong> {user.avatar}</p>
            </div>
            <Button onClick={logout} className="mt-4">Logout</Button>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Login</h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  required
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  required
                />
                <Button type="submit" className="w-full">Login</Button>
              </form>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Register</h2>
              <form onSubmit={handleRegister} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={registerForm.name}
                  onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                  required
                />
                <Input
                  type="text"
                  placeholder="Username"
                  value={registerForm.username}
                  onChange={(e) => setRegisterForm({ ...registerForm, username: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={registerForm.email}
                  onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                  required
                />
                <Input
                  type="password"
                  placeholder="Password (min 6 chars)"
                  value={registerForm.password}
                  onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                  required
                />
                <Button type="submit" className="w-full">Register</Button>
              </form>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}