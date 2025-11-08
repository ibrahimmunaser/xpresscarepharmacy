// Simple metrics logging (no PHI)
// TODO: integrate with proper observability stack in production

export function logMetric(
  event: 'fax_send_attempt' | 'fax_send_success' | 'fax_send_failure',
  data: {
    provider?: string
    faxId?: string
    error?: string
  } = {}
) {
  if (process.env.NODE_ENV !== 'production') {
    const timestamp = new Date().toISOString()
    console.log(`📊 [${timestamp}] ${event}`, {
      provider: data.provider,
      faxId: data.faxId,
      // Never log PHI - only metadata
      hasError: !!data.error
    })
  }
}



















