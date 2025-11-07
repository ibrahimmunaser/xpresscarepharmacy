'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from './Button'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'Free Delivery', href: '/services/free-delivery' },
      { name: 'Immunizations', href: '/services/immunizations' },
      { name: 'Dispill® Multi-Dose Packaging', href: '/services/dispill-multi-dose-packaging' },
      { name: 'Erectile Dysfunction', href: '/services/erectile-dysfunction' },
      { name: 'Medication Adherence', href: '/services/medication-adherence' },
      { name: 'Medication Therapy Management', href: '/services/medication-therapy-management' },
      { name: 'Pet Care', href: '/services/pet-care' },
      { name: 'Medication Synchronization', href: '/services/medication-synchronization' },
      { name: 'Diabetes Care', href: '/services/diabetes-care' },
      { name: 'Travel Vaccinations', href: '/services/travel-vaccinations' }
    ]
  },
  {
    name: 'Specialty',
    href: '/specialty',
    dropdown: [
      { name: 'Long-Term Care', href: '/specialty/long-term-care' },
      { name: 'Auto Accident Claims', href: '/specialty/auto-accident' },
      { name: 'Worker\'s Compensation', href: '/specialty/workers-comp' },
      { name: 'Weight Management / GLP-1', href: '/specialty/semaglutide' }
    ]
  },
  { name: 'Gift Shop', href: '/gift-shop' },
]

const transferOptions = [
  { name: 'Transfer Prescriptions', href: '/transfer' },
  { name: 'Insurance Questions', href: '/contact?subject=insurance' },
  { name: 'Prescription History', href: '/contact?subject=history' }
]

export default function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Xpress Care Pharmacy</span>
              <img
                src="/images/logo.png"
                alt=""
                className="h-32 w-auto"
                style={{ maxWidth: '360px' }}
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <Button
              as="button"
              variant="ghost"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2.5 text-brand-navy"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div>
                    <button
                      type="button"
                      className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-brand-navy hover:text-brand-600"
                      onClick={() => handleDropdownToggle(item.name)}
                      aria-expanded={openDropdown === item.name}
                    >
                      {item.name}
                      <ChevronDownIcon
                        className={`h-5 w-5 transition-transform ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-section bg-white text-sm leading-6 shadow-card ring-1 ring-gray-900/5">
                          <div className="p-4">
                            {item.dropdown.map((subItem) => (
                              <div key={subItem.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                <Link
                                  href={subItem.href}
                                  className="block font-semibold text-brand-navy"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  {subItem.name}
                                  <span className="absolute inset-0" />
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-semibold leading-6 text-brand-navy hover:text-brand-600"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop utility and CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-brand-navy hover:text-brand-600"
                onClick={() => handleDropdownToggle('Transfer')}
              >
                Transfer
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform ${
                    openDropdown === 'Transfer' ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {openDropdown === 'Transfer' && (
                <div className="absolute right-0 z-10 mt-5 flex w-screen max-w-max px-4">
                  <div className="w-screen max-w-sm flex-auto overflow-hidden rounded-section bg-white text-sm leading-6 shadow-card ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {transferOptions.map((option) => (
                        <div key={option.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                          <Link
                            href={option.href}
                            className="block font-semibold text-brand-navy"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {option.name}
                            <span className="absolute inset-0" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Button as="link" href="/refill" variant="primary">
              Online Refill
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Xpress Care Pharmacy</span>
                <img
                  src="/images/logo.png"
                  alt=""
                  className="h-24 w-auto"
                  style={{ maxWidth: '300px' }}
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-brand-navy"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-brand-navy hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.dropdown && (
                        <div className="ml-4 space-y-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block rounded-lg px-3 py-2 text-sm leading-7 text-slate-600 hover:bg-gray-50"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <div className="space-y-2">
                    {transferOptions.map((option) => (
                      <Link
                        key={option.name}
                        href={option.href}
                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-brand-navy hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {option.name}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Button 
                      as="link" 
                      href="/refill" 
                      variant="primary"
                      className="w-full"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Online Refill
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
