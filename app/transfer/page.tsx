import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { TransferForm } from '@/components/forms/TransferForm'

export const metadata: Metadata = {
  title: 'Transfer Your Prescription | Xpress Care Pharmacy',
  description: 'Transfer your prescriptions to Xpress Care Pharmacy. We\'ll coordinate the transfer from your current pharmacy.',
}

export default function TransferPage() {
  return (
    <>
      {/* Header Section - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-brand-navy mb-4">
              Transfer Your Prescription to Xpress Care Pharmacy
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We'll coordinate the transfer from your current pharmacy. Just fill out the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-12">
          <div className="bg-gray-50 rounded-lg shadow-sm p-6 md:p-8">
            <TransferForm />
          </div>
        </div>
      </section>

      {/* Privacy Section - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-12">
          <div className="bg-blue-50 rounded-md p-6">
            <h3 className="text-lg font-medium text-blue-800 mb-3">
              Privacy & Security
            </h3>
            <p className="text-blue-700">
              We use encrypted fax via a HIPAA-capable provider. We do not store your form data online after transmission.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-brand-navy mb-4">Need Help?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
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
      </section>
    </>
  )
}
