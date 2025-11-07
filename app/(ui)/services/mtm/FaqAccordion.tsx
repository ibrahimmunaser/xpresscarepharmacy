'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'What should I bring to my MTM review?',
    answer: 'A list or bag of all medications, OTCs, supplements, allergies, and recent lab results if you have them. This helps us get a complete picture of your current treatment plan.'
  },
  {
    question: 'Is MTM covered by insurance?',
    answer: 'Many plans cover MTM services, especially for patients with multiple chronic conditions or medications. We\'ll verify your eligibility and discuss any out-of-pocket costs before we begin.'
  },
  {
    question: 'Can you coordinate with my doctor?',
    answer: 'Yes. With your permission, we send recommendations and coordinate any changes with your prescriber. We work as part of your healthcare team to ensure continuity of care.'
  },
  {
    question: 'How often should I do MTM?',
    answer: 'At least yearly or whenever your health or medications change significantly. This includes new diagnoses, hospitalizations, new prescribers, or if you\'re experiencing side effects.'
  },
  {
    question: 'How long does an MTM consultation take?',
    answer: 'Most comprehensive MTM reviews take 30-45 minutes. Follow-up appointments are typically shorter, around 15-20 minutes, depending on your needs.'
  },
  {
    question: 'What if I need changes to my medications?',
    answer: 'We never change your medications without coordinating with your prescriber first. We\'ll contact your doctor with our recommendations and work together to optimize your treatment plan.'
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
      window.gtag('event', 'faq_toggle', {
        event_category: 'engagement',
        event_label: question
      });
    }
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl text-white font-semibold tracking-tight mb-6">
        MTM FAQs
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









