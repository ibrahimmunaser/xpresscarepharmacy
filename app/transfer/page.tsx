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
        </div>
      </section>
    </>
  )
}
