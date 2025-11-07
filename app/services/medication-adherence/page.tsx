import Script from 'next/script';
import ServicesLayout from '../_components/ServicesLayout';
import HeroHeader from '@/app/(ui)/services/adherence/HeroHeader';
import WhyAdherenceMatters from '@/app/(ui)/services/adherence/WhyAdherenceMatters';
import ToolsAndServices from '@/app/(ui)/services/adherence/ToolsAndServices';
import PersonalizedReminders from '@/app/(ui)/services/adherence/PersonalizedReminders';
import HealthJourney from '@/app/(ui)/services/adherence/HealthJourney';
import PrivacyAlert from '@/app/(ui)/services/adherence/PrivacyAlert';
import SingleLocation from '@/app/(ui)/services/adherence/SingleLocation';
import FaqAccordion from '@/app/(ui)/services/adherence/FaqAccordion';

export default function MedicationAdherencePage() {
  return (
    <div className="bg-brand-navy min-h-screen">
      {/* JSON-LD Schema Markup */}
      <Script
        id="adherence-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Medication Adherence Program",
            "provider": {
              "@type": "Pharmacy",
              "name": "Xpress Care Pharmacy",
              "telephone": "+1-313-914-3736",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3040 E 7 Mile",
                "addressLocality": "Detroit",
                "addressRegion": "MI",
                "postalCode": "48234",
                "addressCountry": "US"
              }
            },
            "areaServed": "Detroit, MI",
            "description": "Support for staying on schedule with medications using Med Sync, reminders, multi-dose packaging, and delivery."
          })
        }}
      />
      
      {/* Hero Section - Dark Navy Background */}
      <section className="w-full">
        <ServicesLayout activeSlug="medication-adherence">
          <HeroHeader />
        </ServicesLayout>
      </section>

      {/* Why Adherence Matters & Tools and Services - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <WhyAdherenceMatters />
          <div className="mt-12">
            <ToolsAndServices />
          </div>
        </div>
      </section>

      {/* Personalized Reminders - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <PersonalizedReminders />
        </div>
      </section>

      {/* Health Journey - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <HealthJourney />
        </div>
      </section>

      {/* Privacy Alert - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <PrivacyAlert />
        </div>
      </section>

      {/* Single Location - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-6">
              Visit Our Location
            </h2>
            
            {/* Location Information */}
            <div className="mb-8">
              <div className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm max-w-2xl">
                <div className="flex items-start space-x-4">
                  <svg className="h-8 w-8 text-brand-navy flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
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
                          className="flex items-center space-x-2 text-brand-navy hover:text-brand-navy/80 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-navy/50 rounded"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
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
          </div>
        </div>
        
        {/* Full Width Map - No container constraints */}
        <div className="w-full">
          <div className="aspect-[16/6] w-full">
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
        <div className="max-w-content mx-auto px-6 py-8">
          <div className="text-center">
            <a
              href="https://maps.google.com/?q=3040+E+7+Mile,+Detroit,+MI+48234"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-white font-semibold rounded-lg hover:bg-brand-navy/90 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* FAQ - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <FaqAccordion />
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: 'Medication Adherence Program | Xpress Care Pharmacy – Detroit, MI',
  description: 'Improve medication adherence with Med Sync, reminders, Dispill® packaging, and delivery from Xpress Care Pharmacy in Detroit. Fewer missed doses, less stress.',
  alternates: { canonical: '/services/medication-adherence' },
  openGraph: {
    title: 'Medication Adherence Program | Xpress Care Pharmacy',
    description: 'Med Sync, reminders, Dispill® packaging, and delivery to help you stay on track.',
    url: 'https://xpresscarepharmacy.com/services/medication-adherence',
    type: 'article'
  }
};
