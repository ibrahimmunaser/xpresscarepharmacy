export type Stat = { 
  label: string; 
  value: string; 
  icon?: React.ReactNode; 
};

export type Bullet = { 
  text: string; 
  icon?: React.ReactNode; 
};

export type Testimonial = { 
  name: string; 
  role?: string; 
  quote: string; 
  rating?: 1 | 2 | 3 | 4 | 5; 
};

export type CTAButton = {
  label: string;
  href: string;
  variant?: 'primary' | 'outline' | 'ghost';
};

export type HeroWithCTAsProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: CTAButton;
  secondaryCta: CTAButton;
};

export type SplitSectionProps = {
  eyebrow?: string;
  title: string;
  content: string;
  bullets?: Bullet[];
  imageSrc: string;
  imageAlt: string;
  imageLeft?: boolean;
  ctaLink?: {
    label: string;
    href: string;
  };
  darkBackground?: boolean;
};





