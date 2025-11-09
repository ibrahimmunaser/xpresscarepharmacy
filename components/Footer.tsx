'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* CTA Banner */}
      <div className="bg-brand-navy text-white text-center py-4 border-t border-white/20">
        <div className="max-w-content mx-auto px-6">
          <span className="text-white/90">Need a refill? </span>
          <Link 
            href="/refill" 
            className="text-white font-semibold underline hover:text-white/80 transition-colors duration-200"
          >
            Submit your request online
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="site-footer bg-brand-navy text-white">
        <div className="max-w-content mx-auto px-6 py-12">
          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 text-center md:text-left">
            
            {/* Get in Touch */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4 font-heading">Get in Touch</h3>
              <address className="not-italic space-y-3 text-sm text-white/90 leading-relaxed">
                <div className="flex items-start gap-3 justify-center md:justify-start">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>3040 E 7 Mile<br />Detroit, MI 48234</span>
                </div>
                
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a 
                    href="tel:+13139145105" 
                    className="hover:text-white/70 transition-colors duration-200 py-1 px-2 -mx-2 rounded"
                  >
                    (313) 914-5105
                  </a>
                </div>
                
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>Fax: (313) 914-5105</span>
                </div>
              </address>
            </div>

            {/* Hours of Operation */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4 font-heading">Hours of Operation</h3>
              <div className="space-y-3 text-sm text-white/90">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-medium text-white">Monday – Friday</div>
                    <div className="text-white/80">9AM – 7PM</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-medium text-white">Saturday</div>
                    <div className="text-white/80">9AM – 5PM</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-medium text-white">Sunday</div>
                    <div className="text-white/80">Closed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <nav className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4 font-heading">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link 
                    href="/" 
                    className="text-white/90 hover:text-white/70 transition-colors duration-200 py-1 px-2 -mx-2 rounded inline-block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="text-white/90 hover:text-white/70 transition-colors duration-200 py-1 px-2 -mx-2 rounded inline-block"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/refill" 
                    className="text-white/90 hover:text-white/70 transition-colors duration-200 py-1 px-2 -mx-2 rounded inline-block"
                  >
                    Prescription Refills
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/transfer" 
                    className="text-white/90 hover:text-white/70 transition-colors duration-200 py-1 px-2 -mx-2 rounded inline-block"
                  >
                    Transfer Rx
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="text-white/90 hover:text-white/70 transition-colors duration-200 py-1 px-2 -mx-2 rounded inline-block"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Our Services */}
            <nav className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4 font-heading">Our Services</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link 
                    href="/services/immunizations" 
                    className="text-white/90 hover:text-white/70 transition-colors duration-200 py-1 px-2 -mx-2 rounded inline-block"
                  >
                    Immunizations
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services/free-delivery" 
                    className="text-white/90 hover:text-white/70 transition-colors duration-200 py-1 px-2 -mx-2 rounded inline-block"
                  >
                    Medication Delivery
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services/medication-therapy-management" 
                    className="text-white/90 hover:text-white/70 transition-colors duration-200 py-1 px-2 -mx-2 rounded inline-block"
                  >
                    Medication Therapy Management
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services/dispill-multi-dose-packaging" 
                    className="text-white/90 hover:text-white/70 transition-colors duration-200 py-1 px-2 -mx-2 rounded inline-block"
                  >
                    Multi-Dose Packaging
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services" 
                    className="text-white/90 hover:text-white/70 transition-colors duration-200 py-1 px-2 -mx-2 rounded inline-block"
                  >
                    Free Drug Disposal
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-content mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <p className="text-sm text-white/70">
                © 2025 Xpress Care Pharmacy. All Rights Reserved.
              </p>
              <p className="text-xs text-white/60">
                Powered by{' '}
                <a 
                  href="#" 
                  className="text-white hover:text-white/70 transition-colors duration-200 font-medium"
                  style={{ fontSize: '0.8rem' }}
                >
                  HikmaCoding
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
