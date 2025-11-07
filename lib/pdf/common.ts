import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

const MARGIN = 54 // 0.75in on Letter
const PAGE_W = 612, PAGE_H = 792 // US Letter

export type DrawTextOpts = { x: number; y: number; size?: number; bold?: boolean }

export async function createDoc() {
  const pdf = await PDFDocument.create()
  const page = pdf.addPage([PAGE_W, PAGE_H])
  const font = await pdf.embedFont(StandardFonts.Helvetica)
  const fontBold = await pdf.embedFont(StandardFonts.HelveticaBold)

  function drawText(text: string, opts: DrawTextOpts) {
    const { x, y, size = 11, bold = false } = opts
    page.drawText(text, { x, y, size, font: bold ? fontBold : font, color: rgb(0,0,0) })
  }

  return { pdf, page, drawText }
}

export function nowStamp() {
  return new Date().toLocaleString('en-US', { timeZone: 'America/Detroit' })
}


















