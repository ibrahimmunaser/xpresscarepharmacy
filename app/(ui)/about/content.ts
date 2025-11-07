import { Stat, Bullet, Testimonial, HeroWithCTAsProps, SplitSectionProps } from '../types/content';

export const ABOUT_STATS: Stat[] = [
  { label: 'Happy Clients', value: '15k+' },
  { label: 'Online Refills', value: '25k+' },
  { label: 'Transfer Prescriptions', value: '5k+' },
];

export const EXPERT_BULLETS: Bullet[] = [
  { text: 'Expert pharmacist guidance on your medications and health questions' },
  { text: 'Specialized care for assisted living facilities and group homes' },
  { text: 'Medication Therapy Management (MTM) to optimize treatment outcomes' },
  { text: 'Convenient services like travel vaccinations and free medication delivery' },
];

export const TESTIMONIALS: Testimonial[] = [
  { 
    name: 'Maria Santos', 
    role: 'Regular Customer', 
    quote: 'The personal attention is incredible. They know my name, my medications, and always take time to answer my questions. It truly feels like family.', 
    rating: 5 
  },
  { 
    name: 'David Chen', 
    role: 'Family Caregiver', 
    quote: 'They coordinated perfectly with our doctor and delivered medications right to my mother\'s assisted living facility. Such peace of mind.', 
    rating: 5 
  },
  { 
    name: 'Robert Williams', 
    role: 'Long-time Customer', 
    quote: 'Consistent care and genuine concern for my health. I\'ve been coming here for years and wouldn\'t trust anyone else with my prescriptions.', 
    rating: 5 
  },
];

export const HERO_CONTENT: HeroWithCTAsProps = {
  eyebrow: 'Who we are',
  title: 'A Pharmacy That Feels Like Family',
  subtitle: 'As a locally owned pharmacy, we take the time to understand your health needs and guide you with care—every step of the way.',
  primaryCta: {
    label: 'Online Refill',
    href: '/refill',
    variant: 'primary'
  },
  secondaryCta: {
    label: 'Transfer Prescriptions',
    href: '/transfer',
    variant: 'outline'
  }
};

export const EXPERT_CARE_CONTENT: SplitSectionProps = {
  title: 'Expert Care, Personalized by Our Team',
  content: 'Our experienced pharmacists provide comprehensive support for all your medication needs, from routine prescriptions to specialized care coordination.',
  bullets: EXPERT_BULLETS,
  imageSrc: '/images/Image 1.png',
  imageAlt: 'Professional pharmacy team consulting with customers',
  imageLeft: false
};

export const MISSION_CONTENT: SplitSectionProps = {
  eyebrow: 'Our Mission',
  title: 'Your Health, Our Priority',
  content: 'At Xpress Care Pharmacy, we know that even the smallest detail in your medication can make a big difference in your health. That\'s why we approach every prescription with meticulous care and attention to detail, ensuring you receive not just medication, but comprehensive health support.',
  imageSrc: '/images/Image 2.png',
  imageAlt: 'Professional pharmacy team consulting with customers',
  imageLeft: true,
  ctaLink: {
    label: 'Learn more about our services',
    href: '/services'
  }
};

export const ORGANIZATION_DATA = {
  name: 'Xpress Care Pharmacy',
  address: {
    streetAddress: '3040 E 7 Mile',
    addressLocality: 'Detroit',
    addressRegion: 'MI',
    postalCode: '48234',
    addressCountry: 'US'
  },
  telephone: '313-914-3736',
  faxNumber: '313-914-5105',
  openingHours: [
    'Mo-Fr 10:00-18:00'
  ],
  url: 'https://xpresscarepharmacy.com',
  // TODO: Add actual social media URLs when available
  sameAs: [
    // 'https://facebook.com/xpresscarepharmacy',
    // 'https://instagram.com/xpresscarepharmacy'
  ]
};










