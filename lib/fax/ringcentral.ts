import type { FaxPayload, FaxProvider, FaxResult } from './types'
import { env } from '@/lib/env'

export function ringcentralProvider(): FaxProvider {
  return {
    name: 'RINGCENTRAL',
    async sendFax(payload: FaxPayload): Promise<FaxResult> {
      try {
        // TODO: supply real credentials for RINGCENTRAL
        if (!env.RINGCENTRAL_CLIENT_ID || !env.RINGCENTRAL_CLIENT_SECRET || !env.RINGCENTRAL_JWT) {
          return {
            ok: false,
            provider: 'RINGCENTRAL',
            error: 'Missing RingCentral credentials'
          }
        }

        // First, get access token using JWT
        const authResponse = await fetch('https://platform.ringcentral.com/restapi/oauth/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${Buffer.from(`${env.RINGCENTRAL_CLIENT_ID}:${env.RINGCENTRAL_CLIENT_SECRET}`).toString('base64')}`
          },
          body: new URLSearchParams({
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            assertion: env.RINGCENTRAL_JWT
          })
        })

        if (!authResponse.ok) {
          return {
            ok: false,
            provider: 'RINGCENTRAL',
            error: 'Failed to authenticate with RingCentral'
          }
        }

        const authData = await authResponse.json()
        const accessToken = authData.access_token

        // Send fax
        const formData = new FormData()
        formData.append('to', payload.to)
        if (payload.headerText) {
          formData.append('coverPageText', payload.headerText)
        }
        
        const pdfBlob = new Blob([new Uint8Array(payload.pdf)], { type: 'application/pdf' })
        formData.append('attachment', pdfBlob, 'fax.pdf')

        const faxResponse = await fetch('https://platform.ringcentral.com/restapi/v1.0/account/~/extension/~/fax', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`
          },
          body: formData
        })

        if (!faxResponse.ok) {
          const txt = await faxResponse.text().catch(() => '')
          return { 
            ok: false, 
            provider: 'RINGCENTRAL', 
            error: `HTTP ${faxResponse.status}: ${txt}` 
          }
        }

        const faxData = await faxResponse.json().catch(() => ({}))
        return { 
          ok: true, 
          provider: 'RINGCENTRAL', 
          faxId: faxData.id ?? undefined 
        }
      } catch (err: any) {
        return { 
          ok: false, 
          provider: 'RINGCENTRAL', 
          error: String(err?.message || err) 
        }
      }
    }
  }
}
