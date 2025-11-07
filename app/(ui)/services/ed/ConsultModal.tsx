'use client';

import { useState } from 'react';
import { XMarkIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

interface ConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultModal({ isOpen, onClose }: ConsultModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Analytics event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ed_consult_submit', {
        event_category: 'engagement',
        event_label: 'ED Consultation Request'
      });
    }
    
    // Placeholder - no backend integration yet
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        name: '',
        phone: '',
        email: '',
        preferredTime: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-brand-navy">Request Private Consultation</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close consultation form"
          >
            <XMarkIcon className="h-6 w-6 text-slate-600" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-6 text-center" aria-live="polite">
            <div className="mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">Request Received</h3>
              <p className="text-slate-600">
                We'll contact you within 24 hours to schedule your private consultation. Your information is kept completely confidential.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start space-x-3">
              <ExclamationTriangleIcon className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-amber-800 font-medium mb-1">Privacy Notice</p>
                <p className="text-amber-700 text-sm">
                  Please don't include medical record numbers or sensitive health information in this form. We'll discuss details during your private consultation.
                </p>
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring--brand-navy/50 focus:border--brand-navy"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-brand-navy mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring--brand-navy/50 focus:border--brand-navy"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring--brand-navy/50 focus:border--brand-navy"
              />
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-brand-navy mb-2">
                Preferred Contact Time
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring--brand-navy/50 focus:border--brand-navy"
              >
                <option value="">Select a time preference</option>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                <option value="evening">Evening (5 PM - 7 PM)</option>
                <option value="anytime">Anytime during business hours</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-2">
                Brief Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring--brand-navy/50 focus:border--brand-navy"
                placeholder="Any specific questions or concerns you'd like to discuss?"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 bg--brand-navy text-white py-3 px-6 rounded-md hover:bg--brand-navy/90 transition-colors focus:outline-none focus:ring-2 focus:ring--brand-navy/50 focus:ring-offset-2"
              >
                Request Consultation
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 text-center border border-slate-300 text-slate-600 py-3 px-6 rounded-md hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}














