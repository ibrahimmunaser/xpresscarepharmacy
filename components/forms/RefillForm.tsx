'use client'

import { useState, useRef, FormEvent } from 'react'
import { InputField, TextareaField } from '@/components/ui/Field'
import Button from '@/components/Button'
import { Alert } from '@/components/ui/Alert'
import { SITE, telHref } from '@/lib/site'

type FormState = 'idle' | 'loading' | 'success' | 'error'

// Get endpoint from environment or show error in dev
function getEndpoint(): string | null {
  if (typeof window === 'undefined') return null
  return (window as any).NEXT_PUBLIC_FORM_ENDPOINT || process.env.NEXT_PUBLIC_FORM_ENDPOINT || null
}

// Normalize phone: strip non-digits except leading +
function normalizePhone(phone: string): string {
  if (phone.startsWith('+')) {
    return '+' + phone.slice(1).replace(/\D/g, '')
  }
  return phone.replace(/\D/g, '')
}

// Normalize DOB to YYYY-MM-DD
function normalizeDob(dob: string): string {
  // Handle MM/DD/YYYY, MM-DD-YYYY, or already YYYY-MM-DD
  const cleaned = dob.trim()
  
  // Try MM/DD/YYYY or MM-DD-YYYY
  const mdyMatch = cleaned.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})$/)
  if (mdyMatch) {
    const [, month, day, year] = mdyMatch
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
  }
  
  // Try YYYY-MM-DD or YYYY/MM/DD
  const ymdMatch = cleaned.match(/^(\d{4})[\/-](\d{1,2})[\/-](\d{1,2})$/)
  if (ymdMatch) {
    const [, year, month, day] = ymdMatch
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
  }
  
  // Return as-is if can't parse
  return cleaned
}

export function RefillForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const formRef = useRef<HTMLFormElement>(null)

  const clearError = (name: string) => {
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = (formData: FormData): boolean => {
    const newErrors: Record<string, string> = {}

    const patientName = formData.get('patientName')?.toString().trim()
    const dob = formData.get('dob')?.toString().trim()
    const phone = formData.get('phone')?.toString().trim()
    const medications = formData.get('medications')?.toString().trim()

    if (!patientName || patientName.length < 2 || patientName.length > 100) {
      newErrors.patientName = 'Patient name is required (2-100 characters)'
    }
    if (!dob) {
      newErrors.dob = 'Date of birth is required'
    }
    if (!phone || phone.length < 7) {
      newErrors.phone = 'Phone number is required'
    }
    if (!medications || medications.length < 1) {
      newErrors.medications = 'At least one medication or Rx number is required'
    }
    if (medications && medications.length > 1500) {
      newErrors.medications = 'Medications field too long (max 1500 characters)'
    }

    setErrors(newErrors)
    
    // Focus first invalid field
    if (Object.keys(newErrors).length > 0) {
      const firstErrorField = Object.keys(newErrors)[0]
      const field = formRef.current?.querySelector(`[name="${firstErrorField}"]`) as HTMLElement
      field?.focus()
    }

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!formRef.current) return

    const formData = new FormData(formRef.current)
    
    // Normalize phone and dob
    const phone = normalizePhone(formData.get('phone')?.toString() || '')
    const dob = normalizeDob(formData.get('dob')?.toString() || '')
    
    formData.set('phone', phone)
    formData.set('dob', dob)
    formData.set('ts', new Date().toISOString())
    formData.set('type', 'refill')

    if (!validateForm(formData)) return

    setState('loading')

    // Use Google Apps Script endpoint in production, fallback to Next.js API route in development
    const endpoint = getEndpoint() || '/api/refill'

    try {
      // Use URLSearchParams for application/x-www-form-urlencoded (no CORS preflight)
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString(),
      })

      const result = await response.json()

      if (result.ok) {
        setState('success')
        formRef.current?.reset()
      } else {
        setState('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <Alert type="success" title="Request Sent Successfully">
        <p>
          Thanks — your request was emailed to the pharmacy. 
          If you don't hear back within 24 hours, please call{' '}
          <a href={telHref(SITE.phone)} className="font-medium underline">
            {SITE.phone}
          </a>.
        </p>
      </Alert>
    )
  }

  const endpoint = getEndpoint()
  const showConfigWarning = process.env.NODE_ENV === 'development' && !endpoint

  return (
    <div className="space-y-6">
      {showConfigWarning && (
        <Alert type="error" title="Development Mode">
          <p>
            <strong>NEXT_PUBLIC_FORM_ENDPOINT is not configured.</strong><br/>
            Forms will use the Next.js API route fallback. No emails will be sent.<br/>
            See <code className="text-xs">GAS_SETUP.md</code> to configure the Google Apps Script endpoint.
          </p>
        </Alert>
      )}

      {state === 'error' && (
        <Alert type="error" title="Unable to Send Request">
          <p>
            We couldn't send your request. Please try again or call the pharmacy at{' '}
            <a href={telHref(SITE.phone)} className="font-medium underline">
              {SITE.phone}
            </a>.
          </p>
        </Alert>
      )}

      <form 
        ref={formRef} 
        onSubmit={handleSubmit} 
        action={endpoint || undefined}
        method="POST"
        className="space-y-6"
      >
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-brand-navy">Patient Information</h3>
          
          <InputField
            label="Patient Full Name"
            required
            error={errors.patientName}
            inputProps={{
              name: 'patientName',
              autoComplete: 'name',
              placeholder: 'Enter your full name',
              onChange: () => clearError('patientName'),
              'aria-describedby': errors.patientName ? 'patientName-error' : undefined,
            }}
          />

          <InputField
            label="Date of Birth"
            required
            error={errors.dob}
            inputProps={{
              name: 'dob',
              autoComplete: 'bday',
              placeholder: 'MM/DD/YYYY or MM-DD-YYYY',
              onChange: () => clearError('dob'),
              'aria-describedby': errors.dob ? 'dob-error' : undefined,
            }}
          />

          <InputField
            label="Phone Number"
            type="tel"
            required
            error={errors.phone}
            inputProps={{
              name: 'phone',
              autoComplete: 'tel',
              placeholder: '(313) 555-0123',
              onChange: () => clearError('phone'),
              'aria-describedby': errors.phone ? 'phone-error' : undefined,
            }}
          />

          <InputField
            label="Email Address (Optional)"
            type="email"
            inputProps={{
              name: 'email',
              autoComplete: 'email',
              placeholder: 'your.email@example.com',
            }}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-brand-navy">Prescription Information</h3>
          
          <TextareaField
            label="Medications / Rx Numbers"
            required
            rows={4}
            error={errors.medications}
            textareaProps={{
              name: 'medications',
              placeholder: 'Enter medication names or Rx numbers (one per line or separated by commas)',
              onChange: () => clearError('medications'),
              'aria-describedby': errors.medications ? 'medications-error' : undefined,
            }}
          />

          <InputField
            label="Rx Number (Optional)"
            inputProps={{
              name: 'rxNumber',
              placeholder: 'Primary Rx number if available',
              maxLength: 40,
            }}
          />

          <TextareaField
            label="Additional Notes (Optional)"
            rows={3}
            textareaProps={{
              name: 'notes',
              placeholder: 'Any special instructions or questions',
              maxLength: 1500,
            }}
          />
        </div>

        {/* Honeypot field */}
        <input
          type="text"
          name="website"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="space-y-4">
          <Button
            type="submit"
            disabled={state === 'loading'}
            className="w-full"
            size="lg"
          >
            {state === 'loading' ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : 'Send Refill Request'}
          </Button>

          <p className="text-xs text-slate-500 text-center">
            Avoid entering unnecessary sensitive details.
          </p>
        </div>
      </form>
    </div>
  )
}
