"use client"

import { useState } from "react"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
}

interface CustomerDetails {
  name: string
  email: string
  phone: string
  address: string
  city: string
  postalCode: string
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { state, clearCart } = useCart()
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)

  const handleInputChange = (field: keyof CustomerDetails, value: string) => {
    setCustomerDetails((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmitOrder = async () => {
    setIsProcessing(true)

    try {
      // Generate invoice
      const invoiceData = {
        invoiceNumber: `INV-${Date.now()}`,
        date: new Date().toLocaleDateString(),
        customer: customerDetails,
        items: state.items,
        subtotal: state.total,
        tax: state.total * 0.15, // 15% VAT
        total: state.total * 1.15,
      }

      const generatePDFInvoice = (data: any) => {
        const logoUrl = `${window.location.origin}/images/taking-stock-logo.png`

        const invoiceHTML = `
<!DOCTYPE html>
<html>
<head>
    <title>Invoice ${data.invoiceNumber}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; color: #333; }
        .header { text-align: center; margin-bottom: 40px; border-bottom: 2px solid #d4af37; padding-bottom: 20px; }
        .logo { width: 120px; height: auto; margin-bottom: 15px; }
        .company-name { font-size: 28px; font-weight: bold; color: #d4af37; margin-bottom: 10px; }
        .invoice-title { font-size: 24px; color: #8b5a3c; }
        .invoice-details { display: flex; justify-content: space-between; margin: 30px 0; }
        .bill-to { margin: 20px 0; }
        .bill-to h3 { color: #8b5a3c; border-bottom: 1px solid #ddd; padding-bottom: 5px; }
        .items-table { width: 100%; border-collapse: collapse; margin: 30px 0; }
        .items-table th, .items-table td { border: 1px solid #ddd; padding: 12px; text-align: left; }
        .items-table th { background-color: #f8f4f0; color: #8b5a3c; font-weight: bold; }
        .total-section { margin-top: 30px; text-align: right; }
        .total-row { margin: 5px 0; }
        .final-total { font-size: 18px; font-weight: bold; color: #d4af37; border-top: 2px solid #d4af37; padding-top: 10px; }
        .payment-details { margin-top: 40px; padding: 20px; background-color: #f8f4f0; border-radius: 8px; }
        .payment-details h3 { color: #8b5a3c; margin-bottom: 15px; }
        .payment-info { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    </style>
</head>
<body>
    <div class="header">
        <img src="${logoUrl}" alt="Taking Stock Logo" class="logo">
        <div class="company-name">TAKING STOCK</div>
        <div style="font-size: 14px; color: #8b5a3c; margin-bottom: 10px;">Measure to manage</div>
        <div class="invoice-title">INVOICE</div>
    </div>
    
    <div class="invoice-details">
        <div>
            <strong>Invoice Number:</strong> ${data.invoiceNumber}<br>
            <strong>Date:</strong> ${data.date}
        </div>
    </div>
    
    <div class="bill-to">
        <h3>BILL TO:</h3>
        <p>
            ${data.customer.name}<br>
            ${data.customer.email}<br>
            ${data.customer.phone}<br>
            ${data.customer.address}<br>
            ${data.customer.city}, ${data.customer.postalCode}
        </p>
    </div>
    
    <table class="items-table">
        <thead>
            <tr>
                <th>Item</th>
                <th>Code</th>
                <th>Qty</th>
                <th>Unit Price</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            ${data.items
              .map(
                (item: any) => `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.code}</td>
                    <td>${item.quantity}</td>
                    <td>R${item.price.toFixed(2)}</td>
                    <td>R${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
            `,
              )
              .join("")}
        </tbody>
    </table>
    
    <div class="total-section">
        <div class="total-row">Subtotal: R${data.subtotal.toFixed(2)}</div>
        <div class="total-row">VAT (15%): R${data.tax.toFixed(2)}</div>
        <div class="final-total">Total: R${data.total.toFixed(2)}</div>
    </div>
    
    <div class="payment-details">
        <h3>PAYMENT DETAILS</h3>
        <div class="payment-info">
            <div><strong>Bank:</strong> Nedbank</div>
            <div><strong>Branch Code:</strong> 198765</div>
            <div><strong>Account Holder:</strong> At The Business Clinic Pty Ltd</div>
            <div><strong>Account Number:</strong> 1288536437</div>
        </div>
        <p style="margin-top: 15px; font-weight: bold; color: #d4af37;">
            Please use invoice number ${data.invoiceNumber} as payment reference.
        </p>
    </div>
</body>
</html>
        `

        // Create a new window and print as PDF
        const printWindow = window.open("", "_blank")
        if (printWindow) {
          printWindow.document.write(invoiceHTML)
          printWindow.document.close()

          // Wait for content to load then trigger print
          printWindow.onload = () => {
            setTimeout(() => {
              printWindow.print()
              printWindow.close()
            }, 500)
          }
        }
      }

      generatePDFInvoice(invoiceData)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setOrderComplete(true)
      clearCart()
    } catch (error) {
      console.error("[v0] Error processing order:", error)
    } finally {
      setIsProcessing(false)
    }
  }

  const isFormValid = Object.values(customerDetails).every((value) => value.trim() !== "")

  if (orderComplete) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Order Confirmed!</h3>
            <p className="text-gray-600 mb-6">
              Your invoice has been generated. Please make payment using the banking details provided.
            </p>
            <Button onClick={onClose} className="w-full">
              Continue Shopping
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[80vw] h-[75vh] overflow-hidden p-0 rounded-lg border shadow-xl bg-white">
        <DialogHeader className="px-3 py-2 border-b bg-gradient-to-r from-blue-50 to-indigo-50 flex-shrink-0">
          <DialogTitle className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <div className="w-5 h-5 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            ✨ Secure Checkout
          </DialogTitle>
          <p className="text-xs text-gray-600 mt-1">Complete your order details below</p>
        </DialogHeader>

        <div className="grid grid-cols-2 overflow-hidden bg-gray-50 flex-1">
          <div className="p-3 overflow-y-auto bg-white border-r border-gray-100">
            <div className="max-w-full">
              <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-2 h-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7-7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                Customer Information
              </h3>

              <div className="space-y-3">
                <div>
                  <Label htmlFor="name" className="text-xs font-semibold text-gray-700 mb-1 block">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={customerDetails.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="h-8 text-xs border border-gray-200 focus:border-blue-500 rounded px-2"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="email" className="text-xs font-semibold text-gray-700 mb-1 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerDetails.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="h-8 text-xs border border-gray-200 focus:border-blue-500 rounded px-2"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-xs font-semibold text-gray-700 mb-1 block">
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      value={customerDetails.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="h-8 text-xs border border-gray-200 focus:border-blue-500 rounded px-2"
                      placeholder="+27 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="text-xs font-semibold text-gray-700 mb-1 block">
                    Street Address *
                  </Label>
                  <Textarea
                    id="address"
                    value={customerDetails.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="min-h-[40px] text-xs border border-gray-200 focus:border-blue-500 rounded resize-none px-2 py-1"
                    placeholder="Enter your complete street address"
                    rows={2}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="city" className="text-xs font-semibold text-gray-700 mb-1 block">
                      City *
                    </Label>
                    <Input
                      id="city"
                      value={customerDetails.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      className="h-8 text-xs border border-gray-200 focus:border-blue-500 rounded px-2"
                      placeholder="Your city"
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode" className="text-xs font-semibold text-gray-700 mb-1 block">
                      Postal Code *
                    </Label>
                    <Input
                      id="postalCode"
                      value={customerDetails.postalCode}
                      onChange={(e) => handleInputChange("postalCode", e.target.value)}
                      className="h-8 text-xs border border-gray-200 focus:border-blue-500 rounded px-2"
                      placeholder="0000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-3 overflow-y-auto border-l border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-2 h-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                Order Summary
              </h3>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                {state.itemCount} items
              </span>
            </div>

            <div className="space-y-2">
              {state.items.map((item) => (
                <div key={item.id} className="flex items-center gap-2 p-2 bg-white rounded border border-gray-200">
                  <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-4 h-4 object-cover rounded"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                        target.nextElementSibling!.textContent = item.name.charAt(0)
                      }}
                    />
                    <span className="text-gray-600 font-medium hidden text-xs">{item.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 text-xs truncate">{item.name}</p>
                    <p className="text-xs text-gray-500">Code: {item.code}</p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-gray-600">
                        Qty: {item.quantity} × R{item.price.toFixed(2)}
                      </span>
                      <span className="font-medium text-gray-900 text-xs">
                        R{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-3" />

            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium">R{state.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">VAT (15%):</span>
                <span className="font-medium">R{(state.total * 0.15).toFixed(2)}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-bold text-sm">
                <span>Total:</span>
                <span className="text-blue-600">R{(state.total * 1.15).toFixed(2)}</span>
              </div>
            </div>

            <div className="bg-blue-50 p-2 rounded border border-blue-200 mb-3 mt-3">
              <h4 className="font-medium text-gray-900 mb-2 text-xs flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                Payment Details
              </h4>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Bank:</span>
                  <span className="font-medium">Nedbank</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Branch:</span>
                  <span className="font-medium">198765</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Account:</span>
                  <span className="font-medium">At The Business Clinic</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Number:</span>
                  <span className="font-mono font-bold">1288536437</span>
                </div>
              </div>
            </div>

            <Button
              onClick={handleSubmitOrder}
              disabled={!isFormValid || isProcessing}
              className="w-full h-8 text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-300 disabled:to-gray-400"
            >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </div>
              ) : (
                `Place Order (${state.itemCount} items)`
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
