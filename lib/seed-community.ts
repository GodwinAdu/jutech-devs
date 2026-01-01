import connectDB from '@/lib/mongodb'
import { User, Post, Event } from '@/lib/models/community'

const users = [
  {
    name: 'Sarah Chen',
    username: 'sarahc',
    email: 'sarah@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
    bio: 'Full-stack developer passionate about React and Node.js. Love building scalable applications.',
    location: 'San Francisco, CA',
    website: 'https://sarahchen.dev',
    github: 'sarahchen',
    twitter: 'sarahc_dev',
    reputation: 4582,
    badges: [
      { id: 'expert', name: 'Expert', description: 'Top contributor', icon: '🏆', color: 'gold', rarity: 'legendary' },
      { id: 'helper', name: 'Helper', description: 'Helpful answers', icon: '🤝', color: 'blue', rarity: 'rare' }
    ]
  },
  {
    name: 'Mike Johnson',
    username: 'mikej',
    email: 'mike@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    bio: 'DevOps engineer and cloud architect. AWS certified solutions architect.',
    location: 'New York, NY',
    website: 'https://mikejohnson.tech',
    github: 'mikejohnson',
    twitter: 'mike_devops',
    reputation: 3891,
    badges: [
      { id: 'mentor', name: 'Mentor', description: 'Guides newcomers', icon: '👨‍🏫', color: 'purple', rarity: 'epic' },
      { id: 'contributor', name: 'Contributor', description: 'Active contributor', icon: '💡', color: 'green', rarity: 'rare' }
    ]
  },
  {
    name: 'Alex Rivera',
    username: 'alexr',
    email: 'alex@example.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    bio: 'Mobile app developer specializing in React Native and Flutter.',
    location: 'Austin, TX',
    github: 'alexrivera',
    reputation: 3654,
    badges: [
      { id: 'innovator', name: 'Innovator', description: 'Creative solutions', icon: '🚀', color: 'orange', rarity: 'epic' },
      { id: 'problem_solver', name: 'Problem Solver', description: 'Solves complex issues', icon: '🧩', color: 'cyan', rarity: 'rare' }
    ]
  },
  {
    name: 'Emma Davis',
    username: 'emmad',
    email: 'emma@example.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    bio: 'UI/UX designer turned frontend developer. Passionate about accessibility and design systems.',
    location: 'Seattle, WA',
    website: 'https://emmadavis.design',
    reputation: 3201,
    badges: [
      { id: 'designer', name: 'Designer', description: 'Great design sense', icon: '🎨', color: 'pink', rarity: 'rare' },
      { id: 'accessibility', name: 'Accessibility Champion', description: 'Promotes accessibility', icon: '♿', color: 'blue', rarity: 'epic' }
    ]
  }
]

const posts = [
  {
    title: 'Best practices for scaling React applications in production',
    content: `I've been working on a large React application that's starting to show performance issues as we scale. Here are some strategies I've found effective:

## Code Splitting
- Use React.lazy() and Suspense for route-based code splitting
- Implement component-level code splitting for heavy components
- Utilize webpack's SplitChunksPlugin for vendor code separation

## State Management
- Consider Redux Toolkit for complex state management
- Use React Query for server state management
- Implement proper memoization with useMemo and useCallback

## Bundle Optimization
- Analyze bundle size with webpack-bundle-analyzer
- Tree shake unused code
- Use production builds with proper minification

What strategies have worked best for your team?`,
    category: 'discussions',
    tags: ['React', 'Performance', 'Best Practices', 'Production', 'Scaling'],
    votes: 45,
    views: 1245,
    replies: 23,
    pinned: true
  },
  {
    title: 'How to implement real-time notifications in Next.js?',
    content: `I'm building a Next.js application and need to implement real-time notifications. I'm considering several approaches:

1. **WebSockets with Socket.io**
2. **Server-Sent Events (SSE)**
3. **WebRTC for peer-to-peer**
4. **Third-party services like Pusher**

What would you recommend for a medium-scale application with ~1000 concurrent users?

Current tech stack:
- Next.js 14
- PostgreSQL
- Redis for caching
- Deployed on Vercel`,
    category: 'qa',
    tags: ['Next.js', 'Real-time', 'WebSocket', 'Notifications', 'SSE'],
    votes: 34,
    views: 892,
    replies: 12,
    solved: true
  },
  {
    title: 'Add support for GraphQL subscriptions in Developer Tools',
    content: `It would be amazing if the JuTech Developer Tools could support GraphQL subscriptions for real-time debugging.

## Proposed Features:
- Real-time subscription monitoring
- Subscription payload inspection
- Connection status indicators
- Performance metrics for subscriptions

This would greatly improve the developer experience when working with real-time GraphQL applications.

**Use Cases:**
- Debugging live chat applications
- Monitoring real-time dashboards
- Testing subscription performance

Would love to see this in a future release!`,
    category: 'feature-requests',
    tags: ['GraphQL', 'Feature Request', 'Developer Tools', 'Subscriptions', 'Real-time'],
    votes: 128,
    views: 2341,
    replies: 56
  },
  {
    title: 'Mobile app deployment automation with GitHub Actions',
    content: `Sharing our CI/CD pipeline for React Native apps using GitHub Actions:

## Our Setup:
\`\`\`yaml
name: Deploy Mobile App
on:
  push:
    branches: [main]
    
jobs:
  build-ios:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Build iOS
        run: npx react-native run-ios --configuration Release
\`\`\`

## Key Benefits:
- Automated testing on every PR
- Automatic deployment to TestFlight/Play Console
- Code signing handled securely
- Parallel builds for iOS and Android

Anyone else using similar setups? Would love to hear about your experiences!`,
    category: 'discussions',
    tags: ['Mobile', 'CI/CD', 'DevOps', 'React Native', 'GitHub Actions'],
    votes: 29,
    views: 654,
    replies: 18
  }
]

const events = [
  {
    title: 'React Performance Workshop',
    description: 'Learn advanced React optimization techniques including code splitting, memoization, and bundle analysis. We\'ll cover real-world performance issues and how to solve them.',
    type: 'workshop',
    date: new Date('2024-02-15T18:00:00Z'),
    duration: 120,
    maxAttendees: 200,
    tags: ['React', 'Performance', 'Workshop', 'Optimization'],
    featured: true
  },
  {
    title: 'AI in Development: The Future is Now',
    description: 'Explore how AI is transforming software development. From code generation to automated testing, discover the tools and techniques shaping our industry.',
    type: 'webinar',
    date: new Date('2024-02-20T19:00:00Z'),
    duration: 90,
    maxAttendees: 500,
    tags: ['AI', 'Development', 'Webinar', 'Future Tech'],
    status: 'live'
  },
  {
    title: 'Hackathon 2024: Build the Future',
    description: '48-hour hackathon focused on creating innovative solutions for modern development challenges. Prizes for best innovation, technical excellence, and social impact.',
    type: 'hackathon',
    date: new Date('2024-03-01T09:00:00Z'),
    duration: 2880,
    maxAttendees: 100,
    tags: ['Hackathon', 'Innovation', 'Competition', 'Prizes'],
    featured: true
  }
]

export async function seedDatabase() {
  try {
    await connectDB()
    
    // Clear existing data
    await User.deleteMany({})
    await Post.deleteMany({})
    await Event.deleteMany({})
    
    console.log('Cleared existing data')
    
    // Create users
    const createdUsers = await User.insertMany(users)
    console.log(`Created ${createdUsers.length} users`)
    
    // Create posts with user references
    const postsWithAuthors = posts.map((post, index) => ({
      ...post,
      author: createdUsers[index % createdUsers.length]._id,
      upvotes: createdUsers.slice(0, Math.floor(Math.random() * 3) + 1).map(u => u._id)
    }))
    
    const createdPosts = await Post.insertMany(postsWithAuthors)
    console.log(`Created ${createdPosts.length} posts`)
    
    // Create events with host references
    const eventsWithHosts = events.map((event, index) => ({
      ...event,
      host: createdUsers[index % createdUsers.length]._id,
      attendees: createdUsers.slice(0, Math.floor(Math.random() * 50) + 10).map(u => u._id)
    }))
    
    const createdEvents = await Event.insertMany(eventsWithHosts)
    console.log(`Created ${createdEvents.length} events`)
    
    console.log('Database seeded successfully!')
    
    return {
      users: createdUsers.length,
      posts: createdPosts.length,
      events: createdEvents.length
    }
  } catch (error) {
    console.error('Error seeding database:', error)
    throw error
  }
}