'use client'

import { useState } from 'react'
import Select from './Select'
import Input from './Input'
import Textarea from './Textarea'
import Button from './Button'
import { LOCATION } from '@/lib/location'

type RefillValues = {
  pharmacyId: string
  firstName: string
  lastName: string
  phone?: string
  email?: string
  rx: { number: string }[]
  comments?: string
}

type OnlineRefillFormProps = {
  // No longer need pharmacies prop, using single location
}

export default function OnlineRefillForm({}: OnlineRefillFormProps) {
  const [formData, setFormData] = useState<RefillValues>({
    pharmacyId: LOCATION.name,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    rx: [{ number: '' }],
    comments: ''
  })
  
  const [errors, setErrors] = useState<Partial<Omit<RefillValues, 'rx'> & { contact: string; rx: string }>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [confirmationId, setConfirmationId] = useState<string | null>(null)

  const validateForm = (): boolean => {
    const newErrors: Partial<Omit<RefillValues, 'rx'> & { contact: string; rx: string }> = {}

    if (!formData.pharmacyId) {
      newErrors.pharmacyId = 'Please select a pharmacy'
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.phone?.trim() && !formData.email?.trim()) {
      newErrors.contact = 'Please provide either a phone number or email address'
    }

    if (formData.phone && !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Validate Rx numbers
    const validRxNumbers = formData.rx.filter(rx => rx.number.trim())
    if (validRxNumbers.length === 0) {
      newErrors.rx = 'Please enter at least one prescription number'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Clear specific field error
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }

    // Clear contact error when either phone or email is entered
    if ((name === 'phone' || name === 'email') && errors.contact) {
      setErrors(prev => ({ ...prev, contact: undefined }))
    }
  }

  const handleRxChange = (index: number, value: string) => {
    const newRx = [...formData.rx]
    newRx[index] = { number: value }
    setFormData(prev => ({ ...prev, rx: newRx }))

    // Clear Rx error if user starts typing
    if (errors.rx && value.trim()) {
      setErrors(prev => ({ ...prev, rx: undefined }))
    }
  }

  const addRxRow = () => {
    setFormData(prev => ({
      ...prev,
      rx: [...prev.rx, { number: '' }]
    }))
  }

  const removeRxRow = (index: number) => {
    if (formData.rx.length > 1) {
      const newRx = formData.rx.filter((_, i) => i !== index)
      setFormData(prev => ({ ...prev, rx: newRx }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Filter out empty Rx numbers
      const cleanedRx = formData.rx.filter(rx => rx.number.trim())
      
      // Transform data to match API format
      const apiData = {
        pharmacyId: formData.pharmacyId,
        patient: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          email: formData.email
        },
        rx: cleanedRx,
        comments: formData.comments,
        source: 'online-refill'
      }
      
      const response = await fetch('/api/refill', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(apiData)
      })

      if (!response.ok) {
        throw new Error('Failed to submit refill request')
      }

      const result = await response.json()
      setConfirmationId(result.confirmationId)
    } catch (error) {
      console.error('Form submission error:', error)
      // Could set a general error state here
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmitAnother = () => {
    setConfirmationId(null)
    setFormData({
      pharmacyId: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      rx: [{ number: '' }],
      comments: ''
    })
    setErrors({})
  }

  if (confirmationId) {
    return (
      <div className="max-w-md mx-auto text-center">
        <div className="bg-green-50 border border-green-200 rounded-card p-8">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            Refill Request Submitted!
          </h3>
          <p className="text-green-700 mb-4">
            Your refill request has been received.
          </p>
          <div className="bg-white border border-green-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-slate-600">Confirmation ID:</p>
            <p className="font-mono font-semibold text-brand-navy">{confirmationId}</p>
          </div>
          <p className="text-green-700 text-sm mb-6">
            We'll contact you when your prescriptions are ready for pickup or delivery.
          </p>
          <Button
            onClick={handleSubmitAnother}
            variant="secondary"
          >
            Submit Another Refill
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <Select
        label="Pharmacy"
        name="pharmacyId"
        value={formData.pharmacyId}
        onChange={handleInputChange}
        options={[{ value: LOCATION.name, label: LOCATION.name }]}
        error={errors.pharmacyId}
        required
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          error={errors.firstName}
          required
        />
        <Input
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          error={errors.lastName}
          required
        />
      </div>

      <Input
        label="Phone Number"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        error={errors.phone}
        helperText="Optional - but provide either phone or email"
      />

      <Input
        label="Email Address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        error={errors.email}
        helperText="Optional - but provide either phone or email"
      />

      {errors.contact && (
        <div className="bg-red-50 border border-red-200 rounded-card p-3">
          <p className="text-red-700 text-sm">{errors.contact}</p>
        </div>
      )}

      {/* Prescription Numbers */}
      <div>
        <label className="block text-sm font-medium text-brand-navy mb-3">
          Prescription Numbers *
        </label>
        <div className="space-y-3" role="group" aria-live="polite">
          {formData.rx.map((rx, index) => (
            <div key={index} className="flex gap-3 items-start">
              <div className="flex-1">
                <Input
                  placeholder={`Prescription ${index + 1} number`}
                  value={rx.number}
                  onChange={(e) => handleRxChange(index, e.target.value)}
                  className="w-full"
                />
              </div>
              {formData.rx.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeRxRow(index)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50 mt-1"
                  aria-label={`Remove prescription ${index + 1}`}
                >
                  Remove
                </Button>
              )}
            </div>
          ))}
        </div>
        
        {errors.rx && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.rx}
          </p>
        )}

        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={addRxRow}
          className="mt-3"
        >
          + Add Another Prescription
        </Button>
      </div>

      <Textarea
        label="Comments (Optional)"
        name="comments"
        value={formData.comments}
        onChange={handleInputChange}
        placeholder="Any special instructions or comments about your refill..."
        rows={3}
      />

      <div className="bg-yellow-50 border border-yellow-200 rounded-card p-4">
        <p className="text-yellow-800 text-sm">
          <strong>Privacy Notice:</strong> Please do not include any personal health information (PHI) beyond what's requested in this form. For confidential health matters, please call us directly.
        </p>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Submitting Refill Request...' : 'Submit Refill Request'}
      </Button>
    </form>
  )
}
