import Image from 'next/image'
import Breadcrumbs from './Breadcrumbs'
import SideNav from './SideNav'
import Button from './Button'
import { servicesNav } from '@/lib/servicesNav'

type ServiceLayoutProps = {
  title: string
  heroImg: { src: string; alt: string }
  breadcrumbs: { label: string; href?: string }[]
  sections: Array<{
    h2: string
    body?: string[]
    bullets?: string[]
    ordered?: { title?: string; items: { title: string; body?: string }[] }
  }>
  ctas?: { label: string; href: string; variant?: 'primary'|'ghost' }[]
}

export default function ServiceLayout({
  title,
  heroImg,
  breadcrumbs,
  sections,
  ctas = []
}: ServiceLayoutProps) {
  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Main Content */}
      <div className="py-8 lg:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Side Navigation */}
            <div className="lg:col-span-1">
              <SideNav items={servicesNav} />
            </div>

            {/* Main Article */}
            <div className="lg:col-span-3">
              <article>
                {/* Service Header */}
                <header className="mb-8 lg:mb-12">
                  <div className="text-sm font-medium text-brand-600 mb-3">
                    Services
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        {title}
                      </h1>
                    </div>
                    
                    <div className="order-first lg:order-last">
                      <div className="aspect-square rounded-card overflow-hidden shadow-card relative">
                        <Image
                          src={heroImg.src}
                          alt={heroImg.alt}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </header>

                {/* Service Content Sections */}
                <div className="prose prose-lg prose-gray max-w-none">
                  {sections.map((section, index) => (
                    <section key={index} className="mb-8 lg:mb-12">
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        {section.h2}
                      </h2>
                      
                      {section.body && (
                        <div className="mb-6">
                          {section.body.map((paragraph, pIndex) => (
                            <p key={pIndex} className="text-gray-600 leading-relaxed mb-4 last:mb-0">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}
                      
                      {section.bullets && (
                        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                          {section.bullets.map((bullet, bIndex) => (
                            <li key={bIndex} className="leading-relaxed">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.ordered && (
                        <div className="mb-6">
                          {section.ordered.title && (
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                              {section.ordered.title}
                            </h3>
                          )}
                          <ol className="list-decimal list-inside space-y-3">
                            {section.ordered.items.map((item, oIndex) => (
                              <li key={oIndex} className="text-gray-600 leading-relaxed">
                                <span className="font-medium text-gray-900">{item.title}</span>
                                {item.body && (
                                  <span className="block mt-1 ml-6">{item.body}</span>
                                )}
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </section>
                  ))}
                </div>

                {/* CTA Row */}
                {ctas.length > 0 && (
                  <section className="py-8 bg-brand-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-card mb-8">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      {ctas.map((cta, index) => (
                        <Button 
                          key={index}
                          as="link"
                          href={cta.href} 
                          variant={cta.variant || 'primary'}
                          size="lg"
                        >
                          {cta.label}
                        </Button>
                      ))}
                    </div>
                  </section>
                )}
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
