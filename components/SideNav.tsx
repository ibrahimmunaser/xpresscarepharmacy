'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import type { ServiceNavItem } from '@/lib/servicesNav';

type SideNavProps = {
  items: ServiceNavItem[];
  className?: string;
};

export default function SideNav({ items, className }: SideNavProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Services"
      className={clsx(
        'rounded-lg border border-brand-navy bg-brand-navy p-3 sm:p-4',
        'sm:sticky sm:top-24',
        className
      )}
    >
      <h3 className="mb-2 px-2 text-sm font-semibold text-white">Services</h3>
      <ul className="space-y-1">
        {items.map((item) => {
          const isActive =
            pathname === item.href ||
            (pathname?.startsWith(item.href + '/') ?? false); // handles nested paths

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={clsx(
                  'block rounded-md px-3 py-2 text-sm transition',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50',
                  isActive
                    ? 'bg-white/20 text-white ring-1 ring-white/30 border-l-2 border-white'
                    : 'text-gray-200 hover:bg-white/10 hover:text-white'
                )}
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
