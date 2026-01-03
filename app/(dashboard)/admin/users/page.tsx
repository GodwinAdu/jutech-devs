'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Edit, Trash2, UserPlus, Ban, Shield, ArrowLeft, Mail, Send } from 'lucide-react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { useAuth } from '@/lib/auth-context'
import Link from 'next/link'

export default function AdminUsersPage() {
  const { user: currentUser } = useAuth()
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingUser, setEditingUser] = useState<any>(null)
  const [editForm, setEditForm] = useState({ name: '', email: '', bio: '' })
  const [emailingUser, setEmailingUser] = useState<any>(null)
  const [emailSubject, setEmailSubject] = useState('')
  const [emailContent, setEmailContent] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [bulkEmailSubject, setBulkEmailSubject] = useState('')
  const [bulkEmailContent, setBulkEmailContent] = useState('')
  const [isSendingBulk, setIsSendingBulk] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (currentUser) {
      fetchUsers()
    }
  }, [currentUser])

  console.log('Current User:', users)

  const fetchUsers = async () => {
    if (!currentUser) return
    
    try {
      const response = await fetch('/api/community/users')
      const data = await response.json()
      console.log('API response:', data)
      const allUsers = Array.isArray(data) ? data : data.users || []
      console.log('All users:', allUsers)
      console.log('Current user ID:', currentUser.id)
      // Filter out current admin user
      const filteredUsers = allUsers.filter((user: any) => user._id !== currentUser?.id && user.id !== currentUser?.id)
      console.log('Filtered users:', filteredUsers)
      setUsers(filteredUsers)
    } catch (error) {
      console.error('Failed to fetch users:', error)
      setUsers([])
    } finally {
      setLoading(false)
    }
  }

  const updateUserRole = async (userId: string, newRole: string) => {
    try {
      const response = await fetch(`/api/admin/users/${userId}/role`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole })
      })
      
      if (response.ok) {
        fetchUsers()
      }
    } catch (error) {
      console.error('Failed to update user role:', error)
    }
  }

  const deleteUser = async (userId: string) => {
    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'DELETE'
      })
      
      if (response.ok) {
        fetchUsers()
      }
    } catch (error) {
      console.error('Failed to delete user:', error)
    }
  }

  const banUser = async (userId: string) => {
    try {
      const response = await fetch(`/api/admin/users/${userId}/ban`, {
        method: 'PUT'
      })
      
      if (response.ok) {
        fetchUsers()
      }
    } catch (error) {
      console.error('Failed to ban user:', error)
    }
  }

  const editUser = async () => {
    try {
      const response = await fetch(`/api/admin/users/${editingUser._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editForm)
      })
      
      if (response.ok) {
        setEditingUser(null)
        fetchUsers()
      }
    } catch (error) {
      console.error('Failed to edit user:', error)
    }
  }

  const openEditDialog = (user: any) => {
    setEditingUser(user)
    setEditForm({ name: user.name, email: user.email, bio: user.bio || '' })
  }

  const sendEmailToUser = async () => {
    if (!emailSubject || !emailContent || !emailingUser) {
      setMessage('Subject, content and user are required')
      setTimeout(() => setMessage(''), 3000)
      return
    }

    console.log('Sending email to:', emailingUser.email)
    console.log('Request data:', { email: emailingUser.email, subject: emailSubject, content: emailContent })

    setIsSending(true)
    try {
      const response = await fetch('/api/newsletter/send-individual', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: emailingUser.email, 
          subject: emailSubject, 
          content: emailContent 
        })
      })

      const data = await response.json()
      setMessage(data.message || 'Email sent successfully!')
      setEmailSubject('')
      setEmailContent('')
      setEmailingUser(null)
    } catch (error) {
      setMessage('Failed to send email')
    } finally {
      setIsSending(false)
      setTimeout(() => setMessage(''), 5000)
    }
  }

  const sendBulkEmailToUsers = async () => {
    if (!bulkEmailSubject || !bulkEmailContent) {
      setMessage('Subject and content are required')
      setTimeout(() => setMessage(''), 3000)
      return
    }

    if (users.length === 0) {
      setMessage('No users to send to')
      setTimeout(() => setMessage(''), 3000)
      return
    }

    if (!confirm(`Send email to ${users.length} users?`)) return

    setIsSendingBulk(true)
    try {
      const response = await fetch('/api/newsletter/send-bulk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          subject: bulkEmailSubject, 
          content: bulkEmailContent,
          subscribers: users.map((user: any) => user.email)
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

  if (loading) return <div>Loading users...</div>

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link href="/admin">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">User Management</h1>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Users ({users.length})</CardTitle>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Bulk Email
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Send Bulk Email to All Users</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    Sending to {users.length} users
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
                    onClick={sendBulkEmailToUsers}
                    disabled={isSendingBulk}
                    className="w-full"
                  >
                    {isSendingBulk ? 'Sending...' : 'Send to All Users'}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          {message && (
            <div className={`p-3 rounded-md text-sm mb-4 ${
              message.includes('success') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
            }`}>
              {message}
            </div>
          )}
          <div className="space-y-4">
            {users.length > 0 ? users.map((user: any) => (
              <div key={user._id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-sm text-gray-600">@{user.username}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Badge variant={user.role === 'admin' ? 'destructive' : user.role === 'moderator' ? 'default' : 'secondary'}>
                    {user.role}
                  </Badge>
                  <div className="text-sm text-gray-500">
                    Rep: {user.reputation || 0}
                  </div>
                  <Select value={user.role} onValueChange={(role) => updateUserRole(user._id, role)}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="moderator">Moderator</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button variant="outline" size="sm" onClick={() => openEditDialog(user)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  
                  <Dialog open={emailingUser?._id === user._id} onOpenChange={(open) => !open && setEmailingUser(null)}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="text-blue-600 hover:text-blue-700" onClick={() => setEmailingUser(user)}>
                        <Mail className="w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Send Email to {user.name}</DialogTitle>
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
                          onClick={sendEmailToUser}
                          disabled={isSending}
                          className="w-full"
                        >
                          {isSending ? 'Sending...' : 'Send Email'}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button variant="outline" size="sm" onClick={() => banUser(user._id)}>
                    <Ban className="w-4 h-4" />
                  </Button>
                  
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete User</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete {user.name}? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => deleteUser(user._id)}>
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            )) : (
              <div className="text-center py-8 text-gray-500">
                No users found
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      {/* Edit User Dialog */}
      <Dialog open={!!editingUser} onOpenChange={() => setEditingUser(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={editForm.email}
                onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={editForm.bio}
                onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setEditingUser(null)}>
                Cancel
              </Button>
              <Button onClick={editUser}>
                Save Changes
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}