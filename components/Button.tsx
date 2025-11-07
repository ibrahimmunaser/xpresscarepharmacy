import Link from 'next/link'
import { ReactNode } from 'react'

type ButtonProps = {
  as?: 'button' | 'a' | 'link'
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  iconLeft?: ReactNode
  iconRight?: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  target?: string
  rel?: string
}

export default function Button({ 
  as = 'button', 
  href, 
  variant = 'primary', 
  size = 'md', 
  children, 
  iconLeft, 
  iconRight, 
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  target,
  rel
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-card transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2'
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  const variantClasses = {
    primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-button disabled:bg-gray-400',
    secondary: 'bg-white text-brand-600 border border-brand-600 hover:bg-brand-50 disabled:text-gray-400 disabled:border-gray-400',
    ghost: 'text-brand-600 hover:bg-brand-50 disabled:text-gray-400'
  }

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  if (as === 'link' && href) {
    return (
      <Link href={href} className={classes}>
        {iconLeft && <span className="mr-2">{iconLeft}</span>}
        {children}
        {iconRight && <span className="ml-2">{iconRight}</span>}
      </Link>
    )
  }

  if (as === 'a' && href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {iconLeft && <span className="mr-2">{iconLeft}</span>}
        {children}
        {iconRight && <span className="ml-2">{iconRight}</span>}
      </a>
    )
  }

  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  )
}
