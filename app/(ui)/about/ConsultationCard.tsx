import Link from 'next/link';
import Image from 'next/image';

interface ConsultationCardProps {
  darkBackground?: boolean;
}

export default function ConsultationCard({ darkBackground = false }: ConsultationCardProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-[1100px] px-4 md:px-6">
      <div className="rounded-xl border border-white/20 bg-white/10 p-6 md:p-8 shadow-md">
        <div className="grid gap-6 md:gap-8 items-center md:grid-cols-2">
          {/* Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Walk-In for a Consultation Today!
            </h2>
            <p className="text-white/90 leading-relaxed mb-6">
              No appointment needed. Our experienced pharmacists are here to help with insurance questions, 
              medication concerns, or general healthcare advice. We're always ready to support your health journey.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-brand-navy hover:bg-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2"
            >
              Speak with a Pharmacist
            </Link>
          </div>

          {/* Optional illustration - hidden on mobile, shown on md+ */}
          <div className="hidden md:block">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/images/Image 3.png"
                alt="Pharmacist consultation services"
                width={400}
                height={300}
                className="object-cover w-full h-[250px]"
                sizes="(max-width: 768px) 0px, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}





