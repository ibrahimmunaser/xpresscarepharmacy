import Link from 'next/link'
import Section from '@/components/Section'
import Card from '@/components/Card'
import { servicesNav } from '@/lib/servicesNav'

export const metadata = {
  title: 'Pharmacy Services - Xpress Care Pharmacy',
  description: 'Comprehensive pharmacy services including free delivery, immunizations, medication management, and specialty care.',
}

export default function ServicesPage() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-navy mb-6">
            Our Pharmacy Services
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            From prescription medications to specialized care, we provide comprehensive healthcare solutions for your entire family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesNav.map((service, index) => (
            <Card key={index} hover className="h-full">
              <Link href={service.href} className="block h-full">
                <h3 className="text-xl font-semibold text-brand-navy mb-3">
                  {service.label}
                </h3>
                <p className="text-slate-600">
                  Learn more about our {service.label.toLowerCase()} services and how we can help support your health needs.
                </p>
                <div className="mt-4 text-brand-600 font-medium">
                  Learn more →
                </div>
              </Link>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 p-8 bg-brand-navy rounded-xl text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Have Questions About Our Services?
          </h2>
          <p className="text-white/90 mb-6">
            Our pharmacists are here to help answer any questions about our services and medications.
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
    </Section>
  )
}
