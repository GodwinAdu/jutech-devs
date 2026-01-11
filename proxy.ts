import { NextRequest, NextResponse } from 'next/server'
import { securityHeaders } from './lib/security-headers'

export function proxy(request: NextRequest) {
  const response = NextResponse.next()
  
  // Apply security headers to all responses
  const secureResponse = securityHeaders(response)
  
  // Block suspicious user agents
  const userAgent = request.headers.get('user-agent') || ''
  const suspiciousAgents = ['sqlmap', 'nikto', 'nmap', 'masscan', 'zap']
  
  if (suspiciousAgents.some(agent => userAgent.toLowerCase().includes(agent))) {
    return new NextResponse('Forbidden', { status: 403 })
  }
  
  // Block requests with suspicious patterns
  const url = request.url.toLowerCase()
  const suspiciousPatterns = [
    '/wp-admin',
    '/phpmyadmin',
    '/.env',
    '/config',
    '/.git',
    '/backup'
  ]
  
  if (suspiciousPatterns.some(pattern => url.includes(pattern))) {
    return new NextResponse('Not Found', { status: 404 })
  }
  
  // Validate request size (prevent large payload attacks)
  const contentLength = request.headers.get('content-length')
  if (contentLength && parseInt(contentLength) > 1024 * 1024) { // 1MB limit
    return new NextResponse('Payload Too Large', { status: 413 })
  }
  
  return secureResponse
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}