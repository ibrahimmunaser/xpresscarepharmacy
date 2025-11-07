'use client';

import { useState } from 'react';
import { XMarkIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

interface MedSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MedSyncModal({ isOpen, onClose }: MedSyncModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    currentMedications: '',
    preferredDay: '',
    deliveryPreference: 'pickup'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Analytics event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'adherence_medsync_submit', {
        event_category: 'conversion',
        event_label: 'Med Sync Enrollment'
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
        currentMedications: '',
        preferredDay: '',
        deliveryPreference: 'pickup'
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
        <div className="sticky top-0 bg-white border-b border-[#E5E7EB] p-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-brand-navy">Enroll in Med Sync</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#F8FAFC] rounded-full transition-colors"
            aria-label="Close Med Sync enrollment form"
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
              <h3 className="text-xl font-semibold text-brand-navy mb-2">Enrollment Received</h3>
              <p className="text-slate-600">
                We'll contact you within 24 hours to set up your Med Sync schedule. Thank you for choosing Xpress Care Pharmacy.
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
                  Please don't include specific medication names or health information in this form. We'll discuss details during your consultation.
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
                className="w-full px-3 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#10254D]/50 focus:border-[#10254D]"
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
                className="w-full px-3 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#10254D]/50 focus:border-[#10254D]"
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
                className="w-full px-3 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#10254D]/50 focus:border-[#10254D]"
              />
            </div>

            <div>
              <label htmlFor="currentMedications" className="block text-sm font-medium text-brand-navy mb-2">
                Number of Current Medications (Optional)
              </label>
              <input
                type="text"
                id="currentMedications"
                name="currentMedications"
                value={formData.currentMedications}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#10254D]/50 focus:border-[#10254D]"
                placeholder="e.g., 3-5 medications"
              />
            </div>

            <div>
              <label htmlFor="preferredDay" className="block text-sm font-medium text-brand-navy mb-2">
                Preferred Monthly Refill Day
              </label>
              <select
                id="preferredDay"
                name="preferredDay"
                value={formData.preferredDay}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#10254D]/50 focus:border-[#10254D]"
              >
                <option value="">Select a preference</option>
                <option value="first-week">First week of the month</option>
                <option value="second-week">Second week of the month</option>
                <option value="third-week">Third week of the month</option>
                <option value="fourth-week">Fourth week of the month</option>
                <option value="flexible">Flexible - you choose</option>
              </select>
            </div>

            <div>
              <label htmlFor="deliveryPreference" className="block text-sm font-medium text-brand-navy mb-2">
                Preferred Service *
              </label>
              <select
                id="deliveryPreference"
                name="deliveryPreference"
                required
                value={formData.deliveryPreference}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#10254D]/50 focus:border-[#10254D]"
              >
                <option value="pickup">Pickup at Pharmacy</option>
                <option value="delivery">Free Delivery</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 bg-[#10254D] text-white py-3 px-6 rounded-md hover:bg-[#10254D]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#10254D]/50 focus:ring-offset-2"
              >
                Enroll in Med Sync
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 text-center border border-[#E5E7EB] text-slate-600 py-3 px-6 rounded-md hover:bg-[#F8FAFC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E5E7EB] focus:ring-offset-2"
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














