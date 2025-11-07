import { 
  ShieldCheckIcon, 
  CurrencyDollarIcon, 
  CalculatorIcon 
} from '@heroicons/react/24/outline';

const coverageOptions = [
  {
    icon: ShieldCheckIcon,
    title: 'Insurance Coverage',
    description: 'Coverage varies by plan and medication. We\'ll check your benefits and share your co-pay before filling.',
    note: 'Most plans cover generic options'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Savings & Generics',
    description: 'If eligible, we\'ll apply manufacturer coupons and copay-card savings to reduce your out-of-pocket costs.',
    note: 'Savings programs available for qualifying patients'
  },
  {
    icon: CalculatorIcon,
    title: 'Cash Price',
    description: 'Transparent quotes available for all medications. Our team can provide exact pricing for your specific needs.',
    note: 'Competitive cash pricing available'
  }
];

export default function CoverageGrid() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mt-10 mb-6">
        Insurance & Pricing
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {coverageOptions.map((option, index) => (
          <div
            key={index}
            className="rounded-xl border border-white/20 bg-white/10 shadow-sm p-6"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <option.icon className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {option.title}
                </h3>
                <p className="text-white/90 leading-relaxed mb-3">
                  {option.description}
                </p>
                <p className="text-sm text-white/80 font-medium">
                  {option.note}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-white/10 border border-white/20 rounded-lg">
        <p className="text-white/90 text-sm">
          <strong>Note:</strong> We cannot publish legally restricted pricing here. Call our team for your exact out-of-pocket costs and available savings options.
        </p>
      </div>
    </section>
  );
}









