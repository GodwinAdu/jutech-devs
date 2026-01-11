import { NextRequest, NextResponse } from 'next/server'

const rateLimitMap = new Map()

export function rateLimit(limit: number = 5, windowMs: number = 60000) {
  return (req: NextRequest) => {
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'anonymous'
    const now = Date.now()
    const windowStart = now - windowMs

    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, [])
    }

    const requests = rateLimitMap.get(ip).filter((time: number) => time > windowStart)
    
    if (requests.length >= limit) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    requests.push(now)
    rateLimitMap.set(ip, requests)
    
    return null
  }
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now()
  for (const [ip, requests] of rateLimitMap.entries()) {
    const validRequests = requests.filter((time: number) => now - time < 300000) // 5 minutes
    if (validRequests.length === 0) {
      rateLimitMap.delete(ip)
    } else {
      rateLimitMap.set(ip, validRequests)
    }
  }
}, 60000) // Clean every minute