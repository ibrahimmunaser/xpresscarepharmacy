'use client';

import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface DeliverySchedulerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeliverySchedulerModal({ isOpen, onClose }: DeliverySchedulerModalProps) {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Placeholder - no backend integration yet
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setSelectedDay('');
      setSelectedTime('');
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full">
        <div className="border-b border-slate-200 p-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-brand-navy">Schedule Delivery</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close delivery scheduler"
          >
            <XMarkIcon className="h-6 w-6 text-slate-600" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-6 text-center" aria-live="polite">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-brand-navy mb-2">Delivery Scheduled</h3>
            <p className="text-slate-600 text-sm">
              We'll contact you to confirm your delivery window.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label htmlFor="day" className="block text-sm font-medium text-brand-navy mb-2">
                Preferred Day
              </label>
              <select
                id="day"
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring--brand-navy/50 focus:border--brand-navy"
              >
                <option value="">Select a day</option>
                <option value="today">Today</option>
                <option value="tomorrow">Tomorrow</option>
                <option value="this-week">Later this week</option>
                <option value="next-week">Next week</option>
              </select>
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-brand-navy mb-2">
                Time Window
              </label>
              <select
                id="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring--brand-navy/50 focus:border--brand-navy"
              >
                <option value="">Select a time</option>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                <option value="evening">Evening (5 PM - 7 PM)</option>
              </select>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 bg--brand-navy text-white py-2 px-4 rounded-md hover:bg--brand-navy/90 transition-colors focus:outline-none focus:ring-2 focus:ring--brand-navy/50 focus:ring-offset-2"
              >
                Schedule
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 border border-slate-300 text-slate-600 py-2 px-4 rounded-md hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
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














