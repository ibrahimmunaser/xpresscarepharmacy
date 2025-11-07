'use client';

import { TruckIcon, PhoneIcon } from '@heroicons/react/24/outline';

interface DeliveryPanelProps {
  onScheduleClick?: () => void;
}

export default function DeliveryPanel({ onScheduleClick = () => {} }: DeliveryPanelProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mt-10 mb-6">
        Discreet Delivery & Pickup
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-white/20 bg-white/10 shadow-sm p-6">
          <div className="flex items-start space-x-4">
            <TruckIcon className="h-8 w-8 text-white flex-shrink-0" aria-hidden="true" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Delivery Coverage
              </h3>
              <p className="text-white/90 leading-relaxed mb-4">
                Free same-/next-day delivery may be available within our service radius from 3040 E 7 Mile, Detroit, MI 48234.
              </p>
              <p className="text-sm text-white/80 mb-4">
                <strong>Packaging:</strong> Nondescript bag or box with name and prescription label included inside per legal requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/20 bg-white/10 shadow-sm p-6">
          <h3 className="text-lg font-semibold text-white mb-3">
            Pickup Options
          </h3>
          <p className="text-white/90 leading-relaxed mb-4">
            Ask for a private consultation at the counter if you have questions or prefer to discuss your medication away from other customers.
          </p>
          <p className="text-sm text-white/80">
            Our team is trained to handle sensitive medications with discretion and respect.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-brand-navy hover:bg-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2"
        >
          Schedule Delivery Window
        </a>
        
        <a
          href="tel:313-914-3736"
          className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-transparent text-white border border-white/20 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2"
        >
          <PhoneIcon className="h-4 w-4 mr-2" aria-hidden="true" />
          Call 313-914-3736
        </a>
      </div>
    </section>
  );
}









