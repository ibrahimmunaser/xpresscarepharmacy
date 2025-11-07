import Link from 'next/link';
import { HeroWithCTAsProps } from '../types/content';

export default function HeroWithCTAs({ 
  eyebrow, 
  title, 
  subtitle, 
  primaryCta, 
  secondaryCta 
}: HeroWithCTAsProps) {
  return (
    <section className="container mx-auto max-w-[1100px] px-4 md:px-6 pt-8 md:pt-10">
      <div className="text-center max-w-4xl mx-auto">
        {eyebrow && (
          <p className="text-sm tracking-wide text-white/80 uppercase mb-2">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
          {title}
        </h1>
        <p className="mt-3 max-w-prose mx-auto text-white/90 leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-6 mb-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-brand-navy hover:bg-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white text-white bg-transparent hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

