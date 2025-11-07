import Image from 'next/image';
import Link from 'next/link';

type CommitmentSplitProps = {
  title: string;
  bulletPoints: string[];
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

export default function CommitmentSplit({
  title,
  bulletPoints,
  ctaLabel,
  ctaHref,
  ctaAnalytics,
  image
}: CommitmentSplitProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-brand-navy mb-6 lg:text-3xl">
              {title}
            </h2>
            <ul className="space-y-3 mb-8">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-brand-navy rounded-full mt-2"></div>
                  <span className="text-slate-600">{point}</span>
                </li>
              ))}
            </ul>
            <Link 
              href={ctaHref}
              className="btn btn-primary"
              data-analytics={ctaAnalytics}
            >
              {ctaLabel}
            </Link>
          </div>
          <div className="relative">
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




