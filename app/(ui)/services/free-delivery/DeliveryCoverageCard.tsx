'use client';
import { useState } from 'react';
import { DeliveryWindow, CoverageResult } from './types';

export default function DeliveryCoverageCard() {
  const [zipCode, setZipCode] = useState('');
  const [selectedWindow, setSelectedWindow] = useState<DeliveryWindow>('next-day');
  const [result, setResult] = useState<CoverageResult | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const handleZipCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!/^\d{5}$/.test(zipCode)) {
      setResult({
        covered: false,
        message: 'Please enter a valid 5-digit ZIP code.'
      });
      return;
    }

    setIsChecking(true);
    
    // Simulate API call - replace with real service later
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Mock coverage check - Detroit area codes
    const detroitZips = ['48234', '48201', '48202', '48204', '48207', '48208', '48209', '48210', '48211', '48212', '48213', '48214', '48215', '48216', '48217', '48219', '48221', '48223', '48224', '48226', '48227', '48228'];
    const covered = detroitZips.includes(zipCode) || zipCode.startsWith('482');
    
    setResult({
      covered,
      message: covered 
        ? 'Great! We deliver to your area.' 
        : 'We don\'t currently deliver to this ZIP code. Please call us at (313) 914-3736 to discuss options.',
      deliveryOptions: covered ? ['same-day', 'next-day'] : undefined
    });
    
    setIsChecking(false);
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-brand-navy mb-4">
        Check Coverage & Schedule Delivery
      </h3>
      
      <form onSubmit={handleZipCheck} className="space-y-4">
        <div>
          <label htmlFor="zip-code" className="block text-sm font-medium text-brand-navy mb-2">
            Check your ZIP code
          </label>
          <div className="flex gap-3">
            <input
              id="zip-code"
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
              placeholder="48234"
              className="flex-1 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-navy/60 focus:border-transparent"
              maxLength={5}
            />
            <button
              type="submit"
              disabled={isChecking || zipCode.length !== 5}
              className="px-4 py-2 bg-brand-navy text-white rounded-md hover:bg-brand-navy/90 focus:outline-none focus:ring-2 focus:ring-brand-navy/60 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isChecking ? 'Checking...' : 'Check'}
            </button>
          </div>
        </div>

        {result && (
          <div 
            className={`p-4 rounded-md ${result.covered ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'}`}
            role="region"
            aria-live="polite"
          >
            <p className={`text-sm ${result.covered ? 'text-green-800' : 'text-yellow-800'}`}>
              {result.message}
            </p>
          </div>
        )}

        {result?.covered && (
          <div>
            <fieldset>
              <legend className="text-sm font-medium text-brand-navy mb-3">
                Preferred delivery window
              </legend>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="delivery-window"
                    value="same-day"
                    checked={selectedWindow === 'same-day'}
                    onChange={(e) => setSelectedWindow(e.target.value as DeliveryWindow)}
                    className="mr-3 text-brand-navy focus:ring-brand-navy/60"
                  />
                  <span className="text-sm">
                    <strong>Same-Day</strong> (orders before 2 PM)
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="delivery-window"
                    value="next-day"
                    checked={selectedWindow === 'next-day'}
                    onChange={(e) => setSelectedWindow(e.target.value as DeliveryWindow)}
                    className="mr-3 text-brand-navy focus:ring-brand-navy/60"
                  />
                  <span className="text-sm">
                    <strong>Next-Day</strong> (flexible scheduling)
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="delivery-window"
                    value="pickup"
                    checked={selectedWindow === 'pickup'}
                    onChange={(e) => setSelectedWindow(e.target.value as DeliveryWindow)}
                    className="mr-3 text-brand-navy focus:ring-brand-navy/60"
                  />
                  <span className="text-sm">
                    <strong>Pick-Up</strong> (in-store)
                  </span>
                </label>
              </div>
            </fieldset>
            <p className="text-xs text-brand-gray mt-3">
              <strong>Hours:</strong> Mon–Fri 10am–6pm. Extended PM delivery available upon request.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}















