import { 
  ClipboardDocumentCheckIcon, 
  BeakerIcon, 
  LightBulbIcon, 
  CalendarDaysIcon 
} from '@heroicons/react/24/outline';

const services = [
  {
    icon: ClipboardDocumentCheckIcon,
    title: 'Personalized Medication Review',
    description: 'We review your prescriptions, OTCs, and supplements to ensure your treatment is safe, effective, and efficient.'
  },
  {
    icon: BeakerIcon,
    title: 'Identify Your Medications',
    description: 'We explain how each medication works, the best time to take it, what to avoid, and what to watch for.'
  },
  {
    icon: LightBulbIcon,
    title: 'Provide Solutions',
    description: 'If needed, we propose alternatives with your prescriber, adjust timing or dosages, and simplify your regimen.'
  },
  {
    icon: CalendarDaysIcon,
    title: 'Help You Stay on Track',
    description: 'Med Sync, reminder cues, and Dispill® packaging make it easier to stay consistent day to day.'
  }
];

export default function WhatWeDo() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-semibold tracking-tight mb-6">
        What We Do in an MTM Review
      </h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <service.icon className="h-8 w-8 text-brand-navy" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}









