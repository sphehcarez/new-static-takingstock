"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Heart,
  ArrowLeft,
  Crown,
  Flower2,
  Compass,
  Coffee,
  Eye,
  Droplets,
  Syringe as Ring,
  Badge as Bandage,
  Stethoscope,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { useEffect } from "react"

export default function ProgramsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const programs = [
    {
      title: "Take Stock of Your Life",
      description:
        "A foundational program that invites you to pause and reflect. Through comprehensive personal assessments across all key life areas: spiritual, emotional, relational, financial, and physical; you begin the work of realignment, healing, and purpose.",
      icon: Compass,
    },
    {
      title: "Becoming",
      description:
        "Step into the woman heaven always knew you to be. This transformative program helps you embrace your potential, shed limiting beliefs, and walk boldly into the version of yourself you were created to become.",
      icon: Crown,
    },
    {
      title: "Beauty in My Brokenness",
      description:
        "Some things are clearer in black and white, but God brings the colour. This program helps you uncover strength, grace, and identity in your most vulnerable places. Your brokenness doesn't disqualify you, it reveals you.",
      icon: Flower2,
    },
    {
      title: "Lean In for Your Healing",
      description:
        "Healing starts where avoidance ends. This program walks with you through the uncomfortable but necessary places helping you embrace personal challenges, uncover hidden wounds, and experience growth through surrender.",
      icon: Heart,
    },
    {
      title: "Date with Self",
      description:
        "A tender reminder that you matter. This program is a love letter to your soul teaching you to rest, refill, and rebuild your relationship with yourself through intentional solitude, self-care, and sacred reflection.",
      icon: Coffee,
    },
    {
      title: "Come and See (As God Sees)",
      description:
        "This spiritual program repositions your lens. Learn to see yourself and your story through God's eyes not shame, fear, or labels. Step into a divine perspective of identity, worth, and possibility.",
      icon: Eye,
    },
    {
      title: "Replenish",
      description:
        "You cannot pour from an empty cup. Replenish is a wellness-cantered program designed to restore your energy, refresh your spirit, and renew your commitment to self-care through rest, creativity, and healing rhythms.",
      icon: Droplets,
    },
    {
      title: "Renamed (for young wives)",
      description:
        "Marriage is a calling and a transition. This program supports new wives as they navigate identity shifts, family dynamics, and spiritual alignment in their new season. You are not just married; you've been renamed with purpose.",
      icon: Ring,
    },
    {
      title: "Mending: Wounded But Not Broken",
      description:
        "An immersive healing experience that gives your wounds space to speak and to heal. This program acknowledges the pain without letting it define you. You're not broken. You're becoming.",
      icon: Bandage,
    },
    {
      title: "On The Mend",
      description:
        "A gentle continuation of the healing journey. This program honours the process, celebrates progress, and supports you as you rebuild one step at a time. It's not about perfection. It's about presence.",
      icon: Stethoscope,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <div className="mb-8 floating-crystal">
            <Image
              src="/images/taking-stock-logo.png"
              alt="Taking Stock"
              width={120}
              height={120}
              className="mx-auto rounded-full shadow-xl glass-glow"
            />
          </div>

          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 crystal-text">Our Programs</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Sacred invitations to pause, reflect, and heal with intention
          </p>
        </div>
      </section>

      {/* Programs Introduction */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-strong p-8 md:p-12 mb-12">
            <CardContent>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6 text-center">
                <p className="text-lg">
                  Each of our programs is a sacred invitation to pause, reflect, and heal with intention.
                </p>
                <p>
                  Designed for women navigating life's transitions, wounds, and awakenings, our programs offer guided
                  pathways into deeper self-awareness, spiritual alignment, and holistic restoration.
                </p>
                <p>
                  Whether you're just starting your healing journey, rediscovering your identity, or learning to love
                  yourself again, there's space here for you.
                </p>
                <div className="mt-8 p-6 glass-subtle rounded-lg">
                  <p className="text-lg font-medium text-foreground mb-2">A safe space.</p>
                  <p className="text-lg font-medium text-foreground mb-2">A healing space.</p>
                  <p className="text-lg font-medium text-foreground mb-2">A becoming space.</p>
                  <p className="text-lg font-medium text-foreground">Let the journey begin.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Programs Grid */}
          <div className="grid gap-8 mb-12">
            {programs.map((program, index) => {
              const IconComponent = program.icon
              return (
                <Card key={index} className="glass p-8 hover:glass-strong transition-all duration-300">
                  <CardContent className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <IconComponent className="h-12 w-12 text-primary pulse-glow" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{program.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Call to Action */}
          <Card className="glass-strong p-8 text-center">
            <CardContent>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Ready to Begin Your Journey?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join our community of women committed to healing, growth, and transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/events">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 glass-button"
                  >
                    View Our Events
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass border-2 px-8 py-3 bg-transparent hover:bg-primary/10"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
