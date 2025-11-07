import { 
  ClipboardDocumentListIcon, 
  ClockIcon, 
  TruckIcon, 
  ExclamationTriangleIcon 
} from '@heroicons/react/24/outline';

const facilityFeatures = [
  {
    icon: ClipboardDocumentListIcon,
    title: 'MAR Support',
    description: 'Medication Administration Record export and printed summaries for facility documentation.'
  },
  {
    icon: ClockIcon,
    title: 'Cycle Alignment',
    description: 'Coordinated 28 or 30-day cycles aligned with facility medication pass schedules.'
  },
  {
    icon: TruckIcon,
    title: 'Change Order Processing',
    description: 'Therapy changes processed within 24 hours with expedited delivery to facilities.'
  },
  {
    icon: ExclamationTriangleIcon,
    title: 'Emergency Dose Delivery',
    description: 'Same-day emergency dose delivery for urgent medication needs and therapy changes.'
  }
];

export default function FacilityPanel() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mt-10 mb-6">
        Facility & Provider Workflow
      </h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
        <p className="text-brand-navy font-medium mb-2">
          Specialized Support for Healthcare Facilities
        </p>
        <p className="text-slate-600 leading-relaxed">
          We work closely with assisted living facilities, nursing homes, and healthcare providers to ensure seamless medication management and regulatory compliance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {facilityFeatures.map((feature, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-200 bg-white shadow-sm p-6"
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









