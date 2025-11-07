import Script from 'next/script';
import ServicesLayout from '../_components/ServicesLayout';
import HeroHeader from '@/app/(ui)/services/ed/HeroHeader';
import ScopePanel from '@/app/(ui)/services/ed/ScopePanel';
import EdOptionsAccordion from '@/app/(ui)/services/ed/EdOptionsAccordion';
import CareProcessSteps from '@/app/(ui)/services/ed/CareProcessSteps';
import DeliveryPanel from '@/app/(ui)/services/ed/DeliveryPanel';
import CoverageGrid from '@/app/(ui)/services/ed/CoverageGrid';
import TransferRefillCtas from '@/app/(ui)/services/ed/TransferRefillCtas';
import FaqAccordion from '@/app/(ui)/services/ed/FaqAccordion';
import FinalCtaBand from '@/app/(ui)/services/ed/FinalCtaBand';

export default function ErectileDysfunctionPage() {
  return (
    <div className="bg-brand-navy min-h-screen">
      {/* JSON-LD Schema Markup */}
      <Script
        id="ed-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Erectile Dysfunction Support",
            "provider": {
              "@type": "Pharmacy",
              "name": "Xpress Care Pharmacy",
              "telephone": "313-914-3736",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3040 E 7 Mile",
                "addressLocality": "Detroit",
                "addressRegion": "MI",
                "postalCode": "48234",
                "addressCountry": "US"
              }
            },
            "areaServed": { "@type": "City", "name": "Detroit" },
            "url": "https://xpresscarepharmacy.com/services/erectile-dysfunction",
            "description": "Private, respectful pharmacist support for physician-prescribed ED treatment, including side-effect guidance, interaction checks, and refill synchronization."
          })
        }}
      />
      
      {/* Hero Section - Dark Navy Background */}
      <section className="w-full">
        <ServicesLayout activeSlug="erectile-dysfunction">
          <HeroHeader />
        </ServicesLayout>
      </section>

      {/* Privacy Statement & Scope Panel - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl mb-8">
            <h3 className="text-lg font-semibold text-brand-navy mb-3">
              At Xpress Care Pharmacy, ED conversations are handled with privacy and respect.
            </h3>
            <p className="text-slate-600 leading-relaxed">
              If your clinician has prescribed treatment, we help you use it correctly, understand interactions, and stay confident with ongoing support—no judgment.
            </p>
          </div>
          
          <ScopePanel />
        </div>
      </section>

      {/* ED Options Accordion - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <EdOptionsAccordion />
        </div>
      </section>

      {/* Care Process Steps - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <CareProcessSteps />
        </div>
      </section>

      {/* Delivery Panel & Coverage Grid - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <DeliveryPanel />
          <div className="mt-12">
            <CoverageGrid />
          </div>
        </div>
      </section>

      {/* Transfer & Refill CTAs - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <TransferRefillCtas />
        </div>
      </section>

      {/* Why Choose Us - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Why Choose Us for ED Care?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/20 bg-white/10 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Private & Compassionate Environment
              </h3>
              <p className="text-white/90 leading-relaxed">
                A space where personal questions are respected and handled with complete discretion.
              </p>
            </div>

            <div className="rounded-xl border border-white/20 bg-white/10 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Personalized Pathways
              </h3>
              <p className="text-white/90 leading-relaxed">
                Treatment support aligned with your prescriber's plan and your personal health needs.
              </p>
            </div>

            <div className="rounded-xl border border-white/20 bg-white/10 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Direct Access to Pharmacists
              </h3>
              <p className="text-white/90 leading-relaxed">
                Our care team is available to answer practical questions and provide ongoing support.
              </p>
            </div>

            <div className="rounded-xl border border-white/20 bg-white/10 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Discreet Packaging & Delivery
              </h3>
              <p className="text-white/90 leading-relaxed">
                Respectful handling with optional delivery designed to protect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Safety Reminder - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <FaqAccordion />
          
          <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 text-sm">
              <strong>Safety Reminder:</strong> If you experience chest pain, severe dizziness, sudden vision or hearing changes, or an erection lasting more than 4 hours, seek emergency care right away.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Band - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <FinalCtaBand />
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: 'Erectile Dysfunction Support | Xpress Care Pharmacy – Detroit, MI',
  description: 'Private, respectful pharmacist support for physician-prescribed ED treatment. Side-effect guidance, drug-interaction checks, refill sync, and discreet delivery.',
  alternates: { canonical: '/services/erectile-dysfunction' }
};
