import { InformationCircleIcon } from '@heroicons/react/24/outline';

export default function PrivacyAlert() {
  return (
    <section className="mb-12">
      <div className="rounded-xl border border-white/20 bg-white/10 p-6 shadow-sm">
        <div className="flex items-start space-x-4">
          <InformationCircleIcon className="h-8 w-8 text-white flex-shrink-0 mt-1" aria-hidden="true" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Patient Privacy & Safety Notice
            </h3>
            <p className="text-white/90 leading-relaxed">
              Please don't include protected health information (PHI) in online messages. We verify sensitive details by phone or in person to protect your privacy and safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}









