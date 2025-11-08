"use client";

import { useState } from "react";
import { track } from "../../_shared/analytics";

export default function PetInquiryForm() {
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
      // Placeholder: replace with real action later
      await new Promise((r) => setTimeout(r, 600));
      track("form_pet_inquiry_submitted", Object.fromEntries(fd.entries()));
      setOk("Thanks! We'll get back to you shortly.");
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
      aria-labelledby="pet-inquiry-heading"
      className="max-w-2xl space-y-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700">Your name</label>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Phone</label>
          <input
            type="tel"
            name="phone"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Pet&apos;s name</label>
          <input
            name="petName"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">How can we help?</label>
        <textarea
          name="message"
          rows={4}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
          placeholder="Tell us briefly about the medication or concern..."
          required
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          disabled={pending}
          className="rounded-md bg-[#10254D] px-4 py-2 text-white shadow hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10254D]"
        >
          {pending ? "Sending..." : "Send message"}
        </button>
        {ok && <p className="text-sm text-emerald-600" aria-live="polite">{ok}</p>}
        {err && <p className="text-sm text-rose-600" aria-live="polite">{err}</p>}
      </div>
    </form>
  );
}















