# Xpress Care Pharmacy Website

A production-ready Next.js 14 website for a community pharmacy built with TypeScript, Tailwind CSS, and modern web standards. Features comprehensive pharmacy services, online refills, contact forms, and accessibility-first design.

## 🚀 Features

### Core Functionality
- **Online Prescription Refills** - Email-based submission with client-side validation
- **Prescription Transfer** - Seamless transfer from other pharmacies via email
- **Contact System** - Location finder with pharmacy selection  
- **Service Pages** - 13 detailed service pages with side navigation
- **Specialty Pages** - 4 marketing pages for specialized services
- **Responsive Design** - Mobile-first with no hamburger menu
- **Accessibility** - WCAG compliant with keyboard navigation

### Technical Stack
- **Next.js 14** - App Router with React Server Components
- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first styling with custom design tokens
- **Heroicons** - Consistent iconography
- **Form Validation** - Client-side validation with error handling
- **API Routes** - Contact and refill submission endpoints

## 🎨 Design System

### Brand Colors
```css
--brand-50: #f0f7f3    /* Light tint backgrounds */
--brand-100: #d9efe5   /* Pill badges, light elements */
--brand-200: #b7e1cf
--brand-300: #8fd1b7
--brand-400: #67c19f
--brand-500: #44b187   /* Primary brand color */
--brand-600: #2f976f   /* Button backgrounds */
--brand-700: #237859   /* Button hover states */
--brand-800: #1d5e46
--brand-900: #164936   /* Dark text elements */

--beige: #f4efe7       /* Promo section backgrounds */
--muted: #667085       /* Secondary text */
```

### Typography
- **Headings**: Inter font family
- **Body**: Inter font family  
- **Responsive sizing**: Mobile-first with desktop enhancements

### Components
- **12-16px border radius** for modern rounded corners
- **Soft shadows**: `0 8px 24px rgba(0,0,0,.06)`
- **1280px max container width**
- **Section padding**: 40px mobile, 72px desktop

## 📁 Project Structure

```
├── app/
│   ├── (site)/
│   │   ├── layout.tsx                    # Root layout with header/footer
│   │   ├── page.tsx                      # Homepage (stub)
│   │   ├── about/page.tsx                # About page (stub)
│   │   ├── contact/page.tsx              # Contact with location finder
│   │   ├── online-refill/page.tsx        # Online refill form
│   │   ├── services/
│   │   │   ├── page.tsx                  # Services index
│   │   │   ├── immunizations/
│   │   │   └── [...10 service pages]
│   │   └── specialty/
│   │       ├── long-term-care/
│   │       ├── auto-accident/
│   │       ├── workers-comp/
│   │       └── semaglutide/
│   └── api/
│       ├── contact/route.ts              # Contact form submission
│       └── refill/route.ts               # Prescription refill submission
├── components/
│   ├── AppHeader.tsx                     # Global header with navigation
│   ├── AppFooter.tsx                     # Global footer
│   ├── Shared UI/
│   │   ├── Section.tsx                   # Layout wrapper component
│   │   ├── Button.tsx                    # Reusable button component
│   │   ├── Card.tsx                      # Content card component
│   │   ├── Input.tsx                     # Form input component
│   │   ├── Select.tsx                    # Form select component
│   │   └── Textarea.tsx                  # Form textarea component
│   ├── Service Pages/
│   │   ├── ServiceLayout.tsx             # Service page template
│   │   ├── SideNav.tsx                   # Services navigation
│   │   └── Breadcrumbs.tsx               # Navigation breadcrumbs
│   ├── Marketing/
│   │   ├── MarketingHero.tsx             # Green hero sections
│   │   ├── TrioFeatureCards.tsx          # 3-column feature cards
│   │   ├── NumberedList.tsx              # Process step lists
│   │   ├── ContactBanner.tsx             # CTA banner sections
│   │   └── ComplianceFootnote.tsx        # Legal disclaimers
│   ├── Forms/
│   │   ├── ContactForm.tsx               # Contact form with validation
│   │   ├── OnlineRefillForm.tsx          # Dynamic Rx refill form
│   │   └── LocationFinder.tsx            # Pharmacy location finder
│   ├── Global/
│   │   ├── AppPromo.tsx                  # Mobile app promotion
│   │   └── Newsletter.tsx                # Email subscription
├── lib/
│   ├── servicesNav.ts                    # Services navigation data
│   ├── pharmacies.ts                     # Pharmacy location data
│   └── schemas.ts                        # SEO schema markup
└── public/
    └── assets/images/                    # Hero and service images
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone or extract the project
cd xpress-care-pharmacy

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Required: Google Apps Script Web App URL for form submissions
NEXT_PUBLIC_FORM_ENDPOINT=https://script.google.com/macros/s/XXXXX/exec

# Optional: Google Maps API key for location finder
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

**Important:** See `GAS_SETUP.md` for complete instructions on setting up the Google Apps Script endpoint for form submissions.

## 📝 Content Management

### Service Pages Content
Service pages use the `ServiceLayout` component with this data structure:

```typescript
const pageData = {
  title: 'Service Name',
  heroImg: { src: '/path/to/image.jpg', alt: 'Description' },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Service Name' }
  ],
  sections: [
    {
      h2: 'Section Title',
      body: ['Paragraph text...'],
      bullets: ['Bullet point 1', 'Bullet point 2']
    }
  ],
  ctas: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Transfer', href: '/transfer', variant: 'ghost' }
  ],
  showAppPromo: true,
  showNewsletter: false
}
```

### Pharmacy Locations
Update pharmacy information in `/lib/pharmacies.ts`:

```typescript
export const pharmacies: Pharmacy[] = [
  {
    id: 'location-id',
    name: 'Pharmacy Name - Location',
    address: '123 Street Name, City, ST 12345',
    phone: '+1-555-123-4567',
    hours: ['Mon–Fri: 9:00 AM – 6:00 PM', 'Sat: 9:00 AM – 2:00 PM'],
    lat: 42.123,
    lng: -84.456,
  }
]
```

## 🔧 Customization

### Brand Colors
Update the color palette in `tailwind.config.js`:

```javascript
colors: {
  brand: {
    50: '#f0f7f3',
    // ... update all brand colors
    900: '#164936',
  },
  beige: '#f4efe7',
  muted: '#667085',
}
```

### Navigation Menu
Update navigation links in `components/AppHeader.tsx`:

```typescript
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  // ... add/remove navigation items
]
```

### Service Navigation Order
Update service order in `/lib/servicesNav.ts` - this controls the left sidebar navigation on all service pages.

## 📱 Mobile Experience

### Navigation
- **Desktop**: Full horizontal navigation with dropdowns
- **Mobile**: Slide-in menu (no hamburger menu as requested)
- **Sticky header** for easy access to Online Refill CTA

### Forms
- **Responsive layouts** that stack on mobile
- **Touch-friendly inputs** with proper spacing
- **Dynamic prescription rows** with add/remove functionality

## ♿ Accessibility Features

### Keyboard Navigation
- **Tab order**: Logical flow through all interactive elements
- **Focus indicators**: Visible focus rings on all clickable elements
- **Skip links**: Available for screen readers

### Screen Readers
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA labels**: Descriptive labels for complex interactions
- **Error handling**: Clear error messages with proper roles

### Form Accessibility
- **Label association**: All inputs properly labeled
- **Error states**: `aria-invalid` and error descriptions
- **Required fields**: Visual and programmatic indicators

## 🔒 Security & Privacy

### Form Security
- **Honeypot protection**: Hidden field filters out bot submissions
- **Input validation**: Client-side validation with length limits
- **Rate limiting**: Optional rate limiting in Google Apps Script (3 requests per 15 min per IP)
- **Data sanitization**: All form data is sanitized before email composition
- **No server-side storage**: Forms submit directly to Google Apps Script, no PHI stored

### Privacy Features
- **Privacy disclaimer**: Forms include "Avoid entering unnecessary sensitive details"
- **No PHI storage**: Forms email directly to pharmacy, no server-side persistence
- **No CORS preflight**: Uses `application/x-www-form-urlencoded` to avoid CORS complexity
- **Data handling**: Secure form submission with proper error handling
- **Reply-To support**: Pharmacy can reply directly to patient email if provided

## 🚀 Performance

### Optimization
- **Static generation**: All pages pre-rendered at build time
- **Image optimization**: Next.js automatic image optimization
- **Code splitting**: Automatic chunk splitting for faster loads
- **Font optimization**: Inter font with `display: swap`

### Bundle Analysis
- **34 pages** total including API routes
- **~96KB** shared JavaScript
- **Optimized builds** with tree shaking and minification

## 📊 Analytics Ready

### Recommended Event Tracking
```javascript
// Form submissions
gtag('event', 'form_submit', {
  'form_name': 'contact',
  'pharmacy_id': 'location-id'
});

// Service navigation
gtag('event', 'service_click', {
  'service_name': 'immunizations'
});

// App downloads
gtag('event', 'app_download', {
  'platform': 'ios' // or 'android'
});
```

## 🧪 Testing

### Component Testing
Individual components are built with testing in mind:
- Isolated component logic
- Clear prop interfaces
- Predictable state management

### Form Testing
- **Validation testing**: Test all validation rules
- **Submission testing**: Test successful and error scenarios
- **Accessibility testing**: Test keyboard navigation and screen readers

## 📈 SEO & Schema

### Meta Tags
- Comprehensive meta tags on all pages
- Open Graph tags for social sharing
- Twitter Card optimization

### Schema Markup
- **Organization schema** for pharmacy information
- **LocalBusiness schema** for location pages
- **Service schema** for individual service pages
- **Breadcrumb schema** for navigation

## 📧 Form Submission System

### Email-Based Architecture

Forms use a **Google Apps Script Web App** as an email relay endpoint:

1. **No backend server required** - Site remains fully static on Vercel
2. **Direct email delivery** - Forms POST to Google Apps Script → emails sent via Gmail
3. **No PHI storage** - Data is never persisted server-side
4. **JavaScript-enhanced with no-JS fallback** - Works with or without JavaScript
5. **Test & production modes** - Easy switching between test and production recipients

### Setup

See **`GAS_SETUP.md`** for complete deployment instructions including:
- Copy-paste Google Apps Script code
- Step-by-step deployment guide
- Configuration switches (TEST_MODE, recipients)
- Rate limiting setup
- Troubleshooting tips

### Testing

See **`tests/forms.email-only.md`** for comprehensive acceptance checklist covering:
- Form validation
- Data normalization (phone, DOB)
- Email delivery and formatting
- Honeypot protection
- Accessibility
- Security
- No-JS fallback

## 🔄 Future Enhancements

### Recommended Additions
1. **CMS Integration** - Contentful, Sanity, or headless WordPress
2. **Map Integration** - Google Maps API for location finder
3. **Search Functionality** - Site-wide search for services and content
4. **Blog System** - Dynamic blog with categories and tags
5. **Appointment Booking** - Integration with scheduling systems

### Technical Improvements
1. **Database Integration** - Replace in-memory form storage
2. **Authentication** - Patient portal for prescription management
3. **Payment Integration** - Online payment for prescriptions
4. **Inventory Integration** - Real-time prescription availability
5. **SMS Notifications** - Prescription ready notifications

## 📞 Support

For technical support or customization requests:
- Review component documentation in `/components`
- Check API route implementations in `/app/api`
- Refer to Tailwind CSS documentation for styling
- Next.js 14 documentation for framework features

## 📄 License

This project is built for Xpress Care Pharmacy. All rights reserved.

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**

*Ready for production deployment with Vercel, Netlify, or any Node.js hosting provider.*