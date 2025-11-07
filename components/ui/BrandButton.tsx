import { ButtonHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

type Variant = 'primary' | 'secondary' | 'link'
type Size = 'sm' | 'md' | 'lg'

interface BrandButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  as?: 'button' | 'a'
  href?: string
}

const BrandButton = forwardRef<HTMLButtonElement, BrandButtonProps>(
  ({ className, variant = 'primary', size = 'md', as = 'button', href, children, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/40 disabled:opacity-50 disabled:pointer-events-none'
    
    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      lg: 'h-11 px-6 text-base',
    }
    
    const variants = {
      primary: 'bg-brand-navy text-white hover:bg-brand-navy/90',
      secondary: 'bg-white text-brand-navy border border-brand-navy hover:bg-brand-navy/5',
      link: 'bg-transparent text-brand-navy hover:underline',
    }

    const classes = clsx(base, sizes[size], variants[variant], className)

    if (as === 'a' && href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

BrandButton.displayName = 'BrandButton'

export default BrandButton


















