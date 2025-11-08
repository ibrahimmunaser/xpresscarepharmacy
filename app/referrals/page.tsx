export default function ReferralsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-semibold text-brand-navy mb-4">
          Submit Your Referral
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          This secure referral system is coming soon. For now, please contact us directly 
          to submit referrals for your facility.
        </p>
        <div className="bg-slate-50 rounded-lg p-6 border">
          <h2 className="text-xl font-medium text-brand-navy mb-4">
            Contact Information
          </h2>
          <div className="space-y-2 text-slate-600">
            <p><strong>Phone:</strong> <a href="tel:313-914-3736" className="text-brand-navy hover:underline">313-914-3736</a></p>
            <p><strong>Fax:</strong> 313-914-5105</p>
            <p><strong>Address:</strong> 3040 E 7 Mile, Detroit, MI 48234</p>
          </div>
        </div>
        <div className="mt-8">
          <a 
            href="/long-term-care#contact" 
            className="inline-flex items-center px-5 py-3 rounded-md bg-brand-navy text-white hover:bg-brand-navy/90 transition-colors"
          >
            Contact Us Instead
          </a>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Submit Referral - Xpress Care Pharmacy',
  description: 'Submit referrals for long-term care pharmacy services.',
};
















