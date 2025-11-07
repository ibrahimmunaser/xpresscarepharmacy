interface Stat {
  icon: React.ReactNode
  value: string
  label: string
}

interface StatsRowProps {
  stats: Stat[]
}

export default function StatsRow({ stats }: StatsRowProps) {
  return (
    <div className="bg-white py-8 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-brand-navy mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

