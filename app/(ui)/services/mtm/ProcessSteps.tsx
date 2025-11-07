import { 
  MagnifyingGlassIcon, 
  DocumentTextIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';

const steps = [
  {
    number: '1',
    icon: MagnifyingGlassIcon,
    title: 'Comprehensive Review',
    description: 'We gather your complete medication list, goals, and concerns.'
  },
  {
    number: '2',
    icon: DocumentTextIcon,
    title: 'Action Plan',
    description: 'We create a clear, written plan; when needed, we coordinate changes with your prescriber.'
  },
  {
    number: '3',
    icon: UserGroupIcon,
    title: 'Follow-up & Support',
    description: 'Regular check-ins to track progress, manage side effects, and keep your plan current.'
  }
];

export default function ProcessSteps() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl text-white font-semibold tracking-tight mb-6">
        Our MTM Process
      </h2>
      
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative p-6 rounded-xl border border-white/20 bg-white/10 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white text-brand-navy rounded-full flex items-center justify-center font-semibold text-lg">
                  {step.number}
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
            
            {/* Connection line for desktop */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/30 transform -translate-y-1/2 z-10"></div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-white/80 bg-white/10 rounded-lg px-4 py-2 inline-block">
          Typical visit: 30–45 minutes
        </p>
      </div>
    </section>
  );
}









