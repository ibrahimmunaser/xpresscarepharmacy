import Link from 'next/link'
import {
  TruckIcon,
  ArrowPathIcon,
  ComputerDesktopIcon,
  BeakerIcon,
  PhoneIcon,
  HeartIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

const iconMap = {
  truck: TruckIcon,
  refresh: ArrowPathIcon,
  computer: ComputerDesktopIcon,
  syringe: BeakerIcon,
  phone: PhoneIcon,
  heart: HeartIcon,
}

interface ServiceIcon {
  icon: keyof typeof iconMap
  title: string
  description: string
  href: string
}

interface ServiceIconGridProps {
  services: ServiceIcon[]
}

export default function ServiceIconGrid({ services }: ServiceIconGridProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-content mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 font-heading">
            Our Primary Services
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            Comprehensive pharmacy services designed to meet all your healthcare needs with convenience and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-brand-navy/10 group-hover:bg-brand-navy rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                    <Icon className="w-10 h-10 text-brand-navy group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-brand-navy mb-3 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-brand-gray leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* CTA Link */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-blue-700 transition-colors duration-200 group/link"
                  >
                    Learn More
                    <ChevronRightIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
