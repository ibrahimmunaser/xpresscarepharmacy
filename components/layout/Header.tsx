'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '/about' 
  },
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
      { name: 'Long-Term Care', href: '/long-term-care' },
      { name: 'Auto Accident Claims', href: '/auto-accident' },
      { name: 'Worker\'s Compensation', href: '/workers-comp' },
      { name: 'Weight Management / GLP-1', href: '/semaglutide' }
    ]
  },
  { name: 'Gift Shop', href: '/gift-shop' },
]

const transferOptions = [
  { name: 'Transfer Prescriptions', href: '/transfer' },
  { name: 'Insurance Questions', href: '/contact?subject=insurance' },
  { name: 'Prescription History', href: '/contact?subject=history' }
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [transferDropdownOpen, setTransferDropdownOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
        setTransferDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header ref={headerRef} className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/images/logo.png"
                alt=""
                className="h-10 w-auto"
                style={{ maxWidth: '120px' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button 
                      className="flex items-center space-x-1 text-brand-gray hover:text-brand-navy font-medium transition-colors"
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDownIcon className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-brand-gray hover:bg-brand-navy/5 hover:text-brand-navy transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-brand-gray hover:text-brand-navy font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Utility Menu & CTA */}
          <div className="flex items-center space-x-4">
            {/* Transfer Dropdown */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setTransferDropdownOpen(!transferDropdownOpen)}
                className="flex items-center space-x-1 text-sm text-brand-gray hover:text-brand-navy transition-colors"
              >
                <span>Transfer</span>
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {transferDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  >
                    {transferOptions.map((option) => (
                      <Link
                        key={option.name}
                        href={option.href}
                        className="block px-4 py-2 text-sm text-brand-gray hover:bg-brand-navy/5 hover:text-brand-navy transition-colors"
                        onClick={() => setTransferDropdownOpen(false)}
                      >
                        {option.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Online Refill CTA */}
            <Link
              href="/refill"
              className="btn-primary bg-brand-navy hover:bg-brand-navy/90 text-white px-6 py-2 rounded-full font-medium shadow-button text-sm transition-all"
            >
              Online Refill
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200 bg-white"
            >
              {/* Two-row mobile layout as specified */}
              <div className="py-4 space-y-4">
                {/* First row: Main navigation as scrollable tabs */}
                <div className="overflow-x-auto">
                  <div className="flex space-x-6 px-4 min-w-max">
                    {navigation.slice(0, 4).map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-brand-gray hover:text-brand-navy font-medium whitespace-nowrap"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Second row: Additional links */}
                <div className="px-4 space-y-2">
                  {navigation.slice(4).map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-brand-gray hover:text-brand-navy font-medium py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-gray-200">
                    {transferOptions.map((option) => (
                      <Link
                        key={option.name}
                        href={option.href}
                        className="block text-brand-gray hover:text-brand-navy py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {option.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
