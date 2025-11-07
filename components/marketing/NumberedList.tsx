interface NumberedItem {
  title: string
  body: string
}

interface NumberedListProps {
  title?: string
  items: NumberedItem[]
}

export default function NumberedList({ title, items }: NumberedListProps) {
  return (
    <section className="py-8">
      {title && (
        <h3 className="text-2xl font-heading font-bold text-brand-navy mb-8">
          {title}
        </h3>
      )}

      <ol className="space-y-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-4">
            {/* Numbered circle */}
            <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {index + 1}
              </span>
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <h4 className="text-lg font-semibold text-brand-navy mb-2">
                {item.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

