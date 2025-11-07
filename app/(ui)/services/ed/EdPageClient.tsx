'use client';

import { useState } from 'react';
// ServiceSidebar now handled by ServicesLayout
import HeroHeader from './HeroHeader';
import ScopePanel from './ScopePanel';
import EdOptionsAccordion from './EdOptionsAccordion';
import CareProcessSteps from './CareProcessSteps';
import DeliveryPanel from './DeliveryPanel';
import CoverageGrid from './CoverageGrid';
import TransferRefillCtas from './TransferRefillCtas';
import FaqAccordion from './FaqAccordion';
import FinalCtaBand from './FinalCtaBand';
import ConsultModal from './ConsultModal';
import DeliverySchedulerModal from './DeliverySchedulerModal';

export default function EdPageClient() {
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false);

  const handleConsultClick = () => {
    setIsConsultModalOpen(true);
    // Analytics event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ed_consult_click', {
        event_category: 'engagement',
        event_label: 'ED Consultation Request'
      });
    }
  };

  const handleDeliveryScheduleClick = () => {
    setIsDeliveryModalOpen(true);
  };

  const handleCloseConsultModal = () => {
    setIsConsultModalOpen(false);
  };

  const handleCloseDeliveryModal = () => {
    setIsDeliveryModalOpen(false);
  };

  return (
    <div className="py-8 md:py-12">
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg--brand-navy text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <main id="main-content">
        <div>
            <HeroHeader onConsultClick={handleConsultClick} />
            
            <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
              <h3 className="text-lg font-semibold text-brand-navy mb-3">
                At Xpress Care Pharmacy, ED conversations are handled with privacy and respect.
              </h3>
              <p className="text-slate-600 leading-relaxed">
                If your clinician has prescribed treatment, we help you use it correctly, understand interactions, and stay confident with ongoing support—no judgment.
              </p>
            </div>
            
            <ScopePanel />
            
            <EdOptionsAccordion onConsultClick={handleConsultClick} />
            
            <CareProcessSteps />
            
            <DeliveryPanel onScheduleClick={handleDeliveryScheduleClick} />
            
            <CoverageGrid />
            
            <TransferRefillCtas />
            
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mt-10 mb-6">
                Why Choose Us for ED Care?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-brand-navy mb-3">
                    Private & Compassionate Environment
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    A space where personal questions are respected and handled with complete discretion.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-brand-navy mb-3">
                    Personalized Pathways
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Treatment support aligned with your prescriber's plan and your personal health needs.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-brand-navy mb-3">
                    Direct Access to Pharmacists
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our care team is available to answer practical questions and provide ongoing support.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-brand-navy mb-3">
                    Discreet Packaging & Delivery
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Respectful handling with optional delivery designed to protect your privacy.
                  </p>
                </div>
              </div>
            </div>
            
            <FaqAccordion />
            
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 text-sm">
                <strong>Safety Reminder:</strong> If you experience chest pain, severe dizziness, sudden vision or hearing changes, or an erection lasting more than 4 hours, seek emergency care right away.
              </p>
            </div>
            
            <FinalCtaBand onConsultClick={handleConsultClick} />
        </div>
      </main>

      {/* Modals */}
      <ConsultModal 
        isOpen={isConsultModalOpen} 
        onClose={handleCloseConsultModal}
      />
      
      <DeliverySchedulerModal 
        isOpen={isDeliveryModalOpen} 
        onClose={handleCloseDeliveryModal}
      />
    </div>
  );
}
