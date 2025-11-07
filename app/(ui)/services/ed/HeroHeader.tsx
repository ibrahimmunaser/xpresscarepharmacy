'use client';

import Image from 'next/image';
import { LockClosedIcon } from '@heroicons/react/24/outline';

interface HeroHeaderProps {
  onConsultClick?: () => void;
}

export default function HeroHeader({ onConsultClick = () => {} }: HeroHeaderProps) {
  return (
    <div className="py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Erectile Dysfunction (ED) – Confidential Support You Can Trust
          </h1>
          
          <p className="text-white/90 leading-relaxed mb-6">
            Private conversations. Clear information about physician-prescribed treatments. We help you understand timing, interactions, side effects, and follow-up—without judgment.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-navy text-white rounded-lg font-medium hover:bg-brand-navy/90 focus:outline-none focus:ring-2 focus:ring-brand-navy/60 focus:ring-offset-2 transition-colors"
            >
              Speak with a Pharmacist
            </a>
            
            <a
              href="/online-refill"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 transition-colors"
            >
              Refill ED Prescription
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-white/80">
            <LockClosedIcon className="h-4 w-4" aria-hidden="true" />
            <span>Your information is kept confidential.</span>
          </div>
        </div>
        <div className="lg:order-last">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/images/Image 6.png"
              alt="Pharmacist discussing ED treatment options privately with a patient"
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
  );
}









