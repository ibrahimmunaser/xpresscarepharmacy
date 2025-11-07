'use client';

import { useState, useEffect } from 'react';
import { PhoneIcon } from '@heroicons/react/24/outline';

interface StickyActionBarProps {
  onEnrollMedSyncClick: () => void;
}

export default function StickyActionBar({ onEnrollMedSyncClick }: StickyActionBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after 25% scroll on desktop, always visible on mobile
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const isMobile = window.innerWidth < 768;
      setIsVisible(isMobile || scrollPercent > 25);
    };

    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleEnrollMedSync = () => {
    onEnrollMedSyncClick();
    // Analytics event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'adherence_cta_medsync_click', {
        event_category: 'conversion',
        event_label: 'sticky_cta'
      });
    }
  };

  const handleTransferClick = () => {
    // Analytics event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'adherence_cta_transfer_click', {
        event_category: 'conversion',
        event_label: 'sticky_cta'
      });
    }
  };

  const handleRefillClick = () => {
    // Analytics event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'adherence_cta_refill_click', {
        event_category: 'conversion',
        event_label: 'sticky_cta'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] shadow-lg z-40">
      <div className="container mx-auto max-w-7xl px-4 py-4">
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={handleEnrollMedSync}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#10254D] text-white hover:bg-[#10254D]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#10254D]/50 focus:ring-offset-2"
          >
            Enroll in Med Sync
          </button>
          
          <a
            href="/transfer"
            onClick={handleTransferClick}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md border border-[#10254D] text-brand-navy bg-transparent hover:bg-[#10254D]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#10254D]/50 focus:ring-offset-2"
          >
            Transfer Prescriptions
          </a>
          
          <a
            href="tel:313-914-3736"
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 rounded-md text-slate-600 hover:text-brand-navy transition-colors focus:outline-none focus:ring-2 focus:ring-[#10254D]/50 focus:ring-offset-2"
          >
            <PhoneIcon className="h-4 w-4 mr-2" aria-hidden="true" />
            Call (313) 914-3736
          </a>
        </div>
      </div>
    </div>
  );
}














