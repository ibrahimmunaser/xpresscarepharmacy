import { 
  ArrowsRightLeftIcon, 
  UserIcon, 
  BellIcon, 
  Square3Stack3DIcon, 
  TruckIcon, 
  PhoneIcon 
} from '@heroicons/react/24/outline';

const tools = [
  {
    icon: ArrowsRightLeftIcon,
    title: 'Medication Synchronization (Med Sync)',
    description: 'We align all refills to a single pickup or delivery date—so you only manage medications once per month.',
    cta: {
      href: '/services/medication-synchronization',
      label: 'Enroll in Med Sync'
    }
  },
  {
    icon: UserIcon,
    title: 'Personalized Counseling',
    description: 'Side-effect review, interaction checks, dose-timing strategies, what to avoid, and when to call us.',
    cta: null
  },
  {
    icon: BellIcon,
    title: 'Smart Reminders',
    description: 'App notifications, text/email prompts, easy re-order links, and packing cues (e.g., Dispill®).',
    cta: null
  },
  {
    icon: Square3Stack3DIcon,
    title: 'Dispill® Multi-Dose Packaging',
    description: 'Pre-sorted packs by day/time reduce confusion and missed doses.',
    cta: {
      href: '/services/dispill-multi-dose-packaging',
      label: 'Learn about Dispill®'
    }
  },
  {
    icon: TruckIcon,
    title: 'Free Delivery',
    description: 'Reliable same-day/next-day delivery when you can\'t make it in.',
    cta: {
      href: '/services/free-delivery',
      label: 'Explore Delivery'
    }
  },
  {
    icon: PhoneIcon,
    title: 'Refill Coordination',
    description: 'We proactively call your prescriber to prevent gaps in therapy—so you don\'t have to.',
    cta: null
  }
];

export default function ToolsAndServices() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-6">
        Tools & Services to Support Adherence
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <tool.icon className="h-8 w-8 text-brand-navy" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-brand-navy mb-2">
                  {tool.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {tool.description}
                </p>
                {tool.cta && (
                  <a
                    href={tool.cta.href}
                    className="inline-flex items-center text-sm font-medium text-brand-navy hover:text-brand-navy/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#10254D]/50 rounded"
                  >
                    {tool.cta.label} →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}















