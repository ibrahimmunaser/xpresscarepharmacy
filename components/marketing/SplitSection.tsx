import Image from 'next/image'
import Button from '@/components/Button'

interface SplitSectionProps {
  title: string
  content: string | React.ReactNode
  imageSrc: string
  imageAlt: string
  imageLeft?: boolean
  cta?: {
    label: string
    href: string
  }
  backgroundColor?: 'white' | 'gray'
}

export default function SplitSection({
  title,
  content,
  imageSrc,
  imageAlt,
  imageLeft = false,
  cta,
  backgroundColor = 'white'
}: SplitSectionProps) {
  const bgClass = backgroundColor === 'gray' ? 'bg-gray-50' : 'bg-white'

  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className={`${imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-navy mb-6">
              {title}
            </h2>
            
            <div className="prose prose-lg prose-gray max-w-none mb-8">
              {typeof content === 'string' ? (
                <p className="text-lg text-slate-600 leading-relaxed">
                  {content}
                </p>
              ) : (
                content
              )}
            </div>

            {cta && (
              <Button 
                href={cta.href} 
                variant="primary" 
                size="lg"
                className="btn-primary"
              >
                {cta.label}
              </Button>
            )}
          </div>

          {/* Image */}
          <div className={`${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="aspect-[4/3] rounded-section overflow-hidden shadow-card">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

