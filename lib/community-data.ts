export interface User {
  id: string
  name: string
  username: string
  avatar: string
  reputation: number
  badges: Badge[]
  joinDate: string
  location?: string
  bio?: string
  website?: string
  github?: string
  twitter?: string
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  color: string
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
}

export interface Post {
  id: string
  title: string
  content: string
  author: User
  category: string
  tags: string[]
  votes: number
  replies: number
  views: number
  solved: boolean
  pinned: boolean
  locked: boolean
  createdAt: string
  updatedAt: string
  lastReply?: {
    author: User
    createdAt: string
  }
}

export interface Reply {
  id: string
  content: string
  author: User
  votes: number
  createdAt: string
  updatedAt: string
  isAccepted: boolean
  parentId?: string
}

export interface Event {
  id: string
  title: string
  description: string
  type: 'webinar' | 'workshop' | 'hackathon' | 'meetup' | 'conference'
  date: string
  duration: number
  attendees: number
  maxAttendees?: number
  host: User
  tags: string[]
  image: string
  status: 'upcoming' | 'live' | 'completed'
}

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    username: 'sarahc',
    avatar: '/api/placeholder/40/40',
    reputation: 4582,
    badges: [
      { id: '1', name: 'Expert', description: 'Top contributor', icon: '🏆', color: 'gold', rarity: 'legendary' },
      { id: '2', name: 'Helper', description: 'Helpful answers', icon: '🤝', color: 'blue', rarity: 'rare' }
    ],
    joinDate: '2023-01-15',
    location: 'San Francisco, CA',
    bio: 'Full-stack developer passionate about React and Node.js',
    github: 'sarahchen',
    twitter: 'sarahc_dev'
  }
]

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Best practices for scaling React applications',
    content: 'Looking for advice on scaling React apps...',
    author: mockUsers[0],
    category: 'discussions',
    tags: ['React', 'Performance', 'Best Practices'],
    votes: 45,
    replies: 23,
    views: 1245,
    solved: false,
    pinned: true,
    locked: false,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T15:30:00Z'
  }
]

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'React Performance Workshop',
    description: 'Learn advanced React optimization techniques',
    type: 'workshop',
    date: '2024-02-15T18:00:00Z',
    duration: 120,
    attendees: 156,
    maxAttendees: 200,
    host: mockUsers[0],
    tags: ['React', 'Performance', 'Workshop'],
    image: '/api/placeholder/400/200',
    status: 'upcoming'
  }
]