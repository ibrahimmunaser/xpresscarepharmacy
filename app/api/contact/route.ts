import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory store for demo purposes
// In production, this would connect to a database
const contactMessages: any[] = []

// PHI detection patterns (basic examples)
const PHI_PATTERNS = [
  /\b\d{3}-\d{2}-\d{4}\b/, // SSN pattern
  /\b\d{2}\/\d{2}\/\d{4}\b/, // Date pattern (could be DOB)
  /\b\d{1,2}\/\d{1,2}\/\d{2,4}\b/, // Another date pattern
]

function containsPHI(text: string): boolean {
  return PHI_PATTERNS.some(pattern => pattern.test(text))
}

function validateContactData(data: any) {
  const errors: string[] = []

  if (!data.pharmacyId || typeof data.pharmacyId !== 'string') {
    errors.push('Pharmacy selection is required')
  }

  if (!data.firstName || typeof data.firstName !== 'string' || !data.firstName.trim()) {
    errors.push('First name is required')
  }

  if (!data.lastName || typeof data.lastName !== 'string' || !data.lastName.trim()) {
    errors.push('Last name is required')
  }

  if (!data.phone && !data.email) {
    errors.push('Either phone number or email is required')
  }

  if (data.phone && !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(data.phone)) {
    errors.push('Invalid phone number format')
  }

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Invalid email format')
  }

  if (!data.message || typeof data.message !== 'string' || !data.message.trim()) {
    errors.push('Message is required')
  }

  return errors
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate request data
    const validationErrors = validateContactData(data)
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { ok: false, errors: validationErrors },
        { status: 400 }
      )
    }

    // Check for PHI in message
    if (containsPHI(data.message)) {
      return NextResponse.json(
        { 
          ok: false, 
          error: 'Please do not include personal health information like Social Security numbers or dates of birth in your message. For confidential matters, please call us directly.' 
        },
        { status: 400 }
      )
    }

    // Create contact message record
    const contactMessage = {
      id: `contact-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      ...data,
      timestamp: new Date().toISOString(),
      status: 'new'
    }

    // Store the message (in production, save to database)
    contactMessages.push(contactMessage)

    // Log for development
    console.log('📧 New contact message received:', {
      id: contactMessage.id,
      pharmacy: data.pharmacyId,
      name: `${data.firstName} ${data.lastName}`,
      contact: data.phone || data.email,
      source: data.source
    })

    // In production, you would:
    // 1. Save to database
    // 2. Send email notification to pharmacy staff
    // 3. Create ticket in support system
    // 4. Send auto-reply to customer

    return NextResponse.json({ 
      ok: true,
      message: 'Your message has been received successfully. We will contact you within 24 hours.',
      id: contactMessage.id
    })

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

