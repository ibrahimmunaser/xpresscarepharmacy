import Image from 'next/image'
import Button from '@/components/Button'

interface ContactBannerProps {
  title: string
  body?: string
  cta: {
    label: string
    href: string
  }
  image?: {
    src: string
    alt: string
  }
}

export default function ContactBanner({ title, body, cta, image }: ContactBannerProps) {
  return (
    <section className="py-12 bg-primary-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              {title}
            </h2>
            
            {body && (
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                {body}
              </p>
            )}
            
            <Button 
              href={cta.href} 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-50 font-semibold"
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
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

