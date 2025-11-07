import React from 'react';

type BenefitItem = {
  icon: React.ReactNode;
  title: string;
  body: string;
};

type BenefitsGridProps = {
  title: string;
  items: BenefitItem[];
};

export default function BenefitsGrid({ title, items }: BenefitsGridProps) {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold text-brand-navy text-center mb-12 lg:text-3xl">
          {title}
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy/10 text-brand-navy mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-medium text-brand-navy mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}









