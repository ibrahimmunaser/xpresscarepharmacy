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
      </div>
    </Section>
  )
}
