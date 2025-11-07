'use client';

import { Send } from 'lucide-react';
import { SINGLE_LOCATION } from '@/lib/location';

export default function ContactForm() {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Wire up to existing API route or email/fax pipeline
    alert('Thanks! Your message has been submitted. (TODO: hook up to backend)');
  };

  return (
    <form className="mt-4 space-y-4" onSubmit={handleFormSubmit}>
      {/* Pharmacy (preselected + disabled) */}
      <div>
        <label className="block text-sm font-medium text-brand-navy">Pharmacy</label>
        <select
          className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-brand-navy"
          defaultValue={SINGLE_LOCATION.name}
          disabled
        >
          <option>{SINGLE_LOCATION.name}</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-brand-navy">First Name *</label>
          <input
            required
            type="text"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#10254D] focus:outline-none focus:ring-1 focus:ring-[#10254D]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-navy">Last Name *</label>
          <input
            required
            type="text"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#10254D] focus:outline-none focus:ring-1 focus:ring-[#10254D]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-navy">Phone Number</label>
        <input 
          type="tel" 
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#10254D] focus:outline-none focus:ring-1 focus:ring-[#10254D]" 
        />
        <p className="mt-1 text-xs text-slate-500">Optional — but provide either phone or email.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-navy">Email Address</label>
        <input 
          type="email" 
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#10254D] focus:outline-none focus:ring-1 focus:ring-[#10254D]" 
        />
        <p className="mt-1 text-xs text-slate-500">Optional — but provide either phone or email.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-navy">Message *</label>
        <textarea
          required
          rows={4}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#10254D] focus:outline-none focus:ring-1 focus:ring-[#10254D]"
          placeholder="How can we help you today?"
        />
      </div>

      <div className="rounded-md bg-yellow-50 p-3 text-xs leading-5 text-yellow-800">
        <strong className="font-semibold">Privacy Notice:</strong> Please do not include any personal health
        information (PHI), such as Social Security numbers, date of birth, or specific medical details in this
        form. For confidential health matters, please call directly.
      </div>

      <button
        type="submit"
        className="inline-flex items-center rounded-md bg-[#10254D] px-4 py-2 text-sm font-medium text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#10254D] focus:ring-offset-2"
      >
        <Send className="mr-2 h-4 w-4" />
        Submit
      </button>
    </form>
  );
}









