'use client';

import Image from 'next/image';
import { useState } from 'react';

interface HeroHeaderProps {
  onEnrollClick?: () => void;
}

export default function HeroHeader({ onEnrollClick = () => {} }: HeroHeaderProps) {
  return (
    <div className="py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Dispill® Multi-Dose Packaging
          </h1>
          
          <p className="text-white/90 leading-relaxed mb-6">
            Color-coded blister packs organized by day and time. Improve adherence, reduce confusion, and simplify refills.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-navy text-white rounded-lg font-medium hover:bg-brand-navy/90 focus:outline-none focus:ring-2 focus:ring-brand-navy/60 focus:ring-offset-2 transition-colors"
            >
              Enroll in Dispill
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 transition-colors"
            >
              Talk to a Pharmacist
            </a>
          </div>
        </div>
        <div className="lg:order-last">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/images/Image 5.png"
              alt="Dispill blister pack organized by day and time"
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
