import Link from 'next/link';
import Image from 'next/image';
import ServicesLayout from '../_components/ServicesLayout';
import DeliveryCoverageCard from '@/app/(ui)/services/free-delivery/DeliveryCoverageCard';
import FaqAccordion from '@/app/(ui)/services/free-delivery/FaqAccordion';
import { FaqItem } from '@/app/(ui)/services/free-delivery/types';

// FAQ data
const faqItems: FaqItem[] = [
  {
    q: "What areas do you deliver to?",
    a: "We deliver throughout the Detroit metro area. Use our ZIP code checker above to confirm coverage for your specific location, or call us at (313) 914-3736 to discuss delivery options."
  },
  {
    q: "Is delivery really free?",
    a: "Yes! Our delivery service is completely free for most prescriptions. There are no hidden fees or minimum order requirements for standard deliveries within our service area."
  },
  {
    q: "Do I need to be home for delivery?",
    a: "For most medications, no signature is required. However, controlled substances and certain high-value medications may require ID verification and signature upon delivery for your safety and security."
  },
  {
    q: "Can you deliver refrigerated medications?",
    a: "Absolutely! We have specialized cold-chain delivery equipment to ensure temperature-sensitive medications like insulin remain properly stored during transport."
  },
  {
    q: "How do I schedule a delivery?",
    a: "You can schedule delivery through our online refill system, by calling us at (313) 914-3736, or by using the coverage checker on this page. We'll coordinate the best delivery window for your schedule."
  },
  {
    q: "Can you deliver to my workplace or assisted living facility?",
    a: "Yes! We deliver to workplaces, assisted living facilities, group homes, and other locations within our coverage area. We work with facility staff to ensure secure handoff procedures."
  },
  {
    q: "What if I miss my delivery?",
    a: "If you're not available, we'll leave a secure delivery notice and attempt redelivery the next business day. For controlled substances requiring signature, we'll coordinate a new delivery time that works for you."
  },
  {
    q: "Do you deliver on holidays?",
    a: "We maintain limited delivery service on most holidays for urgent medications. Holiday delivery schedules may vary, so please call ahead to confirm availability for your specific needs."
  }
];

export default function FreeDeliveryPage() {
  return (
    <div className="bg-brand-navy min-h-screen">
      {/* SEO Schema Markup */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Xpress Care Pharmacy",
            "image": "https://xpresscarepharmacy.com/images/Image 4.png",
            "url": "https://xpresscarepharmacy.com/services/free-delivery",
            "telephone": "313-914-3736",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3040 E 7 Mile",
              "addressLocality": "Detroit",
              "addressRegion": "MI",
              "postalCode": "48234",
              "addressCountry": "US"
            },
            "areaServed": { "@type": "City", "name": "Detroit" },
            "department": [{
              "@type": "MedicalBusiness",
              "name": "Free Prescription Delivery",
              "url": "https://xpresscarepharmacy.com/services/free-delivery",
              "serviceArea": { "@type": "AdministrativeArea", "name": "Detroit Metro" }
            }],
            "openingHours": "Mo-Fr 10:00-18:00"
          })
        }} 
      />

      {/* Header + Hero Card - Dark Navy Background */}
      <section className="w-full">
        <ServicesLayout activeSlug="free-delivery">
          <div className="py-8 md:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                  Free Delivery
                </h1>
                <p className="text-white/90 leading-relaxed mb-6">
                  Your time matters to us. Enjoy convenient, reliable prescription delivery 
                  directly to your home or office at no charge—with same-day and next-day options.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/refill"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-navy rounded-lg font-medium hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 transition-colors"
                  >
                    Online Refill
                  </Link>
                  <Link
                    href="/transfer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 transition-colors"
                  >
                    Transfer Prescriptions
                  </Link>
                </div>
              </div>
              <div className="lg:order-last">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src="/images/Image 4.png"
                    alt="Professional delivery person handing prescription bag to customer"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                  />
                </div>
              </div>
            </div>
          </div>
        </ServicesLayout>
      </section>

      {/* How Our Free Delivery Works - White Background */}
      <section aria-labelledby="how-it-works" className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 id="how-it-works" className="text-2xl md:text-3xl font-semibold text-brand-navy mb-6">
            How Our Free Delivery Works
          </h2>
          <ul role="list" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <li className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy mb-1">Convenient, Same-Day or Next-Day Options</h3>
                <p className="text-slate-600 text-sm">Flexible windows tailored to your schedule.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy mb-1">Safe & Confidential Handling</h3>
                <p className="text-slate-600 text-sm">Cold-chain and signature options available.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy mb-1">Text/Call Updates</h3>
                <p className="text-slate-600 text-sm">Get notified when your order is on the way.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy mb-1">Coordinated with Your Prescriber</h3>
                <p className="text-slate-600 text-sm">We handle refills and sync so everything arrives together.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Coverage & Scheduling - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <DeliveryCoverageCard />
        </div>
      </section>

      {/* Delivery Details - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                What to Expect on Delivery Day
              </h2>
              <ol className="list-decimal pl-6 space-y-3 text-white/90 leading-relaxed">
                <li>We confirm your order and delivery window by text/call.</li>
                <li>Your medication is packed securely and temperature-controlled (when needed).</li>
                <li>Driver verifies address and discreetly delivers to your door.</li>
                <li>You'll receive a delivery confirmation & refill reminders.</li>
              </ol>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                Who Qualifies for Free Delivery?
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Most local patients qualify for our free delivery service. Here's what you need to know:
              </p>
              <ul className="space-y-3 text-white/90 leading-relaxed">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong className="text-white">No minimum order required</strong> — most insurance plans and cash payments qualify</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong className="text-white">Controlled substances:</strong> may require signature & ID verification for safety</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong className="text-white">Same-day cutoff:</strong> orders after 2 PM delivered next business day</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Medication Synchronization Promo - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-brand-navy mb-3">
              Simplify with Medication Synchronization
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Combine free delivery with our sync service to get all your medications delivered 
              on the same day each month. No more multiple trips or missed refills.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <svg className="w-4 h-4 text-brand-navy" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Fewer trips, single monthly delivery date
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <svg className="w-4 h-4 text-brand-navy" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Proactive refill management
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <svg className="w-4 h-4 text-brand-navy" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Better medication adherence
              </li>
            </ul>
            <Link
              href="/services/medication-synchronization"
              className="inline-flex items-center text-brand-navy font-medium hover:underline focus:outline-none focus:underline"
            >
              Learn about Sync My Meds
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Contact Information & Compliance - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Visit Our Detroit Location
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2 text-brand-gray">
                  <p className="font-medium">Xpress Care Pharmacy</p>
                  <p>3040 E 7 Mile<br />Detroit, MI 48234</p>
                </div>
                <div className="space-y-2 text-brand-gray">
                  <p>Phone: (313) 914-3736<br />Fax: (313) 914-5105</p>
                  <p><strong>Hours:</strong> Mon–Fri 10am–6pm</p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="tel:313-914-3736"
                    className="inline-flex items-center px-4 py-2 border border-brand-navy text-brand-navy rounded-lg text-sm font-medium hover:bg-brand-navy/5 focus:outline-none focus:ring-2 focus:ring-brand-navy/60 transition-colors"
                  >
                    Call Us
                  </a>
                  <a
                    href="https://maps.google.com/?q=3040+E+7+Mile,+Detroit,+MI+48234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-brand-navy text-brand-navy rounded-lg text-sm font-medium hover:bg-brand-navy/5 focus:outline-none focus:ring-2 focus:ring-brand-navy/60 transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong className="text-brand-navy">Compliance & Safety:</strong> All deliveries comply with state and federal regulations. 
                Controlled substances may require ID verification and signature. Pharmacist consultation is 
                available during delivery or by phone. We maintain proper handling protocols for temperature-sensitive 
                medications and provide secure disposal guidance for unused medications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Width Map - White Background */}
      <section className="bg-white w-full">
        <div className="w-full">
          <div className="aspect-[16/4] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.8234567890123!2d-83.0458!3d42.4031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824d2b1f1234567%3A0x1234567890abcdef!2s3040%20E%207%20Mile%20Rd%2C%20Detroit%2C%20MI%2048234!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Xpress Care Pharmacy Location - Free Delivery Service Area"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Final Conversion Block - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <div className="rounded-xl bg-white text-brand-navy p-8 text-center border border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto">
              Fast, secure, and pharmacist-led care. Experience the convenience of free prescription 
              delivery with the personal touch of a locally owned pharmacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/refill"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-navy text-white rounded-lg font-semibold hover:bg-brand-navy/90 focus:outline-none focus:ring-2 focus:ring-brand-navy/60 transition-colors"
              >
                Online Refill
              </Link>
              <Link
                href="/transfer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-navy text-brand-navy rounded-lg font-semibold hover:bg-brand-navy/5 focus:outline-none focus:ring-2 focus:ring-brand-navy/60 transition-colors"
              >
                Transfer Prescriptions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: 'Free Prescription Delivery | Xpress Care Pharmacy (Detroit, MI)',
  description: 'Same-day and next-day prescription delivery at no charge. Professional, secure service throughout Detroit metro. Check coverage and schedule online.',
  keywords: 'free prescription delivery, medication delivery Detroit, same day delivery, pharmacy delivery service, prescription courier',
  alternates: {
    canonical: '/services/free-delivery'
  }
};
