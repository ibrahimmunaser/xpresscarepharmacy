import { getFaxProvider } from './index'
import type { FaxPayload, FaxResult } from './types'
import { env } from '@/lib/env'

export async function sendFaxWithRetry(
  payload: FaxPayload, 
  retries = env.FAX_MAX_RETRIES, 
  delayMs = env.FAX_RETRY_DELAY_SECONDS * 1000
): Promise<FaxResult> {
  const provider = getFaxProvider()
  let last: FaxResult = { ok: false, provider: provider.name, error: 'not_sent' }
  
  for (let i = 0; i <= retries; i++) {
    last = await provider.sendFax(payload)
    if (last.ok) return last
    
    // Log attempt without PHI
    if (process.env.NODE_ENV !== 'production') {
      console.log(`🔄 Fax attempt ${i + 1}/${retries + 1} failed: ${last.error}`)
    }
    
    if (i < retries) {
      await new Promise(r => setTimeout(r, delayMs))
    }
  }
  
  return last
}


















