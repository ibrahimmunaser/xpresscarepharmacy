import Image from 'next/image';
import Link from 'next/link';
import { ScaleIcon, HeartIcon, SparklesIcon, ClockIcon, CurrencyDollarIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Semaglutide GLP-1 Injections | Xpress Care Pharmacy',
  description: 'Clinically proven Semaglutide GLP-1 weight loss program: safe, effective treatment, personalized plan, ongoing support, transparent pricing.',
};

export default function SemaglutidePage() {
  return (
    <div className="bg-brand-navy min-h-screen">
      {/* HERO - Dark Navy Background */}
      <section className="w-full">
        <div className="max-w-content mx-auto px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 sm:gap-12">
            <div>
              <div className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
                Semaglutide GLP-1 Injection Service
              </div>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Achieve Your Weight Loss Goals with Just $25/Week
              </h1>
              <p className="mt-4 max-w-prose text-white/90">
                Semaglutide GLP-1 is a clinically proven, safe, and effective medication designed to help individuals achieve their weight loss goals and improve their overall health.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact?topic=semaglutide"
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
                src="/images/Caregiver with senior resident smiling.png"
                alt="Semaglutide injection in clinical setting"
                fill
                className="rounded-xl object-cover object-left"
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
              Semaglutide GLP-1
            </div>
            <h2 className="text-2xl font-extrabold text-brand-navy sm:text-3xl">
              Benefit of Semaglutide GLP-1
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-brand-100">
                <ScaleIcon className="h-6 w-6 text-brand-navy" aria-hidden="true" />
              </div>
              <div className="font-semibold text-brand-navy">Proven Weight Loss Treatment</div>
              <div className="mt-2 text-sm text-slate-600">Clinically proven program with significant average weight loss. Safe, effective, and supervised by healthcare professionals.</div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-brand-100">
                <HeartIcon className="h-6 w-6 text-brand-navy" aria-hidden="true" />
              </div>
              <div className="font-semibold text-brand-navy">Improves Health Markers</div>
              <div className="mt-2 text-sm text-slate-600">Supports weight loss and better metabolic health, including blood sugar, insulin sensitivity, and lipid profile.</div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-brand-100">
                <SparklesIcon className="h-6 w-6 text-brand-navy" aria-hidden="true" />
              </div>
              <div className="font-semibold text-brand-navy">Boosts Self-Esteem</div>
              <div className="mt-2 text-sm text-slate-600">With progress you can see and feel, many patients report improved confidence and overall well-being.</div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMITMENT BAND - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-16">
          <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-2 sm:gap-12">
            <div className="order-2 sm:order-1">
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                Our Commitment to Safe Weight Loss Treatment
              </h3>
              <p className="mt-4 max-w-prose text-white/90">
                We offer Semaglutide GLP-1 injections—clinically proven to aid weight loss and blood sugar management—delivered via a personalized plan with expert supervision.
              </p>

              <div className="mt-6">
                <div className="mb-3 text-sm font-semibold text-white">
                  Weight Loss Management with Semaglutide
                </div>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                      1
                    </div>
                    <div>
                      <div className="font-semibold text-white">Personalized Treatment Plan</div>
                      <div className="text-white/80">Customized plan tailored to your goals and health profile.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                      2
                    </div>
                    <div>
                      <div className="font-semibold text-white">Ongoing Support</div>
                      <div className="text-white/80">Regular follow-ups to track progress and adjust treatment.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                      3
                    </div>
                    <div>
                      <div className="font-semibold text-white">Expert Medical Supervision</div>
                      <div className="text-white/80">Semaglutide injections performed under clinical oversight.</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href="/contact?topic=semaglutide"
                    className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  >
                    Call Us Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="order-1 relative aspect-[4/3] w-full sm:order-2">
              <Image
                src="/images/image 29.png"
                alt="Preparing a Semaglutide injection"
                fill
                className="rounded-xl object-cover"
                sizes="(min-width: 1024px) 560px, 90vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-14 sm:py-16">
          <h3 className="text-center text-2xl font-extrabold text-brand-navy sm:text-3xl">
            Why Choose Semaglutide?
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-5 text-sm shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-brand-100">
                <ClockIcon className="h-6 w-6 text-brand-navy" aria-hidden="true" />
              </div>
              <div className="font-semibold text-brand-navy">Fast Acting Results</div>
              <div className="mt-2 text-slate-600">Noticeable improvements often within weeks of starting Semaglutide.</div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 text-sm shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-brand-100">
                <CurrencyDollarIcon className="h-6 w-6 text-brand-navy" aria-hidden="true" />
              </div>
              <div className="font-semibold text-brand-navy">No Hidden Cost</div>
              <div className="mt-2 text-slate-600">Transparent pricing: just $25 per week, with direct insurance billing where applicable.</div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 text-sm shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-brand-100">
                <ChartBarIcon className="h-6 w-6 text-brand-navy" aria-hidden="true" />
              </div>
              <div className="font-semibold text-brand-navy">Comprehensive Health Benefits</div>
              <div className="mt-2 text-slate-600">Helps lower blood sugar, improve heart health markers, and enhance overall well-being.</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact?topic=semaglutide"
              className="inline-flex items-center rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* 3-STEP PROCESS - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-16">
          <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 sm:gap-12">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/image 22.png"
                alt="Semaglutide vial and syringe"
                fill
                className="rounded-xl object-cover"
                sizes="(min-width: 1024px) 560px, 90vw"
              />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                Xpress Care's 3-Step Process for Semaglutide Treatment
              </h3>
              <p className="mt-4 max-w-prose text-white/80">
                A seamless, effective experience with personalized care and ongoing support throughout your journey.
              </p>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                    1
                  </div>
                  <div className="text-white/80">Initial Consultation & Health Assessment — goals, medical history, and suitability review.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                    2
                  </div>
                  <div className="text-white/80">Personalized Treatment Plan — weekly injections + lifestyle guidance tailored to you.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                    3
                  </div>
                  <div className="text-white/80">Follow-ups and Monitoring — regular check-ins and progress tracking for optimal outcomes.</div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact?topic=semaglutide"
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
