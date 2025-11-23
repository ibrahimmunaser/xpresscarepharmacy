import Section from '@/components/Section'
import OnlineRefillForm from '@/components/OnlineRefillForm'
import { LOCATION } from '@/lib/location'

export default function OnlineRefillPage() {
  return (
    <>
      {/* Hero Section - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-brand-100 rounded-full mb-6">
              <span className="text-brand-700 font-medium text-sm">Online Refill</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-navy mb-6">
              Stay Home, Refill Prescription Online
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Submit your Rx numbers securely; we'll confirm when it's ready. Our convenient online refill service lets you request prescription refills from the comfort of your home.
            </p>
          </div>
        </div>
      </section>

      {/* Refill Form - Brand Navy Background */}
      <section className="bg-brand-navy w-full">
        <div className="max-w-content mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-brand-navy mb-4">
                  Refill Your Prescriptions
                </h2>
                <p className="text-slate-600">
                  Enter your prescription numbers below and we'll prepare your refills for pickup or delivery.
                  Call {LOCATION.phone} to confirm availability.
                </p>
              </div>
              
              <OnlineRefillForm />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - White Background */}
      <section className="bg-white w-full">
        <div className="max-w-content mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">
              Why Choose Online Refills?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🏠',
                  title: 'Stay Home',
                  description: 'Request refills from the comfort of your home without needing to call or visit the pharmacy.'
                },
                {
                  icon: '⏱️',
                  title: 'Save Time',
                  description: 'Skip the phone queue and submit multiple prescription refills at once, 24/7.'
                },
                {
                  icon: '🔔',
                  title: 'Get Notified',
                  description: 'Receive confirmation when your prescriptions are ready for pickup or delivery.'
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="mt-12 p-6 bg-brand-navy rounded-xl text-center">
              <h3 className="text-xl font-bold text-white mb-4">
                Need Help with Your Refill?
              </h3>
              <p className="text-white/90 mb-6">
                Our team is available to assist you with any questions about your prescriptions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/90">
                <div>
                  <p className="font-semibold text-white mb-1">Phone</p>
                  <a href="tel:313-914-3736" className="hover:text-white transition-colors">
                    (313) 914-3736
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Fax</p>
                  <p>(313) 914-5105</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Address</p>
                  <p className="text-sm">3040 E 7 Mile, Detroit, MI 48234</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const metadata = {
  title: 'Online Prescription Refills - Xpress Care Pharmacy',
  description: 'Request prescription refills online 24/7. Submit your Rx numbers securely and we\'ll notify you when they\'re ready for pickup or delivery.',
  keywords: 'online prescription refill, pharmacy refill, prescription renewal, medication refill, online pharmacy services',
}
