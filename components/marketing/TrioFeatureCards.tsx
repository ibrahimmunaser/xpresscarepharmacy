import { 
  UserGroupIcon,
  HeartIcon,
  ShieldCheckIcon,
  TruckIcon,
  ClockIcon,
  DocumentCheckIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  HandRaisedIcon
} from '@heroicons/react/24/outline'

const iconMap = {
  users: UserGroupIcon,
  heart: HeartIcon,
  shield: ShieldCheckIcon,
  truck: TruckIcon,
  clock: ClockIcon,
  document: DocumentCheckIcon,
  dollar: CurrencyDollarIcon,
  building: BuildingOfficeIcon,
  hand: HandRaisedIcon,
}

interface FeatureItem {
  icon: keyof typeof iconMap
  title: string
  body: string
}

interface TrioFeatureCardsProps {
  title?: string
  items: FeatureItem[]
}

export default function TrioFeatureCards({ title, items }: TrioFeatureCardsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-navy">
              {title}
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon]
            
            return (
              <article key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 group-hover:bg-primary-200 transition-colors">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-brand-navy mb-4">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {item.body}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

