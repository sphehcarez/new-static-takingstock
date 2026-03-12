"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { useEffect } from "react"

export default function ContactPage() {
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

          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 crystal-text">Get in Touch</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Ready to begin your healing journey? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass-strong p-8 md:p-12">
              <CardContent>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
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
                    <label className="block text-sm font-medium text-foreground mb-2">Phone (Optional)</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 glass border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <select className="w-full px-4 py-3 glass border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent">
                      <option>General Inquiry</option>
                      <option>Retreat Registration</option>
                      <option>Merchandise Order</option>
                      <option>Partnership Opportunity</option>
                      <option>Prayer Request</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 glass border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
                      placeholder="Tell us about your healing journey or how we can help..."
                    />
                  </div>
                  <Button
                    type="button"
                    onClick={() =>
                      (window.location.href = "mailto:hello@takingstock.co.za?subject=Contact Form Inquiry")
                    }
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glass-button"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="glass-strong p-8">
                <CardContent>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">hello@takingstock.co.za</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">WhatsApp</p>
                        <p className="text-muted-foreground">+27 83 362 7409</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Location</p>
                        <p className="text-muted-foreground">South Africa</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Response Time</p>
                        <p className="text-muted-foreground">Within 24-48 hours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-strong p-8">
                <CardContent>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full glass bg-transparent justify-start">
                      <Phone className="h-4 w-4 mr-2" />
                      WhatsApp Us
                    </Button>
                    <Button variant="outline" className="w-full glass bg-transparent justify-start">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Us
                    </Button>
                    <Link href="/events">
                      <Button variant="outline" className="w-full glass bg-transparent justify-start">
                        <MapPin className="h-4 w-4 mr-2" />
                        View Events
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-strong p-8">
                <CardContent>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Banking Details</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Account Holder:</span> AT THE BUSINESS CLINIC PTY LTD
                    </p>
                    <p>
                      <span className="font-medium">Account Number:</span> 1288536437
                    </p>
                    <p>
                      <span className="font-medium">Account Type:</span> CURRENT ACCOUNT
                    </p>
                    <p>
                      <span className="font-medium">Bank Name:</span> NEDBANK
                    </p>
                    <p>
                      <span className="font-medium">Branch Code:</span> 198765
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Use your name as reference when making deposits for retreat bookings.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
