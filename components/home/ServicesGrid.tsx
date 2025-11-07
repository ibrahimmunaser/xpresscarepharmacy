import Link from 'next/link'
import Image from 'next/image'
import Card from '@/components/ui/Card'

interface Service {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  href: string
}

interface ServicesGridProps {
  title: string
  services: Service[]
}

export default function ServicesGrid({ title, services }: ServicesGridProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-navy mb-4">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} hover className="overflow-hidden group">
              <Link href={service.href} className="block">
                <div className="relative overflow-hidden">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    width={400}
                    height={300}
                    className="object-cover w-full h-40 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-brand-navy mb-2 group-hover:text-brand-navy transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-3 text-sm">
                    {service.description}
                  </p>
                  <span className="text-brand-navy font-medium group-hover:text-brand-navy/80 transition-colors text-sm">
                    Learn more →
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

