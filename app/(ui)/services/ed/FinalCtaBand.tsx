import { ShieldCheckIcon } from '@heroicons/react/24/outline';

interface FinalCtaBandProps {
  onConsultClick?: () => void;
}

export default function FinalCtaBand({ onConsultClick = () => {} }: FinalCtaBandProps) {
  return (
    <section className="bg-gradient-to-r from-brand-navy to-brand-navy/90 rounded-xl p-8 text-center text-white mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Ready to talk privately about ED treatment?
      </h2>
      
      <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
        Our pharmacists are here to provide confidential support and clear guidance for your physician-prescribed treatment.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-white text-brand-navy font-semibold hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
        >
          Speak with a Pharmacist
        </a>
        
        <a
          href="tel:313-914-3736"
          className="inline-flex items-center justify-center px-8 py-3 rounded-md border-2 border-white text-white hover:bg-white hover:text-brand-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
        >
          Call 313-914-3736
        </a>
      </div>

      <div className="flex items-center justify-center gap-2 text-sm opacity-90">
        <ShieldCheckIcon className="h-4 w-4" aria-hidden="true" />
        <span>Your conversation stays confidential.</span>
      </div>
    </section>
  );
}









