"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Users, Heart, Sparkles, ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { PaymentPopup } from "@/components/payment-popup"
import { useEffect, useState } from "react"

export default function EventsPage() {
  const [showPaymentPopup, setShowPaymentPopup] = useState(false)

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

          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 crystal-text">Our Events</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Journey through our transformative retreat experiences
          </p>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-px"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {/* Event 7 - On The Mend (Upcoming) - Featured at top */}
              <div className="relative flex items-start md:justify-center">
                <div className="absolute left-8 md:left-1/2 top-8 w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full transform -translate-x-3 md:-translate-x-3 z-10 animate-pulse shadow-lg"></div>
                <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                  <Card className="glass-strong hover:shadow-2xl transition-all duration-500 border-2 border-primary/30">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium rounded-full mr-3">
                          2025
                        </span>
                        <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                          Upcoming
                        </span>
                      </div>
                      <div className="mb-6">
                        <Image
                          src="/images/girlies-logo.png"
                          alt="Girlies on the Mend"
                          width={150}
                          height={75}
                          className="floating-crystal"
                        />
                      </div>
                      <h3 className="font-serif text-3xl font-bold text-foreground mb-3">On The Mend</h3>
                      <p className="text-secondary font-medium text-lg mb-4">"Honouring the journey of healing."</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Not about perfection—it's about process. Learning to live again, love again, and trust again.
                        Together, we'll celebrate every step, every scar, every sacred stretch of your healing.
                      </p>

                      <div className="space-y-3 mb-8">
                        <div className="flex items-center space-x-3">
                          <Calendar className="h-5 w-5 text-secondary" />
                          <span className="text-foreground font-medium">31 October - 2 November 2025</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-secondary" />
                          <span className="text-foreground">Midlands, South Africa</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Users className="h-5 w-5 text-secondary" />
                          <span className="text-foreground">R3,000 • R1,000 deposit to secure your space</span>
                        </div>
                      </div>

                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glass-button text-lg py-3"
                        onClick={() => setShowPaymentPopup(true)}
                      >
                        Reserve Your Space
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Past Events */}
              {[
                {
                  year: "2024",
                  title: "Mending: Wounded But Not Broken",
                  theme: "Yes, you've been wounded—but you are not broken.",
                  description: "An altar for healing - facing wounds with honesty, surrounded by love.",
                  icon: Heart,
                  colorClass: "bg-secondary",
                  textColorClass: "text-secondary",
                  bgColorClass: "bg-secondary/20",
                },
                {
                  year: "2023",
                  title: "Date with Self: You Matter",
                  theme: "It's time to rest, refill, and remember—you matter.",
                  description: "A personal appointment with self - retreating from noise to tend to the soul.",
                  icon: Sparkles,
                  colorClass: "bg-primary",
                  textColorClass: "text-primary",
                  bgColorClass: "bg-primary/20",
                },
                {
                  year: "2022",
                  title: "Come and See: How God Sees You",
                  theme: "No more seeing through shame. Come and see through God's eyes.",
                  description: "A virtual experience exchanging distorted self-images for divine identity.",
                  icon: Users,
                  colorClass: "bg-secondary",
                  textColorClass: "text-secondary",
                  bgColorClass: "bg-secondary/20",
                },
                {
                  year: "2021",
                  title: "Beauty in My Brokenness",
                  theme: "Some things are clearer in black and white — but God brings the colour.",
                  description: "Embracing our stories and finding beauty in our broken places through God's grace.",
                  icon: Heart,
                  colorClass: "bg-primary",
                  textColorClass: "text-primary",
                  bgColorClass: "bg-primary/20",
                },
                {
                  year: "2020",
                  title: "Becoming: The Best Version of Yourself",
                  theme: "Becoming who heaven has always known you to be.",
                  description: "A celebration of growth, peeling back layers to rediscover inner power and purpose.",
                  icon: Sparkles,
                  colorClass: "bg-secondary",
                  textColorClass: "text-secondary",
                  bgColorClass: "bg-secondary/20",
                },
                {
                  year: "2019",
                  title: "Taking Stock: Where You Are vs Where You Are Going",
                  theme: "Leaning in and asking: Am I ready for what God has for me?",
                  description:
                    "Our inaugural retreat - a divine checkpoint for women ready to align with their purpose.",
                  icon: Heart,
                  colorClass: "bg-primary",
                  textColorClass: "text-primary",
                  bgColorClass: "bg-primary/20",
                },
              ].map((event, index) => {
                const IconComponent = event.icon
                const isEven = index % 2 === 0

                return (
                  <div key={event.year} className="relative flex items-start md:justify-center">
                    <div
                      className={`absolute left-8 md:left-1/2 top-6 w-3 h-3 ${event.colorClass} rounded-full transform -translate-x-1.5 md:-translate-x-1.5 z-10 pulse-glow`}
                    ></div>
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? "md:pr-8" : "md:pl-8 md:ml-auto"}`}>
                      <Card className="glass-strong hover:shadow-2xl transition-all duration-500">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-3">
                            <span
                              className={`px-3 py-1 ${event.bgColorClass} ${event.textColorClass} text-sm font-medium rounded-full mr-3`}
                            >
                              {event.year}
                            </span>
                            <IconComponent className={`h-5 w-5 ${event.textColorClass}`} />
                          </div>
                          <h3 className="font-serif text-xl font-bold text-foreground mb-2">{event.title}</h3>
                          <p className="text-secondary font-medium text-sm mb-3">"{event.theme}"</p>
                          <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="glass-subtle p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Your Journey Continues</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Each retreat marks a milestone in our collective healing journey. Whether you're joining us for the
                first time or continuing the work, there's always room for growth.
              </p>
              <p className="text-lg font-medium text-foreground">
                You are not alone. You are not too late. You are on the mend.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PaymentPopup
        isOpen={showPaymentPopup}
        onClose={() => setShowPaymentPopup(false)}
        eventTitle="On The Mend"
        eventDate="31 October - 2 November 2025"
        amount="R3,000"
        deposit="R1,000"
      />
    </div>
  )
}
