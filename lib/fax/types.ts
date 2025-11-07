export type FaxPayload = {
  to: string          // E.164
  headerText?: string // CSID/header line, e.g., "Xpress Care Pharmacy"
  pdf: Buffer         // PDF bytes in memory
}

export type FaxResult = {
  ok: boolean
  provider: string
  faxId?: string
  error?: string
}

export interface FaxProvider {
  name: string
  sendFax(payload: FaxPayload): Promise<FaxResult>
}


















