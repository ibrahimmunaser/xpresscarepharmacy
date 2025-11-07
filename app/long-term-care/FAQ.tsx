import { content } from './content';

export default function FAQ() {
  const { faq } = content;
  
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-slate-50">
      <div className="max-w-3xl">
        <h3 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-8">
          Frequently Asked Questions
        </h3>
        
        <div className="space-y-4">
          {faq.map(({ q, a }, index) => (
            <details 
              key={index}
              className="group bg-white rounded-lg border border-slate-200 shadow-sm"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-navy/40 rounded-lg">
                <h4 className="font-medium text-brand-navy pr-4">
                  {q}
                </h4>
                <svg 
                  className="h-5 w-5 text-brand-gray group-open:rotate-180 transition-transform flex-shrink-0" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-slate-600 leading-relaxed">
                  {a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}















