import { CheckIcon } from '@heroicons/react/24/outline';
import { content } from './content';

export default function Partnership() {
  const { partnership } = content;
  
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-brand-navy">
            {partnership.title}
          </h3>
          <p className="mt-4 text-slate-600 leading-relaxed">
            {partnership.body}
          </p>
          <ul className="mt-6 space-y-3">
            {partnership.bullets.map((bullet, index) => (
              <li key={index} className="flex gap-3">
                <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-brand-navy/10 text-brand-navy grid place-items-center">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <p className="text-slate-600">{bullet}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6">
          <figure className="relative rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(16,37,77,0.06)] ring-1 ring-brand-navy/10">
            <img 
              src={partnership.image} 
              alt={partnership.imageAlt} 
              className="w-full h-[320px] object-cover"
              width={500}
              height={320}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
















