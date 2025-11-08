import { ORGANIZATION_DATA } from './content';

export default function OrganizationSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Pharmacy',
    name: ORGANIZATION_DATA.name,
    description: 'A locally owned pharmacy in Detroit providing personalized medication management, MTM services, and comprehensive healthcare support.',
    url: ORGANIZATION_DATA.url,
    telephone: ORGANIZATION_DATA.telephone,
    faxNumber: ORGANIZATION_DATA.faxNumber,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORGANIZATION_DATA.address.streetAddress,
      addressLocality: ORGANIZATION_DATA.address.addressLocality,
      addressRegion: ORGANIZATION_DATA.address.addressRegion,
      postalCode: ORGANIZATION_DATA.address.postalCode,
      addressCountry: ORGANIZATION_DATA.address.addressCountry
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday', 
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '10:00',
      closes: '18:00'
    },
    sameAs: ORGANIZATION_DATA.sameAs,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pharmacy Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Prescription Filling',
            description: 'Professional prescription filling and medication management'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Medication Therapy Management',
            description: 'Comprehensive medication reviews and optimization'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Free Delivery',
            description: 'Free medication delivery to your home or facility'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Travel Vaccinations',
            description: 'Immunizations for international travel'
          }
        }
      ]
    },
    areaServed: {
      '@type': 'City',
      name: 'Detroit',
      containedInPlace: {
        '@type': 'State',
        name: 'Michigan',
        containedInPlace: {
          '@type': 'Country',
          name: 'United States'
        }
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema, null, 2) }}
    />
  );
}
















