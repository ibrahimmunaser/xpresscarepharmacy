import Image from "next/image";
import Script from "next/script";
import { Metadata } from "next";
import ServicesLayout from "../_components/ServicesLayout";
import FaqAccordion from "../_shared/FaqAccordion";
import TransferCompact from "../_shared/TransferCompact";
import DestinationAdvisor from "./_components/DestinationAdvisor";
import { TravelConsultButton } from "./_components/TravelConsultScheduler";
import { TravelUploadButton } from "./_components/TravelUpload";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Travel Vaccinations & Pre-Travel Health | Xpress Care Pharmacy – Detroit, MI",
    description:
      "Destination-specific vaccine guidance, timing advice, and easy booking. Ideally 4–6 weeks before travel. Schedule a pre-travel consult today.",
    alternates: { canonical: "/services/travel-vaccinations" },
    openGraph: {
      title: "Travel Vaccinations & Pre-Travel Health | Xpress Care Pharmacy",
      description: "Get the vaccines and guidance you need for safe international travel.",
      url: "https://xpresscarepharmacy.com/services/travel-vaccinations",
      type: "article",
    },
  };
}

export default async function Page() {
  return (
    <div className="bg-brand-navy min-h-screen">
      {/* JSON-LD Service Schema */}
      <Script
        id="travel-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Travel Vaccinations & Pre-Travel Health",
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
              "Destination-specific travel vaccination guidance, timing, and consults.",
            url: "https://www.example.com/services/travel-vaccinations",
          }),
        }}
      />

      {/* Hero Section - Dark Navy Background */}
      <section className="w-full">
        <ServicesLayout activeSlug="travel-vaccinations">
          <div className="py-8 md:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                  Travel Vaccinations & Pre-Travel Health
                </h1>
                <p className="text-white/90 leading-relaxed mb-6">
                  Get destination-specific guidance and the vaccines you need—timed to your trip.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <TravelConsultButton />
                  <a
                    href="#destination"
                    className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 transition-colors"
                  >
                    Check Destination Requirements
                  </a>
                </div>
                <div>
                  <TravelUploadButton />
                </div>
              </div>

              <div className="lg:order-last">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src="/images/tile_vaccination_closeup.png"
                    alt="Travel documents and vaccination vial prepared for an international trip"
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

      {/* Timing Reminder - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-brand-navy">
            <p className="text-sm">
              <span className="font-semibold">⏰ Timing Reminder:</span> Some vaccines require multiple doses or 10–14 days to reach full protection. Ideally book 4–6 weeks before travel.
            </p>
          </div>
        </div>
      </section>

      {/* Destination Advisory Tool - Dark Navy Background */}
      <section id="destination" className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl font-semibold text-white">Check Destination Requirements</h2>
          <p className="mt-2 text-white/80">
            This quick helper is informational only and does not store your data.
          </p>
          <div className="mt-4">
            <DestinationAdvisor />
          </div>
          <p className="mt-2 text-sm text-white/70">
            This tool is informational and does not replace a consult. For official guidance, see{" "}
            <a href="https://wwwnc.cdc.gov/travel" className="text-white underline hover:text-white/80">CDC Traveler's Health</a> and{" "}
            <a href="https://www.who.int/ith" className="text-white underline hover:text-white/80">WHO International Travel & Health</a>.
          </p>
        </div>
      </section>

      {/* Vaccines & Services Grid - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl font-semibold text-white">Travel Vaccines & Services</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              {
                category: "Core Travel Vaccines",
                items: [
                  { name: "Hepatitis A", desc: "Food/water-borne risk worldwide. 1–2 dose series." },
                  { name: "Typhoid", desc: "Injection or oral course. High-risk food/water areas." },
                  { name: "Yellow Fever*", desc: "Required for entry to many countries. Authorized centers only." },
                  { name: "Polio Booster", desc: "Some countries require recent vaccination proof." },
                ]
              },
              {
                category: "Specialized Protection",
                items: [
                  { name: "Rabies Pre-exposure", desc: "Animal contact risk. 3-dose series over 3-4 weeks." },
                  { name: "Meningococcal ACWY", desc: "Crowded conditions, certain regions." },
                  { name: "Japanese Encephalitis", desc: "Rural Asia, rice farming areas. 2-dose series." },
                  { name: "Cholera†", desc: "High-risk humanitarian settings. Oral vaccine." },
                ]
              },
              {
                category: "Essential Services",
                items: [
                  { name: "Routine Updates", desc: "Tdap, Flu, COVID-19 boosters as needed." },
                  { name: "Malaria Prevention", desc: "Prophylaxis counseling, repellents, guidance." },
                  { name: "Documentation", desc: "International Certificate of Vaccination (Yellow Card)." },
                  { name: "Travel Health Packs†", desc: "Traveler's diarrhea plan, first aid supplies." },
                ]
              }
            ].map((category) => (
              <div key={category.category} className="space-y-4">
                <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                {category.items.map((item) => (
                  <article key={item.name} className="rounded-lg border border-white/20 bg-white/10 p-4 shadow-sm">
                    <h4 className="font-semibold text-white">{item.name}</h4>
                    <p className="mt-1 text-sm text-white/80">{item.desc}</p>
                    <div className="mt-3 flex gap-3">
                      <a href="#faq" className="text-sm text-white underline underline-offset-2">Learn more</a>
                      <span className="rounded-full bg-white/20 px-2 py-1 text-xs text-white/70">Add to consult</span>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-1 text-xs text-white/60">
            <p>* Yellow Fever availability may be limited; administered only at authorized centers.</p>
            <p>† Prescription items require provider evaluation and prescription.</p>
          </div>
        </div>
      </section>

      {/* Vaccination Timeline - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl font-semibold text-brand-navy">When Should I Get Vaccinated?</h2>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-semibold text-red-800">
                  6-8+
                </div>
                <div>
                  <div className="font-semibold text-brand-navy">6–8+ weeks before travel</div>
                  <div className="text-sm text-slate-600">Rabies pre-exposure (3-dose series), Japanese Encephalitis series, Hepatitis B series</div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-800">
                  4-6
                </div>
                <div>
                  <div className="font-semibold text-brand-navy">4–6 weeks before travel</div>
                  <div className="text-sm text-slate-600">Yellow Fever*, Typhoid (injection/oral), Hepatitis A (dose 1), malaria consultation</div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-800">
                  2-4
                </div>
                <div>
                  <div className="font-semibold text-brand-navy">2–4 weeks before travel</div>
                  <div className="text-sm text-slate-600">Routine updates (Tdap, Flu, MMR) as needed</div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-800">
                  &lt;2
                </div>
                <div>
                  <div className="font-semibold text-brand-navy">Less than 2 weeks (late planning)</div>
                  <div className="text-sm text-slate-600">See us ASAP—some protection still possible; emphasize prevention behaviors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Insurance - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <div className="rounded-lg border border-white/20 bg-white/10 p-5">
            <h2 className="text-2xl font-semibold text-white">Pricing & Insurance</h2>
            <p className="mt-2 text-white/80">
              Pricing varies by vaccine and coverage. We'll check availability and costs during your consult.
            </p>
            <div className="mt-4 overflow-hidden rounded-lg border border-white/20">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-white/10">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-white">Vaccine</th>
                    <th className="px-4 py-3 font-semibold text-white">Est. Price (cash)</th>
                    <th className="px-4 py-3 font-semibold text-white">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-t border-white/20">
                    <td className="px-4 py-3">Hepatitis A</td>
                    <td className="px-4 py-3">Contact for pricing</td>
                    <td className="px-4 py-3">1–2 dose series</td>
                  </tr>
                  <tr className="border-t border-white/20">
                    <td className="px-4 py-3">Typhoid (inject/oral)</td>
                    <td className="px-4 py-3">Contact for pricing</td>
                    <td className="px-4 py-3">Oral course must finish before trip</td>
                  </tr>
                  <tr className="border-t border-white/20">
                    <td className="px-4 py-3">Yellow Fever*</td>
                    <td className="px-4 py-3">Contact for pricing</td>
                    <td className="px-4 py-3">Authorized center only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl font-semibold text-brand-navy">What to Expect</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-brand-navy">Before Your Visit</h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                <li>• Bring photo ID and past vaccination records</li>
                <li>• List current medications and allergies</li>
                <li>• Note pregnancy status if applicable</li>
                <li>• Prepare travel itinerary details</li>
              </ul>
            </div>
            
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-brand-navy">At Your Visit</h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                <li>• Review destination risks and prevention</li>
                <li>• Vaccine screening and safety assessment</li>
                <li>• Informed consent and vaccination</li>
                <li>• 15-minute observation period</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transfer Section - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <TransferCompact
            title="Transfer Prescriptions to Xpress Care Pharmacy"
            subtitle="One pharmacy for your routine and travel health needs."
          />
          <p className="mt-2 text-sm text-white/80">
            Prefer paper? Fax forms to{" "}
            <span className="font-medium text-white">313-914-5105</span>.{" "}
          </p>
        </div>
      </section>

      {/* Testimonials - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "They helped me plan vaccines for Thailand with perfect timing—no last-minute stress.",
              "Got all my shots and malaria pills in one place. Much easier than calling around.",
              "The destination tool showed me exactly what I needed for Kenya. Very helpful!"
            ].map((testimonial, index) => (
              <blockquote
                key={index}
                className="rounded-lg border border-slate-200 bg-white p-5 text-slate-800 shadow-sm"
              >
                &quot;{testimonial}&quot;
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Dark Navy Background */}
      <section id="faq" className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <h2 className="text-2xl font-semibold text-white">Travel Vaccination FAQ</h2>
          <div className="mt-4">
            <FaqAccordion
              items={[
                {
                  q: "Do I need Yellow Fever vaccination?",
                  a: "Depends on your destination and countries you're transiting through. Some countries require proof of vaccination for entry. We'll help you check the specific requirements for your itinerary."
                },
                {
                  q: "What if I'm leaving in less than 2 weeks?",
                  a: "See us ASAP! While some vaccines work better with more time, we can still provide important protection and focus on prevention behaviors like safe food/water practices and insect protection."
                },
                {
                  q: "Can you provide malaria prevention pills?",
                  a: "We coordinate with prescribers for malaria prophylaxis. Availability and recommendations vary by destination. We'll map the best options to your specific itinerary and health profile."
                },
                {
                  q: "Typhoid vaccine: injection or oral?",
                  a: "Both protect well. The injection is one dose but the oral course requires strict adherence and must be completed before travel. We'll help you choose based on your schedule and preferences."
                },
                {
                  q: "What about dengue and Zika precautions?",
                  a: "There are limited vaccine options for most travelers to dengue/Zika areas. We focus on prevention: effective repellents, protective clothing, and eliminating standing water around accommodations."
                },
                {
                  q: "Can children get travel vaccines here?",
                  a: "Yes, though age-based restrictions apply for certain vaccines. We'll advise on the best protection for your child based on their age, destination, and activities."
                },
                {
                  q: "Will my insurance cover travel vaccines?",
                  a: "Coverage varies widely by plan and vaccine. Some routine vaccines (like Tdap) are often covered, while travel-specific vaccines may not be. We'll help you understand your options."
                },
                {
                  q: "Do I need an International Certificate of Vaccination (Yellow Card)?",
                  a: "Some countries require official proof of certain vaccinations for entry. We can issue certificates when applicable or direct you to where you can obtain required documentation."
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Disclaimers - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-8 md:py-12">
          <div className="space-y-3 text-sm text-white/80">
            <p>
              Information provided on this page is educational and not a substitute for a clinical assessment. 
              Vaccine availability (e.g., Yellow Fever) may be limited or require referral to authorized centers.
            </p>
            <p>
              Prescription items such as malaria chemoprophylaxis, traveler's diarrhea antibiotics, and altitude medications require provider evaluation and prescription.
            </p>
            <p>
              For official travel health guidance, consult{" "}
              <a href="https://wwwnc.cdc.gov/travel" className="text-white underline hover:text-white/80">CDC Traveler's Health</a> and{" "}
              <a href="https://www.who.int/ith" className="text-white underline hover:text-white/80">WHO International Travel & Health</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
