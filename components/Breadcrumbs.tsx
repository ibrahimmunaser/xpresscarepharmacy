import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-3" aria-label="Breadcrumb">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {item.href ? (
                <Link 
                  href={item.href}
                  className="text-slate-600 hover:text-brand-600 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-brand-navy font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
              {index < items.length - 1 && (
                <ChevronRightIcon 
                  className="w-4 h-4 mx-2 text-gray-400" 
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

