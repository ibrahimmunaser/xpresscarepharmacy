import { ReactNode } from "react";
import ServiceSidebar from "./ServiceSidebar";

type Props = {
  children: ReactNode;
  activeSlug?: string; // e.g., "immunizations"
  title?: string;
};

export default function ServicesLayout({ children, activeSlug, title }: Props) {
  return (
    <main
      className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8"
      // Note: max-w-7xl gives a consistent page width, pt-8 adds top padding
    >
      {title ? (
        <header className="mb-6 border-b border-slate-200 pb-4">
          <h1 className="text-2xl font-semibold tracking-tight text-brand-navy">
            {title}
          </h1>
        </header>
      ) : null}

      <div
        className="
          grid grid-cols-1 gap-8 lg:grid-cols-[16rem,1fr]
        "
        // Sidebar fixed at 16rem (256px), content flexes
      >
        <aside
          className="
            lg:sticky lg:top-[calc(var(--header-h,64px)+48px)] pb-8
          "
          // fallback if --header-h not set: top ~112px
          aria-label="Service navigation"
        >
          <ServiceSidebar activeSlug={activeSlug} />
        </aside>

        <section className="min-w-0">
          {children}
        </section>
      </div>
    </main>
  );
}
