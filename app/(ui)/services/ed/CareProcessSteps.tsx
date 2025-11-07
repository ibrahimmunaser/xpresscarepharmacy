const steps = [
  {
    number: '1',
    title: 'Private Consult (5–10 min)',
    description: 'One-on-one discussion where we listen and you set preferences for pickup vs discreet delivery.'
  },
  {
    number: '2',
    title: 'Medication Safety Review',
    description: 'Allergy check, interaction screening, and timing coordination with your other medications.'
  },
  {
    number: '3',
    title: 'Plan & Supplies',
    description: 'Counseling materials, travel sleeve (if available), and reminder options (opt-in SMS/email).'
  },
  {
    number: '4',
    title: 'Refill Sync',
    description: 'Align with your other medications to reduce pharmacy trips and simplify your routine.'
  },
  {
    number: '5',
    title: 'Follow-Up',
    description: 'Quick check-in after your first fill to answer questions and ensure everything is working well.'
  }
];

export default function CareProcessSteps() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mt-10 mb-6">
        Our Private Care Process
      </h2>
      
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-brand-navy text-white rounded-full flex items-center justify-center font-semibold">
                  {step.number}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-6 border-t border-slate-200">
          <p className="text-sm text-slate-600 italic">
            We never discuss your care in public areas. Ask for a private room if you prefer.
          </p>
        </div>
      </div>
    </section>
  );
}









