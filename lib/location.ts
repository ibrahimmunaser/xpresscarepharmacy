export type BusinessHours = {
  day: 'Mon'|'Tue'|'Wed'|'Thu'|'Fri'|'Sat'|'Sun';
  open: string | null;   // "10:00 AM" or null for closed
  close: string | null;  // "6:00 PM" or null for closed
  note?: string;         // "Closed" for closed days
};

export type PharmacyLocation = {
  name: string;
  addressLine1: string;     // "3040 E 7 Mile"
  city: string;             // "Detroit"
  state: string;            // "MI"
  zip: string;              // "48234"
  phone: string;
  fax: string;
  hours: BusinessHours[];
  lat?: number;             // latitude for maps
  lng?: number;             // longitude for maps
  languages: string[];
  serviceBadges: string[];  // renamed from extras
  googleMapsPlaceUrl: string;
};

export const SINGLE_LOCATION: PharmacyLocation = {
  name: 'Xpress Care Pharmacy',
  addressLine1: '3040 E 7 Mile',
  city: 'Detroit',
  state: 'MI',
  zip: '48234',
  phone: '313-914-3736',
  fax: '313-914-5105',
  languages: ['English'],
  serviceBadges: ['Extended PM Hours', 'Vaccination Services Available'],
  hours: [
    { day: 'Mon', open: '10:00 AM', close: '6:00 PM' },
    { day: 'Tue', open: '10:00 AM', close: '6:00 PM' },
    { day: 'Wed', open: '10:00 AM', close: '6:00 PM' },
    { day: 'Thu', open: '10:00 AM', close: '6:00 PM' },
    { day: 'Fri', open: '10:00 AM', close: '6:00 PM' },
    { day: 'Sat', open: null, close: null, note: 'Closed' },
    { day: 'Sun', open: null, close: null, note: 'Closed' },
  ],
  // Coordinates for 3040 E 7 Mile Detroit MI 48234
  lat: 42.4308,  // More accurate coordinates
  lng: -82.9980,
  googleMapsPlaceUrl: 'https://www.google.com/maps/search/?api=1&query=3040+E+7+Mile,+Detroit,+MI+48234',
};

// Keep legacy export for backward compatibility
export const LOCATION = SINGLE_LOCATION;

// Helper functions for formatting
export function formatRange(open: string, close: string) {
  return `${to12(open)} - ${to12(close)}`;
}

export function to12(hhmm: string) {
  const [h, m] = hhmm.split(':').map(Number);
  const suf = h >= 12 ? 'PM' : 'AM';
  const h12 = ((h + 11) % 12) + 1;
  return `${h12}:${String(m).padStart(2,'0')} ${suf}`;
}

export function dayToSchema(d: string) {
  const map: Record<string, string> = {
    Mon: 'https://schema.org/Monday',
    Tue: 'https://schema.org/Tuesday',
    Wed: 'https://schema.org/Wednesday',
    Thu: 'https://schema.org/Thursday',
    Fri: 'https://schema.org/Friday',
    Sat: 'https://schema.org/Saturday',
    Sun: 'https://schema.org/Sunday',
  };
  return map[d] ?? d;
}

export function getFullAddress() {
  return `${LOCATION.addressLine}, ${LOCATION.city}, ${LOCATION.state} ${LOCATION.postalCode}`;
}





