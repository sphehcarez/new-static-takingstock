"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, CreditCard, Copy, CheckCircle, X } from "lucide-react"

interface PaymentPopupProps {
  isOpen: boolean
  onClose: () => void
  eventTitle: string
  eventDate: string
  amount: string
  deposit: string
}

export function PaymentPopup({ isOpen, onClose, eventTitle, eventDate, amount, deposit }: PaymentPopupProps) {
  const [copied, setCopied] = useState(false)

  const accountDetails = {
    bank: "Nedbank",
    branch: "198765",
    accountName: "At The Business Clinic",
    accountNumber: "1288536437",
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-strong w-[95vw] max-w-md sm:max-w-2xl h-[95vh] sm:h-auto p-0 overflow-hidden flex flex-col">
        <div className="bg-gradient-to-r from-primary to-secondary p-4 sm:p-6 text-white flex-shrink-0">
          <div className="flex items-center justify-between">
            <DialogHeader className="flex-1">
              <DialogTitle className="text-lg sm:text-2xl font-serif">{eventTitle}</DialogTitle>
              <p className="text-white font-semibold text-base sm:text-lg mt-1">{eventDate}</p>
            </DialogHeader>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20 p-2 sm:hidden">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
          <Card className="glass border-primary/20 bg-primary/5">
            <CardContent className="p-4 sm:p-4">
              <div className="space-y-4">
                <div className="text-center">
                  <span className="text-muted-foreground text-sm font-medium">Total Amount:</span>
                  <p className="font-bold text-2xl sm:text-xl text-foreground mt-1">{amount}</p>
                </div>
                <div className="text-center">
                  <span className="text-muted-foreground text-sm font-medium">Deposit Required:</span>
                  <p className="font-bold text-2xl sm:text-xl text-primary mt-1">{deposit}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 sm:p-4">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 text-red-700 mb-2">
                <Calendar className="h-5 w-5" />
                <span className="font-bold text-base sm:text-base">Payment Deadline</span>
              </div>
              <p className="font-bold text-red-800 text-xl sm:text-lg">15 September 2025</p>
              <p className="text-red-600 text-sm sm:text-sm mt-1">Secure your space by this date</p>
            </div>
          </div>

          <Card className="glass-strong">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4">
                <CreditCard className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-base sm:text-lg text-foreground">Banking Details</h3>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="text-center sm:text-left">
                    <label className="text-xs sm:text-sm text-muted-foreground">Bank:</label>
                    <p className="font-medium text-sm sm:text-base text-foreground">{accountDetails.bank}</p>
                  </div>
                  <div className="text-center sm:text-left">
                    <label className="text-xs sm:text-sm text-muted-foreground">Branch Code:</label>
                    <p className="font-medium text-sm sm:text-base text-foreground">{accountDetails.branch}</p>
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <label className="text-xs sm:text-sm text-muted-foreground">Account Name:</label>
                  <p className="font-medium text-sm sm:text-base text-foreground">{accountDetails.accountName}</p>
                </div>

                <div className="text-center sm:text-left">
                  <label className="text-xs sm:text-sm text-muted-foreground">Account Number:</label>
                  <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 mt-1">
                    <p className="font-bold text-lg sm:text-xl text-foreground tracking-wider">
                      {accountDetails.accountNumber}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(accountDetails.accountNumber)}
                      className="glass w-full sm:w-auto h-10 sm:h-8"
                    >
                      {copied ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-4">
            <h4 className="font-bold text-blue-900 mb-2 text-center sm:text-left text-sm sm:text-base">Quick Steps:</h4>
            <ul className="text-blue-800 text-xs sm:text-sm space-y-1">
              <li>• Use your full name as reference</li>
              <li>• Send proof via WhatsApp below</li>
              <li>• Get confirmation within 24 hours</li>
            </ul>
          </div>
        </div>

        <div className="flex-shrink-0 p-4 sm:p-6 border-t bg-background/50">
          <div className="flex flex-col space-y-3">
            <Button
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground text-base font-medium"
              onClick={() => window.open("https://wa.me/27123456789", "_blank")}
            >
              Send Proof via WhatsApp
            </Button>
            <Button variant="outline" className="w-full h-10 glass bg-transparent text-sm sm:hidden" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
