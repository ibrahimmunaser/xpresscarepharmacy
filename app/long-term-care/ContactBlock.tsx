'use client';
import { useState } from 'react';
import { content } from './content';

export default function ContactBlock() {
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');
  const { contact } = content;
  
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      
      const response = await fetch('/api/contact-facilities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) throw new Error('Failed to submit');
      
      setStatus('success');
      
      // Fire analytics event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'submit_contact_ltc', {
          event_category: 'engagement',
          event_label: 'success'
        });
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="max-w-3xl">
          <div className="rounded-lg bg-green-50 border border-green-200 p-6">
            <h3 className="text-lg font-semibold text-green-800">Message Sent Successfully!</h3>
            <p className="mt-2 text-green-700">
              Thank you for contacting us. A member of our long-term care team will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
      <h3 className="text-2xl md:text-3xl font-semibold text-brand-navy">
        Connect with Us
      </h3>
      <p className="mt-2 text-slate-600">
        Speak to a pharmacist or request a consultation—no PHI, please.
      </p>

      <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-brand-navy">
            Pharmacy
          </label>
          <input 
            value={`${contact.pharmacy.name} — ${contact.pharmacy.address}`}
            readOnly
            className="mt-1 w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-navy/30"
          />
          <p className="mt-1 text-xs text-slate-500">
            Single location (auto-selected)
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-navy">
            First Name *
          </label>
          <input 
            required 
            name="firstName" 
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-navy/30" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-brand-navy">
            Last Name *
          </label>
          <input 
            required 
            name="lastName" 
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-navy/30" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-navy">
            Facility/Role
          </label>
          <input 
            name="facility" 
            placeholder="e.g., Sunrise Senior Living - Director of Nursing"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-navy/30" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-navy">
            Phone *
          </label>
          <input 
            required 
            name="phone" 
            inputMode="tel" 
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-navy/30" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-brand-navy">
            Email *
          </label>
          <input 
            required 
            type="email" 
            name="email" 
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-navy/30" 
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-brand-navy">
            Message *
          </label>
          <textarea 
            required 
            name="message" 
            rows={4} 
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-navy/30"
            placeholder="Tell us about your facility's needs (no PHI)."
          />
          <p className="mt-1 text-xs text-slate-500">
            <strong>Privacy notice:</strong> Do not include personal health information (PHI). 
            Use our secure referral workflow for patient specifics.
          </p>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={status !== 'idle'}
            className="inline-flex items-center px-5 py-3 rounded-md bg-brand-navy text-white hover:bg-brand-navy/90 disabled:opacity-60 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-navy/40"
            data-analytics="submit_contact_ltc"
          >
            {status === 'sending' ? 'Sending…' : status === 'error' ? 'Try Again' : 'Submit'}
          </button>
          {status === 'error' && (
            <p className="mt-2 text-sm text-red-600">
              There was an error sending your message. Please try again.
            </p>
          )}
        </div>
      </form>

      <div className="mt-8 pt-6 border-t border-slate-200">
        <p className="text-sm text-brand-gray">
          <strong>Facility support line:</strong>{' '}
          <a href={`tel:${contact.pharmacy.phone}`} className="text-brand-navy hover:underline">
            {contact.pharmacy.phone}
          </a>
          {' • '}
          <span>Fax: {contact.pharmacy.fax}</span>
          {' • '}
          <a 
            href={`https://maps.google.com/?q=${encodeURIComponent(contact.pharmacy.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-navy hover:underline"
          >
            {contact.pharmacy.address}
          </a>
        </p>
      </div>
    </section>
  );
}
