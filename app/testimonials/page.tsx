"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ArrowLeft, Heart, Users, Sparkles } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { useEffect } from "react"

export default function TestimonialsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
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

          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 crystal-text">
            Sisterhood Stories
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Hear from the incredible women who have joined our healing journey
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                role: "Retreat Participant",
                text: "Taking Stock gave me the space I needed to reconnect with myself. The sisterhood I found there continues to support me every day. The healing environment created was exactly what my soul needed.",
                initial: "S",
                icon: Heart,
              },
              {
                name: "Michelle K.",
                role: "Retreat Participant",
                text: "The healing I experienced at Girlies on the Mend was profound. I left feeling renewed and empowered. The spiritual guidance and community support transformed my perspective completely.",
                initial: "M",
                icon: Sparkles,
              },
              {
                name: "Lisa R.",
                role: "Retreat Participant",
                text: "A transformative experience that reminded me of my strength and the power of authentic connections. I discovered parts of myself I had forgotten and found peace I didn't know I was missing.",
                initial: "L",
                icon: Users,
              },
              {
                name: "Jennifer T.",
                role: "Multiple Retreat Attendee",
                text: "I've attended three retreats now, and each one has brought new layers of healing. The consistent message of hope and the genuine care from the community keeps drawing me back.",
                initial: "J",
                icon: Heart,
              },
              {
                name: "Amanda S.",
                role: "First-time Participant",
                text: "I was nervous about attending my first retreat, but the welcoming atmosphere immediately put me at ease. I found my voice again and learned to embrace my story without shame.",
                initial: "A",
                icon: Sparkles,
              },
              {
                name: "Rachel P.",
                role: "Retreat Participant",
                text: "The spiritual depth and practical tools I gained have continued to impact my daily life months after the retreat. This isn't just a weekend away - it's a life-changing experience.",
                initial: "R",
                icon: Users,
              },
              {
                name: "Nomsa M.",
                role: "Retreat Participant",
                text: "Finding Taking Stock was a divine appointment. The retreat helped me process years of pain and discover the beauty in my journey. I'm forever grateful for this sacred space.",
                initial: "N",
                icon: Heart,
              },
              {
                name: "Thandi L.",
                role: "Retreat Participant",
                text: "The combination of spiritual guidance, sisterhood, and personal reflection created the perfect environment for breakthrough. I left with tools for continued healing and growth.",
                initial: "T",
                icon: Sparkles,
              },
              {
                name: "Grace K.",
                role: "Retreat Participant",
                text: "What struck me most was the authenticity - no pretense, just real women sharing real stories. The vulnerability and support in that space was unlike anything I'd experienced before.",
                initial: "G",
                icon: Users,
              },
            ].map((testimonial, index) => {
              const IconComponent = testimonial.icon
              return (
                <Card key={index} className="glass p-6 hover:glass-strong transition-all duration-300 testimonial-glow">
                  <CardContent className="pt-0">
                    <div className="flex items-center mb-4">
                      <div className="flex text-secondary">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <IconComponent className="h-4 w-4 text-primary ml-auto" />
                    </div>
                    <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary font-bold text-lg">{testimonial.initial}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="glass-strong p-8 max-w-2xl mx-auto">
              <CardContent>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Ready to Write Your Story?</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Join our community of women who have found healing, hope, and sisterhood through Taking Stock
                  retreats.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/events">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 glass-button"
                    >
                      View Upcoming Events
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
        </div>
      </section>
    </div>
  )
}
