import { z } from 'zod'

// Shared helpers for prescription forms
const phone = z.string().min(7).max(32).trim()
const optionalPhone = z.string().trim().optional().or(z.literal(''))

export const RefillSchema = z.object({
  patientName: z.string().min(2).max(120),
  dateOfBirth: z.string().min(4).max(32), // store as string; no DOB parsing on server
  patientPhone: phone,
  patientEmail: z.string().email().optional().or(z.literal('')),
  rxNumbers: z.string().min(1).max(2000), // free text; can contain multiple rx# separated by commas/newlines
  notes: z.string().max(2000).optional().or(z.literal('')),
  consent: z.literal(true), // must be checked
  // Honeypot field
  company: z.string().optional().or(z.literal('')),
})

export const TransferSchema = z.object({
  // From (current pharmacy) entered by patient
  fromPharmacyName: z.string().min(2).max(200),
  fromPharmacyPhone: phone,
  fromPharmacyFax: optionalPhone,
  fromPharmacyZip: z.string().min(3).max(15).optional().or(z.literal('')),

  // Patient identifiers
  patientName: z.string().min(2).max(120),
  dateOfBirth: z.string().min(4).max(32),
  patientPhone: phone,

  // Rx list to transfer
  meds: z.string().min(1).max(4000),

  // Authorization
  consent: z.literal(true),
  eSignature: z.string().min(2).max(120), // typed signature (name)
  
  // Honeypot field
  company: z.string().optional().or(z.literal('')),
})

export type RefillFormData = z.infer<typeof RefillSchema>
export type TransferFormData = z.infer<typeof TransferSchema>

// ==============================================================
// EXISTING SCHEMA HELPERS (restored for compatibility)
// ==============================================================

// Organization Schema for structured data
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Pharmacy",
  "name": "Xpress Care Pharmacy",
  "url": "https://xpresscarepharmacy.com",
  "logo": "https://xpresscarepharmacy.com/images/logo.png",
  "image": "https://xpresscarepharmacy.com/images/pharmacy-exterior.jpg",
  "telephone": "313-914-3736",
  "email": "info@xpresscarepharmacy.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3040 E 7 Mile",
    "addressLocality": "Detroit",
    "addressRegion": "MI",
    "postalCode": "48234",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "42.4314",
    "longitude": "-83.0458"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
  "sameAs": [
    "https://www.facebook.com/xpresscarepharmacy",
    "https://www.instagram.com/xpresscarepharmacy",
    "https://www.google.com/maps/place/xpress-care-pharmacy"
  ]
}

// FAQ Schema Generator
export function createFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

// Service Schema Generator
export function createServiceSchema(service: {
  name: string
  description: string
  url: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Pharmacy",
      "name": "Xpress Care Pharmacy",
      "url": "https://xpresscarepharmacy.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "Detroit",
      "addressRegion": "MI"
    },
    "url": service.url,
    "image": service.image,
    "category": "Pharmacy Services"
  }
}

// Breadcrumb Schema Generator
export function createBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}