import Image from 'next/image';
import Link from 'next/link';

type SupportSplitProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  ctaAnalytics?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export default function SupportSplit({
  title,
  description,
  ctaLabel,
  ctaHref,
  ctaAnalytics,
  image
}: SupportSplitProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-semibold text-brand-navy mb-6 lg:text-3xl">
              {title}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              {description}
            </p>
            <Link 
              href={ctaHref}
              className="btn btn-secondary"
              data-analytics={ctaAnalytics}
            >
              {ctaLabel}
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="rounded-xl shadow-md w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}









