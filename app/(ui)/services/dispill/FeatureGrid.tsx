import { 
  UserGroupIcon, 
  HeartIcon, 
  ClockIcon, 
  LightBulbIcon, 
  HomeIcon, 
  BriefcaseIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: UserGroupIcon,
    title: 'Seniors & Assisted Living Residents',
    description: 'Reduce confusion and align with facility pass-times for better medication management.'
  },
  {
    icon: HeartIcon,
    title: 'Caregivers & Family',
    description: 'One glance accountability with tear-off dose pods for appointments and outings.'
  },
  {
    icon: ClockIcon,
    title: 'Complex Regimens',
    description: 'Multiple medications and times simplified, with fewer missed or duplicated doses.'
  },
  {
    icon: LightBulbIcon,
    title: 'Memory Challenges',
    description: 'Visual structure reduces cognitive load for dementia, post-stroke, and other conditions.'
  },
  {
    icon: HomeIcon,
    title: 'Post-discharge Patients',
    description: 'Early adherence support reduces readmissions and improves recovery outcomes.'
  },
  {
    icon: BriefcaseIcon,
    title: 'Busy Adults',
    description: 'Perfect for travel and shift work with portable, reliable dosing solutions.'
  }
];

export default function FeatureGrid() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mt-10 mb-6">
        Who It's Perfect For
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <feature.icon className="h-8 w-8 text-brand-navy" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
