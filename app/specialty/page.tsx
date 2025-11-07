import Hero from '@/components/Hero'
import ServicesGrid from '@/components/home/ServicesGrid'
import SplitContent from '@/components/home/SplitContent'

// Specialty services index page data
const heroData = {
  title: "Specialized Pharmacy Services",
  subtitle: "Advanced pharmacy solutions for unique healthcare needs. From long-term care facilities to legal case support, we provide specialized services with the expertise and attention your situation demands.",
  imageSrc: "/images/specialty-hero.jpg",
  imageAlt: "Specialized pharmacy services and consultation",
  primaryCta: {
    label: "Contact Our Specialists",
    href: "/contact"
  },
  secondaryCta: {
    label: "View All Services",
    href: "/services"
  }
}

const specialtyServices = [
  {
    title: "Long-Term Care",
    description: "Comprehensive pharmacy services for assisted living facilities, nursing homes, and long-term care facilities with medication management and delivery.",
    imageSrc: "/images/specialty-ltc.jpg",
    imageAlt: "Long-term care facility consultation",
    href: "/long-term-care"
  },
  {
    title: "Auto Accident Claims",
    description: "Expert pharmacy services for auto accident cases, working with attorneys, doctors, and claim adjusters for seamless patient care.",
    imageSrc: "/images/specialty-auto-accident.jpg",
    imageAlt: "Legal documentation and pharmacy consultation",
    href: "/auto-accident"
  },
  {
    title: "Worker's Compensation",
    description: "Dedicated support for injured workers with comprehensive medical care coordination, claims management, and recovery planning.",
    imageSrc: "/images/specialty-workers-comp.jpg",
    imageAlt: "Workplace injury recovery consultation",
    href: "/workers-comp"
  },
  {
    title: "Weight Management / GLP-1",
    description: "Professional semaglutide GLP-1 injection services for weight management under medical supervision with personalized care plans.",
    imageSrc: "/images/specialty-semaglutide.jpg",
    imageAlt: "Medical weight management consultation",
    href: "/semaglutide"
  }
]

const splitContentData = {
  imageSrc: "/images/specialty-consultation.jpg",
  imageAlt: "Specialized pharmacy consultation with healthcare professionals",
  eyebrow: "Expert Care",
  title: "Why Choose Our Specialized Services?",
  content: "Our specialized pharmacy services go beyond traditional prescription filling. We understand the unique requirements of legal cases, facility management, and complex medical conditions. With dedicated support teams, specialized documentation, and coordinated care, we provide the expertise your situation demands.",
  cta: {
    label: "Discuss Your Needs",
    href: "/contact"
  }
}


export default function SpecialtyPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero {...heroData} />
      
      {/* Specialty Services Grid */}
      <ServicesGrid title="Our Specialized Services" services={specialtyServices} />
      
      {/* Split Content - Why Choose Us */}
      <SplitContent {...splitContentData} imageLeft />
    </>
  )
}

export const metadata = {
  title: 'Specialized Pharmacy Services - Xpress Care Pharmacy',
  description: 'Advanced pharmacy solutions including long-term care, auto accident claims, worker\'s compensation, and weight management services.',
  keywords: 'specialized pharmacy services, long-term care pharmacy, legal case pharmacy, worker compensation, weight management, GLP-1 services',
}
