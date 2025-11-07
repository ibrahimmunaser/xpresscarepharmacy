import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { SplitSectionProps } from '../types/content';

export default function SplitSection({
  eyebrow,
  title,
  content,
  bullets,
  imageSrc,
  imageAlt,
  imageLeft = false,
  ctaLink,
  darkBackground = false
}: SplitSectionProps) {
  return (
    <section className={`py-12 md:py-16 ${darkBackground ? 'bg-brand-navy' : 'bg-white'}`}>
      <div className="container mx-auto max-w-[1100px] px-4 md:px-6">
      <div className={`grid gap-8 md:gap-12 items-center ${imageLeft ? 'md:grid-cols-2' : 'md:grid-cols-2'}`}>
        {/* Image */}
        <div className={`${imageLeft ? 'md:order-1' : 'md:order-2'}`}>
          <div className="relative rounded-xl overflow-hidden shadow-md">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={500}
              height={400}
              className="object-cover w-full h-[300px] md:h-[400px]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Content */}
        <div className={`${imageLeft ? 'md:order-2' : 'md:order-1'}`}>
          {eyebrow && (
            <span className={`inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium mb-4 ${
              darkBackground 
                ? 'bg-white/20 text-white' 
                : 'bg-brand-navy/10 text-brand-navy'
            }`}>
              {eyebrow}
            </span>
          )}
          <h2 className={`text-2xl md:text-3xl font-semibold mb-4 ${
            darkBackground ? 'text-white' : 'text-brand-navy'
          }`}>
            {title}
          </h2>
          <p className={`leading-relaxed mb-6 ${
            darkBackground ? 'text-gray-200' : 'text-brand-gray'
          }`}>
            {content}
          </p>

          {bullets && bullets.length > 0 && (
            <div role="list" className="space-y-3 mb-6">
              {bullets.map((bullet, index) => (
                <div key={index} role="listitem" className="flex items-start gap-3">
                  <div className={`mt-1 h-5 w-5 shrink-0 rounded-full flex items-center justify-center ${
                    darkBackground 
                      ? 'bg-white/20' 
                      : 'bg-brand-navy/10'
                  }`}>
                    <div className={`h-2 w-2 rounded-full ${
                      darkBackground ? 'bg-white' : 'bg-brand-navy'
                    }`} />
                  </div>
                  <p className={`text-sm md:text-base ${
                    darkBackground ? 'text-gray-200' : 'text-brand-gray'
                  }`}>
                    {bullet.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          {ctaLink && (
            <Link
              href={ctaLink.href}
              className={`inline-flex items-center gap-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded ${
                darkBackground 
                  ? 'text-white focus-visible:ring-white/60' 
                  : 'text-brand-navy focus-visible:ring-brand-navy/60'
              }`}
            >
              {ctaLink.label}
              <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
      </div>
    </section>
  );
}





