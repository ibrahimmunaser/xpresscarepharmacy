'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface EdOptionsAccordionProps {
  onConsultClick?: () => void;
}

const edOptions = [
  {
    title: 'PDE5 Inhibitors (e.g., sildenafil, tadalafil)',
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 leading-relaxed">
          These medications work by increasing blood flow. Typical onset windows vary by product, with some working within 30-60 minutes and others providing longer duration effects.
        </p>
        <p className="text-slate-600 leading-relaxed">
          <strong>Important:</strong> Taking with or without food can affect timing and effectiveness. Some work better on an empty stomach.
        </p>
        <p className="text-red-700 text-sm font-medium">
          <strong>Contraindications:</strong> Do not combine with nitrates or certain alpha-blockers. Always discuss with your prescriber.
        </p>
      </div>
    )
  },
  {
    title: 'On-Demand vs Daily Dosing',
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 leading-relaxed">
          <strong>On-Demand:</strong> Taken as needed before sexual activity. Requires planning but offers flexibility.
        </p>
        <p className="text-slate-600 leading-relaxed">
          <strong>Daily Dosing:</strong> Lower doses taken consistently. May provide more spontaneity but requires daily adherence.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Insurance coverage can vary between dosing approaches. We'll help verify your benefits and explain options.
        </p>
      </div>
    )
  },
  {
    title: 'Side Effects & What to Do',
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 leading-relaxed">
          <strong>Common side effects:</strong> Headache, flushing, dyspepsia (indigestion), nasal congestion. These are usually mild and temporary.
        </p>
        <p className="text-red-700 font-medium">
          <strong>Seek immediate care for:</strong> Sudden vision changes, hearing loss, chest pain, or erections lasting more than 4 hours.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Most side effects can be managed with timing adjustments or dosage modifications by your prescriber.
        </p>
      </div>
    )
  },
  {
    title: 'Heart Health & Safety Checks',
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 leading-relaxed">
          ED can sometimes correlate with cardiovascular health. Your prescriber may recommend heart health evaluation as part of comprehensive care.
        </p>
        <p className="text-slate-600 leading-relaxed">
          We help ensure your ED treatment doesn't interact with heart medications and provide education about safe use.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Regular follow-up with your primary care provider is encouraged for overall health monitoring.
        </p>
      </div>
    )
  },
  {
    title: 'Non-oral Options',
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 leading-relaxed">
          When oral medications aren't suitable, prescribers may recommend devices, injections, or other treatments.
        </p>
        <p className="text-slate-600 leading-relaxed">
          These options are managed by your prescriber. Our pharmacy can assist with teaching materials and supplies if provided by your healthcare team.
        </p>
        <p className="text-slate-600 leading-relaxed">
          We're here to support you with proper storage, handling, and any questions about prescribed treatments.
        </p>
      </div>
    )
  }
];

export default function EdOptionsAccordion({ onConsultClick = () => {} }: EdOptionsAccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mt-10 mb-6">
        Treatment Options (Education Only)
      </h2>
      
      <div className="space-y-4">
        {edOptions.map((option, index) => {
          const isOpen = openItems.includes(index);
          return (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring--brand-navy/50 focus:ring-inset"
                aria-expanded={isOpen}
                aria-controls={`ed-panel-${index}`}
              >
                <span className="font-semibold text-brand-navy pr-4">
                  {option.title}
                </span>
                <ChevronDownIcon 
                  className={`h-5 w-5 text-slate-600 transition-transform ${
                    isOpen ? 'transform rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              
              {isOpen && (
                <div
                  id={`ed-panel-${index}`}
                  role="region"
                  aria-labelledby={`ed-button-${index}`}
                  className="px-6 pb-4"
                >
                  {option.content}
                  <div className="mt-4 pt-3 border-t border-slate-200">
                    <a
                      href="/contact"
                      className="text-brand-navy hover:text-brand-navy/80 font-medium text-sm underline focus:outline-none focus:ring-2 focus:ring--brand-navy/50 rounded"
                    >
                      Talk to a Pharmacist about this →
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}









