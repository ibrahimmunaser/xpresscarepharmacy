import type { Metadata } from 'next';
import HeroSimple from '@/components/semaglutide/HeroSimple';
import BenefitsGrid from '@/components/semaglutide/BenefitsGrid';
import CommitmentSplit from '@/components/semaglutide/CommitmentSplit';
import ProcessList from '@/components/semaglutide/ProcessList';
import SupportSplit from '@/components/semaglutide/SupportSplit';
import ImportantSafetyInformation from '@/components/semaglutide/ImportantSafetyInformation';
import Faq from '@/components/semaglutide/Faq';
import SingleLocationCard from '@/components/semaglutide/SingleLocationCard';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Semaglutide (GLP-1) Weight Management | Xpress Care Pharmacy, Detroit MI',
    description: 'Clinician-supervised Semaglutide (GLP-1) weight management program at Xpress Care Pharmacy in Detroit. Personalized plans, ongoing support, and professional guidance.',
    keywords: 'semaglutide, GLP-1, weight management, prescription weight loss, medical supervision, Detroit pharmacy',
    alternates: {
    canonical: '/semaglutide',
    },
    openGraph: {
      title: 'Semaglutide (GLP-1) Weight Management | Xpress Care Pharmacy',
      description: 'Clinician-supervised Semaglutide (GLP-1) weight management program at Xpress Care Pharmacy in Detroit. Personalized plans, ongoing support, and professional guidance.',
      type: 'article',
      siteName: 'Xpress Care Pharmacy',
      url: 'https://xpresscarepharmacy.com/semaglutide',
      images: [
        {
          url: 'https://xpresscarepharmacy.com/images/tile_vaccination_closeup.png',
          width: 1200,
          height: 630,
          alt: 'Healthcare professional preparing a Semaglutide injection',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Semaglutide (GLP-1) Weight Management | Xpress Care Pharmacy',
      description: 'Clinician-supervised Semaglutide (GLP-1) weight management program at Xpress Care Pharmacy in Detroit. Personalized plans, ongoing support, and professional guidance.',
      images: ['https://xpresscarepharmacy.com/images/tile_vaccination_closeup.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function SemaglutidePage() {
  return (
    <div className="bg-brand-navy min-h-screen">
      {/* Hero data */}
      <SemaglutideContent />
    </div>
  );
}

function SemaglutideContent() {
  // Hero data
  const heroData = {
    kicker: "Semaglutide GLP-1 Injection Service",
    title: "Achieve Your Weight Loss Goals",
    desc: "Semaglutide GLP-1 is a clinically proven, safe, and effective medication designed to help individuals achieve their weight loss goals and improve their overall health. We work with insurances to obtain authorization for coverage of these medications to assist in weight loss goals.",
    primaryCta: {
      label: "Submit Your Referral",
      href: "/referrals",
      analytics: "cta:referral:semaglutide-hero"
    },
    secondaryCta: {
      label: "Contact us",
      href: "/contact",
      analytics: "cta:contact:semaglutide-hero"
    },
    image: {
      src: "/images/tile_vaccination_closeup.png",
      alt: "Healthcare professional preparing a Semaglutide injection",
      width: 800,
      height: 600,
      priority: true
    },
    disclaimer: "Semaglutide requires a prescription and clinical evaluation."
  };

  // Benefits data
  const benefitsData = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Clinically Studied Treatment",
      body: "[PLACEHOLDER] Evidence-based medication that has undergone extensive clinical trials for weight management when combined with lifestyle modifications."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Supports Health Markers",
      body: "[PLACEHOLDER] May help improve various metabolic health markers when used as prescribed and combined with proper diet and exercise."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Professional Guidance",
      body: "[PLACEHOLDER] Receive ongoing support and monitoring from qualified healthcare professionals throughout your treatment journey."
    }
  ];

  // Commitment data
  const commitmentData = {
    title: "Our Commitment to Safe Weight Loss Treatment",
    bulletPoints: [
      "Personalized treatment plan tailored to your individual health profile",
      "Ongoing follow-ups to monitor progress and adjust treatment as needed",
      "Expert medical supervision from qualified healthcare professionals"
    ],
    ctaLabel: "Call Us Now",
    ctaHref: "tel:3139143736",
    ctaAnalytics: "cta:call-now:semaglutide-commitment",
    image: {
      src: "/images/Image 32.png",
      alt: "Close-up of medication vial being drawn into syringe",
      width: 800,
      height: 600
    }
  };

  // Process steps
  const processSteps = [
    {
      title: "Personalized Treatment Plan",
      description: "[PLACEHOLDER] Our healthcare team will review your medical history, current medications, and weight management goals to develop a customized treatment approach."
    },
    {
      title: "Ongoing Support",
      description: "[PLACEHOLDER] Regular check-ins and monitoring to track your progress, address any concerns, and make adjustments to your treatment plan as needed."
    },
    {
      title: "Expert Medical Supervision",
      description: "[PLACEHOLDER] Continuous oversight from qualified healthcare professionals to ensure safe and effective treatment throughout your weight management journey."
    }
  ];

  // Support data
  const supportData = {
    title: "Professional Support Throughout Your Journey",
    description: "[PLACEHOLDER] Our experienced team provides comprehensive support throughout your weight management journey. From initial consultation to ongoing monitoring, we ensure you receive the personalized care and guidance needed for successful treatment outcomes.",
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
    ctaAnalytics: "cta:contact:semaglutide-support",
    image: {
      src: "/images/Image 33.png",
      alt: "Medical vials and supplies arranged on clinical surface",
      width: 800,
      height: 600
    }
  };

  // Safety information
  const safetyItems = [
    {
      title: "Medical Supervision Required",
      content: "[PLACEHOLDER COPY – replace after clinical/legal review] Semaglutide requires consultation with and prescription from a qualified healthcare provider. Treatment is not appropriate for everyone and requires ongoing medical supervision to monitor for effectiveness and potential side effects."
    },
    {
      title: "Treatment is Not for Everyone",
      content: "[PLACEHOLDER] Semaglutide may not be suitable for individuals with certain medical conditions, including personal or family history of thyroid cancer, multiple endocrine neoplasia syndrome, or severe gastrointestinal conditions. A thorough medical evaluation is required before starting treatment."
    },
    {
      title: "Common Side Effects",
      content: "[PLACEHOLDER] The most common side effects include nausea, vomiting, diarrhea, stomach pain, and constipation. These side effects typically decrease over time as your body adjusts to the medication. Serious side effects can occur and require immediate medical attention."
    },
    {
      title: "Lifestyle Requirements",
      content: "[PLACEHOLDER] Semaglutide is most effective when combined with a reduced-calorie diet and increased physical activity. Success requires commitment to lifestyle changes and adherence to your healthcare provider's recommendations."
    },
    {
      title: "Educational Purposes Only",
      content: "This information is provided for educational purposes only and does not replace professional medical advice, diagnosis, or treatment. Always consult your healthcare provider for complete prescribing information, contraindications, and personalized medical guidance."
    }
  ];

  // FAQ data
  const faqItems = [
    {
      question: "Who is eligible for Semaglutide GLP-1 treatment?",
      answer: "[PLACEHOLDER] Eligibility is determined by a qualified healthcare provider based on your medical history, current health status, and weight management goals. Generally prescribed for adults with specific BMI criteria and related health conditions."
    },
    {
      question: "How does Semaglutide work for weight management?",
      answer: "[PLACEHOLDER] Semaglutide works by mimicking a hormone that regulates appetite and food intake. It slows gastric emptying and promotes feelings of fullness, which can help reduce caloric intake when combined with diet and exercise."
    },
    {
      question: "What can I expect during treatment timeline?",
      answer: "[PLACEHOLDER] Treatment typically begins with a low dose that is gradually increased over several weeks. Most patients start seeing results within the first few months, with optimal effects usually achieved with consistent use and lifestyle modifications."
    },
    {
      question: "What side effects should I watch for?",
      answer: "[PLACEHOLDER] Common side effects include gastrointestinal symptoms like nausea, which often improve over time. Your healthcare provider will monitor you for any serious side effects and adjust treatment as needed."
    },
    {
      question: "How much does treatment cost and is it covered by insurance?",
      answer: "[PLACEHOLDER] Program pricing and insurance coverage vary based on individual circumstances and specific insurance plans. Please call our pharmacy to discuss costs and coverage options for your situation."
    },
    {
      question: "How do I get started with Semaglutide treatment?",
      answer: "[PLACEHOLDER] Contact our pharmacy to schedule a consultation. Our healthcare team will review your medical history, discuss your goals, and determine if Semaglutide is appropriate for your weight management plan."
    }
  ];


  // Location data
  const locationData = {
    name: "Xpress Care Pharmacy",
    address: "3040 E 7 Mile, Detroit, MI 48234",
    phone: "313-914-3736",
    hours: "Mon–Fri 10:00am–6:00pm"
  };

  // JSON-LD Schema
  const medicalWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Semaglutide (GLP-1) Weight Management",
    "description": "Clinician-supervised Semaglutide weight management program",
    "url": "https://xpresscarepharmacy.com/semaglutide",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://xpresscarepharmacy.com"
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "Specialty",
          "item": "https://xpresscarepharmacy.com/specialty"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Semaglutide (GLP-1)",
          "item": "https://xpresscarepharmacy.com/semaglutide"
        }
      ]
    },
    "publisher": {
      "@type": "Pharmacy",
      "name": "Xpress Care Pharmacy",
      "telephone": "313-914-3736",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3040 E 7 Mile",
        "addressLocality": "Detroit",
        "addressRegion": "MI",
        "postalCode": "48234",
        "addressCountry": "US"
      }
    }
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }}
      />

      <main>
        {/* Navigation breadcrumb would go here if implemented globally */}
        
        <HeroSimple {...heroData} />
        
        <BenefitsGrid 
          title="Benefits of Semaglutide GLP-1"
          items={benefitsData}
        />
        
        <CommitmentSplit {...commitmentData} />
        
        <ProcessList 
          title="Weight Loss Management with Semaglutide"
          steps={processSteps}
          ctaLabel="Call Us Now"
          ctaHref="tel:3139143736"
          ctaAnalytics="cta:call-now:semaglutide-process"
        />
        
        <SupportSplit {...supportData} />
        
        <ImportantSafetyInformation 
          title="Important Safety Information"
          items={safetyItems}
        />
        
        <Faq 
          title="Frequently Asked Questions"
          items={faqItems}
        />
        
        <SingleLocationCard {...locationData} />
      </main>
    </>
  );
}
