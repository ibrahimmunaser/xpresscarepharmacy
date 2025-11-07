import { 
  MapIcon, 
  BeakerIcon, 
  LanguageIcon, 
  BellIcon 
} from '@heroicons/react/24/outline';

const addOns = [
  {
    icon: MapIcon,
    title: 'Travel Packs / Vacation Supply',
    description: 'Request ahead for special travel packaging and extended supplies for your trips.'
  },
  {
    icon: BeakerIcon,
    title: 'PRN / As-Needed Medications',
    description: 'Separately labeled bottles provided outside the card when appropriate for your regimen.'
  },
  {
    icon: LanguageIcon,
    title: 'Special Packaging Options',
    description: 'Large-print labeling and bilingual labels available where supported.'
  },
  {
    icon: BellIcon,
    title: 'Caregiver Access',
    description: 'Optional text reminders to a secondary contact for additional peace of mind.'
  }
];

export default function AddOnsPanel() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mt-10 mb-6">
        Add-Ons & Options
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addOns.map((addOn, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-200 bg-white shadow-sm p-6"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <addOn.icon className="h-8 w-8 text-brand-navy" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">
                  {addOn.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {addOn.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}









