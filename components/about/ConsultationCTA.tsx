import Button from '@/components/Button'
import Card from '@/components/ui/Card'
import Image from 'next/image'

interface ConsultationCTAProps {
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
  imageSrc?: string
  imageAlt?: string
}

export default function ConsultationCTA({ 
  title, 
  description, 
  ctaLabel, 
  ctaHref,
  imageSrc,
  imageAlt
}: ConsultationCTAProps) {
  return (
    <section className="py-16 bg-brand-navy/3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <Card className="p-8 lg:p-12 bg-white border-0 shadow-card-hover">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-navy/10 rounded-full mb-6">
                  <svg className="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-navy mb-6">
                  {title}
                </h2>
                
                <p className="text-lg text-brand-gray leading-relaxed mb-8">
                  {description}
                </p>
                
                <Button 
                  as="link"
                  href={ctaHref} 
                  variant="primary" 
                  size="lg"
                  className="btn-primary"
                >
                  {ctaLabel}
                </Button>
              </Card>
            </div>

            {/* Image */}
            {imageSrc && (
              <div className="flex justify-center lg:justify-end">
                <div className="aspect-[4/3] w-full max-w-md rounded-lg overflow-hidden shadow-card">
                  <Image
                    src={imageSrc}
                    alt={imageAlt || "Consultation"}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

