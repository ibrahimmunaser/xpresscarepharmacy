'use client';
import { useState, useEffect } from 'react';
import { BookingFormData, TimeSlot } from './types';

// Mock time slots for demonstration
const generateTimeSlots = (date: string): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const times = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', 
                 '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
                 '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'];
  
  times.forEach(time => {
    slots.push({
      time,
      available: Math.random() > 0.3 // 70% chance of being available
    });
  });
  
  return slots;
};

interface BookingWidgetProps {
  preselectedVaccine?: string;
}

export default function BookingWidget({ preselectedVaccine }: BookingWidgetProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    vaccine: preselectedVaccine || '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
    reminders: true
  });
  
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<BookingFormData>>({});

  // Update vaccine when preselected changes
  useEffect(() => {
    if (preselectedVaccine) {
      setFormData(prev => ({ ...prev, vaccine: preselectedVaccine }));
    }
  }, [preselectedVaccine]);

  // Generate time slots when date changes
  useEffect(() => {
    if (formData.date) {
      setTimeSlots(generateTimeSlots(formData.date));
      setFormData(prev => ({ ...prev, time: '' })); // Reset time selection
    }
  }, [formData.date]);

  const vaccines = [
    'General Consultation',
    'COVID-19',
    'Influenza (Flu)',
    'Hepatitis A',
    'Hepatitis B',
    'HPV',
    'MMR',
    'Varicella (Chickenpox)',
    'Pneumococcal',
    'Tdap/Td',
    'Shingles (Shingrix)',
    'Meningococcal',
    'Travel Vaccines'
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<BookingFormData> = {};
    
    if (!formData.vaccine) newErrors.vaccine = 'Please select a vaccine';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time';
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Booking submission:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Booking error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof BookingFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];
  
  // Get maximum date (30 days from now)
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateString = maxDate.toISOString().split('T')[0];

  if (isSubmitted) {
    return (
      <section id="book" className="mb-10">
        <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            Booking Request Received!
          </h3>
          <p className="text-green-700 mb-6" role="status" aria-live="polite">
            Thanks—your request was received. We'll confirm by phone/email within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:313-914-3736"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#10254D] text-white rounded-lg font-medium hover:bg-[#10254D]/90 focus:outline-none focus:ring-2 focus:ring-[#10254D]/60 transition-colors"
            >
              Call Us Now
            </a>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  vaccine: '',
                  date: '',
                  time: '',
                  name: '',
                  phone: '',
                  email: '',
                  notes: '',
                  reminders: true
                });
              }}
              className="inline-flex items-center justify-center px-6 py-3 border border-[#10254D] text-brand-navy rounded-lg font-medium hover:bg-[#10254D]/5 focus:outline-none focus:ring-2 focus:ring-[#10254D]/60 transition-colors"
            >
              Book Another
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-6">
        Schedule Your Vaccination
      </h2>
      
      <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vaccine Selection */}
          <div className="md:col-span-2">
            <label htmlFor="vaccine" className="block text-sm font-medium text-brand-navy mb-2">
              Select Vaccine *
            </label>
            <select
              id="vaccine"
              value={formData.vaccine}
              onChange={(e) => handleInputChange('vaccine', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#10254D]/60 ${
                errors.vaccine ? 'border-red-500' : 'border-slate-300'
              }`}
              aria-describedby={errors.vaccine ? 'vaccine-error' : undefined}
              aria-invalid={!!errors.vaccine}
            >
              <option value="">Choose a vaccine or consultation</option>
              {vaccines.map((vaccine) => (
                <option key={vaccine} value={vaccine}>
                  {vaccine}
                </option>
              ))}
            </select>
            {errors.vaccine && (
              <p id="vaccine-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.vaccine}
              </p>
            )}
          </div>

          {/* Date Selection */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-brand-navy mb-2">
              Preferred Date *
            </label>
            <input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
              min={today}
              max={maxDateString}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#10254D]/60 ${
                errors.date ? 'border-red-500' : 'border-slate-300'
              }`}
              aria-describedby={errors.date ? 'date-error' : undefined}
              aria-invalid={!!errors.date}
            />
            {errors.date && (
              <p id="date-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.date}
              </p>
            )}
          </div>

          {/* Time Selection */}
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-brand-navy mb-2">
              Preferred Time *
            </label>
            <select
              id="time"
              value={formData.time}
              onChange={(e) => handleInputChange('time', e.target.value)}
              disabled={!formData.date}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#10254D]/60 disabled:bg-slate-100 disabled:cursor-not-allowed ${
                errors.time ? 'border-red-500' : 'border-slate-300'
              }`}
              aria-describedby={errors.time ? 'time-error' : undefined}
              aria-invalid={!!errors.time}
            >
              <option value="">{formData.date ? 'Select a time' : 'Select date first'}</option>
              {timeSlots.map((slot) => (
                <option 
                  key={slot.time} 
                  value={slot.time}
                  disabled={!slot.available}
                >
                  {slot.time} {!slot.available ? '(Unavailable)' : ''}
                </option>
              ))}
            </select>
            {errors.time && (
              <p id="time-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.time}
              </p>
            )}
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-2">
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#10254D]/60 ${
                errors.name ? 'border-red-500' : 'border-slate-300'
              }`}
              aria-describedby={errors.name ? 'name-error' : undefined}
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-brand-navy mb-2">
              Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="(313) 555-0123"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#10254D]/60 ${
                errors.phone ? 'border-red-500' : 'border-slate-300'
              }`}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-2">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#10254D]/60 ${
                errors.email ? 'border-red-500' : 'border-slate-300'
              }`}
              aria-describedby={errors.email ? 'email-error' : undefined}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          {/* Notes */}
          <div className="md:col-span-2">
            <label htmlFor="notes" className="block text-sm font-medium text-brand-navy mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              id="notes"
              rows={3}
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              placeholder="Any questions, allergies, or special requests..."
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10254D]/60"
            />
          </div>

          {/* Reminders Checkbox */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.reminders}
                onChange={(e) => handleInputChange('reminders', e.target.checked)}
                className="text-brand-navy focus:ring-[#10254D]/60"
              />
              <span className="text-slate-600">Send me reminders for follow-up doses</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 py-3 bg-[#10254D] text-white rounded-lg font-medium hover:bg-[#10254D]/90 focus:outline-none focus:ring-2 focus:ring-[#10254D]/60 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? 'Submitting...' : 'Request Appointment'}
          </button>
        </div>
      </form>
    </section>
  );
}










