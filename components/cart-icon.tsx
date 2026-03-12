"use client"

import { ShoppingBag } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"

interface CartIconProps {
  onClick: () => void
}

export function CartIcon({ onClick }: CartIconProps) {
  const { state } = useCart()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className="relative glass-card hover:glass-card-hover transition-all duration-300"
    >
      <ShoppingBag className="h-5 w-5 text-champagne-600" />
      {state.itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
          {state.itemCount}
        </span>
      )}
    </Button>
  )
}
