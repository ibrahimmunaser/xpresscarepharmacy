import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { RefillForm } from '@/components/forms/RefillForm'

export const metadata: Metadata = {
  title: 'Refill Your Prescription | Xpress Care Pharmacy',
  description: 'Submit your prescription refill online. We\'ll process it and contact you if we have any questions.',
}

export default function RefillPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Section maxWidth="xl">
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-brand-navy mb-4">
              Refill Your Prescription
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Submit your refill online. We'll process it and contact you if we have any questions.
            </p>
          </div>

          <RefillForm />

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="bg-blue-50 rounded-md p-4">
              <h3 className="text-sm font-medium text-blue-800 mb-2">
                Privacy & Security
              </h3>
              <p className="text-sm text-blue-700">
                We use encrypted fax via a HIPAA-capable provider. We do not store your form data online after transmission.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mt-6 p-4 bg-gray-50 rounded-md">
              <h3 className="text-sm font-semibold text-brand-navy mb-3">Need Help?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-brand-navy mb-2">Contact Us</p>
                  <div className="space-y-1">
                    <div>
                      <span className="text-slate-600">Phone: </span>
                      <a href="tel:313-914-3736" className="text-blue-600 hover:underline font-medium">
                        (313) 914-3736
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-600">Fax: </span>
                      <span className="text-slate-900 font-medium">(313) 914-5105</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-brand-navy mb-2">Address</p>
                  <p className="text-slate-900 font-medium">3040 E 7 Mile<br />Detroit, MI 48234</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
