import Link from 'next/link'
import { MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function ContactCallout() {
  return (
    <section className="py-16 bg-brand-navy">
      {/* Section Header */}
      <div className="max-w-content mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
          Visit Our Pharmacy
        </h2>
        <p className="text-gray-200 text-lg">
          Conveniently located in Detroit, Michigan
        </p>
      </div>

      {/* Full Width Google Map */}
      <div className="mb-12 w-full">
        <div className="relative overflow-hidden shadow-lg">
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
          <a
            href="https://www.google.com/maps/dir//3040+E+7+Mile+Rd,+Detroit,+MI+48234"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-navy font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
          >
            <MapPinIcon className="w-6 h-6" />
            Get Directions
          </a>
        </div>
      </div>

      <div className="max-w-content mx-auto px-6">
        {/* Contact Information - Full Width Below Map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPinIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 font-heading">Address</h3>
              <p className="text-gray-200 leading-relaxed">
                3040 E 7 Mile Rd<br />
                Detroit, MI 48234
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <PhoneIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 font-heading">Phone</h3>
              <a 
                href="tel:+13139145105"
                className="text-gray-200 hover:text-white transition-colors duration-200 text-lg"
              >
                (313) 914-5105
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <ClockIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 font-heading">Hours</h3>
              <div className="text-gray-200 space-y-1">
                <div className="flex justify-between gap-4">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="font-medium">Saturday:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="font-medium">Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Buttons - Centered Below Contact Info */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="tel:+13139145105"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-brand-navy font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
          >
            <PhoneIcon className="w-6 h-6" />
            Call Now
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-navy transition-all duration-200 text-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
