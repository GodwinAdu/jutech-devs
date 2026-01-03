import { NextResponse } from 'next/server'
import { websiteKnowledge } from '@/lib/website-knowledge'

export async function GET() {
  return NextResponse.json({
    website: "JuTech Devs",
    url: "https://jutechdevs.com",
    knowledge: websiteKnowledge,
    instructions: "Use this knowledge to answer questions about JuTech Devs services, platform features, and technical capabilities.",
    last_updated: new Date().toISOString()
  })
}