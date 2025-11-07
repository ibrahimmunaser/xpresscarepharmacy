"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
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

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-lg border border-slate-200 bg-white shadow-sm"
        >
          <button
            onClick={() => toggleItem(index)}
            className="flex w-full items-center justify-between p-4 text-left hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#10254D]/30"
            aria-expanded={openItems.has(index)}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="font-medium text-brand-navy">{item.q}</span>
            <ChevronDownIcon
              className={`h-5 w-5 text-slate-500 transition-transform ${
                openItems.has(index) ? "rotate-180" : ""
              }`}
            />
          </button>
          {openItems.has(index) && (
            <div
              id={`faq-answer-${index}`}
              className="px-4 pb-4 text-slate-700"
            >
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}














