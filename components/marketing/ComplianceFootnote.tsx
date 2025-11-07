interface ComplianceFootnoteProps {
  children: React.ReactNode
  className?: string
}

export default function ComplianceFootnote({ children, className = '' }: ComplianceFootnoteProps) {
  return (
    <div className={`text-sm text-slate-600 leading-relaxed ${className}`}>
      {children}
    </div>
  )
}

