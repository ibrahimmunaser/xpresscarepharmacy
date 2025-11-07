'use client';

import { useState } from 'react';
// ServiceSidebar now handled by ServicesLayout
import HeroHeader from './HeroHeader';
import WhatIsDispill from './WhatIsDispill';
import FeatureGrid from './FeatureGrid';
import StepList from './StepList';
import BenefitGrid from './BenefitGrid';
import OnboardingCard from './OnboardingCard';
import CoveragePanel from './CoveragePanel';
import TipsPanel from './TipsPanel';
import AddOnsPanel from './AddOnsPanel';
import FacilityPanel from './FacilityPanel';
import Testimonials from './Testimonials';
import FaqAccordion from './FaqAccordion';
import FinalCtaBand from './FinalCtaBand';

export default function DispillPageClient() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  const handleEnrollClick = () => {
    setIsEnrollmentOpen(true);
    // Analytics event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'dispill_enroll_click', {
        event_category: 'engagement',
        event_label: 'Dispill Enrollment'
      });
    }
  };

  const handleCloseEnrollment = () => {
    setIsEnrollmentOpen(false);
  };

  return (
    <div className="py-8 md:py-12">
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#10254D] text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <main id="main-content">
        <HeroHeader onEnrollClick={handleEnrollClick} />
        
        <WhatIsDispill />
        
        <FeatureGrid />
        
        <StepList />
        
        <BenefitGrid />
        
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mt-10 mb-6">
            Enrollment & Onboarding
          </h2>
          
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
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
              <button
                onClick={handleEnrollClick}
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#10254D] text-white hover:bg-[#10254D]/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10254D]/50 focus-visible:ring-offset-2"
              >
                Start Enrollment
              </button>
              <a
                href="tel:313-914-3736"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-[#10254D] text-brand-navy bg-transparent hover:bg-[#10254D]/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10254D]/50 focus-visible:ring-offset-2"
              >
                Call 313-914-3736
              </a>
            </div>
          </div>
        </div>
        
        <CoveragePanel />
        
        <TipsPanel />
        
        <AddOnsPanel />
        
        <FacilityPanel />
        
        <Testimonials />
        
        <FaqAccordion />
        
        <FinalCtaBand onEnrollClick={handleEnrollClick} />
      </main>

      {/* Enrollment Modal */}
      <OnboardingCard 
        isOpen={isEnrollmentOpen} 
        onClose={handleCloseEnrollment}
      />
    </div>
  );
}
