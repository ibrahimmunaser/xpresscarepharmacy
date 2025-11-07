'use client'

import { useState } from 'react'
import FormField from '@/components/forms/FormField'
import Button from '@/components/Button'
import { 
  QuestionMarkCircleIcon,
  DevicePhoneMobileIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

interface Pharmacy {
  id: string
  name: string
}

interface LTCContactFormProps {
  pharmacies: Pharmacy[]
  submitTo: string
}

interface FormData {
  pharmacyId: string
  firstName: string
  lastName: string
  phone: string
  email: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

export default function LTCContactForm({ pharmacies, submitTo }: LTCContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    pharmacyId: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.pharmacyId) {
      newErrors.pharmacyId = 'Please select a pharmacy'
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.phone.trim() && !formData.email.trim()) {
      newErrors.contact = 'Please provide either phone number or email'
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
    // Clear contact error when either phone or email is entered
    if ((name === 'phone' || name === 'email') && errors.contact) {
      setErrors(prev => ({ ...prev, contact: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
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
    } finally {
      setIsSubmitting(false)
    }
  }

  const infoTiles = [
    {
      icon: QuestionMarkCircleIcon,
      title: "If you have any questions",
      description: "Speak to a pharmacist or request consultation"
    },
    {
      icon: PhoneIcon,
      title: "Get in touch",
      description: "Visit in person or call; we're here to help"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-navy mb-4">
            Connect with Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Tiles */}
          <div className="space-y-8">
            {infoTiles.map((tile, index) => {
              const Icon = tile.icon
              
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-navy/10 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-brand-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">
                      {tile.title}
                    </h3>
                    <p className="text-brand-gray">
                      {tile.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-section shadow-card p-8">
            {isSubmitted ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-brand-navy" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-brand-navy mb-4">
                  Thank You!
                </h3>
                <p className="text-lg text-brand-gray">
                  We've received your message and will contact you within 24 hours to discuss your facility's needs.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <FormField
                  label="Select Pharmacy"
                  type="select"
                  name="pharmacyId"
                  value={formData.pharmacyId}
                  onChange={handleInputChange}
                  options={pharmacies.map(p => ({ value: p.id, label: p.name }))}
                  error={errors.pharmacyId}
                  required
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    error={errors.firstName}
                    required
                  />
                  <FormField
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    error={errors.lastName}
                    required
                  />
                </div>

                <FormField
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={errors.phone}
                />

                <FormField
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                />

                {errors.contact && (
                  <p className="text-sm text-red-600" role="alert">
                    {errors.contact}
                  </p>
                )}

                <FormField
                  label="Message"
                  type="textarea"
                  name="message"
                  placeholder="Tell us about your facility's needs..."
                  value={formData.message}
                  onChange={handleInputChange}
                  error={errors.message}
                  rows={4}
                  required
                />

                <div className="bg-brand-navy/5 border border-brand-navy/20 rounded-lg p-4 text-sm text-brand-navy">
                  <strong>Privacy Notice:</strong> Do not include any patient health information (PHI) in this form. This is for general inquiries only.
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full btn-primary"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    'Submit'
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
