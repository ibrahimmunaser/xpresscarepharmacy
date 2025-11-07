import { Metadata } from 'next';
import { Phone, MapPin, Clock, Globe2, Syringe, Navigation } from 'lucide-react';
import Link from 'next/link';
import { SINGLE_LOCATION } from '@/lib/location';
import ContactForm from './_components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Xpress Care Pharmacy',
  description:
    'Get in touch with Xpress Care Pharmacy — address, hours, phone, fax, services, interactive map, and a secure message form.',
  alternates: { canonical: '/contact' },
  openGraph: { 
    title: 'Contact Xpress Care Pharmacy', 
    type: 'website',
    description: 'Get in touch with Xpress Care Pharmacy — address, hours, phone, fax, services, interactive map, and a secure message form.',
  },
};

function HoursTable() {
  const hours = SINGLE_LOCATION.hours;
  return (
    <table className="w-full text-sm">
      <tbody>
        {hours.map((h) => (
          <tr key={h.day} className="border-b border-gray-100">
            <td className="py-1 font-medium text-brand-navy">{h.day}</td>
            <td className="py-1 text-slate-600">
              {h.open && h.close ? `${h.open} - ${h.close}` : h.note ?? 'Closed'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ServicesBadges() {
  return (
    <div className="flex flex-wrap gap-2">
      {SINGLE_LOCATION.serviceBadges.map((b) => (
        <span
          key={b}
          className="inline-flex items-center rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-brand-navy"
        >
          <Syringe className="mr-1 h-3.5 w-3.5" />
          {b}
        </span>
      ))}
    </div>
  );
}

export default function ContactPage() {
  const { name, addressLine1, city, state, zip, phone, fax, languages, googleMapsPlaceUrl } = SINGLE_LOCATION;

  return (
    <div>
      {/* Page Heading - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-14">
          <header className="mb-10 text-center">
            <p className="text-xs uppercase tracking-widest text-slate-500">Contact Us</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-brand-navy">Get in Touch with Us</h1>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
              Have a question, need help with a prescription, or want to learn more about how we can support your health?
              We're here to help and would love to hear from you.
            </p>
          </header>
        </div>
      </section>

      {/* Full Width Google Map - Brand Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-12">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.8234567890123!2d-83.0458!3d42.4031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824d2b1f1234567%3A0x1234567890abcdef!2s3040%20E%207%20Mile%20Rd%2C%20Detroit%2C%20MI%2048234!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Xpress Care Pharmacy Location"
              className="w-full h-[500px]"
            />
          </div>
          
          {/* Get Directions Button */}
          <div className="mt-6 text-center">
            <Link
              href={googleMapsPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-white font-semibold rounded-lg hover:bg-brand-navy/90 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
            >
              <Navigation className="w-6 h-6" />
              Get Directions
            </Link>
          </div>
        </div>
      </section>

      {/* Location Information Below Map - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-12">
          <article className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold text-brand-navy text-center">Our Location</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-brand-navy" />
                <div className="text-slate-600">
                  <div className="font-medium">{name}</div>
                  <div>
                    {addressLine1}, {city}, {state} {zip}
                  </div>
                </div>
              </div>

              {/* Phone & Fax */}
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-brand-navy" />
                <div className="text-slate-600">
                  <div>
                    Phone:{' '}
                    <a className="font-medium hover:underline" href={`tel:${phone.replace(/[^0-9]/g, '')}`}>
                      {phone}
                    </a>
                  </div>
                  <div>
                    Fax: <span className="font-medium">{fax}</span>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-brand-navy" />
                <div className="w-full">
                  <div className="mb-1 font-medium text-brand-navy">Office Hours</div>
                  <HoursTable />
                </div>
              </div>

              {/* Languages */}
              <div className="flex items-start gap-3">
                <Globe2 className="mt-0.5 h-5 w-5 text-brand-navy" />
                <div className="text-slate-600">
                  <div className="font-medium">Languages</div>
                  <div>{languages.join(', ')}</div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="mt-6">
              <ServicesBadges />
            </div>

            {/* Quick Actions */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link
                href="/online-refill"
                className="rounded-md bg-[#10254D] px-4 py-2 text-sm font-medium text-white hover:opacity-95"
              >
                Online Refill
              </Link>
              <Link
                href="/transfer"
                className="rounded-md border border-[#10254D] px-4 py-2 text-sm font-medium text-brand-navy hover:bg-[#10254D] hover:text-white"
              >
                Transfer Prescription
              </Link>
              <a
                href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-brand-navy hover:bg-gray-50"
              >
                Call Pharmacy
              </a>
              <Link
                href="/services"
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-brand-navy hover:bg-gray-50"
              >
                View Services
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Contact Intro + Form / Connect blocks - Brand Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Connect with Us */}
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="mb-2 text-xl font-semibold text-brand-navy">Connect with Us</h2>
              <ul className="mt-4 space-y-6 text-slate-600">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-brand-navy" />
                  <div>
                    <div className="font-medium">Call Us</div>
                    <p className="text-slate-600">
                      Speak directly with our pharmacy team for immediate assistance with prescriptions and services.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-brand-navy" />
                  <div>
                    <div className="font-medium">Visit Us</div>
                    <p className="text-slate-600">
                      Stop by for personalized care and consultation with our pharmacists.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Send a Message */}
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="mb-2 text-xl font-semibold text-brand-navy">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
