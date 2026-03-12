# Taking Stock - Healing Retreat Website

A premium, modern website for Taking Stock, a sacred space for women's healing retreats, personal transformation, and spiritual growth. Built with Next.js and featuring a sophisticated glassmorphism design system.

## 🌟 Project Overview

Taking Stock is a healing retreat business that provides sacred spaces for women seeking transformation, growth, and sisterhood. This website serves as the digital presence for the brand, featuring event bookings, merchandise sales, testimonials, and comprehensive information about their healing programs.

### Key Features

- **Retreat Event Management** - Showcase upcoming and past healing retreats with detailed information
- **Online Merchandise Store** - Shopping cart system for branded products and healing materials
- **Payment Integration** - Secure payment popup with banking details and WhatsApp integration
- **Media Gallery** - Visual documentation of past retreats and events
- **Testimonials System** - Client stories and feedback display
- **Contact & Booking** - Multiple contact methods and reservation system
- **Responsive Design** - Optimized for all devices and screen sizes

## 🎨 Design System

### Theme & Aesthetics
- **Design Style**: Premium Glassmorphism with subtle animations
- **Color Palette**: 
  - Primary: Blush Pink (#FAD8D4)
  - Secondary: Champagne Gold (#D9CBAE)
  - Background: Light Frost (#F5F5F5)
  - Text: Dark Gray (#4B5563)
- **Typography**: 
  - Headings: Playfair Display (serif)
  - Body: Inter (sans-serif)
- **Effects**: Backdrop blur, floating animations, glass morphism cards

### Visual Elements
- Glassmorphism cards with transparency effects
- Floating crystal animations
- Pulse glow effects for interactive elements
- Smooth transitions and hover states
- Premium shadow and lighting effects

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom components with shadcn/ui base
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Playfair Display)

### Key Dependencies
\`\`\`json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^4.0.0",
  "lucide-react": "latest",
  "@next/font": "latest"
}
\`\`\`

## 📁 Project Structure

\`\`\`
taking-stock-website/
├── app/                          # Next.js App Router
│   ├── about/                    # About Us page
│   ├── contact/                  # Contact page
│   ├── events/                   # Events timeline page
│   ├── media/                    # Media gallery page
│   ├── merchandise/              # Product catalog page
│   ├── programs/                 # Programs overview page
│   ├── story/                    # Our Story page
│   ├── testimonials/             # Client testimonials page
│   ├── globals.css               # Global styles and theme
│   ├── layout.tsx                # Root layout component
│   └── page.tsx                  # Homepage
├── components/                   # Reusable components
│   ├── ui/                       # Base UI components
│   ├── navigation.tsx            # Main navigation component
│   ├── payment-popup.tsx         # Payment modal component
│   ├── cart-sidebar.tsx          # Shopping cart sidebar
│   └── checkout-modal.tsx        # Checkout modal component
├── lib/                          # Utility functions
│   ├── cart-context.tsx          # Shopping cart state management
│   └── utils.ts                  # Helper utilities
├── public/                       # Static assets
│   └── images/                   # Brand logos and media
├── hooks/                        # Custom React hooks
├── package.json                  # Dependencies and scripts
└── README.md                     # Project documentation
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
\`\`\`bash
git clone <repository-url>
cd taking-stock-website
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. **Run development server**
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. **Open in browser**
Navigate to `http://localhost:3000`

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🌐 Hosting on Afrihost

### Deployment Steps

1. **Build the application**
\`\`\`bash
npm run build
\`\`\`

2. **Upload to Afrihost**
- Access your Afrihost hosting control panel
- Navigate to File Manager or use FTP client
- Upload the `.next` folder and all static files
- Ensure `package.json` and `next.config.mjs` are included

3. **Configure Node.js Environment**
- Set Node.js version to 18+ in hosting panel
- Configure start script: `npm start`
- Set environment variables if needed

4. **Domain Configuration**
- Point your domain to the hosting directory
- Configure SSL certificate through Afrihost panel
- Test all functionality after deployment

### Environment Variables
Create `.env.local` for local development:
\`\`\`env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
\`\`\`

## 📱 Features & Functionality

### Pages Overview

1. **Homepage** (`/`)
   - Hero section with brand messaging
   - About section with core values
   - Upcoming event highlight
   - Testimonials showcase
   - Contact form

2. **Events** (`/events`)
   - Timeline of all retreats (2018-2025)
   - Event details and descriptions
   - Reservation system with payment popup

3. **Media** (`/media`)
   - Photo galleries from past retreats
   - Visual documentation of healing journeys
   - Event-specific image collections

4. **Merchandise** (`/merchandise`)
   - Product catalog with shopping cart
   - "Coming Soon" status for products
   - Checkout system with payment processing

5. **About Us** (`/about`)
   - Vision and mission statements
   - Core values and principles
   - Subscription philosophy

6. **Programs** (`/programs`)
   - 10 healing programs overview
   - Program descriptions and benefits
   - Spiritual and practical guidance

7. **Our Story** (`/story`)
   - Brand origin and journey
   - Founder's message
   - Sacred movement philosophy

8. **Contact** (`/contact`)
   - Contact information
   - WhatsApp integration
   - Location details

### Interactive Features

- **Payment Popup**: Banking details with copy functionality
- **Shopping Cart**: Add/remove items, quantity management
- **Responsive Navigation**: Mobile-friendly menu system
- **WhatsApp Integration**: Direct messaging for bookings
- **Image Galleries**: Organized by event and year

## 🎯 Business Logic

### Event Management
- Chronological display of retreats
- Payment deadline tracking (September 15)
- Reservation system with deposit requirements

### E-commerce Features
- Shopping cart state management
- Product catalog with "Coming Soon" status
- Secure checkout process
- Invoice generation capability

### Contact & Communication
- Multiple contact methods
- WhatsApp integration for instant communication
- Payment confirmation system

## 🔧 Customization

### Theme Modifications
Edit `app/globals.css` to modify:
- Color variables in `:root`
- Glassmorphism effects
- Animation timings
- Typography scales

### Content Updates
- Page content in respective `page.tsx` files
- Navigation items in `components/navigation.tsx`
- Contact information in relevant components

### Adding New Pages
1. Create new directory in `app/`
2. Add `page.tsx` with component
3. Update navigation component
4. Follow existing design patterns

## 📞 Support & Contact

For technical support or customization requests:
- **WhatsApp**: +27 83 362 7409
- **Email**: Contact through website form

## 📄 License

This project is proprietary software developed for Taking Stock. All rights reserved.

---

**Taking Stock** - *Measure to manage*  
A sacred space for healing, reflection, and becoming.
