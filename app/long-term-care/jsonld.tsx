import { content } from './content';

export default function JsonLd() {
  const { contact } = content;
  
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Xpress Care Pharmacy – Long-Term Care Services',
    url: 'https://xpresscarepharmacy.com/long-term-care',
    telephone: `+1-${contact.pharmacy.phone.replace(/\D/g, '')}`,
    faxNumber: `+1-${contact.pharmacy.fax.replace(/\D/g, '')}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3040 E 7 Mile',
      addressLocality: 'Detroit',
      addressRegion: 'MI',
      postalCode: '48234',
      addressCountry: 'US'
    },
    areaServed: 'Detroit metro',
    sameAs: [],
    makesOffer: [
      { 
        '@type': 'Offer', 
        itemOffered: { 
          '@type': 'Service', 
          name: 'Long-term care pharmacy services',
          description: 'Comprehensive medication management for assisted living and nursing facilities'
        } 
      },
      { 
        '@type': 'Offer', 
        itemOffered: { 
          '@type': 'Service', 
          name: 'Dispill® multi-dose packaging',
          description: 'Customized medication packaging to reduce errors and simplify administration'
        } 
      },
      { 
        '@type': 'Offer', 
        itemOffered: { 
          '@type': 'Service', 
          name: 'Scheduled delivery',
          description: 'Regular facility delivery routes with urgent support available'
        } 
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Long-Term Care Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Medication Reviews',
            description: 'Clinical checks for safety, dosing, interactions, and efficacy'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'After-hours Support',
            description: 'Phone support for urgent medication questions'
          }
        }
      ]
    }
  };
  
  return (
    <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 2) }} 
    />
  );
}
















