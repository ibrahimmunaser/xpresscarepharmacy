export type FaqItem = { 
  q: string; 
  a: string; 
};

export type DeliveryWindow = 'same-day' | 'next-day' | 'pickup';

export type CoverageResult = {
  covered: boolean;
  message: string;
  deliveryOptions?: DeliveryWindow[];
};
















