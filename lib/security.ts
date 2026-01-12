import DOMPurify from 'isomorphic-dompurify'

export function sanitizeInput(input: string): string {
  // Remove HTML tags and scripts
  return DOMPurify.sanitize(input, { 
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: []
  }).trim()
}

export function sanitizeHtml(html: string): string {
  // Allow safe HTML tags only
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u'],
    ALLOWED_ATTR: []
  })
}

export function validateEmail(email: string): boolean {
  // Basic format validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (!emailRegex.test(email) || email.length > 254) {
    return false
  }
  
  const [localPart, domain] = email.split('@')
  
  // Check for suspicious patterns in local part
  if (localPart.length < 2 || /^[a-z]{6,}$/.test(localPart)) {
    return false // Too short or all lowercase letters (like "dfsdfs")
  }
  
  // Check for valid domain patterns
  if (!domain || domain.length < 3) {
    return false
  }
  
  // Check for consecutive dots or invalid characters
  if (domain.includes('..') || domain.startsWith('.') || domain.endsWith('.')) {
    return false
  }
  
  // Check for valid TLD (at least 2 characters)
  const tld = domain.split('.').pop()
  if (!tld || tld.length < 2) {
    return false
  }
  
  return true
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
}

export function detectSqlInjection(input: string): boolean {
  const sqlPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION)\b)/i,
    /(--|\/\*|\*\/|;)/,
    /(\b(OR|AND)\b.*=.*)/i
  ]
  
  return sqlPatterns.some(pattern => pattern.test(input))
}

export function detectXSS(input: string): boolean {
  const xssPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe/gi,
    /<object/gi,
    /<embed/gi
  ]
  
  return xssPatterns.some(pattern => pattern.test(input))
}