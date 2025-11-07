import { EligibilityGroup } from './types';

const eligibilityGroups: EligibilityGroup[] = [
  {
    group: 'Adults (18-64)',
    description: 'Routine adult immunizations',
    recommendedVaccines: ['COVID-19', 'Influenza (annual)', 'Tdap (every 10 years)', 'HPV (if not completed)'],
    notes: 'Based on risk factors and previous vaccination history'
  },
  {
    group: 'Older Adults (65+)',
    description: 'Enhanced protection for seniors',
    recommendedVaccines: ['COVID-19', 'Influenza (annual)', 'Pneumococcal', 'Shingles', 'Tdap'],
    notes: 'Medicare typically covers these vaccines'
  },
  {
    group: 'Pregnant Individuals',
    description: 'Safe vaccines during pregnancy',
    recommendedVaccines: ['COVID-19', 'Influenza', 'Tdap (each pregnancy)'],
    notes: 'Consult with OB/GYN and our pharmacist'
  },
  {
    group: 'Chronic Conditions',
    description: 'Diabetes, heart disease, lung conditions',
    recommendedVaccines: ['COVID-19', 'Influenza (annual)', 'Pneumococcal', 'Hepatitis B'],
    notes: 'Additional vaccines may be recommended based on condition'
  },
  {
    group: 'College/Group Living',
    description: 'Students and communal living',
    recommendedVaccines: ['COVID-19', 'Influenza', 'Meningococcal', 'MMR', 'Varicella'],
    notes: 'Many institutions require proof of vaccination'
  },
  {
    group: 'Travelers',
    description: 'International travel protection',
    recommendedVaccines: ['COVID-19', 'Hepatitis A & B', 'Travel-specific vaccines*'],
    notes: 'Destination-specific recommendations available'
  }
];

export default function EligibilityMatrix() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
        Who Should Get Which Vaccine?
      </h2>
      
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full border-collapse rounded-xl border border-slate-200 bg-white shadow-sm">
          <thead>
            <tr className="bg-[#10254D]/5">
              <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-brand-navy">
                Population Group
              </th>
              <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-brand-navy">
                Recommended Vaccines
              </th>
              <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-brand-navy">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {eligibilityGroups.map((group, index) => (
              <tr key={index} className="hover:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">
                  <div>
                    <div className="font-medium text-brand-navy">{group.group}</div>
                    <div className="text-sm text-slate-600">{group.description}</div>
                  </div>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <ul className="space-y-1">
                    {group.recommendedVaccines.map((vaccine, vIndex) => (
                      <li key={vIndex} className="flex items-center gap-2 text-sm text-slate-600">
                        <svg className="w-3 h-3 text-brand-navy flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {vaccine}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="border border-slate-200 px-4 py-3 text-sm text-slate-600">
                  {group.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {eligibilityGroups.map((group, index) => (
          <div key={index} className="rounded-xl border border-slate-200 bg-white shadow-sm p-4">
            <div className="mb-3">
              <h3 className="font-semibold text-brand-navy mb-1">{group.group}</h3>
              <p className="text-sm text-slate-600">{group.description}</p>
            </div>
            
            <div className="mb-3">
              <h4 className="text-sm font-medium text-brand-navy mb-2">Recommended Vaccines:</h4>
              <ul className="space-y-1">
                {group.recommendedVaccines.map((vaccine, vIndex) => (
                  <li key={vIndex} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-3 h-3 text-brand-navy flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {vaccine}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-xs text-slate-600 bg-slate-50 rounded-md p-2">
              <strong>Note:</strong> {group.notes}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Important:</strong> Final recommendations depend on personal health history, previous vaccinations, 
          and current medications. Consult with our pharmacist for personalized guidance.
        </p>
      </div>
    </section>
  );
}










