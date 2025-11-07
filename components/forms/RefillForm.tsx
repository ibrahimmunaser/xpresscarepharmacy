'use client'

import { useState } from 'react'
import { InputField, TextareaField } from '@/components/ui/Field'
import Button from '@/components/Button'
import { Alert } from '@/components/ui/Alert'
import { RefillFormData } from '@/lib/schemas'
import { SITE, telHref } from '@/lib/site'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function RefillForm() {
  const [state, setState] = useState<FormState>('idle')
  const [formData, setFormData] = useState<Partial<RefillFormData>>({})
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (name: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.patientName?.trim()) {
      newErrors.patientName = 'Patient name is required'
    }
    if (!formData.dateOfBirth?.trim()) {
      newErrors.dateOfBirth = 'Date of birth is required'
    }
    if (!formData.patientPhone?.trim()) {
      newErrors.patientPhone = 'Phone number is required'
    }
    if (!formData.rxNumbers?.trim()) {
      newErrors.rxNumbers = 'At least one Rx number or medication is required'
    }
    if (!formData.consent) {
      newErrors.consent = 'You must confirm the information is accurate'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setState('loading')

    try {
      const response = await fetch('/api/refill', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          company: '' // Honeypot field
        })
      })

      const result = await response.json()

      if (result.ok) {
        setState('success')
      } else {
        setState('error')
      }
    } catch (error) {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <Alert type="success" title="Request Sent Successfully">
        <p>
          Your refill request has been sent to our pharmacy. 
          If you don't hear back within 24 hours, please call{' '}
          <a href={telHref(SITE.phone)} className="font-medium underline">
            {SITE.phone}
          </a>.
        </p>
      </Alert>
    )
  }

  return (
    <div className="space-y-6">
      {state === 'error' && (
        <Alert type="error" title="Unable to Send Request">
          <p>
            We couldn't send your request by fax. Please call{' '}
            <a href={telHref(SITE.phone)} className="font-medium underline">
              {SITE.phone}
            </a>{' '}
            to place your refill order.
          </p>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-brand-navy">Patient Information</h3>
          
          <InputField
            label="Patient Full Name"
            required
            error={errors.patientName}
            inputProps={{
              name: 'patientName',
              value: formData.patientName || '',
              onChange: (e) => handleInputChange('patientName', e.target.value),
              autoComplete: 'name',
              placeholder: 'Enter your full name'
            }}
          />

          <InputField
            label="Date of Birth"
            required
            error={errors.dateOfBirth}
            inputProps={{
              name: 'dateOfBirth',
              value: formData.dateOfBirth || '',
              onChange: (e) => handleInputChange('dateOfBirth', e.target.value),
              autoComplete: 'bday',
              placeholder: 'MM/DD/YYYY or MM-DD-YYYY'
            }}
          />

          <InputField
            label="Phone Number"
            type="tel"
            required
            error={errors.patientPhone}
            inputProps={{
              name: 'patientPhone',
              value: formData.patientPhone || '',
              onChange: (e) => handleInputChange('patientPhone', e.target.value),
              autoComplete: 'tel',
              placeholder: '(313) 555-0123'
            }}
          />

          <InputField
            label="Email Address (Optional)"
            type="email"
            error={errors.patientEmail}
            inputProps={{
              name: 'patientEmail',
              value: formData.patientEmail || '',
              onChange: (e) => handleInputChange('patientEmail', e.target.value),
              autoComplete: 'email',
              placeholder: 'your.email@example.com'
            }}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-brand-navy">Prescription Information</h3>
          
          <TextareaField
            label="Rx Numbers / Medications"
            required
            rows={4}
            error={errors.rxNumbers}
            textareaProps={{
              name: 'rxNumbers',
              value: formData.rxNumbers || '',
              onChange: (e) => handleInputChange('rxNumbers', e.target.value),
              placeholder: 'Enter Rx numbers or medication names (one per line or separated by commas)'
            }}
          />

          <TextareaField
            label="Additional Notes (Optional)"
            rows={3}
            error={errors.notes}
            textareaProps={{
              name: 'notes',
              value: formData.notes || '',
              onChange: (e) => handleInputChange('notes', e.target.value),
              placeholder: 'Any special instructions or questions'
            }}
          />
        </div>

        {/* Honeypot field */}
        <input
          type="text"
          name="company"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          onChange={() => {}}
        />

        <div className="space-y-4">
          <div className="flex items-start">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              checked={formData.consent || false}
              onChange={(e) => handleInputChange('consent', e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
            />
            <label htmlFor="consent" className="ml-2 block text-sm text-slate-600">
              I confirm this information is accurate and authorize the pharmacy to process my refill.
              <span className="text-red-500 ml-1">*</span>
            </label>
          </div>
          {errors.consent && (
            <p className="text-sm text-red-600" role="alert">
              {errors.consent}
            </p>
          )}

          <Button
            type="submit"
            disabled={state === 'loading'}
            className="w-full"
            size="lg"
          >
            {state === 'loading' ? 'Sending...' : 'Send Refill Request'}
          </Button>

          <p className="text-xs text-slate-500 text-center">
            Faxed to {SITE.fax} securely
          </p>
        </div>
      </form>
    </div>
  )
}
