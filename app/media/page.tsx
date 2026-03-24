"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, MapPin, Camera } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { useEffect, useState } from "react"

const events = [
  {
    id: "mending-2024",
    year: "2024",
    title: "Mending: Wounded But Not Broken",
    theme: "Yes, you've been wounded - but you are not broken",
    date: "November 2024",
    location: "Midlands, SA",
    status: "completed",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%2010.31.38-8bAgHtKqq2I2Cg4izPkCzQepbafOI3.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%2010.33.59-ZKR6Udalg1MqRSP7b9UuO1vDnpRxDW.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%2010.31.34-Fm7WcA6Ee2TBsyE1WaQCWeXjCwEBUj.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%2010.33.34-j43oOGZZsRMTpRvQayGjcKoz7igy5r.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%2010.31.41%20%281%29-XqjtmOkrizbQxMkva5whNintAolGpf.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%2010.33.36-oQLd23WVMlm4Vf4NcfkWf7VnZPXGCr.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%2010.33.36%20%282%29-woU7JFjjgPk5yrZEcFqnzmCyFrgXr4.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%2010.33.36%20%283%29-IpJR7xtlfB52NCOewtNpFDc3PAruRO.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%2010.33.36%20%281%29-WG8cXcSCJpnG2BgowYaK8IFe7lbIbT.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%2010.31.41-QdwcGHQzFaHFTSd1dvk1PqnK9RUKm3.jpeg",
    ],
  },
  {
    id: "date-with-self-2023",
    year: "2023",
    title: "Date with Self: You Matter",
    theme: "It's time to rest, refill, and remember - you matter",
    date: "October 2023",
    location: "Midlands, SA",
    status: "completed",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5th-event-05-JZi3bXCfJVaqxm6Hy9vFyPUHXpPURA.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5th-event-07-MQkJ2c0B3P1VsYTkqzqltGAoY0B4IV.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5th-event-02-wirncJ4VyBYdvze1eyBh9ECwppykJW.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5th-event-01-nfJiXsTTLB7KrQ0mjOnbVGPEEMTuDv.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5th-event-04-0kr90tetNdQC58Vv2fqf4NIHa5EEve.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5th-event-06-R12sn674Q6QERRvA8UR4mqSZFgnzHZ.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5th-event-03-nfh3UNkBnOhySe0yl8gyTqRLTD6yiO.jpeg",
    ],
  },
  {
    id: "come-and-see-2022",
    year: "2022",
    title: "Come and See: How God Sees You",
    theme: "No more seeing through shame. Come and see through God's eyes",
    date: "Virtual - 2022",
    location: "Online",
    status: "completed",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: "beauty-in-brokenness-2021",
    year: "2021",
    title: "Beauty in My Brokenness",
    theme: "Some things are clearer in black and white - but God brings the colour",
    date: "September 2021",
    location: "Midlands, SA",
    status: "completed",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3rd%20Event-04-sZJ93wr6hQZIr0GS2ofxFg1qkYJwpe.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3rd%20Event-01-zrvpyQZWVjPNkkdVhdgADyVf6rVRKk.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3rd%20Event-02-mJi6GWXPaiHfcFfLXm6WyB4PFymVLI.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3rd%20Event-05-glBvmBCeiDsojS87fDB0MyJwrVmVfP.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3rd%20Event-03-4mUhKOcWstlflTtADDWymzC9siGGBu.jpeg",
    ],
  },
  {
    id: "becoming-2020",
    year: "2020",
    title: "Becoming: The Best Version of Yourself",
    theme: "Becoming who heaven has always known you to be",
    date: "August 2020",
    location: "Midlands, SA",
    status: "completed",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2nd-event-04-fXWOKmcItmraLSNu2Au6rhVtFeI5ks.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2nd-event-08-xouqarEY0shyD0wVuzaU9ppIEkLGLR.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2nd-event-06-S1av4bl6X5imHe7BCLyJqqpQMIDmMu.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2nd-event-02-Tt4XW8rz0rgWAmEpRmzC1yceryP71N.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2nd-event-03-xkcYoUNQP3oryBTYFs6iC1qWRThtJn.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2nd-event-01-UQoLCpJC7Jnr2OEH7v80CPRoqmxsCS.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2nd-event-05-R4ZDIxmECV44AIk83tRCAHc9zIoZev.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2nd-event-07-Jw5q8P0bDOU9VTrQhljAVRV1Ok2YnR.jpeg",
    ],
  },
  {
    id: "taking-stock-2019",
    year: "2019",
    title: "Taking Stock: Where You Are vs Where You Are Going",
    theme: "Leaning in and asking: Am I ready for what God has for me?",
    date: "June 2019",
    location: "Midlands, SA",
    status: "completed",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1st-event-03-vkrOknftuMomW7SvCJFMcikAjFQ0Ne.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1st-event-05-ItbgVqLHQZQAS2mQCrAy1ZYUEVBmtI.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1st-event-01-jJ3Cj4RM7dhDSyOxjvNVeTVv0EfQZ2.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1st-event-02-r3EBWtj4yuCuE1YgKeREMs6u3WuQeo.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1st-event-04-vUUrvaFNuwg6yVBNtTXbqu2r6ufYvn.jpeg",
    ],
  },
]

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState("mending-2024")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const activeEvent = events.find((event) => event.id === activeTab)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <Navigation />

      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 crystal-text">Media Gallery</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">Moments from past Taking Stock experiences</p>
        </div>
      </section>

      <section className="px-6 mb-8">
        <div className="max-w-7xl mx-auto">
          <Card className="glass-strong border-2 border-primary/30 p-6 md:p-8">
            <CardContent className="p-0 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-secondary font-semibold mb-3">Current Event</p>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-2">Built Different: Boys Edition</h2>
                <p className="text-muted-foreground leading-relaxed max-w-3xl">
                  The current event is fully booked for 29 March - 1 April 2026 in Thornville. The gallery below
                  remains focused on completed events while we prepare media from future experiences.
                </p>
              </div>
              <Link href="/events">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glass-button px-8 py-3">
                  View Event Details
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-strong rounded-2xl p-4 overflow-x-auto">
            <div className="flex space-x-2 min-w-max">
              {events.map((event) => (
                <button
                  key={event.id}
                  onClick={() => setActiveTab(event.id)}
                  className={`px-6 py-4 rounded-xl transition-all duration-300 whitespace-nowrap ${
                    activeTab === event.id
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105"
                      : "glass hover:bg-primary/10 text-foreground hover:scale-102"
                  }`}
                >
                  <div className="text-left">
                    <div className="font-serif font-bold text-lg">{event.year}</div>
                    <div className="text-sm opacity-90">{event.title}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {activeEvent && (
        <section className="px-6 pb-16">
          <div className="max-w-7xl mx-auto">
            <Card className="glass-strong mb-8 p-8">
              <CardContent>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium rounded-full mr-4">
                        {activeEvent.year}
                      </span>
                    </div>
                    <h2 className="font-serif text-4xl font-bold text-foreground mb-3">{activeEvent.title}</h2>
                    <p className="text-secondary font-medium text-xl mb-4 italic">"{activeEvent.theme}"</p>
                    <div className="flex flex-wrap gap-4 text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span>{activeEvent.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>{activeEvent.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeEvent.images.map((image, index) => (
                <Card
                  key={index}
                  className="glass-strong overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${activeEvent.title} - Image ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized={image.includes("blob.v0.dev")}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white">
                          <span className="text-sm font-medium">View Full Size</span>
                          <Camera className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-full">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Full size view"
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
