'use client';

import { useState, useEffect } from 'react';

type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  title: string;
  items: FaqItem[];
};

export default function Faq({ title, items }: FaqProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Inject FAQ JSON-LD schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": items.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    script.id = 'faq-schema';
    
    // Remove existing schema if present
    const existing = document.getElementById('faq-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const schemaScript = document.getElementById('faq-schema');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [items]);

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleItem(index);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-2xl font-semibold text-brand-navy text-center mb-8 lg:text-3xl">
          {title}
        </h2>
        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openItems.has(index);
            return (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg bg-white"
              >
                <button
                  onClick={() => toggleItem(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-inset rounded-lg"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                >
                  <span className="font-medium text-brand-navy pr-4">
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-brand-navy transition-transform flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div 
                    id={`faq-content-${index}`}
                    className="px-6 pb-4"
                  >
                    <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}









