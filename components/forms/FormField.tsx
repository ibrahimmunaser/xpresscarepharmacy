'use client'

import { forwardRef } from 'react'
import { clsx } from 'clsx'

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {
  label: string
  error?: string
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  options?: { value: string; label: string }[]
  rows?: number
}

const FormField = forwardRef<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, FormFieldProps>(
  ({ label, error, type = 'text', className, options, rows = 4, ...props }, ref) => {
    const baseClasses = 'w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-colors'
    const errorClasses = error ? 'border-red-500' : 'border-brand-gray/40'
    const classes = clsx(baseClasses, errorClasses, className)

    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-brand-navy">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        
        {type === 'textarea' ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={classes}
            rows={rows}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : type === 'select' ? (
          <select
            ref={ref as React.Ref<HTMLSelectElement>}
            className={classes}
            {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}
          >
            <option value="">Select an option</option>
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            type={type}
            className={classes}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        
        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

FormField.displayName = 'FormField'

export default FormField

