import Link from 'next/link';
import Image from 'next/image';
import ServicesLayout from '../_components/ServicesLayout';
import VaccineCardGrid from '@/app/(ui)/services/immunizations/VaccineCardGrid';
import EligibilityMatrix from '@/app/(ui)/services/immunizations/EligibilityMatrix';
import FaqAccordion from '@/app/(ui)/services/immunizations/FaqAccordion';

export const metadata = {
  title: 'Immunizations & Vaccines | Xpress Care Pharmacy – Detroit, MI',
  description:
    'Walk-in vaccines including flu, COVID-19, shingles, pneumonia, Tdap, MMR, and travel vaccines. Pharmacist consults and health screening available.',
  alternates: { canonical: '/services/immunizations' }
};

export default function ImmunizationsPage() {
  return (
    <div className="bg-brand-navy min-h-screen">
      {/* SEO Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Pharmacy",
            "name": "Xpress Care Pharmacy",
            "url": "https://xpresscarepharmacy.com/services/immunizations",
            "telephone": "313-914-3736",
            "image": "https://xpresscarepharmacy.com/og/immunizations.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3040 E 7 Mile",
              "addressLocality": "Detroit",
              "addressRegion": "MI",
              "postalCode": "48234",
              "addressCountry": "US"
            },
            "department": [{
              "@type": "MedicalEntity",
              "name": "Immunization Service",
              "url": "https://xpresscarepharmacy.com/services/immunizations"
            }],
            "openingHours": "Mo-Fr 10:00-18:00",
            "areaServed": { "@type": "City", "name": "Detroit" }
          })
        }}
      />

      {/* Header + Hero - Dark Navy Background */}
      <section className="w-full">
        <ServicesLayout activeSlug="immunizations">
          <div className="py-8 md:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                  Immunizations
                </h1>
                <p className="text-white/90 leading-relaxed mb-6">
                  Protect your health with safe, effective vaccines administered by our experienced pharmacists. 
                  We offer walk-in availability and comprehensive health screening 
                  to keep you and your family up-to-date with immunizations.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#walk-in-hours"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-navy rounded-lg font-medium hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/60 transition-colors"
                  >
                    Walk-In Hours
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60 transition-colors"
                  >
                    Ask a Pharmacist
                  </Link>
                </div>
              </div>
              <div className="lg:order-last">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src="/images/tile_vaccination_closeup.png"
                    alt="Blue medical gloves administering a vaccine to a patient's upper arm"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </ServicesLayout>
      </section>

      {/* Vaccine Catalog - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <VaccineCardGrid />
        </div>
      </section>

      {/* Eligibility Matrix - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <EligibilityMatrix />
        </div>
      </section>

      {/* How to Get Your Shot - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-6">
            How to Get Your Shot
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {/* Walk-In Card */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-navy/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-navy">Walk-In Hours</h3>
              </div>
              <div className="mb-4">
                <p className="text-brand-navy font-medium mb-2">Monday – Friday</p>
                <p className="text-2xl font-semibold text-brand-navy">10:00am – 6:00pm</p>
                <p className="text-sm text-slate-500 mt-1">First-come, first-served</p>
              </div>
              <div className="text-slate-600 text-sm">
                <p className="mb-2"><strong>Average wait:</strong> 15-30 minutes</p>
                <p><strong>Peak times:</strong> Lunch (12-2pm) and after work (4-6pm)</p>
              </div>
            </div>
          </div>

          {/* What to Bring */}
          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-brand-navy mb-4">What to Bring</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-navy flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Government-issued photo ID</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-navy flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Insurance card (if applicable)</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-navy flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Current vaccination card (if available)</span>
                </li>
              </ul>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-navy flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>List of current medications</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-navy flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Known allergies information</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-navy flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Guardian present (for minors)</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 p-3 bg-brand-navy/5 rounded-lg border border-slate-200">
              <p className="text-sm text-slate-600">
                <strong>Screening:</strong> We'll review your health history, check for contraindications, 
                and verify timing with other vaccines or medications before administering any vaccine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Visit Forms - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Pre-Visit Forms
          </h2>
          <div className="rounded-xl border border-white/20 bg-white/10 shadow-sm p-6">
            <p className="text-white/90 mb-6">
              Save time during your visit by downloading and completing these forms in advance. 
              All forms are also available at our pharmacy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <a
                href="#"
                className="flex items-center gap-3 p-4 border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
              >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <h3 className="font-medium text-white">Vaccine Screening Form</h3>
                  <p className="text-sm text-white/80">Health history & eligibility</p>
                </div>
              </a>
              
              <a
                href="#"
                className="flex items-center gap-3 p-4 border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
              >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <h3 className="font-medium text-white">Vaccine Consent Form</h3>
                  <p className="text-sm text-white/80">Authorization & risks</p>
                </div>
              </a>
              
              <a
                href="#"
                className="flex items-center gap-3 p-4 border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
              >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <h3 className="font-medium text-white">Record Release Form</h3>
                  <p className="text-sm text-white/80">Information sharing</p>
                </div>
              </a>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm text-blue-800">
                    <strong>Digital forms available:</strong> Complete consent forms digitally when you visit. 
                    Do not include personal health information (PHI) via email—use our secure forms on-site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Cost - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-6">
            Insurance & Cost
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Insurance Coverage</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-brand-navy flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Most major insurance plans accepted</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-brand-navy flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Coverage varies by age, vaccine type, and plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-brand-navy flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Medicare covers flu, COVID-19, pneumococcal, and shingles vaccines</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-brand-navy flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>We verify benefits before administration</span>
                </li>
              </ul>
            </div>
            
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Cash Pricing</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-600">Flu Shot</span>
                  <span className="font-medium text-brand-navy">$35</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-600">COVID-19</span>
                  <span className="font-medium text-brand-navy">$45</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-600">Tdap</span>
                  <span className="font-medium text-brand-navy">$65</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-600">Shingles (Shingrix)</span>
                  <span className="font-medium text-brand-navy">$195</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-600">Travel vaccines</span>
                  <span className="font-medium text-brand-navy">Varies</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4">
                *Prices subject to change. Additional consultation fees may apply for travel vaccines.
              </p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <p className="text-sm text-slate-600">
              <strong className="text-brand-navy">Required ID:</strong> Photo ID required for all patients. Minors must be accompanied 
              by a parent or guardian with valid ID and consent.
            </p>
              </div>
            </div>
          </section>

      {/* After Your Shot - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            After Your Shot
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/20 bg-white/10 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Normal Care Tips</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-white flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Wait 15 minutes before leaving (we'll monitor you)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-white flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Stay hydrated and move your arm normally</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-white flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Mild soreness at injection site is normal</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-white flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Apply cool compress if needed</span>
                </li>
              </ul>
            </div>
            
            <div className="rounded-xl border border-red-200 bg-red-50 p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-4">When to Seek Care</h3>
              <p className="text-red-700 mb-4">
                Serious reactions are rare. Seek immediate medical attention if you experience:
              </p>
              <ul className="space-y-2 text-red-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Difficulty breathing or swallowing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Swelling of face, throat, or tongue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Rapid pulse or dizziness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Body-wide rash or hives</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-red-200">
                <p className="text-sm text-red-700">
                  <strong>Emergency:</strong> Call 911 or go to the nearest emergency room
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="https://vaers.hhs.gov/reportevent.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Report Adverse Event (VAERS)
            </a>
            <div className="flex items-center gap-2 text-sm text-white/90">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>We follow CDC/ACIP guidelines for vaccine handling & cold chain storage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Vaccines - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-6">
            Travel Vaccines
          </h2>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-brand-navy mb-3">
                  Destination-Based Consultation
                </h3>
                <p className="text-slate-600 mb-4">
                  Planning international travel? Our pharmacist provides personalized consultations 
                  based on your destination, travel dates, and health history. We offer vaccines 
                  for Yellow Fever (by availability), Japanese Encephalitis, Typhoid, and more.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-brand-navy flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Destination risk assessment</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-brand-navy flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Malaria prophylaxis counseling</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-brand-navy flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Yellow fever certification</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-brand-navy flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Travel health kit recommendations</span>
                  </div>
                </div>
                <a
                  href="/services/travel-vaccinations"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy text-white rounded-lg font-medium hover:bg-brand-navy/90 focus:outline-none focus:ring-2 focus:ring-brand-navy/60 transition-colors"
                >
                  Start a Travel Consult
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <FaqAccordion />
        </div>
      </section>

      {/* Final CTA Band - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <div className="rounded-xl bg-white text-brand-navy p-8 text-center border border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready for your vaccine?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto">
              Local, quick, and compassionate care. Our experienced pharmacists are here to 
              keep you and your family protected with safe, effective immunizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:313-914-3736"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-navy text-white rounded-lg font-semibold hover:bg-brand-navy/90 focus:outline-none focus:ring-2 focus:ring-brand-navy/60 transition-colors"
              >
                Call (313) 914-3736
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-navy text-brand-navy rounded-lg font-semibold hover:bg-brand-navy/5 focus:outline-none focus:ring-2 focus:ring-brand-navy/60 transition-colors"
              >
                Ask a Pharmacist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h3 className="text-lg font-semibold text-brand-navy mb-4 text-center">Related Services</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/services/free-delivery"
              className="inline-flex items-center px-4 py-2 bg-white border border-slate-200 text-brand-navy rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
              >
                Free Delivery
              </Link>
              <Link
                href="/services/travel-vaccinations"
              className="inline-flex items-center px-4 py-2 bg-white border border-slate-200 text-brand-navy rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
              >
                Travel Vaccinations
              </Link>
              <Link
                href="/services/medication-therapy-management"
              className="inline-flex items-center px-4 py-2 bg-white border border-slate-200 text-brand-navy rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
              >
                Medication Therapy Management
              </Link>
            </div>
        </div>
      </section>
    </div>
  );
}
