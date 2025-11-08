"use client";

import { useState } from "react";
import { track } from "../../_shared/analytics";

export function TravelConsultButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    track("travel_consult_cta_click");
  };

  return (
    <>
      <button
        data-consult-trigger
        onClick={handleClick}
        className="rounded-md bg-[#10254D] px-4 py-2 text-white shadow hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10254D]"
      >
        Book a Pre-Travel Consult
      </button>
      {isOpen && <TravelConsultModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
}

function TravelConsultModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      // Simulate API call
      await new Promise((r) => setTimeout(r, 800));
      
      track("travel_consult_submitted", Object.fromEntries(formData.entries()));
      setSuccess(true);
      
      // Auto-close after success
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 2000);
    } catch {
      // Handle error if needed
    } finally {
      setPending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 grid place-items-center bg-black/30 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="travel-consult-modal-title"
    >
      <div className="w-full max-w-2xl rounded-lg border border-slate-200 bg-white p-6 shadow-xl">
        <h3 id="travel-consult-modal-title" className="text-xl font-semibold text-brand-navy">
          Schedule Your Pre-Travel Consult
        </h3>
        
        {success ? (
          <div className="mt-4 text-center">
            <div className="text-emerald-600">✓ Consult request submitted successfully!</div>
            <p className="mt-2 text-sm text-slate-600">We'll contact you soon to confirm your appointment and discuss your travel needs.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">First name</label>
                <input
                  name="firstName"
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Last name</label>
                <input
                  name="lastName"
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Mobile phone</label>
                <input
                  name="phone"
                  type="tel"
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">Destination country</label>
                <input
                  name="destinationCountry"
                  required
                  placeholder="e.g., Kenya, Thailand, Brazil"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">City/Region</label>
                <input
                  name="destinationCity"
                  placeholder="e.g., Nairobi, Bangkok"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">Travel start date</label>
                <input
                  name="travelStartDate"
                  type="date"
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Travel end date</label>
                <input
                  name="travelEndDate"
                  type="date"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">Trip type</label>
                <select
                  name="tripType"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
                  defaultValue=""
                >
                  <option value="">Select...</option>
                  <option value="leisure">Leisure</option>
                  <option value="business">Business</option>
                  <option value="humanitarian">Humanitarian/Remote</option>
                  <option value="vfr">Visiting Friends/Relatives</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Preferred appointment</label>
                <select
                  name="appointmentType"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
                  defaultValue="in-pharmacy"
                >
                  <option value="in-pharmacy">In-Pharmacy</option>
                  <option value="phone">Phone/Video</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700">Activities (check all that apply)</label>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {[
                  { value: "rural", label: "Rural areas/villages" },
                  { value: "hiking", label: "Hiking/trekking" },
                  { value: "freshwater", label: "Freshwater activities" },
                  { value: "animal", label: "Animal contact" },
                  { value: "healthcare", label: "Healthcare work" },
                  { value: "cruise", label: "Cruise travel" }
                ].map((activity) => (
                  <label key={activity.value} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      name="activities"
                      value={activity.value}
                      className="h-4 w-4 text-brand-navy"
                    />
                    {activity.label}
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700">Medical notes (optional)</label>
              <textarea
                name="medicalNotes"
                rows={3}
                placeholder="Any relevant health conditions, current medications, or pregnancy status"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700">Preferred date/time</label>
              <input
                name="preferredDateTime"
                placeholder="e.g., Next Tuesday morning, weekday afternoons"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
              />
            </div>
            
            <label className="flex items-start gap-2 text-sm text-slate-700">
              <input type="checkbox" required className="mt-1 h-4 w-4" />
              <span>
                I agree to be contacted about my travel consultation request and understand this information is used for appointment scheduling purposes only.
              </span>
            </label>
            
            <label className="flex items-start gap-2 text-sm text-slate-700">
              <input type="checkbox" name="smsReminders" className="mt-1 h-4 w-4" />
              <span>
                Send SMS reminders about my appointment (standard messaging rates apply)
              </span>
            </label>
            
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border border-slate-300 px-4 py-2 text-brand-navy hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={pending}
                className="rounded-md bg-[#10254D] px-4 py-2 text-white hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10254D]"
              >
                {pending ? "Scheduling..." : "Schedule Consult"}
              </button>
            </div>
          </form>
        )}
        
        <div className="mt-4 border-t border-slate-200 pt-4">
          <p className="text-sm text-slate-600">Or contact us directly:</p>
          <div className="mt-2 flex gap-3">
            <a
              href="tel:313-914-3736"
              className="text-sm text-brand-navy underline underline-offset-2 hover:text-brand-navy/80"
            >
              Call 313-914-3736
            </a>
            <a
              href="sms:313-914-3736"
              className="text-sm text-brand-navy underline underline-offset-2 hover:text-brand-navy/80"
            >
              Text Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelConsultButton;















