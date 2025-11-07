import Image from "next/image";
import Script from "next/script";
import { Metadata } from "next";
import ServicesLayout from "../_components/ServicesLayout";
import MedSyncForm from "./_components/MedSyncForm";
import TransferCompact from "../_shared/TransferCompact";
import FaqAccordion from "../_shared/FaqAccordion";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Medication Synchronization | Xpress Care Pharmacy – Detroit, MI",
    description:
      "Enroll in medication synchronization at Xpress Care Pharmacy—one pickup day, fewer trips, fewer missed doses. Serving Detroit, MI.",
    alternates: { canonical: "/services/medication-synchronization" },
    openGraph: {
      title: "Medication Synchronization | Xpress Care Pharmacy",
      description:
        "Simplify refills with Med Sync: one pickup day, optional delivery, refill reminders.",
      url: "https://xpresscarepharmacy.com/services/medication-synchronization",
      type: "article",
    },
  };
}

export default async function Page() {
  return (
    <div className="bg-brand-navy min-h-screen">
      {/* JSON-LD Service Schema */}
      <Script
        id="medsync-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Medication Synchronization",
            provider: {
              "@type": "Pharmacy",
              name: "Xpress Care Pharmacy",
              telephone: "313-914-3736",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3040 E 7 Mile",
                addressLocality: "Detroit",
                addressRegion: "MI",
                postalCode: "48234",
                addressCountry: "US",
              },
            },
            areaServed: "Detroit, MI",
            description:
              "We align prescription refills to a single day with reminders and optional delivery.",
            url: "https://xpresscarepharmacy.com/services/medication-synchronization",
          }),
        }}
      />

      {/* Hero Section - Dark Navy Background */}
      <section className="w-full">
        <ServicesLayout activeSlug="medication-synchronization">
          <div className="py-8 md:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                  Medication Synchronization
                </h1>
                <p className="text-white/90 leading-relaxed mb-6">
                  One pickup day. Fewer trips. Fewer missed doses.
                  We align your refills to a single date and keep you on track with
                  reminders and optional delivery.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#enroll"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-navy rounded-lg font-medium hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 transition-colors"
                  >
                    Enroll in Med Sync
                  </a>
                  <a
                    href="#transfer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 transition-colors"
                  >
                    Transfer Prescriptions
                  </a>
                </div>
              </div>

              <div className="lg:order-last">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src="/images/Image 3.png"
                    alt="Aligned blister pack with a calendar showing a single pickup day"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </ServicesLayout>
      </section>

      {/* What is Med Sync, How it Works, Benefits - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl font-semibold text-brand-navy">What is Med Sync?</h2>
          <p className="text-slate-600 mt-3">
            Med Sync coordinates your prescription refills to one convenient day.
            It works with most maintenance medications—and we can include OTCs and
            supplies you use regularly.
          </p>

          <h2 className="text-2xl font-semibold text-brand-navy mt-12">How It Works</h2>
          <ol className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Review",
                body:
                  "We review your medications and confirm quantities and directions.",
              },
              {
                title: "Align",
                body:
                  "We coordinate refill dates so everything is ready on your synced day.",
              },
              {
                title: "Pickup/Delivery",
                body:
                  "You pick up or get delivery on your scheduled date—every time.",
              },
            ].map((s, i) => (
              <li
                key={s.title}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="mb-2 text-sm font-semibold text-brand-navy">
                  Step {i + 1}
                </div>
                <div className="text-lg font-medium text-brand-navy">{s.title}</div>
                <p className="mt-1 text-slate-600">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-2 text-xs text-slate-600">
            Delivery available in eligible areas. Ask our team for details.
          </p>

          <h2 className="text-2xl font-semibold text-brand-navy mt-12">
            Benefits of Medication Synchronization
          </h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Fewer missed doses",
              "Fewer trips to the pharmacy",
              "Saves time & reduces hassle",
              "One simple refill schedule",
              "Optional delivery on your synced day",
              "Refill reminders & check-ins",
            ].map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4"
              >
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-brand-navy text-xs font-bold text-brand-navy"
                >
                  ✓
                </span>
                <p className="text-slate-600">{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Comparison Table, CTA, Enrollment - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl font-semibold text-white">
            Without vs. With Med Sync
          </h2>
          <div className="mt-4 overflow-hidden rounded-lg border border-white/20 bg-white/10 shadow-sm">
            <table className="min-w-full text-left text-sm text-white/90">
              <thead className="bg-white/20 text-white">
                <tr>
                  <th className="px-4 py-3">Aspect</th>
                  <th className="px-4 py-3">Without Med Sync</th>
                  <th className="px-4 py-3">With Med Sync</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Pickup schedule", "Different days each month", "One set day"],
                  ["Refill confusion", "High", "Low—clear schedule"],
                  ["Adherence risk", "Higher risk of gaps", "Lower—fewer gaps"],
                  ["Time spent", "More trips", "Fewer trips"],
                  ["Delivery", "Uncoordinated", "Aligned with sync date"],
                ].map(([aspect, a, b]) => (
                  <tr key={aspect} className="border-t border-white/20">
                    <td className="px-4 py-3 font-medium text-white">{aspect}</td>
                    <td className="px-4 py-3">{a}</td>
                    <td className="px-4 py-3">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 rounded-xl border border-white/20 bg-white/10 p-6 shadow-sm">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Ready to simplify your refills?
                </h2>
                <p className="text-white/90">Enroll now or contact our team.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:313-914-3736"
                  className="rounded-md bg-white text-brand-navy px-4 py-2 shadow hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Call Us
                </a>
                <a
                  href="sms:313-914-3736"
                  className="rounded-md border border-white/20 bg-transparent px-4 py-2 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Text Us
                </a>
              </div>
            </div>
          </div>

          <div id="enroll" className="mt-12">
            <h2 className="text-2xl font-semibold text-white">
              Enroll in Medication Synchronization
            </h2>
            <p className="mt-2 text-white/90">
              Complete this quick form and our team will reach out to confirm your
              plan and start date.
            </p>
            <div className="mt-6">
              <MedSyncForm />
            </div>
          </div>
        </div>
      </section>


      {/* Transfer, Testimonial, FAQ - White Background */}
      <section id="transfer" className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-brand-navy">Transfer to Xpress Care Pharmacy</h3>
            <p className="mt-2 text-slate-600">We'll coordinate with your current pharmacy and align your next refill date.</p>
            
            <div className="mt-4 rounded-lg bg-slate-50 p-4">
              <h4 className="font-medium text-brand-navy">Transfer To:</h4>
              <div className="mt-2 text-sm text-slate-600">
                <p className="font-medium">Xpress Care Pharmacy</p>
                <p>3040 E 7 Mile</p>
                <p>Detroit, MI 48234</p>
                <p>Phone: (313) 914-3736</p>
                <p>Fax: (313) 914-5105</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/prescription-transfer"
                className="rounded-md bg-brand-navy text-white px-4 py-2 shadow hover:bg-brand-navy/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
              >
                Start Transfer
              </a>
              <a
                href="#fax-info"
                className="rounded-md border border-slate-300 bg-white px-4 py-2 text-brand-navy shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
              >
                Fax Instructions
              </a>
            </div>
          </div>

          <blockquote className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 text-slate-700">
            &quot;Having everything ready on one day has been a lifesaver—no more
            guesswork or extra trips.&quot; <span className="text-slate-500">— A.M.</span>
          </blockquote>

          <h2 className="text-2xl font-semibold text-brand-navy mt-12">FAQ</h2>
          <div className="mt-4">
            <FaqAccordion
              items={[
                {
                  q: "Is Med Sync covered by insurance?",
                  a: "There's no extra cost for enrollment; your medications continue to bill your insurance as usual.",
                },
                {
                  q: "What if my medication dates don't align perfectly?",
                  a: "We can short-fill or adjust once to align your dates, with your approval.",
                },
                {
                  q: "Can I change my sync date later?",
                  a: "Yes. Let us know and we'll move your schedule to a date that works better.",
                },
                {
                  q: "Can delivery be part of Med Sync?",
                  a: "Yes, in eligible areas. We'll schedule your delivery on your sync day.",
                },
                {
                  q: "How soon will Med Sync start?",
                  a: "Usually within a cycle. We review, coordinate, and confirm your start date with you.",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
