"use client";

import { useState } from "react";
import { 
  DocumentTextIcon, 
  TruckIcon, 
  ClockIcon, 
  UserGroupIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  PhoneIcon,
  CurrencyDollarIcon
} from "@heroicons/react/24/outline";

const tabData = {
  attorneys: {
    title: "For Attorneys",
    items: [
      {
        icon: DocumentTextIcon,
        text: "Detailed, legible records: fillable invoices, NDCs, lot/exp, dosage, dates, and delivery proofs."
      },
      {
        icon: CurrencyDollarIcon,
        text: "Lien / LOP friendly: we coordinate with your office; no upfront cost to the patient."
      },
      {
        icon: TruckIcon,
        text: "Fast delivery to home or clinic; urgent same-day available when stock permits."
      },
      {
        icon: DocumentCheckIcon,
        text: "Status updates on medication changes and adherence throughout the case."
      }
    ]
  },
  physicians: {
    title: "For Physicians",
    items: [
      {
        icon: ShieldCheckIcon,
        text: "Accurate medication reconciliation; avoid interactions and duplications."
      },
      {
        icon: UserGroupIcon,
        text: "On-protocol dispensing & counseling; clear patient instructions provided."
      },
      {
        icon: DocumentTextIcon,
        text: "Chain-of-custody documentation on delivery with signatures and timestamps."
      },
      {
        icon: PhoneIcon,
        text: "Prior-auth / benefits coordination with real-time status updates."
      }
    ]
  },
  adjusters: {
    title: "For Claim Adjusters",
    items: [
      {
        icon: CurrencyDollarIcon,
        text: "Cost-effective solutions with generic optimization when clinically appropriate."
      },
      {
        icon: DocumentTextIcon,
        text: "Compliant, exportable documentation available in CSV/PDF formats."
      },
      {
        icon: ClockIcon,
        text: "Rapid responses to records requests with secure delivery options."
      },
      {
        icon: ShieldCheckIcon,
        text: "Secure channel for PHI—fax or encrypted portal for sensitive information."
      }
    ]
  }
};

export default function AudienceTabs() {
  const [activeTab, setActiveTab] = useState<keyof typeof tabData>("attorneys");

  const handleTabChange = (tab: keyof typeof tabData) => {
    setActiveTab(tab);
    // Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'aa_audience_tab_change', {
        event_category: 'engagement',
        role: tab
      });
    }
  };

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div 
        className="flex border-b border-slate-200"
        role="tablist"
        aria-label="Audience information tabs"
      >
        {Object.entries(tabData).map(([key, data]) => (
          <button
            key={key}
            role="tab"
            aria-selected={activeTab === key}
            aria-controls={`panel-${key}`}
            className={`px-4 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#10254D]/30 ${
              activeTab === key
                ? "border-b-2 border-[#10254D] text-brand-navy"
                : "text-slate-600 hover:text-brand-navy"
            }`}
            onClick={() => handleTabChange(key as keyof typeof tabData)}
          >
            {data.title}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      {Object.entries(tabData).map(([key, data]) => (
        <div
          key={key}
          id={`panel-${key}`}
          role="tabpanel"
          aria-labelledby={`tab-${key}`}
          className={`mt-6 ${activeTab === key ? "block" : "hidden"}`}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {data.items.map((item, index) => (
              <div key={index} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex-shrink-0">
                  <item.icon className="h-5 w-5 text-brand-navy" aria-hidden="true" />
                </div>
                <p className="text-sm text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}














