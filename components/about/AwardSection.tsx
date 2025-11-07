import Image from 'next/image'
import Card from '@/components/ui/Card'

interface AwardSectionProps {
  title: string
  awardImageSrc: string
  awardImageAlt: string
  bullets: string[]
}

export default function AwardSection({ 
  title, 
  awardImageSrc, 
  awardImageAlt, 
  bullets 
}: AwardSectionProps) {
  return (
    <section className="py-16 bg-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-navy mb-4">
              {title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Award Image */}
            <div className="flex justify-center">
              <Card className="p-8 bg-white">
                <div className="aspect-[4/3] relative max-w-sm mx-auto">
                  <Image
                    src={awardImageSrc}
                    alt={awardImageAlt}
                    width={400}
                    height={300}
                    className="object-contain w-full h-full"
                  />
                </div>
              </Card>
            </div>

            {/* Bullets */}
            <div className="space-y-6">
              {bullets.map((bullet, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

