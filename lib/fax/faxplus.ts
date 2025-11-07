import type { FaxPayload, FaxProvider, FaxResult } from './types'
import { env } from '@/lib/env'

export function faxPlusProvider(): FaxProvider {
  return {
    name: 'FAXPLUS',
    async sendFax(payload: FaxPayload): Promise<FaxResult> {
      try {
        // TODO: supply real credentials for FAXPLUS
        if (!env.FAXPLUS_API_KEY) {
          return {
            ok: false,
            provider: 'FAXPLUS',
            error: 'Missing FaxPlus API key'
          }
        }

        const formData = new FormData()
        formData.append('to', payload.to)
        if (payload.headerText) {
          formData.append('comment', payload.headerText)
        }
        
        const pdfBlob = new Blob([new Uint8Array(payload.pdf)], { type: 'application/pdf' })
        formData.append('files', pdfBlob, 'fax.pdf')

        const response = await fetch('https://restapi.fax.plus/v3/accounts/self/outbox', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.FAXPLUS_API_KEY}`
          },
          body: formData
        })

        if (!response.ok) {
          const txt = await response.text().catch(() => '')
          return { 
            ok: false, 
            provider: 'FAXPLUS', 
            error: `HTTP ${response.status}: ${txt}` 
          }
        }

        const json = await response.json().catch(() => ({}))
        return { 
          ok: true, 
          provider: 'FAXPLUS', 
          faxId: json.id ?? undefined 
        }
      } catch (err: any) {
        return { 
          ok: false, 
          provider: 'FAXPLUS', 
          error: String(err?.message || err) 
        }
      }
    }
  }
}
