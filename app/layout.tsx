import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"

export const metadata: Metadata = {
  title: "Taking Stock - Healing Retreat Events",
  description: "Premium healing retreat events for women seeking transformation, growth, and sisterhood.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="antialiased">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
