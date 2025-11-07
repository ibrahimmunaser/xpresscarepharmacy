'use client'

import { useState } from 'react'
import Button from './Button'
import Input from './Input'
import Section from './Section'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call - replace with actual newsletter endpoint
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      setEmail('')
    } catch (error) {
      console.error('Newsletter subscription error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section bg="tint">
      <div className="max-w-4xl mx-auto text-center">
        {/* Background decoration */}
        <div className="relative">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <circle cx="20" cy="20" r="8" fill="currentColor" className="text-brand-400" />
              <circle cx="80" cy="30" r="6" fill="currentColor" className="text-brand-300" />
              <circle cx="70" cy="70" r="10" fill="currentColor" className="text-brand-200" />
              <circle cx="30" cy="80" r="4" fill="currentColor" className="text-brand-400" />
            </svg>
          </div>

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
              Stay Connected
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Join our newsletter community to receive exclusive health tips, special offers, and updates on the latest healthcare trends.
            </p>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-card p-6 max-w-md mx-auto">
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Successfully subscribed!</h3>
                    <p className="text-green-700 text-sm">Thank you for joining our newsletter.</p>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="whitespace-nowrap"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe →'}
                  </Button>
                </div>
                <p className="text-xs text-slate-500 mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}

