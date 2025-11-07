interface FinalCtaBandProps {
  onEnrollClick?: () => void;
}

export default function FinalCtaBand({ onEnrollClick = () => {} }: FinalCtaBandProps) {
  return (
    <section className="bg-gradient-to-r from-[#10254D] to-[#10254D]/90 rounded-xl p-8 text-center text-white mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Ready to simplify your medications?
      </h2>
      
      <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
        We'll verify insurance and coordinate with your prescriber to get you started with Dispill packaging.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-white text-brand-navy font-semibold hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#10254D]"
        >
          Enroll in Dispill
        </a>
        
        <a
          href="tel:313-914-3736"
          className="inline-flex items-center justify-center px-8 py-3 rounded-md border-2 border-white text-white hover:bg-white hover:text-brand-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#10254D]"
        >
          Call 313-914-3736
        </a>
      </div>
    </section>
  );
}









