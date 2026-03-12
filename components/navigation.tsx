"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CartIcon } from "@/components/cart-icon"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  onCartClick?: () => void
}

export function Navigation({ onCartClick }: NavigationProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/media", label: "Media" },
    { href: "/story", label: "Our Story" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/merchandise", label: "Catalogue" },
    { href: "/testimonials", label: "Stories" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="glass-strong fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/taking-stock-logo.png"
            alt="Taking Stock Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-serif text-xl font-bold text-foreground">Taking Stock</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                isActive(item.href) ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {onCartClick && <CartIcon onClick={onCartClick} />}

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-border/20">
          <div className="flex flex-col space-y-4 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors px-2 py-1 ${
                  isActive(item.href) ? "text-primary font-medium" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
