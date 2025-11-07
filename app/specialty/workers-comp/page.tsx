import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheckIcon, BuildingOfficeIcon, ExclamationTriangleIcon, BoltIcon, TruckIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Worker\'s Compensation Support | Xpress Care Pharmacy',
  description: 'Dedicated worker\'s compensation medication support: quick access to medications, streamlined claims coordination, refills & delivery, and tailored recovery support.',
};

export default function WorkersCompPage() {
  return (
    <div className="bg-brand-navy min-h-screen">
      {/* HERO - Dark Navy Background */}
      <section className="w-full">
        <div className="max-w-content mx-auto px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 sm:gap-12">
            <div>
              <div className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
                Worker's Compensation Service
              </div>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Worker's Compensation Support at Xpress Care
              </h1>
              <p className="mt-4 max-w-prose text-white/90">
                We provide dedicated worker's compensation services to support injured workers with medical care, claims management, and recovery—quickly and without complications.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact?topic=workers-comp"
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
                src="/images/Image 13.png"
                alt="Handshake during worker's compensation coordination"
                fill
                className="rounded-xl object-cover"
                sizes="(min-width: 1024px) 520px, 50vw"
                priority
              />
              <div aria-hidden className="absolute -right-4 -bottom-4 hidden h-16 w-28 rounded-lg border border-white/20 sm:block" />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS HEADER + 3 CARDS - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-14 sm:py-16">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-brand-navy/10 px-3 py-1 text-xs font-semibold text-brand-navy">
              Why is Worker Compensation Important?
            </div>
            <h2 className="text-2xl font-extrabold text-brand-navy sm:text-3xl">
              Benefits of Worker Compensation
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-brand-100">
                <ShieldCheckIcon className="h-6 w-6 text-brand-navy" aria-hidden="true" />
              </div>
              <div className="font-semibold text-brand-navy">Employee Protection</div>
              <div className="mt-2 text-sm text-slate-600">Comp ensures employees receive needed care and income support after workplace injuries—reducing financial stress and improving recovery.</div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-brand-100">
                <BuildingOfficeIcon className="h-6 w-6 text-brand-navy" aria-hidden="true" />
              </div>
              <div className="font-semibold text-brand-navy">Employer Protection</div>
              <div className="mt-2 text-sm text-slate-600">Helps manage employer liability; accident claims follow structured processes that minimize surprises.</div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-brand-100">
                <ExclamationTriangleIcon className="h-6 w-6 text-brand-navy" aria-hidden="true" />
              </div>
              <div className="font-semibold text-brand-navy">Workplace Safety</div>
              <div className="mt-2 text-sm text-slate-600">Encourages safer environments via reporting, training, and process improvements informed by compensation claims.</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED PARTNER - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-16">
          <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-2 sm:gap-12">
            <div>
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                Your Trusted Partner in Worker's Compensation Support
              </h3>
              <p className="mt-4 max-w-prose text-white/90">
                We provide comprehensive services to support both employers and injured workers through every step of the process.
              </p>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                    1
                  </div>
                  <div>
                    <div className="font-semibold text-white">Streamlined Claims Process</div>
                    <div className="text-white/80">We assist with filing and managing worker's compensation claims to ensure a smooth and timely process.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                    2
                  </div>
                  <div>
                    <div className="font-semibold text-white">Medical Care Coordination</div>
                    <div className="text-white/80">We ensure injured workers receive the necessary medical care—from initial assessments to ongoing treatment.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                    3
                  </div>
                  <div>
                    <div className="font-semibold text-white">Legal and Insurance Guidance</div>
                    <div className="text-white/80">We help navigate legal and insurance processes, ensuring claims are supported and employers stay compliant.</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact?topic=workers-comp"
                  className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Call Us Now
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/image 26.png"
                alt="Handshake close-up during claims support"
                fill
                className="rounded-xl object-cover"
                sizes="(min-width: 1024px) 560px, 90vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-14 sm:py-16">
          <h3 className="text-center text-2xl font-extrabold text-brand-navy sm:text-3xl">
            Why Choose Xpress Care for Worker's Compensation Services?
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-5 text-sm shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-brand-100">
                <BoltIcon className="h-6 w-6 text-brand-navy" aria-hidden="true" />
              </div>
              <div className="font-semibold text-brand-navy">Quick Access to Medication</div>
              <div className="mt-2 text-slate-600">Injured workers gain rapid access to medications and treatment, allowing for faster recovery and a quicker return to work.</div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 text-sm shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-brand-100">
                <TruckIcon className="h-6 w-6 text-brand-navy" aria-hidden="true" />
              </div>
              <div className="font-semibold text-brand-navy">Prescription Refills & Delivery</div>
              <div className="mt-2 text-slate-600">We provide easy prescription refills and same-day delivery for seamless recovery without visiting the pharmacy.</div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 text-sm shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-brand-100">
                <UserGroupIcon className="h-6 w-6 text-brand-navy" aria-hidden="true" />
              </div>
              <div className="font-semibold text-brand-navy">Tailored Recovery Support</div>
              <div className="mt-2 text-slate-600">We design personalized recovery plans to help workers recover and boost health and productivity.</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact?topic=workers-comp"
              className="inline-flex items-center rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-16">
          <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 sm:gap-12">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/image 22.png"
                alt="Pharmacist documenting worker's compensation case"
                fill
                className="rounded-xl object-cover"
                sizes="(min-width: 1024px) 560px, 90vw"
              />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                Xpress Care's Process for Worker's Compensation Support
              </h3>
              <p className="mt-4 max-w-prose text-white/80">
                We streamline the process to ensure injured workers receive the medical care and support they need, while helping employers navigate claims efficiently.
              </p>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                    1
                  </div>
                  <div className="text-white/80">Initial Consultation & Injury Assessment — comprehensive intake covering injury, medical needs, and claims context.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                    2
                  </div>
                  <div className="text-white/80">Coordinated Medical Treatment & Care Plan — immediate and ongoing medical treatment including pain management, therapy, and medications.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                    3
                  </div>
                  <div className="text-white/80">Ongoing Claims & Progress Monitoring — regular case reviews and documentation for efficient processing.</div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact?topic=workers-comp"
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
