'use client';
import Link from 'next/link';
import { Vaccine } from './types';

const vaccines: Vaccine[] = [
  {
    id: 'covid-19',
    name: 'COVID-19',
    summary: 'Updated vaccines for current variants. Recommended for ages 6 months and up.',
    minAge: 0.5,
    imageSrc: '/images/vaccines/covid-placeholder.jpg',
    category: 'routine'
  },
  {
    id: 'influenza',
    name: 'Influenza (Flu)',
    summary: 'Annual protection against seasonal flu strains. Recommended for ages 6 months and up.',
    minAge: 0.5,
    imageSrc: '/images/vaccines/flu-placeholder.jpg',
    category: 'seasonal'
  },
  {
    id: 'hepatitis-a',
    name: 'Hepatitis A',
    summary: 'Protection against liver infection. Recommended for travelers and high-risk groups.',
    minAge: 12,
    imageSrc: '/images/vaccines/hep-a-placeholder.jpg',
    category: 'travel'
  },
  {
    id: 'hepatitis-b',
    name: 'Hepatitis B',
    summary: 'Long-term protection against chronic liver infection. Part of routine series.',
    minAge: 0,
    imageSrc: '/images/vaccines/hep-b-placeholder.jpg',
    category: 'routine'
  },
  {
    id: 'hpv',
    name: 'HPV',
    summary: 'Prevents cancer-causing HPV infections. Recommended ages 9-26, catch-up to 45.',
    minAge: 9,
    notes: 'Most effective when given before exposure',
    imageSrc: '/images/vaccines/hpv-placeholder.jpg',
    category: 'routine'
  },
  {
    id: 'mmr',
    name: 'MMR',
    summary: 'Measles, Mumps, Rubella protection. Required for school and travel.',
    minAge: 12,
    imageSrc: '/images/vaccines/mmr-placeholder.jpg',
    category: 'routine'
  },
  {
    id: 'varicella',
    name: 'Varicella (Chickenpox)',
    summary: 'Prevents chickenpox and reduces shingles risk later in life.',
    minAge: 12,
    imageSrc: '/images/vaccines/varicella-placeholder.jpg',
    category: 'routine'
  },
  {
    id: 'pneumococcal',
    name: 'Pneumococcal (PCV/PPSV)',
    summary: 'Prevents pneumonia and meningitis. Recommended for children and adults 65+.',
    minAge: 2,
    imageSrc: '/images/vaccines/pneumo-placeholder.jpg',
    category: 'routine'
  },
  {
    id: 'tdap',
    name: 'Tdap/Td',
    summary: 'Tetanus, Diphtheria, Pertussis protection. Booster every 10 years.',
    minAge: 7,
    imageSrc: '/images/vaccines/tdap-placeholder.jpg',
    category: 'routine'
  },
  {
    id: 'shingles',
    name: 'Shingles (Shingrix)',
    summary: 'Prevents painful shingles outbreak. Recommended for adults 50 and older.',
    minAge: 50,
    imageSrc: '/images/vaccines/shingles-placeholder.jpg',
    category: 'routine'
  },
  {
    id: 'meningococcal',
    name: 'Meningococcal',
    summary: 'Prevents meningitis. Required for college students and travelers.',
    minAge: 11,
    imageSrc: '/images/vaccines/meningo-placeholder.jpg',
    category: 'special'
  },
  {
    id: 'travel-vaccines',
    name: 'Travel Vaccines',
    summary: 'Destination-specific vaccines including Yellow Fever, Japanese Encephalitis.',
    notes: 'By availability - consult for specific destinations',
    imageSrc: '/images/vaccines/travel-placeholder.jpg',
    category: 'travel'
  }
];

interface VaccineCardGridProps {
  onVaccineSelect?: (vaccineId: string) => void;
}

export default function VaccineCardGrid({ onVaccineSelect }: VaccineCardGridProps) {
  const getCategoryIcon = (category: string) => {
    const iconClass = "w-5 h-5 text-brand-navy";
    
    switch (category) {
      case 'routine':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'travel':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'seasonal':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      default:
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
    }
  };

  return (
    <>
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-6">
          Vaccines We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vaccines.map((vaccine) => (
            <div
              key={vaccine.id}
              className="rounded-xl border border-slate-200 bg-white shadow-sm p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-[#10254D]/10 rounded-lg flex items-center justify-center">
                  {getCategoryIcon(vaccine.category || 'routine')}
                </div>
                <h3 className="text-lg font-semibold text-brand-navy">{vaccine.name}</h3>
              </div>
              
              <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                {vaccine.summary}
              </p>
              
              {vaccine.minAge !== undefined && (
                <p className="text-xs text-slate-600 mb-3">
                  <strong>Min Age:</strong> {vaccine.minAge < 1 ? `${vaccine.minAge * 12} months` : `${vaccine.minAge} years`}
                </p>
              )}
              
              {vaccine.notes && (
                <p className="text-xs text-slate-600 mb-3 italic">
                  {vaccine.notes}
                </p>
              )}
              
              <div className="flex gap-2">
                <Link
                  href="/contact"
                  className="flex-1 px-3 py-2 bg-brand-navy text-white rounded-lg text-sm font-medium hover:bg-brand-navy/90 focus:outline-none focus:ring-2 focus:ring-brand-navy/60 transition-colors text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}










