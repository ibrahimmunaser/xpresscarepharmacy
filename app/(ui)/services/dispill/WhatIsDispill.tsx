export default function WhatIsDispill() {
  const features = [
    'Color-coded by day and time (morning, noon, evening, bedtime)',
    'Perforated, detachable pods for on-the-go doses',
    'Clearly printed patient name, date, time window, and drug names with strengths',
    '28 or 30-day cycles (configurable based on your needs)',
    'Tamper-evident blister cavitations with large font labels',
    'Recyclable card material (check local recycling guidelines)'
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mt-10 mb-6">
        What is Dispill?
      </h2>
      
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
        <p className="text-slate-600 leading-relaxed text-lg mb-6">
          Dispill is a color-coded blister card system that organizes your medications by day and time, 
          making it easier to stay on track with complex medication regimens while reducing errors and confusion.
        </p>
        
        <h3 className="text-lg font-semibold text-brand-navy mb-4">
          Key Packaging Features:
        </h3>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-[#10254D] rounded-full mt-2"></div>
              <span className="text-slate-600 leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}









