"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Users, Heart, Sparkles, ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { PaymentPopup } from "@/components/payment-popup"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [showPaymentPopup, setShowPaymentPopup] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-8 floating-crystal">
              <Image
                src="/images/taking-stock-logo.png"
                alt="Taking Stock"
                width={120}
                height={120}
                className="mx-auto rounded-full shadow-xl glass-glow"
              />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 crystal-text">
              Welcome to Taking Stock
            </h1>
            <div className="glass-subtle p-8 rounded-2xl max-w-4xl mx-auto mb-8">
              <p className="text-2xl md:text-3xl font-serif text-foreground mb-4 leading-relaxed">
                A sacred space for healing, reflection, and becoming.
              </p>
              <p className="text-xl text-foreground mb-4 font-medium">Here, you lay down the weight and rise whole.</p>
              <p className="text-lg text-muted-foreground">
                You are not too broken. You are not alone. You are on the mend.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg glass-button"
                onClick={() => setShowPaymentPopup(true)}
              >
                Reserve Your Space
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/story">
                <Button
                  variant="outline"
                  size="lg"
                  className="glass border-2 px-8 py-3 text-lg bg-transparent hover:bg-primary/10"
                >
                  Our Journey
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">About Taking Stock</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Through our retreats, guided journals, soul-work programs, and spirit-led tools, we journey with women
              across every season—from brokenness to breakthrough, from survival to freedom. Because healing takes more
              than time—it takes intention.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass text-center p-8 hover:glass-strong transition-all duration-300">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4 pulse-glow" />
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Holistic Healing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mind, body, spirit, and soul - we create safe spaces free of judgment, full of compassion for
                  intentional healing and divine restoration.
                </p>
              </CardContent>
            </Card>

            <Card className="glass text-center p-8 hover:glass-strong transition-all duration-300">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4 pulse-glow" />
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Authentic Community</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We heal in the presence of one another - building meaningful connections with women on similar
                  journeys of faith, growth, and transformation.
                </p>
              </CardContent>
            </Card>

            <Card className="glass text-center p-8 hover:glass-strong transition-all duration-300">
              <CardContent className="pt-6">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4 pulse-glow" />
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">God-Centered Restoration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Jesus is our Healer - we don't just recover, we become. Embracing resilience and renewal through
                  Christ-centered practices and divine restoration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Event Highlight Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Join Us</h2>
            <p className="text-lg text-muted-foreground">
              Our next healing retreat is approaching. Reserve your sacred space.
            </p>
          </div>

          <Card className="glass-strong p-8 md:p-12 border-2 border-primary/30">
            <CardContent>
              <div className="text-center mb-6">
                <Image
                  src="/images/girlies-logo.png"
                  alt="Girlies on the Mend"
                  width={150}
                  height={75}
                  className="mx-auto floating-crystal mb-4"
                />
                <h3 className="font-serif text-3xl font-bold text-foreground mb-2">On The Mend</h3>
                <p className="text-secondary font-medium text-lg mb-4">"Honouring the journey of healing."</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Calendar className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <p className="font-medium text-foreground">31 Oct - 2 Nov 2025</p>
                </div>
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <p className="font-medium text-foreground">Midlands, SA</p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <p className="font-medium text-foreground">R3,000 • R1,000 deposit</p>
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg glass-button"
                  onClick={() => setShowPaymentPopup(true)}
                >
                  Reserve Your Space
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Sisterhood Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from the incredible women who have joined our healing journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass p-6 hover:glass-strong transition-all duration-300 testimonial-glow">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-secondary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic leading-relaxed">
                  "Taking Stock gave me the space I needed to reconnect with myself. The sisterhood I found there
                  continues to support me every day."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-bold">S</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sarah M.</p>
                    <p className="text-sm text-muted-foreground">Retreat Participant</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass p-6 hover:glass-strong transition-all duration-300 testimonial-glow">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-secondary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic leading-relaxed">
                  "The healing I experienced at Girlies on the Mend was profound. I left feeling renewed and empowered."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-bold">M</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Michelle K.</p>
                    <p className="text-sm text-muted-foreground">Retreat Participant</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass p-6 hover:glass-strong transition-all duration-300 testimonial-glow">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-secondary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic leading-relaxed">
                  "A transformative experience that reminded me of my strength and the power of authentic connections."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-bold">L</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Lisa R.</p>
                    <p className="text-sm text-muted-foreground">Retreat Participant</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Stay Connected</h2>
            <p className="text-lg text-muted-foreground">
              Ready to begin your healing journey? We'd love to hear from you.
            </p>
          </div>

          <Card className="glass-strong p-8 md:p-12">
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 glass border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 glass border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 glass border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
                    placeholder="Tell us about your healing journey..."
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glass-button">
                  Send Message
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-muted-foreground mb-4">Or reach out directly:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" className="glass bg-transparent">
                    WhatsApp
                  </Button>
                  <Button variant="outline" className="glass bg-transparent">
                    Email Us
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="glass-strong p-12">
            <CardContent>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Ready to Begin Your Journey?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join our community of women committed to healing, growth, and transformation. Discover upcoming events
                and take the first step toward your renewal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/events">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 glass-button"
                  >
                    View All Events
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass border-2 px-8 py-3 bg-transparent hover:bg-primary/10"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-strong mt-16 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/images/taking-stock-logo.png"
              alt="Taking Stock"
              width={60}
              height={60}
              className="mx-auto rounded-full mb-4"
            />
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Taking Stock</h3>
            <p className="text-muted-foreground">Measure to manage</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/events" className="text-foreground hover:text-primary transition-colors">
              Events
            </Link>
            <Link href="/story" className="text-foreground hover:text-primary transition-colors">
              Our Story
            </Link>
            <Link href="/merchandise" className="text-foreground hover:text-primary transition-colors">
              Catalogue
            </Link>
            <Link href="/testimonials" className="text-foreground hover:text-primary transition-colors">
              Stories
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground">
              © 2025 Taking Stock. All rights reserved. Designed for healing, growth, and transformation.
            </p>
          </div>
        </div>
      </footer>

      {/* Payment Popup */}
      <PaymentPopup isOpen={showPaymentPopup} onClose={() => setShowPaymentPopup(false)} />
    </div>
  )
}
