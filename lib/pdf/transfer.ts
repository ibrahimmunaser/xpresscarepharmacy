import { createDoc, nowStamp } from './common'
import { env } from '@/lib/env'

export async function buildTransferPdf(input: {
  fromPharmacyName: string
  fromPharmacyPhone: string
  fromPharmacyFax?: string
  fromPharmacyZip?: string
  patientName: string
  dateOfBirth: string
  patientPhone: string
  meds: string
  eSignature: string
}) {
  const { pdf, page, drawText } = await createDoc()
  let y = 750

  drawText('Prescription Transfer Request', { x: 72, y, size: 18, bold: true }); y -= 20
  drawText(`To: ${env.CLINIC_NAME}  |  Fax: ${env.CLINIC_FAX}  |  Phone: ${env.CLINIC_PHONE}`, { x: 72, y }); y -= 14
  drawText(`${env.CLINIC_ADDRESS}`, { x: 72, y }); y -= 20
  drawText(`Submitted: ${nowStamp()}`, { x: 72, y }); y -= 24

  drawText('From (Current Pharmacy)', { x: 72, y, bold: true }); y -= 14
  drawText(`Name: ${input.fromPharmacyName}`, { x: 72, y }); y -= 14
  const faxText = input.fromPharmacyFax || 'N/A'
  const zipText = input.fromPharmacyZip || 'N/A'
  drawText(`Phone: ${input.fromPharmacyPhone}  Fax: ${faxText}  ZIP: ${zipText}`, { x: 72, y }); y -= 20

  drawText('Patient', { x: 72, y, bold: true }); y -= 14
  drawText(`Name: ${input.patientName}`, { x: 72, y }); y -= 14
  drawText(`DOB: ${input.dateOfBirth}  Phone: ${input.patientPhone}`, { x: 72, y }); y -= 20

  drawText('Medications to Transfer', { x: 72, y, bold: true }); y -= 14
  const medLines = input.meds.split(/\r?\n/)
  for (const ln of medLines) {
    if (ln.trim()) {
      drawText(ln.trim(), { x: 72, y }); y -= 12
      if (y < 120) break
    }
  }
  y -= 8

  drawText('Authorization', { x: 72, y, bold: true }); y -= 14
  drawText('I authorize my prescriptions to be transferred to the destination pharmacy listed above.', { x: 72, y }); y -= 14
  drawText(`Signature: ${input.eSignature}    Date: ${new Date().toLocaleDateString('en-US')}`, { x: 72, y }); y -= 14

  const pdfBytes = await pdf.save()
  return Buffer.from(pdfBytes)
}


















