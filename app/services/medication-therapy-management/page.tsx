import Script from 'next/script';
import ServicesLayout from '../_components/ServicesLayout';
import HeroHeader from '@/app/(ui)/services/mtm/HeroHeader';
import WhatWeDo from '@/app/(ui)/services/mtm/WhatWeDo';
import WhenHelpful from '@/app/(ui)/services/mtm/WhenHelpful';
import ProcessSteps from '@/app/(ui)/services/mtm/ProcessSteps';
import AdherenceTools from '@/app/(ui)/services/mtm/AdherenceTools';
import SafetyCollaboration from '@/app/(ui)/services/mtm/SafetyCollaboration';
import SingleLocation from '@/app/(ui)/services/mtm/SingleLocation';
import FaqAccordion from '@/app/(ui)/services/mtm/FaqAccordion';

export default function MedicationTherapyManagementPage() {
  return (
    <div className="bg-brand-navy min-h-screen">
      {/* JSON-LD Schema Markup */}
      <Script
        id="mtm-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Xpress Care Pharmacy",
            "image": "https://xpresscarepharmacy.com/images/services/mtm-hero.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3040 E 7 Mile",
              "addressLocality": "Detroit",
              "addressRegion": "MI",
              "postalCode": "48234",
              "addressCountry": "US"
            },
            "url": "https://xpresscarepharmacy.com/services/medication-therapy-management",
            "telephone": "+1-313-914-3736",
            "medicalSpecialty": "Pharmacy",
            "areaServed": "Detroit, MI",
            "description": "Medication Therapy Management (MTM) service for safety and effectiveness of medications."
          })
        }}
      />
      
      {/* Hero Section - Dark Navy Background */}
      <section className="w-full">
        <ServicesLayout activeSlug="medication-therapy-management">
          <HeroHeader />
        </ServicesLayout>
      </section>

      {/* What We Do & When Helpful - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <WhatWeDo />
          <div className="mt-12">
            <WhenHelpful />
          </div>
        </div>
      </section>

      {/* Process Steps - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <ProcessSteps />
        </div>
      </section>

      {/* Adherence Tools - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <AdherenceTools />
        </div>
      </section>

      {/* Safety Collaboration - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <SafetyCollaboration />
        </div>
      </section>

      {/* Single Location - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <SingleLocation />
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
  title: 'Medication Therapy Management (MTM) | Xpress Care Pharmacy – Detroit, MI',
  description: 'Personalized Medication Therapy Management (MTM) at Xpress Care Pharmacy in Detroit. We review your prescriptions, OTCs, and supplements to optimize safety, effectiveness, and simplicity. Med Sync, packaging, reminders, and ongoing support.',
  alternates: { canonical: '/services/medication-therapy-management' },
  openGraph: {
    title: 'Medication Therapy Management (MTM) | Xpress Care Pharmacy',
    description: 'Comprehensive MTM reviews to simplify your regimen, improve safety, and reduce side-effects. Detroit, MI.',
    url: 'https://xpresscarepharmacy.com/services/medication-therapy-management',
    type: 'article',
  },
};
