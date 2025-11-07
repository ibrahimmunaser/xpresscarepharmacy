import type { FaxPayload, FaxProvider, FaxResult } from './types'
import { env } from '@/lib/env'

export function phaxioProvider(): FaxProvider {
  return {
    name: 'PHAXIO',
    async sendFax(payload: FaxPayload): Promise<FaxResult> {
      try {
        // TODO: supply real credentials for PHAXIO
        if (!env.PHAXIO_API_KEY || !env.PHAXIO_API_SECRET) {
          return {
            ok: false,
            provider: 'PHAXIO',
            error: 'Missing PHAXIO credentials'
          }
        }

        const formData = new FormData()
        formData.append('to', payload.to)
        formData.append('string_data', payload.pdf.toString('base64'))
        formData.append('string_data_type', 'base64_pdf')
        if (payload.headerText) formData.append('header_text', payload.headerText)

        const auth = Buffer.from(`${env.PHAXIO_API_KEY}:${env.PHAXIO_API_SECRET}`).toString('base64')
        
        const response = await fetch('https://api.phaxio.com/v2/faxes', {
          method: 'POST',
          headers: { 
            Authorization: `Basic ${auth}`
          },
          body: formData
        })

        if (!response.ok) {
          const txt = await response.text().catch(() => '')
          return { 
            ok: false, 
            provider: 'PHAXIO', 
            error: `HTTP ${response.status}: ${txt}` 
          }
        }
        
        const json = await response.json().catch(() => ({}))
        return { 
          ok: true, 
          provider: 'PHAXIO', 
          faxId: json?.data?.id ?? undefined 
        }
      } catch (err: any) {
        return { 
          ok: false, 
          provider: 'PHAXIO', 
          error: String(err?.message || err) 
        }
      }
    }
  }
}
