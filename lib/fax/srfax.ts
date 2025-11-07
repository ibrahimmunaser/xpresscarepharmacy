import type { FaxPayload, FaxProvider, FaxResult } from './types'
import { env } from '@/lib/env'

export function srfaxProvider(): FaxProvider {
  return {
    name: 'SRFAX',
    async sendFax(payload: FaxPayload): Promise<FaxResult> {
      try {
        // TODO: supply real credentials for SRFAX
        if (!env.SRFAX_API_KEY || !env.SRFAX_API_SECRET || !env.SRFAX_ACCOUNT_ID) {
          return {
            ok: false,
            provider: 'SRFAX',
            error: 'Missing SRFAX credentials'
          }
        }

        const formData = new FormData()
        formData.append('action', 'Queue_Fax')
        formData.append('access_id', env.SRFAX_ACCOUNT_ID)
        formData.append('access_pwd', env.SRFAX_API_SECRET)
        formData.append('sCallerID', payload.headerText || env.CLINIC_NAME)
        formData.append('sFaxType', 'SINGLE')
        formData.append('sToFaxNumber', payload.to)
        formData.append('sResponseFormat', 'JSON')
        
        // Attach PDF
        const pdfBlob = new Blob([new Uint8Array(payload.pdf)], { type: 'application/pdf' })
        formData.append('sFileName_1', pdfBlob, 'fax.pdf')

        const response = await fetch('https://www.srfax.com/SRF_SecWebSvc.php', {
          method: 'POST',
          body: formData
        })

        if (!response.ok) {
          const txt = await response.text().catch(() => '')
          return { 
            ok: false, 
            provider: 'SRFAX', 
            error: `HTTP ${response.status}: ${txt}` 
          }
        }

        const json = await response.json().catch(() => ({}))
        
        if (json.Status === 'Success') {
          return { 
            ok: true, 
            provider: 'SRFAX', 
            faxId: json.Result ?? undefined 
          }
        } else {
          return { 
            ok: false, 
            provider: 'SRFAX', 
            error: json.Result || 'Unknown SRFAX error' 
          }
        }
      } catch (err: any) {
        return { 
          ok: false, 
          provider: 'SRFAX', 
          error: String(err?.message || err) 
        }
      }
    }
  }
}
