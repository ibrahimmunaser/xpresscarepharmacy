import Image from 'next/image';
import Link from 'next/link';
import { ScaleIcon, UserGroupIcon, DocumentTextIcon, TruckIcon, CurrencyDollarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Auto Accident Medication Services | Xpress Care Pharmacy',
  description: 'Expert medication services for auto-accident cases. We coordinate with attorneys, physicians, and claim adjusters to ensure fast, accurate medication access and smooth case handling.',
};

export default function AutoAccidentPage() {
  return (
    <div className="bg-brand-navy min-h-screen">
      {/* HERO SECTION - Dark Navy Background */}
      <section className="w-full">
        <div className="max-w-content mx-auto px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-12">
            <div>
              <div className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
                Auto Accident Medication Services
              </div>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Expert Care for Auto-Accident Claims
              </h1>
              <p className="mt-4 max-w-prose text-white/90">
                At Xpress Care Pharmacy, we help patients involved in auto accidents get the medications they need—quickly and without complications. We work closely with attorneys, doctors, and claim adjusters to make the process smooth, so patients can focus on healing.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact?topic=auto-accident"
                  className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                >
                  Submit Your Referral
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                >
                  Contact us
                </Link>
              </div>
            </div>

            <div className="relative mx-auto hidden aspect-[4/3] w-full max-w-lg sm:block">
              <Image
                src="/images/Image 11.png"
                alt="Pharmacy staff coordinating prescriptions for auto-accident cases"
                fill
                className="rounded-xl object-cover"
                sizes="(min-width: 1024px) 520px, 50vw"
                priority
              />
              <div
                aria-hidden
                className="absolute -right-4 -bottom-4 hidden h-16 w-28 rounded-lg border border-white/20 sm:block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-14 sm:py-16">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-brand-navy/10 px-3 py-1 text-xs font-semibold text-brand-navy">
              Why Choose Xpress Care?
            </div>
            <h2 className="text-2xl font-extrabold text-brand-navy sm:text-3xl">
              Navigating Auto Accidents with Expertise and Care
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-brand-100">
                <ScaleIcon className="h-6 w-6 text-brand-navy" aria-hidden="true" />
              </div>
              <div className="font-semibold">For Attorneys</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="pl-5 relative before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500">
                  Timely Deliveries: dependable medication support, right when you need it.
                </li>
                <li className="pl-5 relative before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500">
                  Detailed Records: clear documentation to simplify your cases.
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-brand-100">
                <UserGroupIcon className="h-6 w-6 text-brand-navy" aria-hidden="true" />
              </div>
              <div className="font-semibold">For Physicians</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="pl-5 relative before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500">
                  Medication Accuracy: reliable details so your patients get the right care.
                </li>
                <li className="pl-5 relative before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500">
                  Collaborative Care: partnering with you to support outcomes.
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-brand-100">
                <DocumentTextIcon className="h-6 w-6 text-brand-navy" aria-hidden="true" />
              </div>
              <div className="font-semibold">For Claim Adjusters</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="pl-5 relative before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500">
                  Affordable Solutions: cost-effective medication services.
                </li>
                <li className="pl-5 relative before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500">
                  Streamlined Documentation: fast, hassle-free processes for efficiency.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR COMMITMENT - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-16">
          <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-2 sm:gap-12">
            <div>
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                Our Commitment to Auto Accident Care
              </h3>
              <p className="mt-4 max-w-prose text-white/90">
                We help patients recovering from auto accidents with exceptional care and attention. We ensure medications are obtained quickly and accurately while working hand-in-hand with medical professionals to keep cases moving smoothly.
              </p>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                    1
                  </div>
                  <div>
                    <div className="font-semibold text-white">Clear, Accurate Records</div>
                    <div className="text-white/80">Comprehensive documentation to ensure better patient care and streamlined reporting.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                    2
                  </div>
                  <div>
                    <div className="font-semibold text-white">Collaborative Patient Care</div>
                    <div className="text-white/80">Partnership with healthcare providers to ensure fast and reliable medication delivery when it's needed most.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                    3
                  </div>
                  <div>
                    <div className="font-semibold text-white">Prescription Management Made Simple</div>
                    <div className="text-white/80">Coordinating prescription refills directly with doctors' offices to save time and reduce hassle.</div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Contact us
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/image 27.png"
                alt="Consult area at pharmacy"
                fill
                className="rounded-xl object-cover"
                sizes="(min-width: 1024px) 560px, 90vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS FOR PATIENTS - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-14 sm:py-16">
          <h3 className="text-center text-2xl font-extrabold text-brand-navy sm:text-3xl">
            Benefits for Patients
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-5 text-sm shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-brand-100">
                <TruckIcon className="h-6 w-6 text-brand-navy" aria-hidden="true" />
              </div>
              <div className="font-semibold text-brand-navy">Fast Delivery</div>
              <div className="mt-2 text-slate-600">Free same-day or next-day prescription delivery to your door.</div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 text-sm shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-brand-100">
                <CurrencyDollarIcon className="h-6 w-6 text-brand-navy" aria-hidden="true" />
              </div>
              <div className="font-semibold text-brand-navy">No Upfront Costs</div>
              <div className="mt-2 text-slate-600">We'll bill insurance directly; no out-of-pocket expenses while your claim is open.</div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 text-sm shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-brand-100">
                <ShieldCheckIcon className="h-6 w-6 text-brand-navy" aria-hidden="true" />
              </div>
              <div className="font-semibold text-brand-navy">Support During Legal Cases</div>
              <div className="mt-2 text-slate-600">Continuous medication access, even during ongoing legal processes.</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES FOR LEGAL PROFESSIONALS - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-16">
          <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 sm:gap-12">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/image 28.png"
                alt="Pharmacist meeting with legal professional"
                fill
                className="rounded-xl object-cover"
                sizes="(min-width: 1024px) 560px, 90vw"
              />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                Services for Legal Professionals & Claim Adjusters
              </h3>
              <p className="mt-4 max-w-prose text-white/90">
                We specialize in supporting auto accident cases with reliable, efficient medication services. We collaborate with legal professionals and claim adjusters to ensure patients receive the care they need, while simplifying the claims process every step of the way.
              </p>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                    1
                  </div>
                  <div className="text-white/80">Timely Medication Management — accurate and on-time delivery to support positive case outcomes.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                    2
                  </div>
                  <div className="text-white/80">Clear Compliance & Documentation — detailed, compliant records to strengthen legal cases.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                    3
                  </div>
                  <div className="text-white/80">Affordable Solutions — cost-effective services to help optimize claim resolutions.</div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact?topic=legal"
                  className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
