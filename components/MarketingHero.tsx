import Image from 'next/image'
import Button from './Button'

type MarketingHeroProps = {
  eyebrow: string
  title: string      // allow <br/> in title
  lead?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  image: { src: string; alt: string }
  decor?: 'dots' | 'none'
  children?: React.ReactNode // for compliance footnotes
}

export default function MarketingHero({
  eyebrow,
  title,
  lead,
  primaryCta,
  secondaryCta,
  image,
  decor = 'dots',
  children
}: MarketingHeroProps) {
  return (
    <section className="bg-brand-600 py-16 lg:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="hero-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-white" />
              <circle cx="18" cy="18" r="1" fill="currentColor" className="text-white" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#hero-dots)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div>
            {/* Eyebrow */}
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-white font-medium text-sm">
                {eyebrow}
              </span>
            </div>

            {/* Title */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              dangerouslySetInnerHTML={{ __html: title }}
            />

            {/* Lead */}
            {lead && (
              <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
                {lead}
              </p>
            )}

            {/* CTAs */}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                {primaryCta && (
                  <Button 
                    as="link"
                    href={primaryCta.href} 
                    variant="secondary" 
                    size="lg"
                    className="bg-white text-brand-600 hover:bg-gray-50 font-semibold border-white"
                  >
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button 
                    as="link"
                    href={secondaryCta.href} 
                    variant="ghost" 
                    size="lg"
                    className="text-white hover:bg-white/10 border border-white/20"
                  >
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}

            {/* Compliance footnote area */}
            {children && (
              <div className="text-white/80 text-sm">
                {children}
              </div>
            )}
          </div>

          {/* Image */}
          <div className="lg:order-last">
            <div className="relative">
              <div className="aspect-[4/3] rounded-section overflow-hidden shadow-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Decorative dots */}
              {decor === 'dots' && (
                <div className="absolute -bottom-4 -right-4 w-12 h-12 opacity-30">
                  <div className="grid grid-cols-3 gap-1">
                    {Array.from({ length: 9 }, (_, i) => (
                      <div key={i} className="w-2 h-2 bg-white rounded-full" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

