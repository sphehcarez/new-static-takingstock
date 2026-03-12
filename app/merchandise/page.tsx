"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

const products = [
  {
    id: "premium-water-bottle",
    code: "TS-WB-001",
    name: "Premium Water Bottle",
    price: 250,
    image: "/images/taking-stock-bottle.png",
    description: "Stay hydrated with style - Taking Stock branded",
    category: "Drinkware",
  },
  {
    id: "girlies-bottle",
    code: "GM-WB-002",
    name: "Girlies Bottle",
    price: 250,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Left.png-FXkh1BgvIRQHbDtkHFpJqNNlLkdqmo.jpeg",
    description: "Healing journey companion with elegant branding",
    category: "Drinkware",
  },
  {
    id: "signature-bottle",
    code: "TS-WB-003",
    name: "Signature Bottle",
    price: 250,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Right.png-SeCBaTVUPyKJVN8syY40KNoohVpSSv.jpeg",
    description: "Butterfly design collection - premium quality",
    category: "Drinkware",
  },
  {
    id: "glass-tumbler",
    code: "GM-GT-004",
    name: "Glass Tumbler",
    price: 180,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Left%20%281%29.png-eq41g9HMhygeYgpRwSKfyHkUPW6aNQ.jpeg",
    description: "Eco-friendly with bamboo lid and straw",
    category: "Drinkware",
  },
  {
    id: "signature-tumbler",
    code: "TS-GT-005",
    name: "Signature Tumbler",
    price: 180,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Right%20%281%29.png-M0JnZvNQBBh7pxWExN0Ng8682eIGUv.jpeg",
    description: "Perfect for daily mindfulness rituals",
    category: "Drinkware",
  },
  {
    id: "glass-storage-jar",
    code: "GM-GSJ-006",
    name: "Glass Storage Jar",
    price: 220,
    image: "/images/girlies-glass-jar.png",
    description: "Bamboo lid with glass straws included",
    category: "Storage",
  },
  {
    id: "ceramic-mug",
    code: "GM-MUG-007",
    name: "Ceramic Mug",
    price: 95,
    image: "/images/girlies-mug.png",
    description: "Blush pink interior accent - perfect for tea",
    category: "Drinkware",
  },
  {
    id: "comfort-hoodie",
    code: "GM-HD-008",
    name: "Comfort Hoodie",
    price: 450,
    image: "/images/girlies-hoodie.png",
    description: "Soft cotton blend with elegant logo design",
    category: "Apparel",
  },
  {
    id: "canvas-tote-bag",
    code: "GM-TB-009",
    name: "Canvas Tote Bag",
    price: 180,
    image: "/images/girlies-tote-bag.png",
    description: "Sustainable cotton with pink straps",
    category: "Accessories",
  },
  {
    id: "healing-journal",
    code: "GM-JNL-010",
    name: "Healing Journal",
    price: 120,
    image: "/images/girlies-journal.png",
    description: "Spiral-bound for reflection and growth",
    category: "Stationery",
  },
]

export default function MerchandisePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-6">
            <Link
              href="/"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors mr-4"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 crystal-text">
              Premium Catalogue
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Curated items to accompany your healing journey
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium text-orange-600">
              🚀 Coming Soon
            </div>
          </div>
        </div>
      </section>

      {/* Merchandise Grid */}
      <section className="py-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="glass overflow-hidden hover:glass-strong transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-75"
                  />
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-full glass text-xs font-medium text-primary">
                    {product.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-200">
                      <span className="text-orange-600 font-semibold text-sm">Coming Soon</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4 md:p-6">
                  <div className="text-xs font-mono text-muted-foreground mb-2 tracking-wider">{product.code}</div>

                  <h3 className="font-serif text-lg md:text-xl font-bold text-foreground mb-2 line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xl md:text-2xl font-bold text-muted-foreground">R{product.price}</span>
                      <span className="text-xs text-muted-foreground">Excl. delivery</span>
                    </div>

                    <Button
                      size="sm"
                      variant="outline"
                      className="glass-button border-2 border-orange-300 bg-orange-50 text-orange-600 cursor-not-allowed opacity-75"
                      disabled
                    >
                      <Clock className="h-4 w-4 mr-2" />
                      Coming Soon
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <Card className="glass-strong p-6 md:p-12 max-w-5xl mx-auto">
              <CardContent>
                <div className="text-center mb-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Coming Soon</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Our premium collection is being prepared with love and care. Stay tuned for the official launch!
                  </p>
                </div>

                <div className="text-center p-8 glass rounded-lg">
                  <Clock className="h-16 w-16 text-orange-500 mx-auto mb-6" />
                  <h3 className="font-semibold text-foreground mb-4 text-xl">Exciting Things Are Coming</h3>
                  <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                    We're carefully curating our premium collection to ensure every item meets our high standards for
                    quality and meaning. Each piece is designed to accompany you on your healing journey.
                  </p>
                  <div className="inline-flex items-center px-6 py-3 rounded-full glass border border-orange-200 text-orange-600 font-medium">
                    🌟 Launch Date: To Be Announced
                  </div>
                </div>

                <div className="text-center mt-8">
                  <p className="text-sm text-muted-foreground mb-4">
                    Want to be notified when we launch? Get in touch with us!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glass-button">
                      WhatsApp Updates
                    </Button>
                    <Button variant="outline" size="lg" className="glass border-2 bg-transparent hover:bg-primary/10">
                      Email Notifications
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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
            <Link href="/merchandise" className="text-primary font-semibold">
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
