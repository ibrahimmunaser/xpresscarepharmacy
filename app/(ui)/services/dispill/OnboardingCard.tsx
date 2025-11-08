'use client';

import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface OnboardingCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OnboardingCard({ isOpen, onClose }: OnboardingCardProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    phone: '',
    email: '',
    address: '',
    deliveryPreference: 'pickup',
    allergies: '',
    insuranceInfo: '',
    prescriberContact: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Placeholder - no backend integration yet
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        fullName: '',
        dateOfBirth: '',
        phone: '',
        email: '',
        address: '',
        deliveryPreference: 'pickup',
        allergies: '',
        insuranceInfo: '',
        prescriberContact: ''
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
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-brand-navy">Dispill Enrollment</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close enrollment form"
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
              <h3 className="text-xl font-semibold text-brand-navy mb-2">Thank You!</h3>
              <p className="text-slate-600">
                We'll reach out to confirm your enrollment. Please do not send PHI by email.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-brand-navy mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10254D]/50 focus:border-[#10254D]"
                />
              </div>

              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-brand-navy mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  required
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10254D]/50 focus:border-[#10254D]"
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
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10254D]/50 focus:border-[#10254D]"
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
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10254D]/50 focus:border-[#10254D]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-brand-navy mb-2">
                Address for Delivery
              </label>
              <textarea
                id="address"
                name="address"
                rows={3}
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10254D]/50 focus:border-[#10254D]"
                placeholder="Street address, city, state, zip code"
              />
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
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10254D]/50 focus:border-[#10254D]"
              >
                <option value="pickup">Pickup at Pharmacy</option>
                <option value="delivery">Free Delivery</option>
              </select>
            </div>

            <div>
              <label htmlFor="allergies" className="block text-sm font-medium text-brand-navy mb-2">
                Known Allergies
              </label>
              <textarea
                id="allergies"
                name="allergies"
                rows={2}
                value={formData.allergies}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10254D]/50 focus:border-[#10254D]"
                placeholder="List any medication or other allergies"
              />
            </div>

            <div>
              <label htmlFor="prescriberContact" className="block text-sm font-medium text-brand-navy mb-2">
                Primary Prescriber Contact
              </label>
              <input
                type="text"
                id="prescriberContact"
                name="prescriberContact"
                value={formData.prescriberContact}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10254D]/50 focus:border-[#10254D]"
                placeholder="Doctor's name and phone number"
              />
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-brand-navy mb-2">What to Bring:</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Current medication list (or photo/PDF)</li>
                <li>• Insurance cards (front and back)</li>
                <li>• Photo ID</li>
                <li>• List of prescribers and their contact information</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 bg-[#10254D] text-white py-3 px-6 rounded-md hover:bg-[#10254D]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#10254D]/50 focus:ring-offset-2"
              >
                Submit Enrollment
              </button>
              <a
                href="tel:313-914-3736"
                className="flex-1 text-center border border-[#10254D] text-brand-navy py-3 px-6 rounded-md hover:bg-[#10254D]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#10254D]/50 focus:ring-offset-2"
              >
                Call 313-914-3736
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}















