"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ShieldCheck, Package, CreditCard } from "lucide-react"
import Image from "next/image"

interface CustomerDetails {
  name: string
  email: string
  phone: string
  address: string
  city: string
  postalCode: string
}

export default function CheckoutPage() {
  const router = useRouter()
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

  // Redirect if cart is empty
  useEffect(() => {
    if (state.items.length === 0 && !orderComplete) {
      router.push("/merchandise")
    }
  }, [state.items.length, orderComplete, router])

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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 mb-8">
            Your invoice has been generated and sent for printing. Please make payment using the banking details
            provided in the invoice.
          </p>
          <div className="space-y-4">
            <Button onClick={() => router.push("/merchandise")} className="w-full bg-blue-600 hover:bg-blue-700">
              Continue Shopping
            </Button>
            <Button onClick={() => router.push("/")} variant="outline" className="w-full">
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button
              onClick={() => router.back()}
              variant="ghost"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Cart
            </Button>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-900">Secure Checkout</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Customer Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Package className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">Customer Information</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={customerDetails.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="h-12 text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerDetails.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="h-12 text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      value={customerDetails.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="h-12 text-base"
                      placeholder="+27 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="text-sm font-medium text-gray-700 mb-2 block">
                    Street Address *
                  </Label>
                  <Textarea
                    id="address"
                    value={customerDetails.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="min-h-[100px] text-base resize-none"
                    placeholder="Enter your complete street address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="city" className="text-sm font-medium text-gray-700 mb-2 block">
                      City *
                    </Label>
                    <Input
                      id="city"
                      value={customerDetails.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      className="h-12 text-base"
                      placeholder="Your city"
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode" className="text-sm font-medium text-gray-700 mb-2 block">
                      Postal Code *
                    </Label>
                    <Input
                      id="postalCode"
                      value={customerDetails.postalCode}
                      onChange={(e) => handleInputChange("postalCode", e.target.value)}
                      className="h-12 text-base"
                      placeholder="0000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Order Summary</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {state.itemCount} items
                </span>
              </div>

              <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm truncate">{item.name}</p>
                      <p className="text-xs text-gray-500 mt-1">Code: {item.code}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-gray-600">
                          Qty: {item.quantity} × R{item.price.toFixed(2)}
                        </span>
                        <span className="font-medium text-gray-900">R{(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="mb-6" />

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">R{state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">VAT (15%):</span>
                  <span className="font-medium">R{(state.total * 0.15).toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span className="text-blue-600">R{(state.total * 1.15).toFixed(2)}</span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
                <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-blue-600" />
                  Payment Details
                </h4>
                <div className="space-y-2 text-sm">
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
                className="w-full h-12 text-base font-medium bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </div>
                ) : (
                  `Place Order (${state.itemCount} items)`
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
