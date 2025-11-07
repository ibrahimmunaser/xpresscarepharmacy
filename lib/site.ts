export const SITE = {
  name: 'Xpress Care Pharmacy',
  address: { street: '3040 E 7 Mile', city: 'Detroit', state: 'MI', zip: '48234' },
  phone: '313-914-3736',
  fax: '313-914-5105', // shows as "Fax: 313-914-5105"
  email: '', // optional, leave empty to hide
};

export function formatAddress(a: { street: string; city: string; state: string; zip: string }) {
  return `${a.street}, ${a.city}, ${a.state} ${a.zip}`;
}

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
}
