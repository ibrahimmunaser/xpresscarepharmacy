'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'Can I add supplements to the Dispill pack?',
    answer: 'This depends on verification requirements and supplement compatibility. Our pharmacists will review each supplement individually to ensure safety and proper packaging. Some supplements may need to be provided separately.'
  },
  {
    question: 'What happens if my doctor changes a dose mid-cycle?',
    answer: 'We can reprint partial cards for therapy changes. Simply contact us as soon as possible, and we\'ll coordinate with your prescriber to create updated packaging. Unused pods from the previous pack are safely reclaimed per our policy.'
  },
  {
    question: 'How do you handle controlled substances?',
    answer: 'Controlled substances are included in Dispill packaging following all DEA regulations and state requirements. We maintain proper documentation and ensure secure handling throughout the packaging and delivery process.'
  },
  {
    question: 'Can two family members use Dispill together?',
    answer: 'Each patient requires a separate Dispill card for safety and regulatory compliance. We can coordinate multiple family members\' packaging to align delivery dates and simplify management for caregivers.'
  },
  {
    question: 'Are liquids or insulin included in the packaging?',
    answer: 'Liquid medications and insulin are usually not included in blister packaging due to stability requirements. These medications are provided separately with clear labeling and storage instructions.'
  },
  {
    question: 'Will you remind me when it\'s time for the next set?',
    answer: 'Yes! We provide call and text reminders (opt-in) when it\'s time to refill your Dispill pack. We typically contact you 3-5 days before your current supply runs out to ensure seamless continuation.'
  },
  {
    question: 'Can you deliver to assisted living or nursing homes?',
    answer: 'Absolutely. We work closely with assisted living facilities and nursing homes, providing MAR integration support and coordinating with facility staff for seamless medication management.'
  },
  {
    question: 'What if I lose a pod or accidentally take the wrong dose?',
    answer: 'Contact us immediately if you lose a pod or take an incorrect dose. We can provide replacement doses and guidance. For safety, never double up on doses without consulting our pharmacists first.'
  },
  {
    question: 'Do you recycle used Dispill cards?',
    answer: 'Dispill cards are made from recyclable materials. Please check with your local recycling guidelines for proper disposal. We also accept used cards at our pharmacy for proper disposal.'
  },
  {
    question: 'Is there a contract or commitment required?',
    answer: 'No long-term contract is required. You can cancel Dispill service at any time with advance notice. We recommend providing at least one week\'s notice to ensure proper transition of your medications.'
  },
  {
    question: 'How much does Dispill packaging cost?',
    answer: 'Many insurance plans cover standard packaging and pharmacist services. Coverage limits vary by plan, and we\'ll verify your benefits. For cash-pay options, we offer transparent monthly packaging fees, often waived with minimum monthly prescription counts.'
  },
  {
    question: 'Can I travel with my Dispill pack?',
    answer: 'Yes! Dispill packs are perfect for travel. You can tear off individual pods for short trips, or we can prepare special travel packs for longer vacations. Always carry your medications in original packaging when flying.'
  }
];

export default function FaqAccordion() {
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
      <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mt-10 mb-6">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openItems.includes(index);
          return (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#10254D]/50 focus:ring-inset"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
              >
                <span className="font-semibold text-brand-navy pr-4">
                  {faq.question}
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
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  className="px-6 pb-4"
                >
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}









