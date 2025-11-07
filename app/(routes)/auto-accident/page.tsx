import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";
import { 
  DocumentTextIcon, 
  UserGroupIcon, 
  CogIcon,
  TruckIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  HeartIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";
import AudienceTabs from "./_components/AudienceTabs";
import ReferralForm from "./_components/ReferralForm";
import FaxInfoPopover from "./_components/FaxInfoPopover";
import ContactChip from "./_components/ContactChip";
import FaqAccordion from "../_shared/FaqAccordion";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Auto Accident Medication Support | Xpress Care Pharmacy (Detroit, MI)",
    description:
      "Fast medication access, accurate documentation, and coordinated support for attorneys, physicians, and claim adjusters. Same-/next-day delivery; single-location in Detroit.",
    alternates: { canonical: "/auto-accident" },
    openGraph: {
      title: "Auto Accident Medication Support | Xpress Care Pharmacy",
      description: "Coordinated medication access for auto-accident cases with delivery, documentation, and support.",
      url: "https://xpresscarepharmacy.com/auto-accident",
      type: "article",
    },
  };
}

export default function AutoAccidentPage() {
  return (
    <>
      {/* JSON-LD Service Schema */}
      <Script
        id="auto-accident-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Auto Accident Medication Support",
            provider: {
              "@type": "Pharmacy",
              name: "Xpress Care Pharmacy",
              telephone: "313-914-3736",
              faxNumber: "313-914-5105",
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
            url: "https://example.com/auto-accident",
            description: "Coordinated medication access for auto-accident cases, with delivery, documentation, and support for attorneys, physicians, and adjusters.",
          }),
        }}
      />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="grid gap-8 py-10 lg:grid-cols-2 lg:items-center md:py-14">
          <div>
            <p className="text-sm font-medium text-slate-600">
              <a href="#referral" className="hover:text-brand-navy focus:outline-none focus:ring-2 focus:ring-[#10254D]/30">
                Submit Your Referral
              </a>
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Auto-Accident Medication Support
            </h1>
            <p className="mt-3 text-lg text-slate-700">
              Fast medication access, accurate documentation, and coordinated care—for patients and the professionals who represent them.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a 
                href="#referral" 
                className="rounded-md bg-[#10254D] px-5 py-2.5 text-white hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#10254D]/30"
              >
                Submit Referral
              </a>
              <FaxInfoPopover />
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image 
              src="/images/Image 11.png" 
              alt="Pharmacist coordinating an auto-accident case over the phone in the pharmacy" 
              fill 
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover" 
            />
          </div>
        </section>

        {/* Audience Tabs */}
        <section className="py-10 md:py-14">
          <h2 className="sr-only">Who We Serve</h2>
          <AudienceTabs />
        </section>

        {/* Our Commitment */}
        <section className="grid gap-8 py-10 lg:grid-cols-2 lg:items-center md:py-14">
          <div>
            <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
              Our Commitment to Auto Accident Care
            </h2>
            <p className="mt-4 text-slate-700">
              We coordinate with providers and legal teams to get medications started quickly and keep cases moving. 
              Our process emphasizes safety, precision, and clear documentation to support recovery and reporting.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a 
                href="#referral" 
                className="rounded-md border border-slate-300 px-4 py-2 text-brand-navy hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#10254D]/30"
              >
                Contact Us
              </a>
              <a 
                className="text-sm text-slate-600 hover:text-brand-navy focus:outline-none focus:ring-2 focus:ring-[#10254D]/30" 
                href="tel:313-914-3736"
              >
                Call 313-914-3736
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image 
              src="/images/image 27.png" 
              alt="Pharmacy counter with medications ready for delivery" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover" 
            />
          </div>
        </section>

        {/* How We Support Medical Professionals */}
        <section className="py-10 md:py-14">
          <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
            How We Support Medical Professionals
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <DocumentTextIcon className="h-6 w-6 text-brand-navy" />
                <h3 className="font-semibold text-brand-navy">Clear, Accurate Records</h3>
              </div>
              <p className="mt-2 text-sm text-slate-700">
                Detailed invoices with NDC, quantity, dates, signatures, lot/exp information for complete documentation.
              </p>
            </div>
            
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <UserGroupIcon className="h-6 w-6 text-brand-navy" />
                <h3 className="font-semibold text-brand-navy">Collaborative Patient Care</h3>
              </div>
              <p className="mt-2 text-sm text-slate-700">
                Comprehensive medication reviews, patient counseling, and refill alignment to support treatment goals.
              </p>
            </div>
            
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <CogIcon className="h-6 w-6 text-brand-navy" />
                <h3 className="font-semibold text-brand-navy">Prescription Management Simplified</h3>
              </div>
              <p className="mt-2 text-sm text-slate-700">
                Direct coordination with prescribers to maintain uninterrupted therapy throughout the legal process.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits for Patients */}
        <section className="py-10 md:py-14">
          <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
            Benefits for Patients
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <TruckIcon className="h-6 w-6 text-brand-navy" />
                <h3 className="font-semibold text-brand-navy">Fast Delivery</h3>
              </div>
              <p className="mt-2 text-slate-700">Same-day or next-day delivery for in-stock medications.</p>
              <a href="#referral" className="mt-2 text-sm text-brand-navy hover:underline">Contact us →</a>
            </div>
            
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <CurrencyDollarIcon className="h-6 w-6 text-brand-navy" />
                <h3 className="font-semibold text-brand-navy">No Upfront Costs</h3>
              </div>
              <p className="mt-2 text-slate-700">We bill eligible insurance or coordinate with LOP arrangements.</p>
              <a href="#referral" className="mt-2 text-sm text-brand-navy hover:underline">Contact us →</a>
            </div>
            
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <HeartIcon className="h-6 w-6 text-brand-navy" />
                <h3 className="font-semibold text-brand-navy">Support During Legal Cases</h3>
              </div>
              <p className="mt-2 text-slate-700">Continuous medication access throughout the entire claim process.</p>
              <a href="#referral" className="mt-2 text-sm text-brand-navy hover:underline">Contact us →</a>
            </div>
          </div>
        </section>

        {/* Streamlined Referral */}
        <section id="referral" className="py-10 md:py-14">
          <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">Submit a Referral</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-brand-navy mb-4">Referral Options</h3>
              <p className="text-slate-700 mb-4">
                Choose web referral for fastest processing, or fax our one-page form. 
                We confirm receipt and begin benefits verification immediately.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-brand-navy">Fax Referrals</h4>
                  <p className="text-2xl font-bold text-brand-navy">313-914-5105</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-brand-navy">Phone Support</h4>
                  <a href="tel:313-914-3736" className="text-brand-navy hover:underline">313-914-3736</a>
                </div>
                
                <div className="mt-4">
                  <ContactChip phone="313-914-3736" fax="313-914-5105" />
                </div>
              </div>
              
              <p className="mt-4 text-xs text-slate-600">
                Do not include credit card numbers. Use fax or encrypted portal for PHI transmission.
              </p>
            </div>
            
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-brand-navy mb-4">Web Referral Form</h3>
              <ReferralForm />
            </div>
          </div>
        </section>

        {/* Medication Delivery & Support */}
        <section className="py-10 md:py-14">
          <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
            Medication Delivery & Support
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-semibold text-brand-navy mb-4">Delivery & Logistics</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-brand-navy mt-0.5 flex-shrink-0" />
                  <span>Delivery windows: AM (8-11), Midday (11-2), PM (2-5)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-brand-navy mt-0.5 flex-shrink-0" />
                  <span>Same/next-day delivery when medications are in stock</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-brand-navy mt-0.5 flex-shrink-0" />
                  <span>Chain-of-custody: recipient signature, time stamp, driver log</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-brand-navy mt-0.5 flex-shrink-0" />
                  <span>Adherence follow-ups to prevent medication gaps</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-brand-navy mb-4">Communication & Updates</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-brand-navy mt-0.5 flex-shrink-0" />
                  <span>Real-time updates to referring professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-brand-navy mt-0.5 flex-shrink-0" />
                  <span>Notification of significant medication changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-brand-navy mt-0.5 flex-shrink-0" />
                  <span>Coordination with prescribers for therapy adjustments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-brand-navy mt-0.5 flex-shrink-0" />
                  <span>Case status reporting throughout legal proceedings</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Documentation & Compliance */}
        <section className="py-10 md:py-14">
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl mb-6">
              Documentation & Compliance
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold text-brand-navy mb-3">Legal-Grade Documentation</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <DocumentTextIcon className="h-5 w-5 text-brand-navy mt-0.5 flex-shrink-0" />
                    <span>Itemized invoices with NDCs, lot/exp, quantity, unit cost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheckIcon className="h-5 w-5 text-brand-navy mt-0.5 flex-shrink-0" />
                    <span>Delivery proof with signature and handoff documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ClockIcon className="h-5 w-5 text-brand-navy mt-0.5 flex-shrink-0" />
                    <span>Secure record transfer via fax or encrypted portal</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-brand-navy mb-3">Compliance Standards</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-brand-navy mt-0.5 flex-shrink-0" />
                    <span>HIPAA-compliant handling of all patient information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-brand-navy mt-0.5 flex-shrink-0" />
                    <span>State and federal pharmacy regulation adherence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-brand-navy mt-0.5 flex-shrink-0" />
                    <span>Legal case documentation standards compliance</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="mt-6 text-sm text-slate-600">
              <strong>Note:</strong> We do not provide legal advice; our records support clinical and billing documentation for your case needs.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 md:py-14">
          <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8">
            <FaqAccordion
              items={[
                {
                  q: "How quickly can the first fill be delivered?",
                  a: "Same-day delivery is available for urgent needs when medications are in stock. Standard delivery is next-day for most prescriptions. Emergency delivery can be arranged by calling 313-914-3736."
                },
                {
                  q: "Do patients pay up front?",
                  a: "No upfront payment is required when we can bill insurance directly or coordinate with LOP (Letter of Protection) arrangements through your office. We verify benefits and coordinate billing to minimize patient out-of-pocket costs."
                },
                {
                  q: "Can you coordinate refills during a long case?",
                  a: "Yes, we maintain medication access throughout the entire legal process. We coordinate with prescribers for refills, adjustments, and new prescriptions as the case progresses."
                },
                {
                  q: "What documentation do you include with shipments?",
                  a: "Every delivery includes itemized invoices with NDC numbers, lot/expiration dates, quantities, delivery confirmation with signature, and timestamps. All documentation is formatted for legal case requirements."
                },
                {
                  q: "Do you handle prior authorizations?",
                  a: "Yes, we coordinate prior authorizations with insurance companies and can work with your office to expedite approvals when medically necessary for the patient's care."
                },
                {
                  q: "How do we send PHI securely?",
                  a: "PHI can be transmitted via our secure fax line (313-914-5105) or through our encrypted portal. We never accept PHI via regular email or unsecured methods."
                },
                {
                  q: "Do you serve only Detroit?",
                  a: "Our primary service area is Detroit and surrounding areas. We can arrange delivery to nearby locations on a case-by-case basis. All medications are dispensed from our single location at 3040 E 7 Mile, Detroit, MI 48234."
                }
              ]}
            />
          </div>
        </section>

        {/* Single-location panel */}
        <section className="py-10">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-navy">Our Pharmacy Location</h3>
            <div className="mt-3 text-slate-700">
              <p><strong>Xpress Care Pharmacy</strong></p>
              <p>3040 E 7 Mile, Detroit, MI 48234</p>
              <div className="mt-2 flex items-center gap-4">
                <span>Phone: <a href="tel:313-914-3736" className="text-brand-navy hover:underline">313-914-3736</a></span>
                <span>Fax: <a href="fax:313-914-5105" className="text-brand-navy hover:underline">313-914-5105</a></span>
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              All shipments originate from this location for consistent quality and documentation.
            </p>
          </div>
        </section>

        {/* Disclaimers */}
        <section className="pb-16">
          <p className="text-sm text-slate-600">
            Information on this page supports coordination of patient medication and is not legal advice. 
            Coverage and turnaround times depend on eligibility, inventory, and prescriber response. 
            All services subject to applicable state and federal regulations.
          </p>
        </section>
      </main>
    </>
  );
}
