"use client";

import { useState } from "react";
import { track } from "../../_shared/analytics";

export default function MedSyncForm() {
  const [pending, setPending] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setOk(null);
    setErr(null);
    try {
      const fd = new FormData(e.currentTarget);
      // Placeholder submit: replace with server action/api later
      await new Promise((r) => setTimeout(r, 700));
      track("medsync_enroll_submitted", Object.fromEntries(fd.entries()));
      setOk("Thanks! We'll review and follow up to confirm your sync date.");
      (e.target as HTMLFormElement).reset();
    } catch {
      setErr("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-2xl space-y-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
      aria-labelledby="medsync-enroll"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700">Full name</label>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Date of birth</label>
          <input
            name="dob"
            placeholder="MM/DD/YYYY"
            required
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input
            type="email"
            name="email"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700">Preferred contact</label>
          <select
            name="preferredContact"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
            defaultValue="Phone"
          >
            <option>Phone</option>
            <option>Text</option>
            <option>Email</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Current pharmacy (optional)</label>
          <input
            name="currentPharmacy"
            placeholder="Name & phone (if transferring)"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Current medications</label>
        <textarea
          name="meds"
          rows={4}
          placeholder="List your current daily meds (names, strengths if known)"
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Notes (optional)</label>
        <textarea
          name="notes"
          rows={3}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
        />
      </div>

      <label className="flex items-start gap-2 text-sm text-slate-700">
        <input type="checkbox" required className="mt-1 h-4 w-4" />
        <span>
          I consent to be contacted about enrollment and understand this is not medical advice.
        </span>
      </label>

      <div className="flex items-center gap-3">
        <button
          disabled={pending}
          className="rounded-md bg-[#10254D] px-4 py-2 text-white shadow hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10254D]"
        >
          {pending ? "Submitting..." : "Submit enrollment"}
        </button>
        {ok && <p className="text-sm text-emerald-600" aria-live="polite">{ok}</p>}
        {err && <p className="text-sm text-rose-600" aria-live="polite">{err}</p>}
      </div>
    </form>
  );
}














