"use client"

import { Plus, Minus, Trash2, ShoppingBag } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import Image from "next/image"

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
  onCheckout: () => void
}

export function CartSidebar({ isOpen, onClose, onCheckout }: CartSidebarProps) {
  const { state, updateQuantity, removeItem } = useCart()

  const handleCheckout = () => {
    onClose() // Close the cart sidebar
    onCheckout() // Open checkout modal
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-xl glass-card border-champagne-200/20 bg-white/95 backdrop-blur-xl">
        <SheetHeader>
          <SheetTitle className="font-playfair text-2xl text-champagne-700 flex items-center gap-2">
            <ShoppingBag className="h-6 w-6" />
            Your Cart
            {state.itemCount > 0 && (
              <span className="bg-red-500 text-white text-sm rounded-full h-6 w-6 flex items-center justify-center font-bold">
                {state.itemCount}
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {state.items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingBag className="h-16 w-16 text-champagne-300 mx-auto mb-4" />
                <p className="text-champagne-600 mb-2">Your cart is empty</p>
                <p className="text-sm text-champagne-500">Add some beautiful items to get started</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-6 space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="glass-card p-4 rounded-xl border border-champagne-200/30">
                    <div className="flex items-center space-x-4">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-champagne-800 truncate">{item.name}</h4>
                        <p className="text-champagne-600 font-semibold">R{item.price}</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 bg-white/80 border-champagne-300 hover:bg-champagne-100 hover:border-champagne-400"
                        >
                          <Minus className="h-4 w-4 text-champagne-700" />
                        </Button>

                        <span className="w-8 text-center font-bold text-champagne-800 bg-champagne-100 rounded px-2 py-1">
                          {item.quantity}
                        </span>

                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 bg-white/80 border-champagne-300 hover:bg-champagne-100 hover:border-champagne-400"
                        >
                          <Plus className="h-4 w-4 text-champagne-700" />
                        </Button>

                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="h-8 w-8 bg-red-50 border-red-300 text-red-600 hover:bg-red-100 hover:border-red-400 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-champagne-200/20 pt-6 space-y-4 bg-white/50 rounded-t-xl p-4 -mx-6 -mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-champagne-800">Total:</span>
                  <span className="text-xl font-bold text-champagne-700">R{state.total.toFixed(2)}</span>
                </div>

                <Button
                  onClick={handleCheckout}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-base border-2 border-red-700 hover:border-red-800"
                >
                  Place Order & Generate Invoice ({state.itemCount} items)
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
