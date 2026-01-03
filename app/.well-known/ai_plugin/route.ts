import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    "ai-plugin": {
      "schema_version": "v1",
      "name_for_model": "JuTechDevs",
      "name_for_human": "JuTech Devs Knowledge",
      "description_for_model": "Access comprehensive information about JuTech Devs services, platform features, API endpoints, and technical capabilities.",
      "description_for_human": "Get information about JuTech Devs web development services and platform features.",
      "auth": {
        "type": "none"
      },
      "api": {
        "type": "openapi",
        "url": "https://jutechdevs.com/api/public/knowledge"
      },
      "logo_url": "https://jutechdevs.com/logo.png",
      "contact_email": "contact@jutechdevs.com",
      "legal_info_url": "https://jutechdevs.com/terms"
    }
  })
}