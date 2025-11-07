import Image from 'next/image'
import Button from './Button'
import Section from './Section'

type ContactBannerProps = {
  title: string
  body?: string
  cta: { label: string; href: string }
  image?: { src: string; alt: string }
}

export default function ContactBanner({ title, body, cta, image }: ContactBannerProps) {
  return (
    <Section bg="tint">
      <div className="bg-brand-500 rounded-section px-8 py-12 lg:py-16 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="10" cy="10" r="3" fill="currentColor" />
            <circle cx="90" cy="20" r="2" fill="currentColor" />
            <circle cx="80" cy="80" r="4" fill="currentColor" />
            <circle cx="20" cy="90" r="2" fill="currentColor" />
          </svg>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {title}
            </h2>
            
            {body && (
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                {body}
              </p>
            )}
            
            <Button 
              as="link"
              href={cta.href} 
              variant="secondary" 
              size="lg"
              className="bg-white text-brand-600 hover:bg-gray-50 font-semibold border-white"
            >
              {cta.label}
            </Button>
          </div>

          {/* Image */}
          {image && (
            <div className="lg:order-last flex justify-center">
              <div className="aspect-[4/3] w-full max-w-md rounded-section overflow-hidden shadow-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}

