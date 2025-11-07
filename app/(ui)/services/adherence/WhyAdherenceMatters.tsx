const stats = [
  {
    value: '90-95%',
    label: 'refill timeliness with Med Sync',
    description: 'Patients stay on schedule'
  },
  {
    value: 'Same-day',
    label: 'resolution for refill issues',
    description: 'Quick problem solving'
  },
  {
    value: '< 2 min',
    label: 'to request refills',
    description: 'Via app or phone'
  }
];

export default function WhyAdherenceMatters() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-6">
        Why Medication Adherence Matters
      </h2>
      
      <p className="text-slate-600 leading-relaxed text-lg mb-8">
        Taking medications as prescribed can improve outcomes, prevent complications, and keep conditions stable. With our support, adherence becomes simpler and safer—so you spend less time managing refills and more time living your life.
      </p>

      {/* Optional Stats Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm text-center"
          >
            <div className="text-2xl md:text-3xl font-semibold text-brand-navy mb-2">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-brand-navy mb-1">
              {stat.label}
            </div>
            <div className="text-sm text-slate-600">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}









