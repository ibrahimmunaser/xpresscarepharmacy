'use client';
import { useState } from 'react';
import { FaqItem } from './types';

const faqItems: FaqItem[] = [
  {
    q: "Do I need an appointment?",
    a: "We offer both scheduled appointments and walk-in services. Appointments guarantee your preferred time, while walk-ins are served on a first-come, first-served basis during our hours: Mon–Fri 10:00am–6:00pm."
  },
  {
    q: "Can I get multiple vaccines in one visit?",
    a: "Yes! Our pharmacist will review your vaccination history and determine which vaccines can be safely administered together. This saves you time and ensures you stay up-to-date with your immunizations."
  },
  {
    q: "Do you vaccinate children?",
    a: "We provide vaccines for children and adults. Age restrictions vary by vaccine type. Our pharmacist will verify age requirements and ensure all vaccines are appropriate for the patient's age and health status."
  },
  {
    q: "Do you report to the state immunization registry?",
    a: "Yes, we submit all vaccination records to the Michigan Care Improvement Registry (MCIR) as required by state law. This helps maintain accurate immunization records and prevents duplicate vaccinations."
  },
  {
    q: "What if I'm sick today?",
    a: "If you have a fever or moderate to severe illness, we recommend postponing your vaccination until you feel better. Minor cold symptoms typically don't prevent vaccination, but our pharmacist will assess your condition."
  },
  {
    q: "What if I had a reaction before?",
    a: "Please inform our pharmacist about any previous vaccine reactions. We'll review your history, assess the risk, and determine if the vaccine is safe for you. Some reactions may require special precautions or alternative vaccines."
  },
  {
    q: "How will I receive proof of vaccination?",
    a: "You'll receive a vaccination record card immediately after your shot. We also provide digital records and can update your existing vaccination card. Records are automatically submitted to the state registry."
  },
  {
    q: "Do you send reminders for second doses or boosters?",
    a: "Yes! When you opt-in during booking, we'll send reminders via phone, email, or text for follow-up doses, annual vaccines like flu shots, and booster recommendations based on CDC guidelines."
  },
  {
    q: "What about egg allergies and flu shots?",
    a: "Most people with egg allergies can safely receive flu vaccines. We stock egg-free options and our pharmacist will review your allergy history to determine the safest vaccine option for you."
  },
  {
    q: "How are vaccines stored and handled?",
    a: "We follow strict CDC guidelines for vaccine storage and handling. Our vaccines are stored in monitored refrigerators with temperature logging, and we maintain proper cold chain from delivery to administration to ensure vaccine effectiveness."
  }
];

interface FaqAccordionProps {
  items?: FaqItem[];
}

export default function FaqAccordion({ items = faqItems }: FaqAccordionProps) {
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

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(index);
    }
  };

  return (
    <section className="mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {items.map((item, index) => {
          const isOpen = openItems.has(index);
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;
          
          return (
            <div key={index} className="rounded-xl border border-slate-200 bg-white shadow-sm">
              <button
                id={buttonId}
                className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-[#10254D]/60 focus:ring-inset rounded-xl"
                onClick={() => toggleItem(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-brand-navy pr-4">
                    {item.q}
                  </h3>
                  <svg
                    className={`h-5 w-5 text-slate-600 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="px-6 pb-4"
                >
                  <p className="text-slate-600 leading-relaxed">
                    {item.a}
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










