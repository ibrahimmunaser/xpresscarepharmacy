import { CheckCircleIcon } from '@heroicons/react/24/outline';

const outcomes = [
  'Fewer missed doses and fewer refill surprises',
  'Less back-and-forth with prescribers',
  'Better lab trends and symptom control over time',
  'Lower stress for patients and caregivers'
];

const steps = [
  {
    number: '1',
    title: 'Tell us your current meds',
    description: 'Bring a list or your bottles; we verify timing and quantities.'
  },
  {
    number: '2',
    title: 'We align your calendar',
    description: 'We coordinate with your prescriber if needed and set your monthly pickup or delivery day.'
  },
  {
    number: '3',
    title: 'We keep you on track',
    description: 'Reminders, packaging options, and check-ins to prevent gaps.'
  }
];

export default function HealthJourney() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-6">
        Supporting Your Health Journey
      </h2>
      
      {/* Outcomes InfoCard */}
      <div className="rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] p-6 shadow-sm mb-8">
        <h3 className="text-lg font-semibold text-brand-navy mb-4">
          Better Outcomes with Our Support
        </h3>
        <ul className="space-y-3">
          {outcomes.map((outcome, index) => (
            <li key={index} className="flex items-start space-x-3">
              <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-slate-600 leading-relaxed">
                {outcome}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Getting Started Steps */}
      <h3 className="text-xl font-semibold text-brand-navy mb-6">
        Getting Started Is Easy
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-[#10254D] text-white rounded-full flex items-center justify-center font-semibold">
                  {step.number}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-brand-navy mb-2">
                  {step.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
            
            {/* Connection line for desktop */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#E5E7EB] transform -translate-y-1/2 z-10"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}















