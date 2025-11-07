'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  id: string
  question: string
  answer: string
}

interface FAQProps {
  title: string
  faqs: FAQItem[]
}

export default function FAQ({ title, faqs }: FAQProps) {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">
              {title}
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Find answers to the most commonly asked questions about our pharmacy services and policies.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => {
              const isOpen = openItems.includes(faq.id)
              
              return (
                <div key={faq.id} className="bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100/50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:ring-inset rounded-2xl"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="text-xl font-bold text-brand-navy pr-6 font-heading">
                      {faq.question}
                    </span>
                    <ChevronDownIcon 
                      className={`w-6 h-6 text-brand-navy transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6 text-brand-gray leading-relaxed text-lg">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

