'use client'

import { useState } from 'react'
import { InputField, TextareaField } from '@/components/ui/Field'
import Button from '@/components/Button'
import { Alert } from '@/components/ui/Alert'
import { TransferFormData } from '@/lib/schemas'
import { SITE, formatAddress, telHref } from '@/lib/site'

type FormState = 'idle' | 'loading' | 'success' | 'error'

function DestinationCard() {
  return (
    <div className="rounded-md border p-4 bg-gray-50">
      <h3 className="font-semibold text-brand-navy mb-2">Transfer To</h3>
      <div className="text-sm text-slate-600 space-y-1">
        <p className="font-medium">{SITE.name}</p>
        <p>{formatAddress(SITE.address)}</p>
        <p>Phone: <a href={telHref(SITE.phone)} className="hover:underline">{SITE.phone}</a></p>
        <p>Fax: {SITE.fax}</p>
      </div>
    </div>
  )
}

export function TransferForm() {
  const [state, setState] = useState<FormState>('idle')
  const [formData, setFormData] = useState<Partial<TransferFormData>>({})
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

    // From pharmacy
    if (!formData.fromPharmacyName?.trim()) {
      newErrors.fromPharmacyName = 'Current pharmacy name is required'
    }
    if (!formData.fromPharmacyPhone?.trim()) {
      newErrors.fromPharmacyPhone = 'Current pharmacy phone is required'
    }

    // Patient info
    if (!formData.patientName?.trim()) {
      newErrors.patientName = 'Patient name is required'
    }
    if (!formData.dateOfBirth?.trim()) {
      newErrors.dateOfBirth = 'Date of birth is required'
    }
    if (!formData.patientPhone?.trim()) {
      newErrors.patientPhone = 'Phone number is required'
    }

    // Medications
    if (!formData.meds?.trim()) {
      newErrors.meds = 'At least one medication is required'
    }

    // Authorization
    if (!formData.consent) {
      newErrors.consent = 'You must authorize the transfer'
    }
    if (!formData.eSignature?.trim()) {
      newErrors.eSignature = 'Electronic signature is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setState('loading')

    try {
      const response = await fetch('/api/transfer', {
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
      <Alert type="success" title="Transfer Request Sent Successfully">
        <p>
          Your prescription transfer request has been sent to our pharmacy. 
          We'll coordinate the transfer from your current pharmacy. 
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
            We couldn't send your transfer request by fax. Please call{' '}
            <a href={telHref(SITE.phone)} className="font-medium underline">
              {SITE.phone}
            </a>{' '}
            to request the transfer.
          </p>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-brand-navy">From (Current Pharmacy)</h3>
          
          <InputField
            label="Pharmacy Name"
            required
            error={errors.fromPharmacyName}
            inputProps={{
              name: 'fromPharmacyName',
              value: formData.fromPharmacyName || '',
              onChange: (e) => handleInputChange('fromPharmacyName', e.target.value),
              placeholder: 'Enter your current pharmacy name'
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Pharmacy Phone"
              type="tel"
              required
              error={errors.fromPharmacyPhone}
              inputProps={{
                name: 'fromPharmacyPhone',
                value: formData.fromPharmacyPhone || '',
                onChange: (e) => handleInputChange('fromPharmacyPhone', e.target.value),
                placeholder: '(313) 555-0123'
              }}
            />

            <InputField
              label="Pharmacy Fax (Optional)"
              type="tel"
              error={errors.fromPharmacyFax}
              inputProps={{
                name: 'fromPharmacyFax',
                value: formData.fromPharmacyFax || '',
                onChange: (e) => handleInputChange('fromPharmacyFax', e.target.value),
                placeholder: '(313) 555-0124'
              }}
            />
          </div>

          <InputField
            label="ZIP Code (Optional)"
            error={errors.fromPharmacyZip}
            inputProps={{
              name: 'fromPharmacyZip',
              value: formData.fromPharmacyZip || '',
              onChange: (e) => handleInputChange('fromPharmacyZip', e.target.value),
              placeholder: '48234'
            }}
          />
        </div>

        <DestinationCard />

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Date of Birth"
              required
              error={errors.dateOfBirth}
              inputProps={{
                name: 'dateOfBirth',
                value: formData.dateOfBirth || '',
                onChange: (e) => handleInputChange('dateOfBirth', e.target.value),
                autoComplete: 'bday',
                placeholder: 'MM/DD/YYYY'
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
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-brand-navy">Medications to Transfer</h3>
          
          <TextareaField
            label="List of Medications"
            required
            rows={5}
            error={errors.meds}
            textareaProps={{
              name: 'meds',
              value: formData.meds || '',
              onChange: (e) => handleInputChange('meds', e.target.value),
              placeholder: 'List all medications you want to transfer (one per line or separated by commas)'
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
          <h3 className="text-lg font-medium text-brand-navy">Authorization</h3>
          
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
              I authorize my prescriptions to be transferred to Xpress Care Pharmacy.
              <span className="text-red-500 ml-1">*</span>
            </label>
          </div>
          {errors.consent && (
            <p className="text-sm text-red-600" role="alert">
              {errors.consent}
            </p>
          )}

          <InputField
            label="Electronic Signature (Type your full name)"
            required
            error={errors.eSignature}
            inputProps={{
              name: 'eSignature',
              value: formData.eSignature || '',
              onChange: (e) => handleInputChange('eSignature', e.target.value),
              placeholder: 'Type your full name as your signature'
            }}
          />

          <Button
            type="submit"
            disabled={state === 'loading'}
            className="w-full"
            size="lg"
          >
            {state === 'loading' ? 'Sending...' : 'Send Transfer Request'}
          </Button>

          <p className="text-xs text-slate-500 text-center">
            Faxed to {SITE.fax} securely
          </p>
        </div>
      </form>
    </div>
  )
}
