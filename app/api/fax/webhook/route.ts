import { NextRequest, NextResponse } from 'next/server'
import { env } from '@/lib/env'
import { logMetric } from '@/lib/metrics'

export async function POST(req: NextRequest) {
  try {
    // Verify webhook secret if configured
    if (env.FAX_WEBHOOK_SECRET) {
      const signature = req.headers.get('x-fax-signature') || req.headers.get('authorization')?.replace('Bearer ', '')
      
      if (!signature || signature !== env.FAX_WEBHOOK_SECRET) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
    }

    const body = await req.json()
    
    // Log delivery receipt (no PHI - only metadata)
    if (process.env.NODE_ENV !== 'production') {
      console.log('📠 Fax delivery receipt:', {
        provider: body.provider || 'unknown',
        faxId: body.faxId || body.id,
        status: body.status,
        timestamp: new Date().toISOString()
      })
    }

    return NextResponse.json({ ok: true })
    
  } catch (err: any) {
    console.error('Webhook error:', err.message)
    return NextResponse.json({ error: 'Invalid webhook' }, { status: 400 })
  }
}


















