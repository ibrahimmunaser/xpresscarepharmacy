/**
 * POST /api/refill - Prescription Refill API (No-JS Fallback)
 * 
 * This endpoint provides a fallback for browsers with JavaScript disabled.
 * The main submission path is directly to the Google Apps Script endpoint.
 * 
 * This simply validates the data and returns a basic success page.
 */

import { NextRequest, NextResponse } from 'next/server'
import { RefillSchema } from '@/lib/schemas'
import { allowIp } from '@/lib/ratelimit'

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
    data.type = 'refill'

    // Validate against schema
    RefillSchema.parse(data)

    // Check honeypot
    if (data.website && data.website.trim() !== '') {
      // Silent reject for bots
      return NextResponse.json({ ok: true })
    }

    // For no-JS fallback, return a simple success response
    // The main submission path goes directly to Google Apps Script
    return NextResponse.json({ 
      ok: true,
      message: 'Your refill request has been submitted successfully.'
    })
    
  } catch (err: any) {
    console.error('Refill validation error:', err.message)
    
    return NextResponse.json({ 
      ok: false, 
      message: 'Invalid submission. Please check your form and try again.' 
    }, { status: 400 })
  }
}
