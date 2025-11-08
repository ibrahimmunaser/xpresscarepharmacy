import Image from 'next/image'

interface MissionSectionProps {
  eyebrow: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

export default function MissionSection({ 
  eyebrow,
  title, 
  description, 
  imageSrc, 
  imageAlt 
}: MissionSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-card">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-6">
              {eyebrow}
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-navy mb-6">
              {title}
            </h2>
            
            <p className="text-lg text-brand-gray leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}



















