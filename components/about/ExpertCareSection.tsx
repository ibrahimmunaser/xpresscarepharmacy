import Image from 'next/image'

interface ExpertCareSectionProps {
  title: string
  bullets: string[]
  imageSrc: string
  imageAlt: string
}

export default function ExpertCareSection({ 
  title, 
  bullets, 
  imageSrc, 
  imageAlt 
}: ExpertCareSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-navy mb-8">
              {title}
            </h2>
            
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

          {/* Image */}
          <div>
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

