import { ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function SafetyCollaboration() {
  return (
    <section className="mb-12">
      <div className="rounded-xl border border-white/20 bg-white/10 p-6 shadow-sm">
        <div className="flex items-start space-x-4">
          <ShieldCheckIcon className="h-8 w-8 text-white flex-shrink-0 mt-1" aria-hidden="true" />
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">
              Safety & Collaboration
            </h2>
            <p className="text-white/90 leading-relaxed">
              Your safety is our priority. We coordinate with your prescriber before any changes and document recommendations for your medical record.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}









