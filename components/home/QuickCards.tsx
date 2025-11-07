import Link from 'next/link'
import Card from '@/components/ui/Card'
import { 
  TruckIcon, 
  ClipboardDocumentListIcon, 
  ArrowPathIcon,
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

const iconMap = {
  truck: TruckIcon,
  clipboard: ClipboardDocumentListIcon,
  refresh: ArrowPathIcon,
  heart: HeartIcon,
  shield: ShieldCheckIcon,
  users: UserGroupIcon,
}

interface QuickCard {
  icon: keyof typeof iconMap
  title: string
  description: string
  href: string
  linkText?: string
}

interface QuickCardsProps {
  cards: QuickCard[]
}

export default function QuickCards({ cards }: QuickCardsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = iconMap[card.icon]
            
            return (
              <Card key={index} hover className="p-6 group">
                <Link href={card.href} className="block">
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-brand-navy mb-2 group-hover:text-primary-700 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-3">
                        {card.description}
                      </p>
                      <span className="text-primary-600 text-sm font-medium group-hover:text-primary-700 transition-colors">
                        {card.linkText || 'Learn more'} →
                      </span>
                    </div>
                  </div>
                </Link>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

