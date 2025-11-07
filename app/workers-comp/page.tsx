import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Worker\'s Compensation Pharmacy Services | Xpress Care Pharmacy (Detroit, MI)',
  description:
    'Dedicated worker\'s compensation medication services in Detroit: quick authorizations, accurate fills, delivery options, and compliant documentation.',
  openGraph: {
    title: 'Worker\'s Compensation Pharmacy Services | Xpress Care Pharmacy',
    description:
      'Dedicated worker\'s compensation medication services in Detroit: quick authorizations, accurate fills, delivery options, and compliant documentation.',
    type: 'website',
    locale: 'en_US',
    url: 'https://xpresscarepharmacy.com/workers-comp',
  },
};

export default function WorkersCompPage() {
  return (
    <div className="bg-brand-navy min-h-screen">
      <WorkersCompContent />
    </div>
  );
}

function WorkersCompContent() {
  const faqItems = [
    { 
      q: 'How does the worker\'s comp prescription process work at Xpress Care?', 
      a: 'We coordinate directly with physicians and adjusters to ensure proper authorization and timely filling of worker\'s compensation prescriptions. Our team handles prior authorizations and maintains detailed documentation throughout the process.' 
    },
    { 
      q: 'What delivery or pickup options are available?', 
      a: 'We offer same-day and next-day delivery options for worker\'s comp medications to ensure continuity of care. Patients can also pick up medications at our Detroit location with convenient hours Monday through Friday.' 
    },
    { 
      q: 'What documentation do you provide to employers/adjusters?', 
      a: 'We provide comprehensive documentation including detailed invoices with NDC numbers, lot/expiration dates, delivery confirmations, and any required compliance reports to support claim management and legal requirements.' 
    },
    { 
      q: 'How fast can you start medications after a claim?', 
      a: 'Once proper authorization is received, we can typically fill and deliver worker\'s comp medications within 24-48 hours. Emergency medications can often be processed same-day when stock is available.' 
    },
    { 
      q: 'Do you coordinate with the treating physician?', 
      a: 'Yes, we work closely with treating physicians to ensure proper medication management, check for interactions, and coordinate timing of treatments to support the worker\'s recovery plan.' 
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Xpress Care Pharmacy",
    "description": "Worker's compensation medication services in Detroit",
    "url": "https://xpresscarepharmacy.com/workers-comp",
    "telephone": "313-914-3736",
    "faxNumber": "313-914-5105",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3040 E 7 Mile",
      "addressLocality": "Detroit",
      "addressRegion": "MI",
      "postalCode": "48234",
      "addressCountry": "US"
    },
    "openingHours": "Mo-Fr 10:00-18:00",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Worker's Compensation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Worker's Compensation Prescription Management"
          }
        }
      ]
    }
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
      />

      <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="grid gap-8 py-10 md:grid-cols-2 md:py-14">
          <div>
            <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Specialty Services
            </span>
            <h1 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Worker's Compensation Support at Xpress Care
            </h1>
            <p className="mt-3 text-white/90">
              We coordinate medications, documentation, and delivery so injured workers receive timely care while employers and adjusters get accurate, compliant records.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#referral" className="btn-primary">Submit Your Referral</a>
              <a href="tel:3139143736" className="btn-secondary">Call 313-914-3736</a>
            </div>
            <p className="mt-2 text-sm text-white/70">Trusted by local clinics &amp; employers.</p>
          </div>

          <div className="relative aspect-[4/3]">
            <Image
              src="/images/Image 29.png"
              alt="Pharmacist coordinating worker's compensation medications"
              fill
              className="rounded-2xl object-cover shadow-sm"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* Stats */}
        <section className="mb-8 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-4">
          {[
            { k: '20+', v: 'Employers Supported' },
            { k: '25k+', v: 'Online Refills Facilitated' },
            { k: '1', v: 'Location (Detroit, MI)' },
            { k: '5k+', v: 'Transfer Prescriptions' },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div className="text-2xl font-semibold text-brand-navy">{s.k}</div>
              <div className="text-sm text-slate-500">{s.v}</div>
            </div>
          ))}
        </section>

        {/* Benefits grid */}
        <section className="py-10">
          <h2 className="text-2xl font-semibold text-brand-navy">Benefits of Worker's Compensation</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { 
                icon: '🛡️', 
                t: 'Employee Protection', 
                d: 'Ensure access to needed medications and reduce recovery gaps.' 
              },
              { 
                icon: '💼', 
                t: 'Employer Protection', 
                d: 'Consistent documentation and accurate records help reduce risk.' 
              },
              { 
                icon: '⚡', 
                t: 'Workplace Safety', 
                d: 'Continuity of therapy supports safer, faster returns to work.' 
              },
            ].map((b) => (
              <div key={b.t} className="rounded-xl border border-slate-200 bg-white p-5 transition hover:shadow-sm">
                <div className="mb-3 text-2xl">{b.icon}</div>
                <h3 className="font-medium text-brand-navy">{b.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{b.d}</p>
              </div>
            ))}
        </div>
      </section>

        {/* Trusted partner band */}
        <section className="grid items-center gap-8 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h3 className="text-xl font-semibold text-brand-navy">Your Trusted Partner in Worker's Compensation Support</h3>
            <p className="mt-3 text-slate-700">
              We coordinate with physicians and adjusters, manage prior authorizations, and keep communication clear so care keeps moving forward without delays.
            </p>
            <a href="/contact" className="btn-secondary mt-4 inline-flex">Talk to a Coordinator</a>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/Image 30.png"
                alt="Pharmacist partner discussing worker's compensation case"
                fill
                className="rounded-2xl object-cover shadow-sm"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
      </div>
        </section>

        {/* Three feature list */}
        <section className="py-10">
          <h2 className="text-2xl font-semibold text-brand-navy">Worker's Compensation at Xpress Care</h2>
          <ul className="mt-4 space-y-3">
            {[
              { t: 'Streamlined Claims Process', d: 'We help gather what\'s needed and keep paperwork moving.' },
              { t: 'Medical Care Coordination', d: 'We coordinate dosing, interactions, and timing with providers.' },
              { t: 'Legal and Insurance Guidance', d: 'Accurate, compliant records that support case requirements.' },
            ].map((item) => (
              <li key={item.t} className="flex gap-3">
                <span aria-hidden className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#10254D] text-white">
                  <svg viewBox="0 0 20 20" className="h-3 w-3">
                    <path fill="currentColor" d="M8 13.5 4.5 10l1.4-1.4L8 10.7l5.7-5.7L15 6.4z"/>
                  </svg>
                </span>
          <div>
                  <div className="font-medium text-brand-navy">{item.t}</div>
                  <p className="text-sm text-slate-600">{item.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Why choose (icon pills) */}
        <section className="py-6">
          <h2 className="text-2xl font-semibold text-brand-navy">Why Choose Xpress Care</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { 
                icon: '⏱️', 
                t: 'Quick Access to Medication', 
                d: 'Faster starts support recovery and claim continuity.' 
              },
              { 
                icon: '🚚', 
                t: 'Prescription Refills & Delivery', 
                d: 'Same-day / next-day options keep therapy seamless.' 
              },
              { 
                icon: '🎯', 
                t: 'Tailored Recovery Support', 
                d: 'Plans designed around individual worker needs.' 
              },
            ].map((c) => (
              <div key={c.t} className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#10254D]/5 text-brand-navy text-lg">
                  {c.icon}
                </div>
                <div className="font-medium text-brand-navy">{c.t}</div>
                <p className="text-sm text-slate-600">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process timeline */}
        <section className="py-10">
          <h2 className="text-2xl font-semibold text-brand-navy">Our Process for Worker's Compensation Support</h2>
          <ol className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { t: 'Initial Consultation & Injury Assessment', d: 'We gather details and confirm medication needs.' },
              { t: 'Coordinated Medical Treatment & Care Plan', d: 'We align medications, timing, and delivery with providers.' },
              { t: 'Ongoing Claims & Progress Monitoring', d: 'We maintain records and adapt as the case evolves.' },
            ].map((step, i) => (
              <li key={step.t} className="relative rounded-xl border border-slate-200 bg-white p-5">
                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#10254D] text-white text-sm font-medium">
                  {i + 1}
                </div>
                <div className="font-medium text-brand-navy">{step.t}</div>
                <p className="text-sm text-slate-600">{step.d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Referral CTA band */}
        <section className="my-8 rounded-2xl border border-[#10254D]/10 bg-[#10254D]/5 p-6 text-center">
          <h3 className="text-xl font-semibold text-brand-navy">Ready to submit a referral?</h3>
          <p className="mt-2 text-slate-700">
            We'll coordinate medications, documentation, and delivery—start to finish.
          </p>
          <a href="#referral" className="btn-primary mt-4 inline-flex">Submit Your Referral</a>
        </section>

        {/* FAQ */}
        <section className="py-10">
          <h2 className="text-2xl font-semibold text-brand-navy">Worker's Compensation FAQ</h2>
          <div className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
            {faqItems.map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-brand-navy hover:text-brand-navy">
                  {f.q}
                  <span className="ml-4 text-slate-400 transition group-open:rotate-180">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-2 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Location card */}
        <section className="py-8" id="referral">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-brand-navy">Xpress Care Pharmacy — Worker's Comp Team</h3>
            <p className="mt-2 text-slate-700">
              3040 E 7 Mile, Detroit, MI 48234
            </p>
            <p className="text-slate-700">
              Phone: 313-914-3736 • Fax: 313-914-5105
            </p>
            <p className="text-slate-700">
              Hours: Mon–Fri 10:00am–6:00pm
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="btn-primary" href="/contact">Open Referral Form</a>
              <a className="btn-secondary" href="tel:3139143736">Call 313-914-3736</a>
            </div>
          </div>
        </section>

        {/* Sticky quick-actions */}
        <div className="fixed bottom-5 right-5 hidden md:flex flex-col gap-2">
          <a 
            href="#referral" 
            className="rounded-full bg-[#10254D] px-4 py-3 text-white shadow-lg transition hover:bg-[#10254D]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10254D] focus-visible:ring-offset-2"
          >
            Referral
          </a>
          <a 
            href="tel:3139143736" 
            className="rounded-full bg-white px-4 py-3 text-brand-navy ring-1 ring-[#10254D]/20 shadow-lg transition hover:bg-[#10254D]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10254D] focus-visible:ring-offset-2"
          >
            Call
          </a>
        </div>
      </main>
    </>
  );
}
