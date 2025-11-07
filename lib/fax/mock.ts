import type { FaxPayload, FaxProvider, FaxResult } from './types'

export function mockProvider(): FaxProvider {
  return {
    name: 'MOCK',
    async sendFax(payload: FaxPayload): Promise<FaxResult> {
      // Always returns success for testing
      if (process.env.NODE_ENV !== 'production') {
        console.log('🔄 MOCK FAX SENT')
        console.log(`To: ${payload.to}`)
        console.log(`Header: ${payload.headerText || 'N/A'}`)
        console.log(`PDF Size: ${payload.pdf.length} bytes`)
      }
      
      return {
        ok: true,
        provider: 'MOCK',
        faxId: `mock_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      }
    }
  }
}


















