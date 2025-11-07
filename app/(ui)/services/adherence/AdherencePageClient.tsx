'use client';

import { useState } from 'react';
// ServiceSidebar now handled by ServicesLayout
import HeroHeader from './HeroHeader';
import WhyAdherenceMatters from './WhyAdherenceMatters';
import ToolsAndServices from './ToolsAndServices';
import PersonalizedReminders from './PersonalizedReminders';
import HealthJourney from './HealthJourney';
import PrivacyAlert from './PrivacyAlert';
import SingleLocation from './SingleLocation';
import FaqAccordion from './FaqAccordion';
import StickyActionBar from './StickyActionBar';
import MedSyncModal from './MedSyncModal';

export default function AdherencePageClient() {
  const [isMedSyncModalOpen, setIsMedSyncModalOpen] = useState(false);

  const handleEnrollMedSyncClick = () => {
    setIsMedSyncModalOpen(true);
  };

  const handleCloseMedSyncModal = () => {
    setIsMedSyncModalOpen(false);
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
        <HeroHeader onEnrollMedSyncClick={handleEnrollMedSyncClick} />
        
        <WhyAdherenceMatters />
        
        <ToolsAndServices />
        
        <PersonalizedReminders />
        
        <HealthJourney />
        
        <PrivacyAlert />
        
        <SingleLocation />
        
        <FaqAccordion onFaqToggle={handleFaqToggle} />
      </main>

      {/* Sticky Action Bar */}
      <StickyActionBar onEnrollMedSyncClick={handleEnrollMedSyncClick} />

      {/* Med Sync Enrollment Modal */}
      <MedSyncModal 
        isOpen={isMedSyncModalOpen} 
        onClose={handleCloseMedSyncModal}
      />
    </div>
  );
}
