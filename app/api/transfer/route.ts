/**
 * POST /api/transfer - Prescription Transfer API
 * 
 * Post-deployment checklist:
 * ✅ Set FAX_PROVIDER to the real one (e.g., PHAXIO)
 * ✅ Paste API credentials in .env and rebuild
 * ✅ Send a test fax from /test-fax to the clinic machine and confirm receipt
 * ✅ Confirm paper header shows "Xpress Care Pharmacy" or desired CSID
 * ✅ Confirm failure path by temporarily breaking creds (expect UI error)
 * ✅ Review privacy note in footer with clinic owner
 */

import { NextRequest, NextResponse } from 'next/server'
import { TransferSchema } from '@/lib/schemas'
import { buildTransferPdf } from '@/lib/pdf/transfer'
import { sendFaxWithRetry } from '@/lib/fax/sendWithRetry'
import { env } from '@/lib/env'
import { normalizeToE164 } from '@/lib/phone'
import { allowIp } from '@/lib/ratelimit'
import { logMetric } from '@/lib/metrics'

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

    const body = await req.json()
    const data = TransferSchema.parse(body)

    // Check honeypot
    if (data.company && data.company.trim() !== '') {
      // Silent reject for bots
      return NextResponse.json({ ok: true })
    }

    logMetric('fax_send_attempt', { provider: env.FAX_PROVIDER })

    const pdf = await buildTransferPdf({
      fromPharmacyName: data.fromPharmacyName,
      fromPharmacyPhone: data.fromPharmacyPhone,
      fromPharmacyFax: data.fromPharmacyFax,
      fromPharmacyZip: data.fromPharmacyZip,
      patientName: data.patientName,
      dateOfBirth: data.dateOfBirth,
      patientPhone: data.patientPhone,
      meds: data.meds,
      eSignature: data.eSignature,
    })

    // Fax to clinic fax
    const to = normalizeToE164(env.CLINIC_FAX)
    const res = await sendFaxWithRetry({ 
      to, 
      headerText: env.CLINIC_NAME, 
      pdf 
    })

    if (!res.ok) {
      logMetric('fax_send_failure', { 
        provider: res.provider, 
        error: res.error 
      })
      
      return NextResponse.json({ 
        ok: false, 
        message: 'Fax delivery failed. Please call the pharmacy.' 
      }, { status: 502 })
    }

    logMetric('fax_send_success', { 
      provider: res.provider, 
      faxId: res.faxId 
    })

    return NextResponse.json({ 
      ok: true, 
      faxId: res.faxId ?? null 
    })
    
  } catch (err: any) {
    logMetric('fax_send_failure', { error: 'validation_or_server_error' })
    
    return NextResponse.json({ 
      ok: false, 
      message: 'Invalid submission or server error.' 
    }, { status: 400 })
  }
}


















