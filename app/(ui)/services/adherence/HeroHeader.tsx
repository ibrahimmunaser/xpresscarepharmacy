import Image from 'next/image';

interface HeroHeaderProps {
  onEnrollMedSyncClick?: () => void;
}

export default function HeroHeader({ onEnrollMedSyncClick = () => {} }: HeroHeaderProps) {
  return (
    <div className="py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Medication Adherence
          </h1>
          
          <p className="text-white/90 leading-relaxed mb-6">
            Staying consistent with medications shouldn't be a full-time job. Our Medication Adherence program combines Med Sync, smart reminders, and packaging options to reduce missed doses, simplify your month, and give you confidence that you're on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-navy text-white rounded-lg font-medium hover:bg-brand-navy/90 focus:outline-none focus:ring-2 focus:ring-brand-navy/60 focus:ring-offset-2 transition-colors"
            >
              Enroll in Med Sync
            </a>
            
            <a
              href="/transfer"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 transition-colors"
            >
              Transfer Prescriptions
            </a>
          </div>
        </div>
        <div className="lg:order-last">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/images/Image 7.png"
              alt="Caregiver and patient organizing medications to stay on schedule"
              width={400}
              height={300}
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}









