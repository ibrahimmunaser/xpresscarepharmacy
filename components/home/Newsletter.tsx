'use client'

import { useState } from 'react'
import Button from '@/components/Button'

interface NewsletterProps {
  title: string
  subtitle: string
  placeholder?: string
  illustrationSrc?: string
}

export default function Newsletter({ 
  title, 
  subtitle, 
  placeholder = "Enter your email...",
  illustrationSrc = "/images/newsletter-illustration.svg"
}: NewsletterProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    setEmail('')
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-16 bg-brand-navy/3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-navy mb-4">
              {title}
            </h2>
            
            <p className="text-lg text-brand-gray leading-relaxed mb-8">
              {subtitle}
            </p>

            {isSubmitted ? (
              <div className="flex items-center space-x-3 p-4 bg-brand-navy/5 border border-brand-navy/20 rounded-lg">
                <div className="w-6 h-6 bg-brand-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-brand-navy font-medium">
                  Thank you for subscribing! Check your email for confirmation.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={placeholder}
                    required
                    className="w-full px-4 py-3 border border-brand-gray/40 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy text-brand-navy placeholder-brand-gray"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg"
                  disabled={isSubmitting}
                  className="btn-primary sm:px-8"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Subscribing...</span>
                    </div>
                  ) : (
                    'Subscribe'
                  )}
                </Button>
              </form>
            )}

            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>

          {/* Illustration */}
          <div className="lg:order-2 flex justify-center">
            <div className="w-full max-w-md">
              <svg className="w-full h-auto text-brand-navy" viewBox="0 0 400 300" fill="none">
                {/* Health-themed illustration */}
                <circle cx="200" cy="150" r="120" fill="currentColor" opacity="0.1"/>
                <rect x="160" y="120" width="80" height="60" rx="8" fill="currentColor" opacity="0.2"/>
                <circle cx="180" cy="140" r="8" fill="currentColor" opacity="0.6"/>
                <circle cx="220" cy="140" r="8" fill="currentColor" opacity="0.6"/>
                <path d="M160 160h80v10a8 8 0 01-8 8h-64a8 8 0 01-8-8v-10z" fill="currentColor" opacity="0.4"/>
                
                {/* Pills/capsules decoration */}
                <ellipse cx="120" cy="100" rx="15" ry="8" fill="currentColor" opacity="0.3"/>
                <ellipse cx="280" cy="200" rx="12" ry="6" fill="currentColor" opacity="0.3"/>
                <ellipse cx="320" cy="120" rx="10" ry="5" fill="currentColor" opacity="0.3"/>
                
                {/* Email elements */}
                <rect x="70" y="60" width="60" height="40" rx="4" fill="currentColor" opacity="0.2"/>
                <path d="M70 65l30 20 30-20" stroke="currentColor" strokeWidth="2" opacity="0.4" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

