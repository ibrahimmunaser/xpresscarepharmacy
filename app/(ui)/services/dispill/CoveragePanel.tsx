export default function CoveragePanel() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mt-10 mb-6">
        Coverage & Pricing
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
          <h3 className="text-lg font-semibold text-brand-navy mb-3">
            Insurance Coverage
          </h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Many insurance plans cover standard packaging and pharmacist services. Coverage limits vary by plan.
          </p>
          <p className="text-sm text-brand-navy font-medium">
            We'll verify your benefits at no charge.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
          <h3 className="text-lg font-semibold text-brand-navy mb-3">
            Cash Options
          </h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Transparent monthly packaging fee with competitive rates. Often waived with minimum monthly prescription count.
          </p>
          <p className="text-sm text-brand-navy font-medium">
            No hidden fees or surprises.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
          <h3 className="text-lg font-semibold text-brand-navy mb-3">
            Delivery Options
          </h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Free delivery within our service area around 3040 E 7 Mile, Detroit, MI 48234. Small fee for extended areas.
          </p>
          <p className="text-sm text-brand-navy font-medium">
            Same or next-day delivery available.
          </p>
        </div>
      </div>
    </section>
  );
}









