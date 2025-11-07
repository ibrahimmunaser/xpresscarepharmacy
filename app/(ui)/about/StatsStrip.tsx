import { Stat } from '../types/content';

interface StatsStripProps {
  stats: Stat[];
}

export default function StatsStrip({ stats }: StatsStripProps) {
  return (
    <section 
      aria-labelledby="about-stats" 
      className="py-12 md:py-16"
    >
      <div className="container mx-auto max-w-[1100px] px-4 md:px-6">
      <h2 id="about-stats" className="sr-only">
        At-a-glance statistics
      </h2>
      <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
        {stats.map((item, index) => (
          <div 
            key={`${item.label}-${index}`} 
            className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm"
          >
            {item.icon && (
              <div className="flex justify-center mb-2 text-brand-navy" aria-hidden="true">
                {item.icon}
              </div>
            )}
            <dd className="text-xl md:text-2xl font-semibold text-brand-navy">
              {item.value}
            </dd>
            <dt className="text-sm text-brand-gray mt-1">
              {item.label}
            </dt>
          </div>
        ))}
      </dl>
      </div>
    </section>
  );
}





