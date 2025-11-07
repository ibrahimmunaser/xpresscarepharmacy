import { ReactNode } from 'react'

type SectionProps = {
  id?: string
  bg?: 'default' | 'beige' | 'tint'
  className?: string
  children: ReactNode
}

export default function Section({ id, bg = 'default', className = '', children }: SectionProps) {
  const bgClasses = {
    default: 'bg-white',
    beige: 'bg-beige',
    tint: 'bg-brand-50'
  }

  return (
    <section 
      id={id}
      className={`py-section-mobile md:py-section-tablet lg:py-section-desktop ${bgClasses[bg]} ${className}`}
    >
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  )
}

