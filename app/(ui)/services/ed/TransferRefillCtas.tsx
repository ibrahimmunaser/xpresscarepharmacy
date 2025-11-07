export default function TransferRefillCtas() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mt-10 mb-6">
        Transfer or Refill Here
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
          <h3 className="text-lg font-semibold text-brand-navy mb-3">
            Already have a prescription elsewhere?
          </h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Transfer your prescription to Xpress Care for personalized service and discreet handling.
          </p>
          <a
            href="/transfer?to_pharmacy=Xpress%20Care%20Pharmacy&to_address=3040%20E%207%20Mile%2C%20Detroit%2C%20MI%2048234&to_phone=313-914-3736&to_fax=313-914-5105"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-brand-navy text-white hover:bg-brand-navy/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/50 focus-visible:ring-offset-2 w-full"
          >
            Transfer Prescription
          </a>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
          <h3 className="text-lg font-semibold text-brand-navy mb-3">
            Need your next fill?
          </h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Request your refill online for convenient pickup or delivery scheduling.
          </p>
          <a
            href="/online-refill"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-brand-navy text-brand-navy bg-transparent hover:bg-brand-navy/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/50 focus-visible:ring-offset-2 w-full"
          >
            Online Refill
          </a>
        </div>
      </div>
    </section>
  );
}









