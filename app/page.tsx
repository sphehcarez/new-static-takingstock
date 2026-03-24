"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  BookOpen,
  Brain,
  Calendar,
  Heart,
  Lightbulb,
  MapPin,
  Shield,
  Sparkles,
  Star,
  Stars,
  Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { useEffect } from "react"

export default function HomePage() {
  const kidsVision = [
    "Understand themselves",
    "Make wise choices",
    "Lead with character",
    "Shine confidently in who they are",
  ]

  const kidsLearning = [
    "Build strong character",
    "Develop confidence and self-worth",
    "Think before they act",
    "Practice kindness and respect",
    "Dream and believe in themselves",
  ]

  const kidsApproach = [
    "Storytelling",
    "Creative activities",
    "Life skills development",
    "Reflection and conversation",
    "Fun and interactive learning",
  ]

  const stockvillePlaces = [
    "The Character Construction Zone - where children learn to build strong values",
    "The Star Garden - where they learn self-care, confidence, and identity",
    "The Reflection Tree - where they pause and take stock of their choices",
    "The Choice Bridge - where they learn to choose between right and wrong",
    "The Taking Stock School - where all lessons come together",
  ]

  const stockvilleCharacters = [
    {
      name: "Stocky the Builder",
      title: "The Character Guide",
      quote: "Every good choice builds your character.",
      traits: ["respect", "responsibility", "courage", "honesty", "integrity"],
    },
    {
      name: "Stella the Star",
      title: "The Confidence & Self-Care Guide",
      quote: "Shine bright by taking care of yourself.",
      traits: ["hygiene", "self-control", "confidence", "identity", "kindness"],
    },
    {
      name: "Theo the Thinker",
      title: "The Decision-Making Guide",
      quote: "Let's think about that first!",
      traits: ["thinking before acting", "problem-solving", "wise decisions"],
    },
    {
      name: "Kiki the Creator",
      title: "The Creativity & Expression Guide",
      quote: "Every idea can become something amazing!",
      traits: ["self-expression", "talent exploration", "confidence in uniqueness"],
    },
    {
      name: "Coach Tumi",
      title: "The Emotional Control Guide",
      quote: "Slow down. Breathe. Choose wisely.",
      traits: ["patience", "calmness", "managing big emotions"],
    },
    {
      name: "Granny Wisdom",
      title: "The Reflection Guide",
      quote: "Every day is a chance to grow.",
      traits: ["self-awareness", "learning from mistakes", "gratitude", "growth"],
    },
    {
      name: "Scout Sky",
      title: "The Dream & Vision Guide",
      quote: "Your dreams can take you anywhere!",
      traits: ["dreaming big", "bravery", "believing in the future"],
    },
  ]

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
              <Link href="/events">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg glass-button">
                  View Current Event
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
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

      {/* Taking Stock Kids Section */}
      <section id="taking-stock-kids" className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full glass-subtle px-4 py-2 mb-6">
              <Stars className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-foreground">New Program Spotlight</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Taking Stock Kids</h2>
            <p className="text-2xl md:text-3xl font-serif text-secondary mb-4">Building Character. Shining Bright.</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to Taking Stock Kids, a fun, powerful, and intentional program designed to help children grow in
              character, confidence, and self-awareness from a young age. At Taking Stock, we believe children should
              understand their choices, emotions, and identity early in life.
            </p>
          </div>

          <div className="grid xl:grid-cols-[1.15fr_0.85fr] gap-8">
            <Card className="glass-strong p-8 md:p-10">
              <CardContent className="p-0 space-y-8">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground mb-5">To raise a generation of children who:</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {kidsVision.map((item) => (
                      <div key={item} className="glass rounded-2xl px-4 py-4 flex items-center gap-3">
                        <Sparkles className="h-5 w-5 text-secondary shrink-0" />
                        <span className="text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass rounded-3xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="h-6 w-6 text-primary" />
                      <h4 className="font-serif text-2xl font-bold text-foreground">What Children Learn</h4>
                    </div>
                    <div className="space-y-3">
                      {kidsLearning.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <Star className="h-4 w-4 text-secondary mt-1 shrink-0" />
                          <p className="text-muted-foreground leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass rounded-3xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <BookOpen className="h-6 w-6 text-primary" />
                      <h4 className="font-serif text-2xl font-bold text-foreground">Our Approach</h4>
                    </div>
                    <div className="space-y-3">
                      {kidsApproach.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <Heart className="h-4 w-4 text-secondary mt-1 shrink-0" />
                          <p className="text-muted-foreground leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-5 leading-relaxed">
                      All designed to create a safe, engaging, and empowering environment for children.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass p-8 md:p-10 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
              <CardContent className="p-0 relative">
                <h3 className="font-serif text-3xl font-bold text-foreground mb-3">Welcome to Stockville</h3>
                <p className="text-secondary font-medium text-lg mb-4">
                  The world where kids learn to make bright choices
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Taking Stock Kids comes to life through Stockville, a magical village where children learn life
                  lessons in ways they can understand, enjoy, and apply.
                </p>

                <div className="space-y-3 mb-6">
                  {stockvillePlaces.map((place) => (
                    <div key={place} className="glass-subtle rounded-2xl px-4 py-4">
                      <p className="text-foreground leading-relaxed">{place}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl bg-secondary/15 border border-secondary/30 px-5 py-5">
                  <p className="text-foreground font-medium">Stockville is a journey of becoming.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-strong p-8 md:p-10">
            <CardContent className="p-0">
              <div className="text-center mb-8 max-w-3xl mx-auto">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Meet the Stockville Characters
                </h3>
                <p className="text-lg text-muted-foreground">
                  Your child's guides in growth, each bringing a different lesson in character, confidence, reflection,
                  and wise decision-making.
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {stockvilleCharacters.map((character, index) => {
                  const icons = [Shield, Sparkles, Brain, Lightbulb, Heart, BookOpen, Stars]
                  const Icon = icons[index]

                  return (
                    <Card key={character.name} className="glass h-full border border-border/70">
                      <CardContent className="p-6 h-full">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-primary/25 flex items-center justify-center">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-serif text-2xl font-bold text-foreground">{character.name}</h4>
                            <p className="text-sm text-secondary font-medium">{character.title}</p>
                          </div>
                        </div>

                        <div className="space-y-2 mb-5">
                          {character.traits.map((trait) => (
                            <div key={trait} className="flex items-start gap-2">
                              <Sparkles className="h-4 w-4 text-secondary mt-1 shrink-0" />
                              <p className="text-muted-foreground">{trait}</p>
                            </div>
                          ))}
                        </div>

                        <p className="italic text-foreground/80">"{character.quote}"</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="glass p-8 md:p-10 border-2 border-secondary/30">
            <CardContent className="p-0 text-center">
              <p className="text-sm uppercase tracking-[0.25em] text-secondary font-semibold mb-4">
                Taking Stock Kids Promise
              </p>
              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="rounded-2xl bg-primary/20 px-5 py-5">
                  <p className="font-serif text-2xl font-bold text-foreground">We build strong character.</p>
                </div>
                <div className="rounded-2xl bg-secondary/20 px-5 py-5">
                  <p className="font-serif text-2xl font-bold text-foreground">We make wise choices.</p>
                </div>
                <div className="rounded-2xl bg-primary/20 px-5 py-5">
                  <p className="font-serif text-2xl font-bold text-foreground">We shine bright.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Upcoming Event Highlight Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Current Event</h2>
            <p className="text-lg text-muted-foreground">
              Our current event is now fully booked. View the details below and contact us to enquire about future
              events.
            </p>
          </div>

          <Card className="glass-strong p-8 md:p-12 border-2 border-primary/30">
            <CardContent>
              <div className="text-center mb-6">
                <Image
                  src="/images/taking-stock-logo.png"
                  alt="Taking Stock Kids event"
                  width={150}
                  height={150}
                  className="mx-auto floating-crystal mb-4 rounded-full"
                />
                <div className="inline-flex items-center rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 mb-4">
                  Sold Out
                </div>
                <h3 className="font-serif text-3xl font-bold text-foreground mb-2">Built Different: Kids Event</h3>
                <p className="text-secondary font-medium text-lg mb-4">
                  A Taking Stock Kids camp experience happening this weekend.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Calendar className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <p className="font-medium text-foreground">29 March - 1 April 2026</p>
                </div>
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <p className="font-medium text-foreground">Thornville</p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <p className="font-medium text-foreground">R400 per person</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="glass rounded-2xl p-6 text-left">
                  <h4 className="font-serif text-2xl font-bold text-foreground mb-4">Includes</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Accommodation</li>
                    <li>Meals</li>
                    <li>Activities</li>
                  </ul>
                </div>
                <div className="glass rounded-2xl p-6 text-left">
                  <h4 className="font-serif text-2xl font-bold text-foreground mb-4">Enquiries</h4>
                  <p className="text-muted-foreground mb-3">
                    This kids event is fully booked. To join the waiting list or enquire about future Taking Stock
                    events:
                  </p>
                  <p className="font-semibold text-foreground">RSVP: 083 362 7409</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg font-medium text-foreground">
                  We are grateful for the response. This event is currently sold out.
                </p>
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
                Explore our current event details, see what is coming next, and contact us to enquire about future
                Taking Stock experiences.
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

    </div>
  )
}



