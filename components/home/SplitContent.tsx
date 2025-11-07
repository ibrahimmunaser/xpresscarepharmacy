import Image from 'next/image'
import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/24/outline'

interface SplitContentProps {
  imageSrc: string
  imageAlt: string
  eyebrow?: string
  title: string
  content: string
  highlights?: string[]
  cta?: {
    label: string
    href: string
  }
  imageLeft?: boolean
}

export default function SplitContent({ 
  imageSrc, 
  imageAlt, 
  eyebrow, 
  title, 
  content, 
  highlights,
  cta,
  imageLeft = false 
}: SplitContentProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={`${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={600}
                  height={400}
                  className="object-cover w-full h-80 lg:h-96"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-navy/10 rounded-full -z-10"></div>
            </div>
          </div>

          {/* Content */}
          <div className={`${imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
            {eyebrow && (
              <div className="inline-block px-4 py-2 bg-blue-50 text-brand-navy text-sm font-semibold rounded-full mb-6 border border-brand-navy/20">
                {eyebrow}
              </div>
            )}
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-navy mb-6 leading-tight">
              {title}
            </h2>
            
            <p className="text-lg text-brand-gray leading-relaxed mb-8">
              {content}
            </p>

            {/* Key Highlights */}
            {highlights && highlights.length > 0 && (
              <div className="mb-8">
                <ul className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-brand-navy rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckIcon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-brand-gray font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {cta && (
              <Link
                href={cta.href}
                className="inline-flex items-center px-8 py-4 bg-brand-navy text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {cta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

