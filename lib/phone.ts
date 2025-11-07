export function normalizeToE164(usLikeNumber: string): string {
  // Very light normalization; we assume US. Replace non-digits, ensure leading +1.
  const digits = usLikeNumber.replace(/\D/g, '')
  if (!digits) return usLikeNumber
  if (digits.length === 10) return `+1${digits}`
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`
  // fallback: if already + prefixed or non-standard, return as-is (provider may reject)
  return usLikeNumber.startsWith('+') ? usLikeNumber : `+${digits}`
}


















