import { randomBytes, createHmac } from 'crypto'

const CSRF_SECRET = process.env.CSRF_SECRET || 'your-csrf-secret-key'

export function generateCSRFToken(): string {
  const token = randomBytes(32).toString('hex')
  const timestamp = Date.now().toString()
  const signature = createHmac('sha256', CSRF_SECRET)
    .update(token + timestamp)
    .digest('hex')
  
  return `${token}.${timestamp}.${signature}`
}

export function validateCSRFToken(token: string): boolean {
  try {
    const [tokenPart, timestamp, signature] = token.split('.')
    
    // Check if token is expired (1 hour)
    if (Date.now() - parseInt(timestamp) > 3600000) {
      return false
    }
    
    const expectedSignature = createHmac('sha256', CSRF_SECRET)
      .update(tokenPart + timestamp)
      .digest('hex')
    
    return signature === expectedSignature
  } catch {
    return false
  }
}

export function getCSRFHeaders() {
  return {
    'X-CSRF-Token': generateCSRFToken()
  }
}