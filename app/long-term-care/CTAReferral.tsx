export default function CTAReferral() {
  return (
    <section id="referral" className="bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">
              Improve medication management and simplify your day
            </h3>
            <p className="mt-2 text-white/90">
              Send us a referral—our team will coordinate care, delivery, and packaging with your staff.
            </p>
          </div>
          <a 
            href="/referrals" 
            className="inline-flex items-center px-5 py-3 rounded-md bg-white text-brand-navy hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 whitespace-nowrap"
            data-analytics="click_referral_from_cta"
          >
            Submit your referral
          </a>
        </div>
      </div>
    </section>
  );
}
















