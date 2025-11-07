import { z } from 'zod'

const envSchema = z.object({
  // Required clinic info (single location)
  CLINIC_NAME: z.string().default('Xpress Care Pharmacy'),
  CLINIC_ADDRESS: z.string().default('3040 E 7 Mile, Detroit, MI 48234'),
  CLINIC_PHONE: z.string().default('313-914-3736'),
  CLINIC_FAX: z.string().default('313-914-5105'),
  CLINIC_HOURS: z.string().default('Mon–Fri 10:00 AM – 6:00 PM'),

  // Fax provider selection
  FAX_PROVIDER: z.enum(['PHAXIO', 'SRFAX', 'RINGCENTRAL', 'FAXPLUS', 'MOCK']).default('MOCK'),

  // Provider credentials (optional based on selected provider)
  PHAXIO_API_KEY: z.string().optional(),
  PHAXIO_API_SECRET: z.string().optional(),

  SRFAX_API_KEY: z.string().optional(),
  SRFAX_API_SECRET: z.string().optional(),
  SRFAX_ACCOUNT_ID: z.string().optional(),

  RINGCENTRAL_CLIENT_ID: z.string().optional(),
  RINGCENTRAL_CLIENT_SECRET: z.string().optional(),
  RINGCENTRAL_JWT: z.string().optional(),

  FAXPLUS_API_KEY: z.string().optional(),

  // Optional delivery receipt webhook secret
  FAX_WEBHOOK_SECRET: z.string().optional(),

  // Operational toggles
  FAX_SENDING_WINDOW: z.string().default('00:00-23:59'),
  FAX_MAX_RETRIES: z.string().default('3'),
  FAX_RETRY_DELAY_SECONDS: z.string().default('60'),

  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
})

function getEnv() {
  const parsed = envSchema.safeParse(process.env)
  
  if (!parsed.success) {
    console.error('❌ Invalid environment variables:', parsed.error.format())
    throw new Error('Invalid environment variables')
  }

  return {
    ...parsed.data,
    FAX_MAX_RETRIES: parseInt(parsed.data.FAX_MAX_RETRIES, 10),
    FAX_RETRY_DELAY_SECONDS: parseInt(parsed.data.FAX_RETRY_DELAY_SECONDS, 10),
  }
}

export const env = getEnv()


















