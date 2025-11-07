'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'Will my information be private?',
    answer: 'Yes, absolutely. We follow strict HIPAA guidelines and offer private counseling rooms for sensitive discussions. Your information is never shared without your consent, and we handle all ED medications with complete discretion.'
  },
  {
    question: 'Can ED medications interact with heart medications?',
    answer: 'Yes, certain interactions are possible, especially with nitrates and some alpha-blockers. Never combine ED medications with nitrates as this can cause dangerous blood pressure drops. Always inform both your prescriber and pharmacist about all medications you\'re taking.'
  },
  {
    question: 'How fast do these medicines work?',
    answer: 'Onset times vary by medication. Some work within 30-60 minutes, while others may take longer. Factors like food intake, alcohol consumption, and individual metabolism can affect timing. Your pharmacist can explain the specific timing for your prescribed medication.'
  },
  {
    question: 'Can I drink alcohol while taking ED medication?',
    answer: 'Moderate alcohol consumption is generally acceptable, but excessive drinking can affect both performance and increase side effects like dizziness or low blood pressure. Discuss your alcohol consumption with your prescriber for personalized guidance.'
  },
  {
    question: 'Daily vs on-demand—how do I choose?',
    answer: 'Your prescriber determines the best approach based on your health, lifestyle, and preferences. Daily dosing offers more spontaneity but requires consistent adherence. On-demand dosing provides flexibility but requires planning. We can explain the pros and cons of your prescribed option.'
  },
  {
    question: 'What if the medicine doesn\'t work for me?',
    answer: 'Several factors can affect effectiveness, including timing, food intake, stress levels, and underlying health conditions. Follow up with your prescriber if you\'re not seeing results. We can provide adherence tips and timing guidance to optimize your treatment.'
  },
  {
    question: 'What are your delivery options?',
    answer: 'We offer discreet delivery in nondescript packaging within our service area around Detroit. Same-day or next-day delivery may be available depending on your location and timing. All deliveries include proper prescription labeling as required by law.'
  },
  {
    question: 'Can you coordinate refills with my other medications?',
    answer: 'Yes, medication synchronization is one of our specialties. We can align your ED prescription with your other medications to reduce pharmacy trips and simplify your routine. This service is particularly helpful for patients taking multiple medications.'
  },
  {
    question: 'What if I experience side effects?',
    answer: 'Common side effects like headache or flushing are usually mild and temporary. However, stop taking the medication and contact your prescriber immediately if you experience chest pain, sudden vision/hearing changes, or erections lasting more than 4 hours. For severe reactions, seek emergency care.'
  },
  {
    question: 'How do I store and travel with ED medications?',
    answer: 'Store at room temperature away from moisture, heat, and light. Keep medications in their original containers with labels. For travel, we can provide a travel sleeve and guidance on carrying medications through security. Never share your medications with others.'
  },
  {
    question: 'Do you offer generic options?',
    answer: 'Yes, we stock both brand-name and generic ED medications when available. Generic options can provide significant cost savings while maintaining the same effectiveness. We\'ll discuss options with you and help determine what your insurance covers.'
  },
  {
    question: 'How do I know if ED treatment is right for me?',
    answer: 'ED treatment decisions should be made with your healthcare provider, who can evaluate your overall health, current medications, and underlying conditions. We provide education and support once treatment is prescribed, but diagnosis and treatment decisions are made by your prescriber.'
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
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-navy/50 focus:ring-inset"
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









