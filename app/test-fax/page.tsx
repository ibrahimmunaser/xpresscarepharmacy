'use client'

import { useState, useEffect } from 'react'
import { Section } from '@/components/ui/Section'
import Button from '@/components/Button'
import { Alert } from '@/components/ui/Alert'

type TestState = 'idle' | 'loading' | 'success' | 'error'

export default function TestFaxPage() {
  const [state, setState] = useState<TestState>('idle')
  const [result, setResult] = useState<any>(null)
  const [isProduction, setIsProduction] = useState(false)

  useEffect(() => {
    setIsProduction(process.env.NODE_ENV === 'production')
  }, [])

  const sendTestFax = async () => {
    setState('loading')
    setResult(null)

    try {
      // Create a test refill request
      const testData = {
        patientName: 'John Test Patient',
        dateOfBirth: '01/15/1985',
        patientPhone: '313-555-0123',
        patientEmail: 'test@example.com',
        rxNumbers: 'Test Rx #12345\nTest Medication Sample',
        notes: 'This is a test fax sent from the development environment.',
        consent: true,
        company: '' // Honeypot
      }

      const response = await fetch('/api/refill', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testData)
      })

      const data = await response.json()
      setResult(data)

      if (data.ok) {
        setState('success')
      } else {
        setState('error')
      }
    } catch (error) {
      setState('error')
      setResult({ error: String(error) })
    }
  }

  if (isProduction) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <Section maxWidth="md">
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-brand-navy mb-4">
                Page Not Available
              </h1>
              <p className="text-lg text-slate-600">
                This test page is only available in development mode.
              </p>
            </div>
          </div>
        </Section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Section maxWidth="md">
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 mb-4">
              Development Only
            </div>
            <h1 className="text-3xl font-bold text-brand-navy mb-4">
              Test Fax System
            </h1>
            <p className="text-lg text-slate-600">
              Send a test fax to verify the fax provider integration is working correctly.
            </p>
          </div>

          <div className="space-y-6">
            {state === 'success' && (
              <Alert type="success" title="Test Fax Sent Successfully">
                <div className="space-y-2">
                  <p>The test fax was sent successfully!</p>
                  {result?.faxId && (
                    <p className="text-sm">
                      <strong>Fax ID:</strong> {result.faxId}
                    </p>
                  )}
                </div>
              </Alert>
            )}

            {state === 'error' && (
              <Alert type="error" title="Test Fax Failed">
                <div className="space-y-2">
                  <p>The test fax could not be sent.</p>
                  {result?.message && (
                    <p className="text-sm">
                      <strong>Error:</strong> {result.message}
                    </p>
                  )}
                </div>
              </Alert>
            )}

            <div className="bg-gray-50 rounded-md p-4">
              <h3 className="font-medium text-brand-navy mb-2">Test Details</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• <strong>Destination:</strong> 313-914-5105 (clinic fax)</li>
                <li>• <strong>Provider:</strong> {process.env.NEXT_PUBLIC_FAX_PROVIDER || 'MOCK'}</li>
                <li>• <strong>Patient:</strong> John Test Patient</li>
                <li>• <strong>Content:</strong> Sample refill request</li>
              </ul>
            </div>

            <Button
              onClick={sendTestFax}
              disabled={state === 'loading'}
              className="w-full bg-red-600 hover:bg-red-700 focus:ring-red-500"
              size="lg"
            >
              {state === 'loading' ? 'Sending...' : 'Send Test Fax'}
            </Button>

            <div className="text-center">
              <p className="text-xs text-slate-500">
                This test sends a 1-page dummy PDF to the clinic fax number.
                Verify receipt at the clinic machine.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
