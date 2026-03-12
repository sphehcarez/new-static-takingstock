interface InvoiceItem {
  id: string
  name: string
  price: number
  quantity: number
}

interface CustomerDetails {
  name: string
  email: string
  phone: string
  address: string
  city: string
  postalCode: string
}

interface InvoiceData {
  invoiceNumber: string
  date: string
  customer: CustomerDetails
  items: InvoiceItem[]
  subtotal: number
  tax: number
  total: number
}

export function generateInvoice(data: InvoiceData): string {
  const invoiceHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Invoice ${data.invoiceNumber}</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; color: #333; }
        .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #d4a574; padding-bottom: 20px; }
        .logo { font-size: 28px; font-weight: bold; color: #d4a574; margin-bottom: 10px; }
        .company-info { color: #666; }
        .invoice-details { display: flex; justify-content: space-between; margin-bottom: 30px; }
        .customer-info, .invoice-info { width: 48%; }
        .section-title { font-weight: bold; color: #d4a574; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 5px; }
        .items-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
        .items-table th, .items-table td { padding: 12px; text-align: left; border-bottom: 1px solid #eee; }
        .items-table th { background-color: #f8f4f0; color: #d4a574; font-weight: bold; }
        .totals { text-align: right; margin-bottom: 30px; }
        .totals table { margin-left: auto; }
        .totals td { padding: 8px 15px; }
        .total-row { font-weight: bold; font-size: 18px; color: #d4a574; border-top: 2px solid #d4a574; }
        .payment-info { background-color: #f8f4f0; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .footer { text-align: center; color: #666; font-size: 12px; border-top: 1px solid #eee; padding-top: 20px; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">Taking Stock</div>
        <div class="company-info">
          Measure to manage<br>
          Premium Healing Retreat Events
        </div>
      </div>

      <div class="invoice-details">
        <div class="customer-info">
          <div class="section-title">Bill To:</div>
          <strong>${data.customer.name}</strong><br>
          ${data.customer.address}<br>
          ${data.customer.city}, ${data.customer.postalCode}<br>
          Email: ${data.customer.email}<br>
          Phone: ${data.customer.phone}
        </div>
        <div class="invoice-info">
          <div class="section-title">Invoice Details:</div>
          <strong>Invoice #:</strong> ${data.invoiceNumber}<br>
          <strong>Date:</strong> ${data.date}<br>
          <strong>Due Date:</strong> ${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
        </div>
      </div>

      <table class="items-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          ${data.items
            .map(
              (item) => `
            <tr>
              <td>${item.name}</td>
              <td>${item.quantity}</td>
              <td>R${item.price.toFixed(2)}</td>
              <td>R${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          `,
            )
            .join("")}
        </tbody>
      </table>

      <div class="totals">
        <table>
          <tr>
            <td>Subtotal:</td>
            <td>R${data.subtotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>VAT (15%):</td>
            <td>R${data.tax.toFixed(2)}</td>
          </tr>
          <tr class="total-row">
            <td>Total:</td>
            <td>R${data.total.toFixed(2)}</td>
          </tr>
        </table>
      </div>

      <div class="payment-info">
        <div class="section-title">Payment Instructions:</div>
        <strong>Bank:</strong> Nedbank<br>
        <strong>Account Holder:</strong> At The Business Clinic Pty Ltd<br>
        <strong>Account Number:</strong> 1288536437<br>
        <strong>Branch Code:</strong> 198765<br>
        <strong>Reference:</strong> ${data.invoiceNumber}<br><br>
        <em>Please use the invoice number as your payment reference and send proof of payment via WhatsApp to +27 XX XXX XXXX</em>
      </div>

      <div class="footer">
        <p>Thank you for your order! We look forward to supporting you on your healing journey.</p>
        <p>Taking Stock - Where healing meets purpose</p>
      </div>
    </body>
    </html>
  `

  // In a real application, you would:
  // 1. Send this HTML to a PDF generation service
  // 2. Email the PDF to the customer
  // 3. Store the invoice in your database

  console.log("[v0] Generated invoice HTML for:", data.customer.name)

  // For demo purposes, we'll create a downloadable HTML file
  if (typeof window !== "undefined") {
    const blob = new Blob([invoiceHtml], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `invoice-${data.invoiceNumber}.html`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return invoiceHtml
}
