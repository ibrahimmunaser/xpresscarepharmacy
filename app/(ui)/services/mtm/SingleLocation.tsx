import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function SingleLocation() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-semibold tracking-tight mb-6">
        Visit Our Location
      </h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-neutral-200/70 bg-white p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <MapPinIcon className="h-8 w-8 text-brand-navy flex-shrink-0 mt-1" aria-hidden="true" />
            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Xpress Care Pharmacy
              </h3>
              <div className="space-y-2 text-slate-600">
                <p>3040 E 7 Mile</p>
                <p>Detroit, MI 48234</p>
                <div className="flex items-center space-x-4 pt-2">
                  <a
                    href="tel:313-914-3736"
                    className="flex items-center space-x-2 text-brand-navy hover:text-brand-navy/80 transition-colors"
                  >
                    <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                    <span>(313) 914-3736</span>
                  </a>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-600">Fax: (313) 914-5105</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-neutral-200/70 bg-neutral-100 p-6 shadow-sm">
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-slate-600">
              <MapPinIcon className="h-12 w-12 mx-auto mb-3 text-brand-navy/60" aria-hidden="true" />
              <p className="text-sm">Interactive map coming soon</p>
              <p className="text-xs mt-1">Located on E 7 Mile Road in Detroit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}














