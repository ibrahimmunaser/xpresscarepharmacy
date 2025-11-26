import { z } from 'zod'

const envSchema = z.object({
  // Required clinic info (single location)
  CLINIC_NAME: z.string().default('Xpress Care Pharmacy'),
  CLINIC_ADDRESS: z.string().default('3040 E 7 Mile, Detroit, MI 48234'),
  CLINIC_PHONE: z.string().default('313-914-3736'),
  CLINIC_HOURS: z.string().default('Mon–Fri 10:00 AM – 6:00 PM'),

  // Form submission endpoint (Google Apps Script Web App URL)
  // This is public and will be exposed to the client
  NEXT_PUBLIC_FORM_ENDPOINT: z.string().optional(),

  // Resend email service (for sending emails from patient's address)
  RESEND_API_KEY: z.string().optional(),
  PHARMACY_EMAIL: z.string().email().optional().default('munasergames@gmail.com'), // TODO: Change back to Pharmacy.xpresscare@gmail.com after testing

  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
})

function getEnv() {
  const parsed = envSchema.safeParse(process.env)
  
  if (!parsed.success) {
    console.error('❌ Invalid environment variables:', parsed.error.format())
    throw new Error('Invalid environment variables')
  }

  return parsed.data
}

export const env = getEnv()
