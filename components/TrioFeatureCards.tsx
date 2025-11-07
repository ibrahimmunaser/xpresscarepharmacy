import Section from './Section'

type TrioFeatureCardsProps = {
  title?: string
  items: { icon: string; title: string; body: string }[]
}

const iconMap: { [key: string]: string } = {
  users: '👥',
  heart: '❤️',
  shield: '🛡️',
  truck: '🚚',
  clock: '⏰',
  document: '📄',
  dollar: '💰',
  building: '🏢',
  hand: '✋',
  medical: '🏥',
  phone: '📞',
  chart: '📊'
}

export default function TrioFeatureCards({ title, items }: TrioFeatureCardsProps) {
  return (
    <Section>
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy">
            {title}
          </h2>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, index) => {
          const iconEmoji = iconMap[item.icon] || '📋'
          
          return (
            <article key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-100 rounded-full mb-6 group-hover:bg-brand-200 transition-colors text-2xl">
                {iconEmoji}
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
    </Section>
  )
}

