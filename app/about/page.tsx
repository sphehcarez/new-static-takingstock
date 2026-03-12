"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Sparkles, ArrowLeft, Cross, BookOpen, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { useEffect } from "react"

export default function AboutPage() {
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

          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 crystal-text">About Us</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Our foundation, mission, and sacred commitment to women's healing
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="glass-strong p-8">
              <CardContent>
                <Heart className="h-12 w-12 text-primary mb-4 pulse-glow" />
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To awaken women to their God-given identity: healed, self-aware, and walking boldly in divine purpose
                </p>
              </CardContent>
            </Card>

            <Card className="glass-strong p-8">
              <CardContent>
                <Sparkles className="h-12 w-12 text-secondary mb-4 pulse-glow" />
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To create sacred spaces for women to take inventory of their lives, confronting their truth, embracing
                  healing, and walking with intention toward personal and spiritual wholeness.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Subscription */}
          <Card className="glass-strong p-8 md:p-12 mb-12">
            <CardContent>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6 text-center">Our Subscription</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center leading-relaxed">
                At Taking Stock, we are anchored in the truth that healing is holy, identity is sacred, and wholeness is
                possible through Jesus Christ.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <Cross className="h-12 w-12 text-primary mx-auto mb-4 pulse-glow" />
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Biblical Truth</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe the Word of God is the foundation for healing, identity, and purpose. It is living,
                    relevant, and restorative.
                  </p>
                </div>

                <div className="text-center">
                  <BookOpen className="h-12 w-12 text-secondary mx-auto mb-4 pulse-glow" />
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">The Power of Honest Reflection</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Healing begins when we pause to confront where we are. Taking inventory is the first prophetic act
                    of transformation.
                  </p>
                </div>

                <div className="text-center">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4 pulse-glow" />
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Wholeness Over Perfection</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We don't chase perfection, we pursue wholeness: emotionally, spiritually, relationally, and
                    mentally.
                  </p>
                </div>

                <div className="text-center">
                  <Users className="h-12 w-12 text-secondary mx-auto mb-4 pulse-glow" />
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Holistic Inner Work</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We honour the interconnectedness of mind, body, soul, and spirit. Healing is layered, and we walk it
                    out one revelation at a time.
                  </p>
                </div>

                <div className="text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4 pulse-glow" />
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Safe, Sacred Spaces for Women</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We are committed to creating environments that are spiritually grounded, emotionally safe, and
                    community-driven where women can heal without shame and grow without fear.
                  </p>
                </div>

                <div className="text-center">
                  <Sparkles className="h-12 w-12 text-secondary mx-auto mb-4 pulse-glow" />
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Jesus as the Ultimate Healer</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our tools are helpful, but our source is Christ. We don't just facilitate healing we make room for
                    the Healer.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="glass-strong p-8 text-center">
            <CardContent>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Ready to Begin Your Journey?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join our community of women committed to healing, growth, and transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/programs">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 glass-button"
                  >
                    View Our Programs
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
