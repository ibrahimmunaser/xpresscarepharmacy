import { HTMLInputTypeAttribute, TextareaHTMLAttributes, InputHTMLAttributes } from 'react'

interface BaseFieldProps {
  label: string
  error?: string
  required?: boolean
  className?: string
}

interface InputFieldProps extends BaseFieldProps {
  type?: HTMLInputTypeAttribute
  inputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'required'>
}

interface TextareaFieldProps extends BaseFieldProps {
  rows?: number
  textareaProps?: Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'required'>
}

export function InputField({ 
  label, 
  error, 
  required, 
  type = 'text', 
  className = '',
  inputProps 
}: InputFieldProps) {
  const id = inputProps?.name || label.toLowerCase().replace(/\s+/g, '-')
  
  return (
    <div className={`space-y-2 ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-brand-navy">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        {...inputProps}
        type={type}
        id={id}
        required={required}
        className={`
          w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          ${error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}
        `}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export function TextareaField({ 
  label, 
  error, 
  required, 
  rows = 4, 
  className = '',
  textareaProps 
}: TextareaFieldProps) {
  const id = textareaProps?.name || label.toLowerCase().replace(/\s+/g, '-')
  
  return (
    <div className={`space-y-2 ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-brand-navy">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        {...textareaProps}
        id={id}
        rows={rows}
        required={required}
        className={`
          w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          ${error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}
        `}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}













