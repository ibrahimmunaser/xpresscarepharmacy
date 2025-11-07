'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'What is \'medication adherence\'?',
    answer: 'Taking medications exactly as prescribed—right dose, right time, and not missing refills. It\'s one of the most important factors in achieving good health outcomes.'
  },
  {
    question: 'How does Med Sync work?',
    answer: 'We align all your refills to one pickup or delivery day per month and remind you beforehand. This eliminates multiple pharmacy trips and reduces the chance of running out of medications.'
  },
  {
    question: 'Can you remind my caregiver instead?',
    answer: 'Yes— with your permission, we can contact a caregiver by text, email, or phone. This is especially helpful for family members managing medications for elderly parents or loved ones with complex conditions.'
  },
  {
    question: 'What if my insurance or medication changes?',
    answer: 'We re-sync your schedule and update packaging or reminders so you stay on track. Our team handles the coordination with your insurance and prescriber to ensure seamless transitions.'
  },
  {
    question: 'Does it cost extra?',
    answer: 'No extra fee for Med Sync. Packaging and delivery options may vary by plan; we\'ll review any costs first so there are no surprises.'
  }
];

interface FaqAccordionProps {
  onFaqToggle?: (question: string) => void;
}

export default function FaqAccordion({ onFaqToggle }: FaqAccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    const question = faqs[index].question;
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
    
    // Analytics event
    if (onFaqToggle && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'adherence_faq_toggle', {
        event_category: 'engagement',
        event_label: question
      });
    }
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
        Adherence FAQs
      </h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openItems.includes(index);
          return (
            <div
              key={index}
              className="rounded-xl border border-white/20 bg-white/10 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-inset"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                role="button"
              >
                <span className="font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDownIcon 
                  className={`h-5 w-5 text-white/80 transition-transform ${
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
                  <p className="text-white/90 leading-relaxed">
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









