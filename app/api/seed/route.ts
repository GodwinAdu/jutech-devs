import { NextResponse } from 'next/server'
import { seedDatabase } from '@/lib/seed-community'

export async function POST() {
  try {
    const result = await seedDatabase()
    return NextResponse.json({ 
      message: 'Database seeded successfully',
      ...result 
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to seed database' },
      { status: 500 }
    )
  }
}