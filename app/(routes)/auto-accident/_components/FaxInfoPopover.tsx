"use client";

import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function FaxInfoPopover() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'aa_fax_info_open', {
        event_category: 'engagement'
      });
    }
  };

  const handleDownload = () => {
    // Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'aa_doc_download_referral_pdf', {
        event_category: 'document',
        document_type: 'referral_form'
      });
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="rounded-md border border-slate-300 bg-white px-4 py-2 text-brand-navy shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#10254D]/30"
      >
        Fax Referral: 313-914-5105
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 grid place-items-center bg-black/30 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="fax-info-title"
        >
          <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 id="fax-info-title" className="text-lg font-semibold text-brand-navy">
                Fax Referral Information
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#10254D]/30"
                aria-label="Close fax information"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <div>
                <h4 className="font-medium text-brand-navy">Fax Number</h4>
                <p className="mt-1 text-2xl font-bold text-brand-navy select-all">
                  313-914-5105
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Available 24/7 for referral submissions
                </p>
              </div>

              <div>
                <h4 className="font-medium text-brand-navy">Quick Steps</h4>
                <ol className="mt-2 list-decimal list-inside space-y-1 text-sm text-slate-700">
                  <li>Download our 1-page referral form</li>
                  <li>Complete all required fields</li>
                  <li>Fax to 313-914-5105</li>
                  <li>We'll confirm receipt within 2 hours</li>
                </ol>
              </div>

              <div className="border-t border-slate-200 pt-4">
              </div>

              <div className="text-xs text-slate-600">
                <p>
                  <strong>Security Note:</strong> Do not include credit card numbers. 
                  Use fax or our encrypted portal for PHI transmission.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}









