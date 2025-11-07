import { 
  ClockIcon,
  TagIcon,
  TruckIcon,
  ShieldCheckIcon,
  HeartIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const iconMap = {
  clock: ClockIcon,
  tag: TagIcon,
  truck: TruckIcon,
  shield: ShieldCheckIcon,
  heart: HeartIcon,
  star: StarIcon,
}

interface Benefit {
  icon: keyof typeof iconMap
  label: string
}

interface BenefitRibbonProps {
  title?: string
  benefits: Benefit[]
}

export default function BenefitRibbon({ title, benefits }: BenefitRibbonProps) {
  return (
    <section className="py-20 bg-brand-navy relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="pill-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <ellipse cx="15" cy="15" rx="8" ry="4" fill="currentColor" className="text-white" opacity="0.3" />
              <ellipse cx="15" cy="15" rx="4" ry="8" fill="currentColor" className="text-white" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#pill-pattern)" />
        </svg>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-transparent to-brand-navy opacity-50"></div>

      <div className="relative max-w-content mx-auto px-6">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              {title}
            </h2>
            <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon]
            
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white leading-tight font-heading">
                  {benefit.label}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

