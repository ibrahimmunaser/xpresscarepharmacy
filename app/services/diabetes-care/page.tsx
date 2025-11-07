import Image from "next/image";
import Script from "next/script";
import { Metadata } from "next";
import ServicesLayout from "../_components/ServicesLayout";
import FaqAccordion from "../_shared/FaqAccordion";
import TransferCompact from "../_shared/TransferCompact";
import { DiabetesRequestButton } from "./_components/DiabetesRequestModal";
import MedSyncMini from "./_components/MedSyncMini";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Diabetes Care & Supplies | Xpress Care Pharmacy – Detroit, MI",
    description:
      "Meters, test strips, lancets, pen needles, CGM supplies, sharps containers—plus Med Sync, reminders, and delivery. Transfer to Xpress Care Pharmacy in Detroit.",
    alternates: { canonical: "/services/diabetes-care" },
    openGraph: {
      title: "Diabetes Care & Supplies | Xpress Care Pharmacy",
      description:
        "Essential supplies, medication support, Med Sync, and delivery—organized around your routine.",
      url: "https://xpresscarepharmacy.com/services/diabetes-care",
      type: "article",
    },
  };
}

export default async function Page() {
  return (
    <div className="bg-brand-navy min-h-screen">
      {/* JSON-LD Service Schema */}
      <Script
        id="diabetes-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Diabetes Care & Supplies",
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
              "Diabetes supplies, medication support, Med Sync, and delivery from Xpress Care Pharmacy.",
            url: "https://xpresscarepharmacy.com/services/diabetes-care",
          }),
        }}
      />

      {/* Hero Section with Sidebar - Dark Navy Background */}
      <ServicesLayout activeSlug="diabetes-care">
        <div className="py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Diabetes Care
              </h1>
              <p className="text-white/90 leading-relaxed mb-6">
                Supplies, medication support, and reminders—organized around your routine.
                We help you choose the right gear, align refills with Med Sync, and offer
                delivery so you can focus on living well.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#supplies"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-navy rounded-lg font-medium hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 transition-colors"
                >
                  Order Supplies
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
                  src="/images/Image 10.png"
                  alt="Patient checking blood glucose with a meter"
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

      {/* Supplies Grid - White Background */}
      <section id="supplies" className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl font-semibold text-brand-navy">Diabetes Supplies You Need</h2>
          <p className="mt-2 text-slate-600">
            Tell us what you use today—or let us help you choose. We'll verify benefits and
            discuss any out-of-pocket costs before you decide.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Meters & Sensors", desc: "Meters, CGM readers, and starter kits." },
              { title: "Test Strips & Lancets", desc: "All major brands and quantities." },
              { title: "Pen Needles / Syringes", desc: "Common sizes for pens and vials." },
              { title: "CGM Sensors & Transmitters", desc: "Dexcom/Libre and compatible options." },
              { title: "Infusion & Pump Supplies", desc: "Infusion sets, reservoirs, and adhesives." },
              { title: "Sharps Containers", desc: "Safe disposal for needles and lancets." },
              { title: "Skin Barriers & Tapes", desc: "Protective wipes, adhesives, and overpatches." },
              { title: "Hypoglycemia Rescue", desc: "Glucagon rescue options for lows." },
              { title: "Travel & Storage", desc: "Coolers, cases, and organizational kits." },
            ].map((c) => (
              <article key={c.title} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-brand-navy">{c.title}</h3>
                <p className="mt-1 text-slate-600">{c.desc}</p>
                <div className="mt-3 flex items-center gap-3">
                  <DiabetesRequestButton category={c.title} />
                  <a
                    href="tel:313-914-3736"
                    className="text-sm text-brand-navy underline underline-offset-2 hover:text-brand-navy/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10254D]"
                  >
                    Check coverage
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Medication Support & Med Sync - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl font-semibold text-white">Medication Support & Med Sync</h2>
          <p className="mt-2 text-white/80">
            We review timing, dosing, and side-effects, check for interactions, and align your
            refills with Med Sync so everything is ready on one predictable day.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a 
              href="#medsync" 
              className="rounded-md bg-white text-brand-navy px-4 py-2 shadow hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Enroll in Med Sync
            </a>
            <span className="rounded-full border border-white/30 px-3 py-1 text-xs text-white/80">
              Delivery available
            </span>
          </div>
        </div>
      </section>

      {/* How We Help Timeline - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl font-semibold text-brand-navy">How We Help</h2>
          <ol className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              { k: "Review", d: "Your current therapy and supplies" },
              { k: "Align", d: "Refills & reminders with Med Sync" },
              { k: "Supply", d: "Pickup or delivery every month" },
            ].map((s, i) => (
              <li key={s.k} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-2 text-sm font-semibold text-brand-navy">Step {i + 1}</div>
                <div className="text-lg font-medium text-brand-navy">{s.k}</div>
                <p className="mt-1 text-slate-600">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Insurance & Coverage - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl font-semibold text-white">Insurance & Coverage Basics</h2>
          <div className="mt-4 overflow-hidden rounded-lg border border-white/20 bg-white/10 shadow-sm">
            <table className="min-w-full text-left text-sm text-white/90">
              <thead className="bg-white/20 text-white">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Rx Required?</th>
                  <th className="px-4 py-3">Possible Coverage</th>
                  <th className="px-4 py-3">Typical Frequency</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Test Strips", "Yes", "Often covered with diagnosis code", "Per plan (e.g., 100/30 days)"],
                  ["Lancets", "Yes", "Often covered with strips", "Per plan"],
                  ["Pen Needles", "Yes", "Often covered", "Per plan"],
                  ["CGM Sensors", "Yes", "Plan-dependent (PA may apply)", "Per device cycle"],
                  ["Sharps Containers", "No/Plan", "Varies by plan", "As needed"],
                ].map(([a, b, c, d]) => (
                  <tr key={a} className="border-t border-white/20">
                    <td className="px-4 py-3 font-medium text-white">{a}</td>
                    <td className="px-4 py-3">{b}</td>
                    <td className="px-4 py-3">{c}</td>
                    <td className="px-4 py-3">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-white/60">
            Coverage varies by plan. We'll verify benefits and review any costs with you before filling.
          </p>
        </div>
      </section>

      {/* CTA Ribbon - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <div className="rounded-xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-6 shadow-sm">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-xl font-semibold text-brand-navy">Need help choosing the right meter?</h2>
                <p className="text-slate-600">Talk to our team—we'll check compatibility and coverage.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:313-914-3736"
                  className="rounded-md bg-brand-navy px-4 py-2 text-white shadow hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
                >
                  Call Us
                </a>
                <a
                  href="sms:313-914-3736"
                  className="rounded-md border border-slate-300 bg-white px-4 py-2 text-brand-navy shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
                >
                  Text Us
                </a>
                <a
                  href="#fax-info"
                  className="rounded-md border border-slate-300 bg-white px-4 py-2 text-brand-navy shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
                >
                  Fax Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fax Information - Dark Navy Background */}
      <section id="fax-info" className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <div className="rounded-lg border border-white/20 bg-white/10 p-6">
            <h3 className="text-xl font-semibold text-white">Fax Order Instructions</h3>
            <div className="mt-4 text-white/80">
              <p className="mb-2">To order supplies by fax:</p>
              <ol className="list-decimal space-y-1 pl-5">
                <li>Complete our supply order form</li>
                <li>Fax completed form to: <span className="font-medium text-white">(313) 914-5105</span></li>
                <li>Include your name, phone, insurance info, and specific supplies needed</li>
                <li>We&apos;ll call you to confirm coverage and delivery</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Transfer Widget - White Background */}
      <section id="transfer" className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <TransferCompact
            title="Transfer to Xpress Care Pharmacy"
            subtitle="We'll coordinate with your current pharmacy and align your diabetes refills."
          />
        </div>
      </section>

      {/* Med Sync Enrollment - Dark Navy Background */}
      <section id="medsync" className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl font-semibold text-white">Enroll in Med Sync</h2>
          <p className="mt-2 text-white/80">
            One pickup day (or delivery) per month—fewer trips, fewer gaps.
          </p>
          <div className="mt-6">
            <MedSyncMini />
          </div>
        </div>
      </section>

      {/* Tips & Safety - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl font-semibold text-brand-navy">Helpful Tips</h2>
          <ul className="ml-5 list-disc space-y-1 text-slate-700 mt-3">
            <li>Rotate injection sites and keep a rescue option on hand for lows.</li>
            <li>Use sharps containers for safe disposal of needles and lancets.</li>
            <li>Traveling? Ask us about storage temperatures and packing insulin safely.</li>
          </ul>
        </div>
      </section>

      {/* Testimonial - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <blockquote className="rounded-xl border border-white/20 bg-white/10 p-6 text-white">
            &quot;They helped me switch meters, sync my refills, and deliver supplies on time.
            It&apos;s made diabetes care a lot simpler.&quot; <span className="text-white/60">— J.R.</span>
          </blockquote>
        </div>
      </section>

      {/* FAQ - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl font-semibold text-brand-navy">FAQ</h2>
          <div className="mt-4">
            <FaqAccordion
              items={[
                { 
                  q: "Can you deliver diabetes supplies?", 
                  a: "Yes, delivery is available in eligible areas on your sync day." 
                },
                { 
                  q: "Do you handle CGM sensors & transmitters?", 
                  a: "We stock common CGM brands and can special order others." 
                },
                { 
                  q: "How often can I receive strips and lancets?", 
                  a: "Depends on your plan allowance; we'll verify for you." 
                },
                { 
                  q: "Can you switch me to a different meter?", 
                  a: "Yes. We'll coordinate with your provider and confirm coverage." 
                },
                { 
                  q: "Is Med Sync included?", 
                  a: "Enrollment is free; your meds bill your insurance as usual." 
                },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
