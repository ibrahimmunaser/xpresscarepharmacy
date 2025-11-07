import Link from 'next/link'
import Image from 'next/image'

interface AboutUsBandProps {
  title?: string
  description: string
  imageSrc: string
  imageAlt: string
  ctaText?: string
  ctaHref?: string
}

export default function AboutUsBand({ 
  title = "About Xpress Care Pharmacy",
  description, 
  imageSrc, 
  imageAlt,
  ctaText = "Learn More About Us",
  ctaHref = "/about"
}: AboutUsBandProps) {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={400}
                className="object-cover w-full h-80"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
              {title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {description}
            </p>
            {ctaText && ctaHref && (
              <Link 
                href={ctaHref}
                className="inline-flex items-center px-6 py-3 bg-brand-navy text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                {ctaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}






