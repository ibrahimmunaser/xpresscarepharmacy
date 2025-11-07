import Link from "next/link";
import { 
  HomeIcon, 
  ShieldCheckIcon, 
  CreditCardIcon, 
  ClockIcon,
  SparklesIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

export default function Hero(props?: any) {
  const trustBadges = [
    { icon: HomeIcon, label: "Locally Owned" },
    { icon: ShieldCheckIcon, label: "HIPAA Compliant" },
    { icon: CreditCardIcon, label: "Insurance Accepted" },
    { icon: ClockIcon, label: "Fast & Friendly" },
    { icon: HeartIcon, label: "Caring Service" }
  ];

  return (
    <section aria-label="Welcome" className="relative bg-brand-navy overflow-hidden" data-component="enhanced-hero">
      <div className="relative mx-auto max-w-content px-6 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl font-heading">
          A Pharmacy That Feels Like Family
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-white/90 md:text-xl max-w-3xl mx-auto font-bold">
          As a locally owned pharmacy, we take the time to understand your health needs and guide you with care—every step of the way.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mt-10 mb-12">
          <Link
            href="/refill"
            className="rounded-lg bg-white px-8 py-4 text-center font-semibold text-brand-navy hover:bg-white/90 shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Online Refill
          </Link>
          <Link
            href="/transfer"
            className="rounded-lg bg-white px-8 py-4 text-center font-semibold text-brand-navy hover:bg-white/90 shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Transfer Prescriptions
          </Link>
        </div>

        {/* Enhanced Trust Badges */}
        <div className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-center p-5 bg-white rounded-[10px] border border-gray-200 shadow-[0_2px_6px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-brand-navy/10 rounded-full flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-brand-navy" />
                  </div>
                  <span className="text-sm font-semibold text-brand-navy text-center leading-tight">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
