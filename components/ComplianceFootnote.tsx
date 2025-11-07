type ComplianceFootnoteProps = {
  children: React.ReactNode
  className?: string
}

export default function ComplianceFootnote({ children, className = '' }: ComplianceFootnoteProps) {
  return (
    <div className={`text-sm leading-relaxed ${className}`}>
      {children}
    </div>
  )
}

