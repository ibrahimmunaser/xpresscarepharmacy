'use client';

import { useState } from 'react';

type SafetyItem = {
  title: string;
  content: string;
};

type ImportantSafetyInformationProps = {
  title: string;
  items: SafetyItem[];
};

export default function ImportantSafetyInformation({
  title,
  items
}: ImportantSafetyInformationProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

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
    <section className="py-16 bg-brand-navy/5">
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
                  aria-controls={`safety-content-${index}`}
                >
                  <span className="font-medium text-brand-navy">
                    {item.title}
                  </span>
                  <svg
                    className={`w-5 h-5 text-brand-navy transition-transform ${
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
                    id={`safety-content-${index}`}
                    className="px-6 pb-4"
                  >
                    <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                      {item.content}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-subtle">
            Last updated: {new Date().toISOString().slice(0, 10)}
          </p>
        </div>
      </div>
    </section>
  );
}









