/**
 * POST /api/transfer - Prescription Transfer API
 * 
 * This endpoint validates form data and sends an email notification.
 * If RESEND_API_KEY is configured, emails are sent via Resend with the patient's
 * email as the "From" address. Otherwise, it falls back to basic validation.
 */

import { NextRequest, NextResponse } from 'next/server'
import { TransferSchema } from '@/lib/schemas'
import { allowIp } from '@/lib/ratelimit'
import { env } from '@/lib/env'
import { Resend } from 'resend'

// Helper to escape HTML
function esc(str: string | undefined | null): string {
  if (!str) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .slice(0, 2000)
}

// Helper to safely truncate strings
function truncate(str: string | undefined | null, maxLength: number): string {
  if (!str) return ''
  str = String(str).trim()
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength) + '...'
}

// Helper to safely get string value
function safe(str: string | undefined | null): string {
  if (!str) return ''
  return String(str).trim().slice(0, 2000)
}

async function sendEmailViaResend(data: any) {
  if (!env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY not configured')
  }

  const resend = new Resend(env.RESEND_API_KEY)
  const pharmacyEmail = env.PHARMACY_EMAIL || 'munasergames@gmail.com' // TODO: Change back to Pharmacy.xpresscare@gmail.com after testing
  
  // Extract and sanitize data
  const patientName = truncate(data.patientName, 100)
  const dob = safe(data.dob)
  const phone = safe(data.phone)
  const email = safe(data.email)
  const medications = truncate(data.medications, 1500)
  const rxNumber = truncate(data.rxNumber, 40)
  const fromPharmacy = truncate(data.fromPharmacy, 120)
  const fromPharmacyPhone = safe(data.fromPharmacyPhone)
  const notes = truncate(data.notes, 1500)
  const timestamp = safe(data.ts) || new Date().toISOString()

  // Build fields array
  const fields: Array<[string, string]> = []
  fields.push(['Type', 'Transfer'])
  fields.push(['Patient Name', patientName])
  fields.push(['Date of Birth', dob])
  fields.push(['Phone', phone])
  
  if (email) {
    fields.push(['Email', email])
  }
  
  fields.push(['Medications', medications])
  
  if (rxNumber) {
    fields.push(['Rx Number', rxNumber])
  }
  
  fields.push(['Current Pharmacy', fromPharmacy])
  fields.push(['Current Pharmacy Phone', fromPharmacyPhone])
  
  if (notes) {
    fields.push(['Notes', notes])
  }
  
  fields.push(['Submitted At', timestamp])

  const subject = `New transfer request — ${patientName || 'Unknown'}`
  
  // Plain text version
  const plainBody = fields.map(([key, value]) => `${key}: ${safe(value)}`).join('\n')
  
  // HTML version
  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px;">
      <h2 style="color: #1e3a8a; margin-bottom: 20px;">${esc(subject)}</h2>
      <table cellspacing="0" cellpadding="0" style="width: 100%; border-collapse: collapse; border: 1px solid #e5e7eb;">
        ${fields.map(([key, value]) => `
          <tr>
            <td style="padding: 12px; font-weight: 600; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb; width: 40%;">
              ${esc(key)}
            </td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; white-space: pre-wrap;">
              ${esc(value)}
            </td>
          </tr>
        `).join('')}
      </table>
    </div>
  `

  // Always send FROM your verified domain (required by Resend)
  // Set Reply-To to patient's email so replies go directly to them
  const fromEmail = 'refills@xpresscarepharmacy.com'
  const fromName = email ? `${patientName} (via Xpress Care Pharmacy)` : 'Xpress Care Pharmacy Forms'

  await resend.emails.send({
    from: `${fromName} <${fromEmail}>`,
    to: pharmacyEmail,
    reply_to: email || fromEmail, // Always set Reply-To to patient's email if available
    subject,
    text: plainBody,
    html: htmlBody,
  })
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'local'
    if (!allowIp(ip)) {
      return NextResponse.json({ 
        ok: false, 
        message: 'Please try again later.' 
      }, { status: 429 })
    }

    const contentType = req.headers.get('content-type') || ''
    let data: any

    if (contentType.includes('application/json')) {
      data = await req.json()
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await req.formData()
      data = Object.fromEntries(formData.entries())
    } else {
      return NextResponse.json({ 
        ok: false, 
        message: 'Unsupported content type' 
      }, { status: 400 })
    }

    // Add type for validation
    data.type = 'transfer'

    // Validate against schema
    TransferSchema.parse(data)

    // Check honeypot
    if (data.website && data.website.trim() !== '') {
      // Silent reject for bots
      return NextResponse.json({ ok: true })
    }

    // Send email if Resend is configured
    if (env.RESEND_API_KEY) {
      try {
        await sendEmailViaResend(data)
      } catch (emailError: any) {
        console.error('Email sending error:', emailError.message)
        // Don't fail the request if email fails - still return success
        // Log the error for debugging
      }
    }

    return NextResponse.json({ 
      ok: true, 
      message: 'Your transfer request has been submitted successfully.'
    })
    
  } catch (err: any) {
    console.error('Transfer validation error:', err.message)
    
    return NextResponse.json({ 
      ok: false, 
      message: 'Invalid submission. Please check your form and try again.' 
    }, { status: 400 })
  }
}
