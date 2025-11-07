import Hero from '@/components/Hero'
import ServiceIconGrid from '@/components/home/ServiceIconGrid'
import BenefitRibbon from '@/components/home/BenefitRibbon'
import SplitContent from '@/components/home/SplitContent'
import GoogleReviews from '@/components/home/GoogleReviews'
import FAQ from '@/components/home/FAQ'
import ContactCallout from '@/components/home/ContactCallout'
import JsonLd from '@/components/seo/JsonLd'
import { organizationSchema, createFAQSchema } from '@/lib/schemas'
import { googleReviews } from '@/lib/googleReviews'

// Home page data
const heroData = {
  title: "A Pharmacy That Feels Like Family",
  subtitle: "As a locally owned pharmacy, we take the time to understand your health needs and guide you with care—every step of the way.",
  imageSrc: "/images/hero_home-pharmacy.png",
  imageAlt: "Happy family consulting with pharmacist",
  primaryCta: {
    label: "Online Refill",
    href: "/online-refill"
  },
  secondaryCta: {
    label: "Transfer Prescriptions",
    href: "/transfer"
  }
}

const serviceIcons = [
  {
    icon: "truck" as const,
    title: "Free Delivery",
    description: "Same-day local delivery available",
    href: "/services/free-delivery"
  },
  {
    icon: "refresh" as const,
    title: "Prescription Transfer",
    description: "We handle the process for you",
    href: "/transfer"
  },
  {
    icon: "computer" as const,
    title: "Online Refills",
    description: "Quick, easy, and secure",
    href: "/refill"
  },
  {
    icon: "syringe" as const,
    title: "Immunizations",
    description: "Walk-ins welcome",
    href: "/services/immunizations"
  },
  {
    icon: "phone" as const,
    title: "Ask a Pharmacist",
    description: "Personalized support",
    href: "/contact"
  },
  {
    icon: "heart" as const,
    title: "Pet Meds",
    description: "Affordable medications for your pets",
    href: "/services/pet-care"
  }
]

const benefits = [
  { icon: "clock" as const, label: "Fast Friendly Service" },
  { icon: "tag" as const, label: "Affordable Prices" },
  { icon: "shield" as const, label: "Most Insurance Accepted" }
]

const splitContentData = {
  imageSrc: "/images/hero_male-pharmacist-aisle-bottle.png",
  imageAlt: "Friendly pharmacist in store aisle",
  eyebrow: "Community Care",
  title: "Putting Your Health First with Community-Focused Pharmacy Care",
  content: "Our focus has always been on you. We combine expert medication management with compassionate care, taking time to understand your unique health needs. Unlike large chain pharmacies, we know your name and your story.",
  highlights: [
    "Personalized medication counseling and guidance",
    "Direct coordination with your healthcare providers",
    "Same-day prescription filling and free delivery",
    "Comprehensive medication therapy management"
  ],
  cta: {
    label: "Learn More About Us",
    href: "/about"
  }
}


const faqs = [
  {
    id: "1",
    question: "Do I need a prescription for medication?",
    answer: "For prescription drugs, yes, you'll need a valid prescription from your healthcare provider. For over-the-counter medications, vitamins, and health supplies, no prescription is required. Our pharmacists are always available to help you choose the right OTC options."
  },
  {
    id: "2",
    question: "Do you offer medication delivery?",
    answer: "Yes! We offer same-day or next-day delivery in our service area at no charge for qualifying prescriptions. We also provide scheduled delivery options to ensure you never run out of important medications."
  },
  {
    id: "3",
    question: "Do you offer medication counseling?",
    answer: "Absolutely. Our pharmacists provide private consultations to help you understand your medications, potential side effects, proper usage, and interactions. We're here to answer all your questions and ensure you feel confident about your treatment."
  },
  {
    id: "4",
    question: "Do you carry specialty medications?",
    answer: "We work with specialty suppliers and can coordinate specialty medication orders on your behalf. If we don't have something in stock, we can typically have it ready for you within 24-48 hours."
  }
]



export default function HomePage() {
  // Generate FAQ schema
  const faqSchema = createFAQSchema(faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  })))

  return (
    <>
      {/* SEO Schema Markup */}
      <JsonLd data={organizationSchema} />
      <JsonLd data={faqSchema} />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Service Icon Grid */}
      <ServiceIconGrid services={serviceIcons} />
      
      {/* Benefit Ribbon */}
      <BenefitRibbon 
        title="Join Our Family for Cost-Effective Health Care" 
        benefits={benefits} 
      />
      
      {/* Split Content - Who We Are */}
      <SplitContent {...splitContentData} imageLeft />
      
      {/* Google Reviews */}
      <GoogleReviews reviews={googleReviews} />
      
      {/* FAQ */}
      <FAQ title="Common Questions" faqs={faqs} />
      
      {/* Contact Callout */}
      <ContactCallout />
    </>
  )
}
