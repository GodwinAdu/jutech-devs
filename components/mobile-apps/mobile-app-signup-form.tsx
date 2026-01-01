"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import type { MobileApp } from "@/lib/mobile-apps-data"
import { Check } from "lucide-react"

interface MobileAppSignupFormProps {
  app: MobileApp
}

export function MobileAppSignupForm({ app }: MobileAppSignupFormProps) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card className="border-primary/50 bg-primary/5">
        <CardContent className="pt-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Check className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
          <p className="text-muted-foreground">We'll notify you about {app.name} updates and exclusive offers.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {app.formFields.includes("name") && (
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
          )}

          {app.formFields.includes("email") && (
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john@example.com" required />
            </div>
          )}

          {app.formFields.includes("phone") && (
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
            </div>
          )}

          {app.formFields.includes("fitness_goals") && (
            <div>
              <Label htmlFor="fitness_goals">Fitness Goals</Label>
              <Input id="fitness_goals" placeholder="e.g., Weight loss, Muscle gain" />
            </div>
          )}

          {app.formFields.includes("shopping_interests") && (
            <div>
              <Label htmlFor="shopping_interests">Shopping Interests</Label>
              <Input id="shopping_interests" placeholder="e.g., Electronics, Fashion" />
            </div>
          )}

          {app.formFields.includes("use_case") && (
            <div>
              <Label htmlFor="use_case">How will you use TaskMaster?</Label>
              <Input id="use_case" placeholder="e.g., Personal projects, Team management" />
            </div>
          )}

          {app.formFields.includes("target_language") && (
            <div>
              <Label htmlFor="target_language">Language You Want to Learn</Label>
              <Input id="target_language" placeholder="e.g., Spanish, Japanese" />
            </div>
          )}

          <Button type="submit" className="w-full">
            Sign Up for Early Access
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
