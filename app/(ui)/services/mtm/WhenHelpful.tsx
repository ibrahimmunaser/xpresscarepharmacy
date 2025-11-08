import { InformationCircleIcon } from '@heroicons/react/24/outline';

const reasons = [
  'Taking multiple medications or doses per day',
  'Recent hospitalizations or new diagnoses',
  'Side effects or drug interactions',
  'Struggling with adherence or confusing instructions',
  'Transitions of care (new prescriber/specialist)',
  'Caregivers managing a loved one\'s regimen'
];

export default function WhenHelpful() {
  return (
    <section className="mb-12">
      <div className="rounded-xl border border-neutral-200/70 bg-neutral-50 p-6 shadow-sm">
        <div className="flex items-start space-x-4">
          <InformationCircleIcon className="h-8 w-8 text-brand-navy flex-shrink-0 mt-1" aria-hidden="true" />
          <div>
            <h2 className="text-xl font-semibold text-brand-navy mb-4">
              Why You May Need Our MTM Services
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Multiple medications, complex conditions, new diagnoses, recent hospitalizations, side effects or drug interactions, or difficulty staying consistent are all good reasons to do MTM—especially during transitions of care.
            </p>
            <ul className="space-y-2">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#10254D] rounded-full mt-2"></div>
                  <span className="text-slate-600 leading-relaxed">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}















