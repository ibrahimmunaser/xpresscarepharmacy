"use client";

import { useState } from "react";
import { track } from "../../_shared/analytics";

export function DiabetesRequestButton({ category }: { category: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="rounded-md bg-[#10254D] px-3 py-2 text-sm text-white shadow hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10254D]"
        onClick={() => setOpen(true)}
      >
        Request this
      </button>
      {open && (
        <div 
          role="dialog" 
          aria-modal="true"
          aria-labelledby="request-modal-title"
          className="fixed inset-0 z-50 grid place-items-center bg-black/30 p-4"
        >
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              await new Promise((r) => setTimeout(r, 600));
              track("diabetes_request_supplies_submitted", { 
                category,
                ...Object.fromEntries(formData.entries())
              });
              setOpen(false);
              // Show success message
              const successMsg = "Thanks—We'll contact you to confirm coverage and delivery.";
              if (typeof window !== "undefined") {
                // Create a temporary toast-like notification
                const toast = document.createElement("div");
                toast.className = "fixed top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-md shadow-lg z-50";
                toast.textContent = successMsg;
                document.body.appendChild(toast);
                setTimeout(() => document.body.removeChild(toast), 3000);
              }
            }}
            className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-4 shadow-xl"
          >
            <h3 id="request-modal-title" className="text-lg font-semibold text-brand-navy">
              Request: {category}
            </h3>
            <div className="mt-3 space-y-3">
              <div>
                <label className="block text-sm font-medium text-slate-700">Full name</label>
                <input 
                  name="name" 
                  required 
                  className="mt-1 w-full rounded border border-slate-300 px-3 py-2 focus:border-slate-500 focus:outline-none focus:ring-0" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input 
                  name="phone" 
                  type="tel" 
                  required 
                  className="mt-1 w-full rounded border border-slate-300 px-3 py-2 focus:border-slate-500 focus:outline-none focus:ring-0" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email (optional)</label>
                <input 
                  name="email" 
                  type="email" 
                  className="mt-1 w-full rounded border border-slate-300 px-3 py-2 focus:border-slate-500 focus:outline-none focus:ring-0" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Insurance/Plan (optional)</label>
                <input 
                  name="plan" 
                  className="mt-1 w-full rounded border border-slate-300 px-3 py-2 focus:border-slate-500 focus:outline-none focus:ring-0" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Notes (optional)</label>
                <textarea 
                  name="notes" 
                  rows={3} 
                  className="mt-1 w-full rounded border border-slate-300 px-3 py-2 focus:border-slate-500 focus:outline-none focus:ring-0" 
                />
              </div>
              <label className="flex items-start gap-2 text-sm text-slate-700">
                <input type="checkbox" required className="mt-1 h-4 w-4" />
                <span>I agree to be contacted about my request.</span>
              </label>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button 
                type="button" 
                className="rounded border border-slate-300 px-3 py-2 text-brand-navy hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500" 
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="rounded bg-[#10254D] px-3 py-2 text-white hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10254D]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

// Default export for compatibility
export default DiabetesRequestButton;
