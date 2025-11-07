import { createDoc, nowStamp } from './common'
import { env } from '@/lib/env'

export async function buildRefillPdf(input: {
  patientName: string
  dateOfBirth: string
  patientPhone: string
  patientEmail?: string
  rxNumbers: string
  notes?: string
}) {
  const { pdf, page, drawText } = await createDoc()
  let y = 750

  drawText('Online Refill Request', { x: 72, y, size: 18, bold: true }); y -= 20
  drawText(`To: ${env.CLINIC_NAME}`, { x: 72, y }); y -= 14
  drawText(`${env.CLINIC_ADDRESS}`, { x: 72, y }); y -= 14
  drawText(`Phone: ${env.CLINIC_PHONE}   Fax: ${env.CLINIC_FAX}`, { x: 72, y }); y -= 20
  drawText(`Submitted: ${nowStamp()}`, { x: 72, y }); y -= 24

  drawText('Patient', { x: 72, y, bold: true }); y -= 14
  drawText(`Name: ${input.patientName}`, { x: 72, y }); y -= 14
  drawText(`DOB: ${input.dateOfBirth}    Phone: ${input.patientPhone}`, { x: 72, y }); y -= 14
  if (input.patientEmail) { 
    drawText(`Email: ${input.patientEmail}`, { x: 72, y }); y -= 14 
  }
  y -= 8

  drawText('Rx Numbers / Medications', { x: 72, y, bold: true }); y -= 14
  // Simple wrap: just draw block (keep requests 1-2 pages)
  const rxLines = input.rxNumbers.split(/\r?\n/)
  for (const line of rxLines) {
    if (line.trim()) {
      drawText(line.trim(), { x: 72, y }); y -= 12
      if (y < 100) break // keep single-page for now
    }
  }

  if (input.notes && input.notes.trim()) {
    y -= 8
    drawText('Notes', { x: 72, y, bold: true }); y -= 14
    const noteLines = input.notes.split(/\r?\n/)
    for (const ln of noteLines) {
      if (ln.trim()) {
        drawText(ln.trim(), { x: 72, y }); y -= 12
        if (y < 72) break
      }
    }
  }

  const pdfBytes = await pdf.save()
  return Buffer.from(pdfBytes)
}


















