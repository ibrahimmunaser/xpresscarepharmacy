import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function SingleLocation() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-6">
        Visit Our Location
      </h2>
      
      {/* Location Information */}
      <div className="mb-8">
        <div className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm max-w-2xl">
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
                    className="flex items-center space-x-2 text-brand-navy hover:text-brand-navy/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#10254D]/50 rounded"
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
      </div>

      {/* Full Width Map */}
      <div className="w-full">
        <div className="aspect-[16/6] w-full rounded-xl overflow-hidden shadow-lg border border-[#E5E7EB]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.8234567890123!2d-83.0458!3d42.4031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824d2b1f1234567%3A0x1234567890abcdef!2s3040%20E%207%20Mile%20Rd%2C%20Detroit%2C%20MI%2048234!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Xpress Care Pharmacy Location - Medication Adherence Services"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Get Directions Button */}
      <div className="mt-6 text-center">
        <a
          href="https://maps.google.com/?q=3040+E+7+Mile,+Detroit,+MI+48234"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#10254D] text-white font-semibold rounded-lg hover:bg-[#10254D]/90 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
        >
          <MapPinIcon className="w-6 h-6" />
          Get Directions
        </a>
      </div>
    </section>
  );
}









