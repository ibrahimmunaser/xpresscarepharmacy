import Script from 'next/script';
import { Metadata } from 'next';
import ServicesLayout from '../_components/ServicesLayout';
import HeroHeader from '../../(ui)/services/dispill/HeroHeader';
import WhatIsDispill from '../../(ui)/services/dispill/WhatIsDispill';
import FeatureGrid from '../../(ui)/services/dispill/FeatureGrid';
import StepList from '../../(ui)/services/dispill/StepList';
import BenefitGrid from '../../(ui)/services/dispill/BenefitGrid';
import OnboardingCard from '../../(ui)/services/dispill/OnboardingCard';
import CoveragePanel from '../../(ui)/services/dispill/CoveragePanel';
import TipsPanel from '../../(ui)/services/dispill/TipsPanel';
import AddOnsPanel from '../../(ui)/services/dispill/AddOnsPanel';
import FacilityPanel from '../../(ui)/services/dispill/FacilityPanel';
import Testimonials from '../../(ui)/services/dispill/Testimonials';
import FaqAccordion from '../../(ui)/services/dispill/FaqAccordion';
import FinalCtaBand from '../../(ui)/services/dispill/FinalCtaBand';

export default function DispillMultiDosePackagingPage() {
  return (
    <div className="bg-brand-navy min-h-screen">
      {/* JSON-LD Schema Markup */}
      <Script
        id="dispill-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Dispill® Multi-Dose Packaging",
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
            "url": "https://xpresscarepharmacy.com/services/dispill-multi-dose-packaging",
            "description": "Color-coded multi-dose blister packing organized by day and time to simplify complex regimens and improve adherence."
          })
        }}
      />
      
      {/* Hero Section - Dark Navy Background */}
      <section className="w-full">
        <ServicesLayout activeSlug="dispill-multi-dose-packaging">
          <HeroHeader />
        </ServicesLayout>
      </section>

      {/* What Is Dispill - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <WhatIsDispill />
        </div>
      </section>

      {/* Feature Grid - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <FeatureGrid />
        </div>
      </section>

      {/* Step List - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <StepList />
        </div>
      </section>

      {/* Benefit Grid - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <BenefitGrid />
        </div>
      </section>

      {/* Enrollment & Onboarding - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-6">
            Enrollment & Onboarding
          </h2>
          
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-brand-navy mb-4">
              What we'll need to get started:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <ul className="space-y-2 text-slate-600">
                <li>• Full name, date of birth, phone, email</li>
                <li>• Address for delivery (if selected)</li>
                <li>• Current medication list (can upload photo/PDF)</li>
                <li>• Known allergies</li>
              </ul>
              <ul className="space-y-2 text-slate-600">
                <li>• Preferred delivery vs pickup</li>
                <li>• Insurance information (front/back photo upload)</li>
                <li>• Primary prescriber contact information</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-brand-navy text-white hover:bg-brand-navy/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/50">
                Start Enrollment
              </button>
              <a
                href="tel:313-914-3736"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-brand-navy text-brand-navy bg-transparent hover:bg-brand-navy/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/50"
              >
                Call 313-914-3736
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Panel - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <CoveragePanel />
        </div>
      </section>

      {/* Tips Panel - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <TipsPanel />
        </div>
      </section>

      {/* Add-Ons Panel - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <AddOnsPanel />
        </div>
      </section>

      {/* Facility Panel - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <FacilityPanel />
        </div>
      </section>

      {/* Testimonials - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <Testimonials />
        </div>
      </section>

      {/* FAQ - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <FaqAccordion />
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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Dispill® Multi-Dose Packaging | Xpress Care Pharmacy – Detroit, MI',
    description: 'Color-coded blister packs organized by day and time. Improve adherence, reduce confusion, and simplify refills. Perfect for seniors, caregivers, and complex regimens.',
    alternates: { canonical: '/services/dispill-multi-dose-packaging' }
  };
}
