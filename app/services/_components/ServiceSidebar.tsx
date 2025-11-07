"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { servicesNav } from '@/lib/servicesNav';

type Item = { label: string; href: string; slug: string };

// Convert servicesNav to include slug for easier matching
const items: Item[] = servicesNav.map(item => ({
  ...item,
  slug: item.href.replace('/services/', '')
}));

export default function ServiceSidebar({ activeSlug }: { activeSlug?: string }) {
  const pathname = usePathname();
  const current = activeSlug ?? items.find(i => pathname?.startsWith(i.href))?.slug;

  return (
    <nav className="rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
      <h2 className="sr-only">Services</h2>

      {/* Mobile: collapsible */}
      <details className="lg:hidden">
        <summary className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-brand-navy hover:bg-brand-navy/5 focus:outline-none focus:ring-2 focus:ring-brand-navy/50">
          Services Menu
        </summary>
        <ul className="mt-2 space-y-1">
          {items.map((item) => {
            const active = item.slug === current;
            return (
              <li key={item.slug}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "block rounded-md px-3 py-2 text-sm transition",
                    active
                      ? "bg-brand-navy/10 font-semibold text-brand-navy border-l-2 border-brand-navy"
                      : "text-slate-600 hover:bg-brand-navy/5 hover:text-brand-navy",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </details>

      {/* Desktop: persistent list */}
      <ul className="hidden lg:block lg:space-y-1">
        {items.map((item) => {
          const active = item.slug === current;
          return (
            <li key={item.slug}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "block rounded-md px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-brand-navy/50",
                  active
                    ? "bg-brand-navy/10 font-semibold text-brand-navy border-l-2 border-brand-navy"
                    : "text-slate-600 hover:bg-brand-navy/5 hover:text-brand-navy",
                ].join(" ")}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}




