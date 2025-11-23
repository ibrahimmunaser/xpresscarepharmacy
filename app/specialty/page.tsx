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

      {/* Contact Section */}
      <section className="bg-white py-12">
        <div className="max-w-content mx-auto px-6">
          <div className="bg-brand-navy rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Questions About Our Specialized Services?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Our team is ready to discuss your unique pharmacy needs and create a custom solution for your facility or situation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="text-left">
                <p className="font-semibold text-white mb-2">Contact Us</p>
                <div className="space-y-1 text-white/90">
                  <div>
                    <span className="text-white/70">Phone: </span>
                    <a href="tel:313-914-3736" className="text-white hover:text-white/80 transition-colors font-semibold">
                      (313) 914-3736
                    </a>
                  </div>
                  <div>
                    <span className="text-white/70">Fax: </span>
                    <span className="text-white font-semibold">(313) 914-5105</span>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <p className="font-semibold text-white mb-2">Address</p>
                <p className="text-white/90">3040 E 7 Mile<br />Detroit, MI 48234</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const metadata = {
  title: 'Specialized Pharmacy Services - Xpress Care Pharmacy',
  description: 'Advanced pharmacy solutions including long-term care, auto accident claims, worker\'s compensation, and weight management services.',
  keywords: 'specialized pharmacy services, long-term care pharmacy, legal case pharmacy, worker compensation, weight management, GLP-1 services',
}
