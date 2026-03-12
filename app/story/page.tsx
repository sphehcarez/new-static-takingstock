"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Sparkles, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { useEffect } from "react"

export default function StoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 crystal-text">Our Story</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            A sacred movement birthed from divine purpose
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-strong p-8 md:p-12 mb-12">
            <CardContent>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                <p className="text-lg font-medium text-foreground">
                  Taking Stock was birthed in 2018 by Zama Ndlanzi, not simply as a personal development initiative, but
                  as a sacred movement. A home. A healing ground. A safe space where women could stop, reflect, and
                  reconnect with who they truly are in God.
                </p>

                <p>
                  In a world that moves fast and demands more, many lose touch with their essence, their voice, their
                  worth, their purpose. Taking Stock was created to interrupt that cycle. To say: "Pause. Breathe. Take
                  inventory."
                </p>

                <p>We are more than a program, we are a community.</p>

                <p>
                  A sisterhood of women daring to confront the noise, peel back the layers, and come face-to-face with
                  their truth.
                </p>

                <p>
                  Here, titles are dropped. Performances end. The masks come off. What remains is the real you; seen,
                  known, and deeply loved.
                </p>

                <p>
                  Through guided sessions, spirit-led retreats, and tools for intentional reflection, we help you slow
                  down and take stock of your life.
                </p>

                <div className="mt-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    We ask the hard but holy questions:
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• What are you carrying that no longer serves you?</li>
                    <li>• What needs to be healed, restored, or released?</li>
                    <li>• What is God calling you to step into next?</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="glass text-center p-6 hover:glass-strong transition-all duration-300">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4 pulse-glow" />
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Sacred Healing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Creating safe spaces for spiritual and emotional healing through faith-centered experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="glass text-center p-6 hover:glass-strong transition-all duration-300">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4 pulse-glow" />
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Divine Sisterhood</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building meaningful connections with women on similar journeys of faith and transformation.
                </p>
              </CardContent>
            </Card>

            <Card className="glass text-center p-6 hover:glass-strong transition-all duration-300">
              <CardContent className="pt-6">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4 pulse-glow" />
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Holistic Restoration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Embracing restoration of body, mind, soul, and spirit through Christ-centered practices.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="glass-strong p-8 text-center">
            <CardContent>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Ready to Begin Your Journey?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join our community of women committed to healing, growth, and transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#events">
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
