import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { LOCATION } from '@/lib/location';

export const metadata = {
  title: 'Long-Term Care | Xpress Care Pharmacy',
  description:
    'Comprehensive, reliable pharmacy support for assisted living and nursing home residents — medication management, packaging, delivery, and pharmacist support.',
};

export default function LongTermCarePage() {
  return (
    <div className="bg-brand-navy min-h-screen">
      {/* HERO - Dark Navy Background */}
      <section className="w-full">
        <div className="max-w-content mx-auto px-6 py-14 sm:py-20">
          <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-10">
            <div>
              <div className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
                What about this service?
              </div>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Comprehensive Care for
                <br />
                Every Resident
              </h1>
              <p className="mt-4 max-w-prose text-white/90">
                Every resident in assisted living or nursing homes deserves to feel valued, comfortable, and supported. At Xpress Care Pharmacy, we help make that possible with personalized pharmacy services that fit each resident's unique needs—so they feel cared for in their daily lives.
              </p>
            </div>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
              {/* hero image on right */}
              <Image
                src="/images/Caregiver with senior resident smiling.png"
                alt="Caregiver with senior resident smiling"
                fill
                className="rounded-xl object-cover"
                sizes="(min-width: 1024px) 560px, 90vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Medication Management Made Easy - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-14">
          <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 sm:gap-12">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/Residents managing medications.png"
                alt="Residents managing medications"
                fill
                className="rounded-xl object-cover"
                sizes="(min-width: 1024px) 560px, 90vw"
              />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl">
                Medication Management
                <br />
                Made Easy
              </h2>
              <p className="mt-4 max-w-prose text-slate-600">
                Our goal is to make medication management less of a task and more of a reassurance. We focus on simplifying the process so your team feels confident and in control. We work to ensure prescriptions are filled accurately and on time—addressing concerns like timing, dosage, and interactions—so residents get the care they need without confusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Your Expert Pharmacy Partner - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-14">
          <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 sm:gap-12">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Your Expert Pharmacy
                <br />
                Partner
              </h2>
              <p className="mt-4 max-w-prose text-white/90">
                Running a healthcare facility is demanding—pharmacy shouldn't add to the burden. We collaborate with your staff to streamline medication processes, improve reliability, and remove friction from daily workflows. From medication reviews to special packaging and delivery options, we help your team focus on resident care.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/Pharmacist supporting facility staff.png"
                alt="Pharmacist supporting facility staff"
                fill
                className="rounded-xl object-cover"
                sizes="(min-width: 1024px) 560px, 90vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Taking the Stress Out of Medications - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-14">
          <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-2 sm:gap-12">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/image 35.png"
                alt="Caregiver assisting resident with blanket"
                fill
                className="rounded-xl object-cover"
                sizes="(min-width: 1024px) 560px, 90vw"
              />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl">
                Taking the Stress Out of
                <br />
                Medications
              </h2>
              <p className="mt-4 text-slate-600">
                We know safe, reliable medication management matters. Here's how we help:
              </p>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-brand-navy">
                  <span className="font-semibold text-brand-navy">Medication Reviews You Can Trust: </span>
                  Regular pharmacist-led reviews to keep therapies safe, effective, and working as intended.
                </li>
                <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-brand-navy">
                  <span className="font-semibold text-brand-navy">Customized Packaging for Simplicity: </span>
                  Clearly organized packaging to reduce confusion and administration errors.
                </li>
                <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-brand-navy">
                  <span className="font-semibold text-brand-navy">Reliable Delivery You Can Count On: </span>
                  On-time deliveries so medications are always available when needed.
                </li>
                <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-brand-navy">
                  <span className="font-semibold text-brand-navy">Support When You Need It Most: </span>
                  24/7 team access for questions or urgent situations so you're never alone.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT BANNER - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-8">
          <div className="grid grid-cols-1 overflow-hidden rounded-xl bg-brand-navy text-white sm:grid-cols-[1.2fr_1fr]">
            <div className="p-8 sm:p-10">
              <h3 className="text-2xl font-extrabold">
                Improve Medication Management and Get in Touch Today!
              </h3>
              <p className="mt-3 text-white/90">
                Looking to make medication management easier and more effective? Let's work together to
                simplify processes, save time, and deliver the best possible care for your residents.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                >
                  Contact us
                </Link>
              </div>
            </div>
            <div className="relative hidden aspect-[4/3] sm:block">
              <Image
                src="/images/Image 3.png"
                alt="Pharmacy staff coordinating medications"
                fill
                className="object-cover"
                sizes="560px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Preventing medication risks - Dark Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-14">
          <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 sm:gap-12">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/image 34.png"
                alt="Caregiver with resident"
                fill
                className="rounded-xl object-cover"
                sizes="(min-width: 1024px) 560px, 90vw"
              />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Preventing Medication Risks with Care You Can Trust
              </h2>
              <p className="mt-4 max-w-prose text-white/80">
                Managing medications can be complex, and mistakes can lead to serious health concerns. Our services are designed to ensure every dose is accurate and every treatment is effective—without adding friction to your team's day. We help you protect your residents' health while meeting the highest standards of care and regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you can expect - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-14">
          <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 sm:gap-12">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl">
                What You Can Expect with Our Partnership
              </h2>
              <p className="mt-4 max-w-prose text-slate-600">
                With our support, your facility will go beyond meeting health standards—you'll provide care that residents and their families can truly trust. Together, we'll create an environment where residents feel safe and well cared for, while enhancing your facility's reputation and ensuring smoother, more efficient operations.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/image 26.png"
                alt="Family reviewing care plan with staff"
                fill
                className="rounded-xl object-cover"
                sizes="(min-width: 1024px) 560px, 90vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONNECT WITH US - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-16">
          <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-2 sm:gap-12">
            {/* Icons + copy */}
            <div>
              <h3 className="text-2xl font-extrabold text-brand-navy">Connect with Us</h3>
              <p className="mt-2 text-slate-600">Connect with us via multiple channels</p>

              <ul className="mt-6 space-y-6">
                <li className="flex gap-3">
                  <span className="mt-1 h-8 w-8 rounded-md bg-slate-100" aria-hidden />
                  <div>
                    <div className="font-semibold text-brand-navy">If you have any questions</div>
                    <div className="text-slate-600">
                      Speak to a pharmacist for a consultation or reach out for personalized assistance.
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-8 w-8 rounded-md bg-slate-100" aria-hidden />
                  <div>
                    <div className="font-semibold text-brand-navy">Our Mobile App</div>
                    <div className="text-slate-600">Manage healthcare on-the-go with our app.</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-8 w-8 rounded-md bg-slate-100" aria-hidden />
                  <div>
                    <div className="font-semibold text-brand-navy">Get in touch</div>
                    <div className="text-slate-600">Visit us in person or call—we're here to help.</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Form Card (reuse global component) */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
