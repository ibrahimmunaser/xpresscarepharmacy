import { 
  ShieldCheckIcon, 
  CheckCircleIcon, 
  ClockIcon, 
  HeartIcon, 
  BuildingOfficeIcon, 
  MapIcon 
} from '@heroicons/react/24/outline';

const benefits = [
  {
    icon: ShieldCheckIcon,
    title: 'Safety',
    description: 'Fewer timing mistakes with pharmacist-built packs that are double-checked for accuracy.'
  },
  {
    icon: CheckCircleIcon,
    title: 'Adherence',
    description: 'Visual routine boosts on-time doses and helps maintain consistent medication schedules.'
  },
  {
    icon: ClockIcon,
    title: 'Time Saved',
    description: 'No weekly pillbox setup or sorting required. Everything is pre-organized for you.'
  },
  {
    icon: HeartIcon,
    title: 'Caregiver Relief',
    description: 'Easy monitoring reduces stress and conflict while providing peace of mind.'
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Facility Friendly',
    description: 'Pass-time labeling with MAR integration support for assisted living facilities.'
  },
  {
    icon: MapIcon,
    title: 'Travel-Ready',
    description: 'Tear off only what you need with convenient travel mini-packs available.'
  }
];

export default function BenefitGrid() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mt-10 mb-6">
        Why Choose Dispill at Xpress Care
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <benefit.icon className="h-8 w-8 text-brand-navy" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}









