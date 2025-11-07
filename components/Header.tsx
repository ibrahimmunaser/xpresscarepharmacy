"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [specialtyOpen, setSpecialtyOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const specialtyRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
      if (specialtyRef.current && !specialtyRef.current.contains(event.target as Node)) {
        setSpecialtyOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full bg-white transition-shadow",
        scrolled ? "shadow-header" : ""
      ].join(" ")}
      aria-label="Site header"
    >
      <div className="mx-auto max-w-content px-4 md:px-6">
        <nav className="flex h-24 items-center justify-between gap-6 md:h-28">
          {/* Left: Logo */}
          <Link href="/" className="inline-flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="Xpress Care Pharmacy"
              className="h-28 w-auto md:h-32 mt-2 mb-2"
            />
          </Link>

          {/* Center: Primary nav */}
          <ul className="hidden items-center gap-6 text-[0.95rem] text-brand-navy md:flex">
            <li><Link href="/" className="hover:opacity-80">Home</Link></li>
            <li><Link href="/about" className="hover:opacity-80">About</Link></li>
            
            {/* Services Dropdown */}
            <li className="group relative" ref={servicesRef}>
              <button
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setSpecialtyOpen(false);
                }}
                className="flex items-center gap-1 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-brand-navy/40 rounded"
              >
                Services
                <ChevronDownIcon className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link href="/services/free-delivery" className="block px-4 py-2 text-sm text-brand-navy hover:bg-brand-navy/5" onClick={() => setServicesOpen(false)}>
                    Free Delivery
                  </Link>
                  <Link href="/services/immunizations" className="block px-4 py-2 text-sm text-brand-navy hover:bg-brand-navy/5" onClick={() => setServicesOpen(false)}>
                    Immunizations
                  </Link>
                  <Link href="/services/dispill-multi-dose-packaging" className="block px-4 py-2 text-sm text-brand-navy hover:bg-brand-navy/5" onClick={() => setServicesOpen(false)}>
                    Dispill® Multi-Dose Packaging
                  </Link>
                  <Link href="/services/erectile-dysfunction" className="block px-4 py-2 text-sm text-brand-navy hover:bg-brand-navy/5" onClick={() => setServicesOpen(false)}>
                    Erectile Dysfunction
                  </Link>
                  <Link href="/services/medication-adherence" className="block px-4 py-2 text-sm text-brand-navy hover:bg-brand-navy/5" onClick={() => setServicesOpen(false)}>
                    Medication Adherence
                  </Link>
                  <Link href="/services/medication-therapy-management" className="block px-4 py-2 text-sm text-brand-navy hover:bg-brand-navy/5" onClick={() => setServicesOpen(false)}>
                    Medication Therapy Management
                  </Link>
                  <Link href="/services/pet-care" className="block px-4 py-2 text-sm text-brand-navy hover:bg-brand-navy/5" onClick={() => setServicesOpen(false)}>
                    Pet Care
                  </Link>
                  <Link href="/services/medication-synchronization" className="block px-4 py-2 text-sm text-brand-navy hover:bg-brand-navy/5" onClick={() => setServicesOpen(false)}>
                    Medication Synchronization
                  </Link>
                  <Link href="/services/diabetes-care" className="block px-4 py-2 text-sm text-brand-navy hover:bg-brand-navy/5" onClick={() => setServicesOpen(false)}>
                    Diabetes Care
                  </Link>
                  <Link href="/services/travel-vaccinations" className="block px-4 py-2 text-sm text-brand-navy hover:bg-brand-navy/5" onClick={() => setServicesOpen(false)}>
                    Travel Vaccinations
                  </Link>
                </div>
              )}
            </li>

            {/* Specialty Dropdown */}
            <li className="group relative" ref={specialtyRef}>
              <button
                onClick={() => {
                  setSpecialtyOpen(!specialtyOpen);
                  setServicesOpen(false);
                }}
                className="flex items-center gap-1 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-brand-navy/40 rounded"
              >
                Specialty
                <ChevronDownIcon className={`h-4 w-4 transition-transform ${specialtyOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {specialtyOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link href="/specialty/long-term-care" className="block px-4 py-2 text-sm text-brand-navy hover:bg-brand-navy/5" onClick={() => setSpecialtyOpen(false)}>
                    Long-Term Care
                  </Link>
                  <Link href="/specialty/auto-accident" className="block px-4 py-2 text-sm text-brand-navy hover:bg-brand-navy/5" onClick={() => setSpecialtyOpen(false)}>
                    Auto Accident Claims
                  </Link>
                  <Link href="/specialty/workers-comp" className="block px-4 py-2 text-sm text-brand-navy hover:bg-brand-navy/5" onClick={() => setSpecialtyOpen(false)}>
                    Worker's Compensation
                  </Link>
                  <Link href="/specialty/semaglutide" className="block px-4 py-2 text-sm text-brand-navy hover:bg-brand-navy/5" onClick={() => setSpecialtyOpen(false)}>
                    Semaglutide (Weight Management)
                  </Link>
                </div>
              )}
            </li>
            
            <li><Link href="/contact" className="hover:opacity-80">Contact Us</Link></li>
          </ul>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/transfer"
              className="hidden rounded-lg border border-brand-navy/15 px-3 py-2 text-sm text-brand-navy hover:bg-brand-navy/5 md:inline-block"
            >
              Transfer
            </Link>
            <Link
              href="/refill"
              className="rounded-lg bg-brand-navy px-3.5 py-2.5 text-sm font-medium text-white hover:opacity-90"
            >
              Online Refill
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
