const steps = [
  {
    number: '1',
    title: 'Medication Review & Reconciliation',
    description: 'Verify active medications, stop duplicates, document allergies, and sync fills.'
  },
  {
    number: '2',
    title: 'Custom Pack Build',
    description: 'Pharmacist programs schedule (e.g., 8a / 12p / 6p / 10p) and prints large-font labels.'
  },
  {
    number: '3',
    title: 'Final Check & Counselling',
    description: 'Double-verification process with counseling on any new changes.'
  },
  {
    number: '4',
    title: 'Delivery or Pickup',
    description: 'Free same/next-day delivery (if available) or convenient pickup at our counter.'
  },
  {
    number: '5',
    title: 'Refill Synchronization',
    description: 'We align all medications to the same monthly Dispill date with call/text reminders (opt-in).'
  }
];

export default function StepList() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mt-10 mb-6">
        How Dispill Works
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-6 rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-[#10254D] text-white rounded-full flex items-center justify-center font-semibold">
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
      
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-semibold text-brand-navy mb-2">
          What if something changes mid-cycle?
        </h4>
        <p className="text-slate-600 text-sm">
          We can reprint partial cards for therapy changes. Unused pods are safely reclaimed per our policy.
        </p>
      </div>
    </section>
  );
}









