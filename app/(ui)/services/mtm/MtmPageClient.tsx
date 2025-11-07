'use client';

import { useState } from 'react';
// ServiceSidebar now handled by ServicesLayout
import HeroHeader from './HeroHeader';
import WhatWeDo from './WhatWeDo';
import WhenHelpful from './WhenHelpful';
import ProcessSteps from './ProcessSteps';
import AdherenceTools from './AdherenceTools';
import SafetyCollaboration from './SafetyCollaboration';
import SingleLocation from './SingleLocation';
import FaqAccordion from './FaqAccordion';
import StickyActionBar from './StickyActionBar';
import ConsultModal from './ConsultModal';

export default function MtmPageClient() {
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);

  const handleBookConsultClick = () => {
    setIsConsultModalOpen(true);
  };

  const handleCloseConsultModal = () => {
    setIsConsultModalOpen(false);
  };

  const handleFaqToggle = (question: string) => {
    // Analytics handled in FaqAccordion component
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
        <article className="prose prose-neutral max-w-none">
          <HeroHeader onBookConsultClick={handleBookConsultClick} />
          
          <WhatWeDo />
          
          <WhenHelpful />
          
          <ProcessSteps />
          
          <AdherenceTools />
          
          <SafetyCollaboration />
          
          <SingleLocation />
          
          <FaqAccordion onFaqToggle={handleFaqToggle} />
        </article>
      </main>

      {/* Sticky Action Bar */}
      <StickyActionBar onBookConsultClick={handleBookConsultClick} />

      {/* Consultation Modal */}
      <ConsultModal 
        isOpen={isConsultModalOpen} 
        onClose={handleCloseConsultModal}
      />
    </div>
  );
}
