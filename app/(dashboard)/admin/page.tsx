'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Mail, Calendar, MessageSquare, Settings, BarChart3, Shield, FileText } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function AdminDashboard() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && (!user || user.role !== 'admin')) {
      router.push('/')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </div>
    )
  }

  if (!user || user.role !== 'admin') {
    return null
  }

  const adminFeatures = [
    {
      title: 'User Management',
      description: 'Manage users, roles, and permissions',
      icon: Users,
      href: '/admin/users',
      color: 'bg-blue-500'
    },
    {
      title: 'Newsletter',
      description: 'Send updates to subscribers',
      icon: Mail,
      href: '/admin/newsletter',
      color: 'bg-green-500'
    },
    {
      title: 'Events',
      description: 'Create and manage community events',
      icon: Calendar,
      href: '/admin/events',
      color: 'bg-purple-500'
    },
    {
      title: 'Community Posts',
      description: 'Moderate posts and replies',
      icon: MessageSquare,
      href: '/admin/posts',
      color: 'bg-orange-500'
    },
    {
      title: 'Analytics',
      description: 'View platform statistics',
      icon: BarChart3,
      href: '/admin/analytics',
      color: 'bg-indigo-500'
    },
    {
      title: 'Security',
      description: 'Security logs and monitoring',
      icon: Shield,
      href: '/admin/security',
      color: 'bg-red-500'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto p-6 pt-28">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage all aspects of the JuTech Devs platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {adminFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <Link key={feature.href} href={feature.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-3`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}