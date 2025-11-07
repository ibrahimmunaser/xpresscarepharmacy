"use client";

import { useState } from "react";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";

interface ContactChipProps {
  phone: string;
  fax: string;
}

export default function ContactChip({ phone, fax }: ContactChipProps) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-slate-700">Phone:</span>
        <button
          onClick={() => copyToClipboard(phone, 'phone')}
          className="flex items-center gap-1 text-sm text-brand-navy hover:text-brand-navy/80 focus:outline-none focus:ring-2 focus:ring-[#10254D]/30"
          title="Copy phone number"
        >
          <span className="select-all">{phone}</span>
          {copiedItem === 'phone' ? (
            <CheckIcon className="h-3 w-3 text-emerald-600" />
          ) : (
            <ClipboardIcon className="h-3 w-3" />
          )}
        </button>
      </div>
      
      <div className="h-4 w-px bg-slate-300" />
      
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-slate-700">Fax:</span>
        <button
          onClick={() => copyToClipboard(fax, 'fax')}
          className="flex items-center gap-1 text-sm text-brand-navy hover:text-brand-navy/80 focus:outline-none focus:ring-2 focus:ring-[#10254D]/30"
          title="Copy fax number"
        >
          <span className="select-all">{fax}</span>
          {copiedItem === 'fax' ? (
            <CheckIcon className="h-3 w-3 text-emerald-600" />
          ) : (
            <ClipboardIcon className="h-3 w-3" />
          )}
        </button>
      </div>
    </div>
  );
}














