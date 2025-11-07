export type Vaccine = {
  id: string;
  name: string;
  summary: string;
  minAge?: number;
  notes?: string;
  imageSrc: string;
  category?: 'routine' | 'travel' | 'seasonal' | 'special';
};

export type FaqItem = { 
  q: string; 
  a: string; 
};

export type EligibilityGroup = {
  group: string;
  description: string;
  recommendedVaccines: string[];
  notes?: string;
};

export type BookingFormData = {
  vaccine: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  notes?: string;
  reminders: boolean;
};

export type TimeSlot = {
  time: string;
  available: boolean;
};















