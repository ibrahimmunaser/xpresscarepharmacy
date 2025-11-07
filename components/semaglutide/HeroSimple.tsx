import Image from 'next/image';
import Link from 'next/link';

type Cta = { 
  label: string; 
  href: string; 
  variant?: 'primary' | 'secondary';
  analytics?: string;
};

type HeroProps = {
  kicker: string;
  title: string;
  desc: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
  image: { 
    src: string; 
    alt: string; 
    width: number; 
    height: number; 
    priority?: boolean; 
  };
  disclaimer?: string;
};

export default function HeroSimple({
  kicker,
  title,
  desc,
  primaryCta,
  secondaryCta,
  image,
  disclaimer
}: HeroProps) {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-wide text-white/80 font-medium">
              {kicker}
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-white lg:text-4xl leading-tight">
              {title}
            </h1>
            <p className="mt-4 text-base text-white/90 leading-relaxed">
              {desc}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link 
                href={primaryCta.href} 
                className="btn btn-primary"
                data-analytics={primaryCta.analytics}
              >
                {primaryCta.label}
              </Link>
              {secondaryCta && (
                <Link 
                  href={secondaryCta.href} 
                  className="btn btn-secondary"
                  data-analytics={secondaryCta.analytics}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
            {disclaimer && (
              <p className="mt-3 text-sm text-white/70">
                {disclaimer}
              </p>
            )}
          </div>
          <div className="relative">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority={image.priority}
              className="rounded-xl shadow-md w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}




