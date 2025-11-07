import { 
  AcademicCapIcon,
  ShieldCheckIcon,
  TruckIcon,
  StarIcon,
  CreditCardIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const iconMap = {
  academic: AcademicCapIcon,
  shield: ShieldCheckIcon,
  truck: TruckIcon,
  star: StarIcon,
  credit: CreditCardIcon,
  clock: ClockIcon,
}

interface Benefit {
  icon: keyof typeof iconMap
  title: string
  description: string
}

interface WhyChooseUsProps {
  title: string
  benefits: Benefit[]
}

export default function WhyChooseUs({ title, benefits }: WhyChooseUsProps) {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon]
            
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-navy rounded-full mb-4 group-hover:bg-brand-navy/90 transition-colors">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}






