import Image from "next/image";
import Script from "next/script";
import ServicesLayout from "../_components/ServicesLayout";
import { Metadata } from "next";
import PetInquiryForm from "./_components/PetInquiryForm";
import TransferCompact from "../_shared/TransferCompact";
import { Badge } from "../_shared/Badge";
import FaqAccordion from "../_shared/FaqAccordion";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Pet Care | Xpress Care Pharmacy – Detroit, MI",
    description:
      "Compounded veterinary medications, hard-to-find meds, dosing solutions, and coordination with your veterinarian. Serving Detroit pets and families.",
    alternates: { canonical: "/services/pet-care" },
    openGraph: {
      title: "Pet Care | Xpress Care Pharmacy",
      description:
        "Compounded veterinary medications and pet-friendly dosing solutions in Detroit.",
      url: "https://xpresscarepharmacy.com/services/pet-care",
      type: "article",
    },
  };
}

export default async function Page() {
  return (
    <div className="bg-brand-navy min-h-screen">
      {/* JSON-LD Service Schema */}
      <Script
        id="pet-care-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Veterinary Pharmacy & Pet Medication Compounding",
            provider: {
              "@type": "Pharmacy",
              name: "Xpress Care Pharmacy",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3040 E 7 Mile",
                addressLocality: "Detroit",
                addressRegion: "MI",
                postalCode: "48234",
                addressCountry: "US",
              },
              telephone: "313-914-3736",
            },
            areaServed: "Detroit, MI",
            description:
              "Compounded veterinary medications, dosing guidance, and veterinarian coordination.",
            url: "https://xpresscarepharmacy.com/services/pet-care",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Pet Care Services",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Veterinary Compounding" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hard-to-Find Veterinary Medications" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Administration Guidance" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vet Coordination" } },
              ],
            },
          }),
        }}
      />

      {/* Hero Section - Dark Navy Background */}
      <section className="w-full">
        <ServicesLayout activeSlug="pet-care">
          <div className="py-8 md:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                  Pet Care
                </h1>
                <p className="text-white/90 leading-relaxed mb-6">
                  From compounded meds to dosing guidance and coordination with your
                  veterinarian—our team helps your pets get the right treatment, fast.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-brand-navy text-white rounded-lg font-medium hover:bg-brand-navy/90 focus:outline-none focus:ring-2 focus:ring-brand-navy/60 focus:ring-offset-2 transition-colors"
                  >
                    Contact Us
                  </a>
                  <a
                    href="/transfer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 transition-colors"
                  >
                    Transfer Prescription
                  </a>
                </div>
              </div>

              <div className="lg:order-last">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src="/images/Image 9.png"
                    alt="Pharmacist prepares medication for a pet patient"
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

      {/* Specialized Services, What We Offer, Coordination & Solutions, The Difference - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl font-semibold text-brand-navy">
            Specialized Pet Medication Services
          </h2>
          <p className="text-slate-600 mt-4">
            Your family pets deserve the same quality care you receive. We provide veterinary
            compounding, flavoring, dose-form changes, and quick access to hard-to-find medications—
            all with friendly guidance on administration and timing.
          </p>

          <div className="mt-12 mb-3 flex items-center gap-2">
            <h2 className="text-2xl font-semibold text-brand-navy">
              What We Offer for Your Pets
            </h2>
            <Badge intent="info">Hard-to-Find Meds</Badge>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Custom compounding for flavor, form, and dose",
              "Hard-to-find veterinary medications",
              "Prescription transfer from other pharmacies",
              "Administration & timing guidance",
              "Vet-coordinated care for optimal outcomes",
              "Fast fills with clear instructions",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <span 
                  aria-hidden 
                  className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-brand-navy text-xs font-bold text-brand-navy"
                >
                  ✓
                </span>
                <p className="text-slate-600">{item}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-brand-navy">Veterinarian Coordination</h2>
              <p className="mt-3 text-slate-600">
                We collaborate directly with your veterinarian to confirm prescriptions, dosing, and
                refills—ensuring safe, accurate, and effective therapy for your pet&apos;s specific needs.
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-600">
                <li>Secure Rx verification and clarifications</li>
                <li>Monitoring for interactions and contraindications</li>
                <li>Refill sync to keep therapies on track</li>
              </ul>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-brand-navy">Pet-Friendly Solutions</h2>
              <p className="mt-3 text-slate-600">
                We help reduce stress for both you and your pet—with flavors they prefer, doses they can
                tolerate, and clear, step-by-step guidance to make administration easier.
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-600">
                <li>Flavor options (e.g., chicken, beef, fish)—where appropriate</li>
                <li>Alternate forms (e.g., liquid, capsule, topical) when permitted</li>
                <li>Handy measuring tools and demo instructions</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-brand-navy">The Xpress Care Difference</h2>
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-slate-700">
                Compassionate care extends to every member of your family, including your beloved pets. 
                We understand the special bond you share and are here to support your pet&apos;s health journey 
                with the same dedication and expertise we provide to all our patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA, Fax, Transfer, Inquiry - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <div className="rounded-xl border border-white/20 bg-white/10 p-6 shadow-sm">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Need a pet medication today?
                </h2>
                <p className="text-white/90">
                  We&apos;ll help you get it fast—call, text, or transfer your Rx now.
                </p>
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
                <a
                  href="#fax-info"
                  className="rounded-md border border-white/20 bg-transparent px-4 py-2 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Fax Instructions
                </a>
              </div>
            </div>
          </div>

          <div id="fax-info" className="mt-12 rounded-lg border border-white/20 bg-white/10 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-white">Fax Instructions</h3>
            <div className="mt-4 text-white/90">
              <p className="mb-2">To transfer by fax:</p>
              <ol className="list-decimal space-y-1 pl-5">
                <li>Have your current pharmacy fax your prescription to:</li>
                <li className="font-medium text-white">(313) 914-5105</li>
                <li>Include your name, phone number, and any special instructions</li>
                <li>We&apos;ll call you when it&apos;s ready for pickup or delivery</li>
              </ol>
            </div>
          </div>

          <div className="mt-12 rounded-lg border border-white/20 bg-white/10 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-white">Transfer to Xpress Care Pharmacy</h3>
            <p className="mt-2 text-white/90">We'll contact your current pharmacy and handle the rest.</p>
            
            <div className="mt-4 rounded-lg bg-white/10 border border-white/20 p-4">
              <h4 className="font-medium text-white">Transfer To:</h4>
              <div className="mt-2 text-sm text-white/80">
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
                className="rounded-md bg-white px-4 py-2 text-brand-navy shadow hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start Transfer
              </a>
              <a
                href="#fax-info"
                className="rounded-md border border-white/20 bg-transparent px-4 py-2 text-white shadow-sm hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Fax Instructions
              </a>
            </div>
          </div>

          <div id="pet-inquiry" className="mt-12">
            <h2 className="text-2xl font-semibold text-white">
              Questions about a pet prescription?
            </h2>
            <p className="mt-2 text-white/90">
              Send us a quick message—our team will follow up with guidance and next steps.
            </p>
            <div className="mt-6">
              <PetInquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl font-semibold text-brand-navy">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-4">
            {[
              {
                q: "Can you flavor my pet's medication?",
                a: "Yes, where permitted, we can compound flavors like chicken, beef, or fish to help with administration.",
              },
              {
                q: "Do you work directly with my veterinarian?",
                a: "We coordinate to verify prescriptions, confirm dosing, and manage refills for safe and effective outcomes.",
              },
              {
                q: "Can you change the dosage form?",
                a: "When allowed, we can compound alternatives (e.g., liquid, topical) to improve ease of dosing.",
              },
              {
                q: "Do you stock hard-to-find medications?",
                a: "We can help source or compound hard-to-find veterinary medications; reach out with your needs.",
              },
              {
                q: "How quickly can you fill a pet prescription?",
                a: "Most prescriptions can be filled the same day. We'll call you when it's ready for pickup or delivery.",
              },
            ].map((item, index) => (
              <div key={index} className="rounded-lg border border-slate-200 bg-white shadow-sm">
                <div className="p-4">
                  <h3 className="font-medium text-brand-navy">{item.q}</h3>
                  <p className="mt-2 text-slate-600">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
