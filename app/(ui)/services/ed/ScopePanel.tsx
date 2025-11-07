import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function ScopePanel() {
  const weCover = [
    'How and when to take physician-prescribed ED medicines',
    'Managing side effects and when to contact your prescriber',
    'Checking for drug interactions (e.g., nitrates, alpha-blockers—education only)',
    'Refill synchronization & discreet same-/next-day delivery (if available in your radius)',
    'Storage, travel, and timing tips'
  ];

  const weDoNot = [
    'Diagnose ED or provide medical advice beyond pharmacist counseling',
    'Replace your prescriber\'s care',
    'Guarantee medication supply if prescriptions/coverage are restricted'
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mt-10 mb-6">
        What We Help With
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
          <h3 className="text-lg font-semibold text-brand-navy mb-4">
            <span className="text-green-600">✓</span> We Cover
          </h3>
          <ul className="space-y-3">
            {weCover.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span className="text-slate-600 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
          <h3 className="text-lg font-semibold text-brand-navy mb-4">
            <span className="text-amber-600">⚠</span> We Do Not
          </h3>
          <ul className="space-y-3">
            {weDoNot.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                <span className="text-slate-600 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
        <ExclamationTriangleIcon className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <p className="text-red-800 font-medium mb-1">Emergency Warning</p>
          <p className="text-red-700 text-sm">
            If you have chest pain, shortness of breath, or sudden vision/hearing changes, call 911 or seek urgent care.
          </p>
        </div>
      </div>
    </section>
  );
}









