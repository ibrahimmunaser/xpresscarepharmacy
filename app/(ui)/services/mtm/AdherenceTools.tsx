import { 
  ArrowsRightLeftIcon, 
  Square3Stack3DIcon, 
  TruckIcon 
} from '@heroicons/react/24/outline';

const tools = [
  {
    icon: ArrowsRightLeftIcon,
    title: 'Med Sync',
    description: 'Synchronize all your medications to refill on the same day each month.',
    href: '/services/medication-synchronization'
  },
  {
    icon: Square3Stack3DIcon,
    title: 'Dispill® Multi-Dose Packaging',
    description: 'Color-coded blister packs organized by day and time for easy adherence.',
    href: '/services/dispill-multi-dose-packaging'
  },
  {
    icon: TruckIcon,
    title: 'Home Delivery',
    description: 'Free delivery service to bring your medications directly to your door.',
    href: '/services/free-delivery'
  }
];

export default function AdherenceTools() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-semibold tracking-tight mb-6">
        Tools That Keep You On Track
      </h2>
      
      <div className="grid gap-6 md:grid-cols-3">
        {tools.map((tool, index) => (
          <a
            key={index}
            href={tool.href}
            className="block p-6 rounded-xl border border-neutral-200/70 bg-white shadow-sm hover:shadow-md transition-all hover:border-[#10254D]/20 group"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <tool.icon className="h-8 w-8 text-brand-navy group-hover:text-brand-navy/80 transition-colors" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2 group-hover:text-brand-navy/80 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {tool.description}
                </p>
                <div className="mt-3 text-sm text-brand-navy font-medium group-hover:text-brand-navy/80 transition-colors">
                  Learn more →
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}















