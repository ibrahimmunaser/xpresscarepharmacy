import HeroWithCTAs from '@/app/(ui)/about/HeroWithCTAs';
import StatsStrip from '@/app/(ui)/about/StatsStrip';
import SplitSection from '@/app/(ui)/about/SplitSection';
import ConsultationCard from '@/app/(ui)/about/ConsultationCard';
import Testimonials from '@/app/(ui)/about/Testimonials';
import OrganizationSchema from '@/app/(ui)/about/OrganizationSchema';
import { 
  HERO_CONTENT, 
  ABOUT_STATS, 
  EXPERT_CARE_CONTENT, 
  MISSION_CONTENT
} from '@/app/(ui)/about/content';
import { googleReviews } from '@/lib/googleReviews';

export default function AboutPage() {
  return (
    <div className="bg-brand-navy min-h-screen">
      <OrganizationSchema />
      
      <main id="main-content">
        <HeroWithCTAs {...HERO_CONTENT} />
        <StatsStrip stats={ABOUT_STATS} />
        <SplitSection {...EXPERT_CARE_CONTENT} darkBackground={false} />
        <SplitSection {...MISSION_CONTENT} darkBackground={true} />
        <ConsultationCard darkBackground={true} />
        <Testimonials testimonials={googleReviews} darkBackground={false} />
      </main>
    </div>
  );
}

export const metadata = {
  title: 'About | Xpress Care Pharmacy, Detroit MI',
  description: 'A locally owned pharmacy in Detroit providing personalized medication management, MTM services, travel vaccinations, and free delivery. Expert care that feels like family.',
  keywords: 'Detroit pharmacy, medication management, MTM, travel vaccinations, prescription delivery, assisted living pharmacy, community pharmacy',
  canonical: 'https://xpresscarepharmacy.com/about',
  openGraph: {
    title: 'About | Xpress Care Pharmacy, Detroit MI',
    description: 'A locally owned pharmacy in Detroit providing personalized medication management, MTM services, travel vaccinations, and free delivery. Expert care that feels like family.',
    url: 'https://xpresscarepharmacy.com/about',
    siteName: 'Xpress Care Pharmacy',
    type: 'website',
    images: [
      {
        url: 'https://xpresscarepharmacy.com/images/Image 1.png',
        width: 1200,
        height: 630,
        alt: 'Xpress Care Pharmacy team providing expert care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Xpress Care Pharmacy, Detroit MI',
    description: 'A locally owned pharmacy in Detroit providing personalized medication management, MTM services, travel vaccinations, and free delivery.',
    images: ['https://xpresscarepharmacy.com/images/Image 1.png'],
  },
};
