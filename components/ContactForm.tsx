'use client'

import { useState } from 'react'
import Select from './Select'
import Input from './Input'
import Textarea from './Textarea'
import Button from './Button'
import { LOCATION } from '@/lib/location'

type ContactFormValues = {
  pharmacyId: string
  firstName: string
  lastName: string
  phone?: string
  email?: string
  message: string
}

type ContactFormProps = {
  // No longer need pharmacies prop, using single location
}

export default function ContactForm({}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormValues>({
    pharmacyId: LOCATION.name,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<Partial<ContactFormValues & { contact: string }>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormValues & { contact: string }> = {}

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

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'contact' })
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setIsSubmitted(true)
      setFormData({
        pharmacyId: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
      })
    } catch (error) {
      console.error('Form submission error:', error)
      // Could set a general error state here
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto text-center">
        <div className="bg-green-50 border border-green-200 rounded-card p-8">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-green-700">
            Thank you for contacting us. We'll get back to you within 24 hours.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="secondary"
            className="mt-4"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
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

      <Textarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        error={errors.message}
        placeholder="How can we help you today?"
        rows={4}
        required
      />

      <div className="bg-yellow-50 border border-yellow-200 rounded-card p-4">
        <p className="text-yellow-800 text-sm">
          <strong>Privacy Notice:</strong> Please do not include any personal health information (PHI) such as Social Security numbers, date of birth, or specific medical details in this form. For confidential health matters, please call us directly.
        </p>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Sending Message...' : 'Send Message'}
      </Button>
    </form>
  )
}
