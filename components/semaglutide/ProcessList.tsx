import Link from 'next/link';

type ProcessStep = {
  title: string;
  description: string;
};

type ProcessListProps = {
  title: string;
  steps: ProcessStep[];
  ctaLabel: string;
  ctaHref: string;
  ctaAnalytics?: string;
};

export default function ProcessList({
  title,
  steps,
  ctaLabel,
  ctaHref,
  ctaAnalytics
}: ProcessListProps) {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold text-brand-navy text-center mb-12 lg:text-3xl">
          {title}
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-white font-semibold text-lg mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-medium text-brand-navy mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            href={ctaHref}
            className="btn btn-primary"
            data-analytics={ctaAnalytics}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}









