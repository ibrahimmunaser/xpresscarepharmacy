import Image from 'next/image';

export default function PersonalizedReminders() {
  const features = [
    'One monthly refill date',
    'Early notice if a prescription needs prescriber approval',
    'Optional caregiver notifications'
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
        Personalized Reminders & Synchronization
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-white/90 leading-relaxed text-lg mb-6">
            We tailor reminders to your routine—app push, text, or a quick call—and combine them with Med Sync so your refills arrive together. We'll flag potential issues early (like missing refills or prescriber approvals) and keep caregivers in the loop when you want.
          </p>
          
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-white rounded-full mt-2"></div>
                <span className="text-white/90 leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/20">
          <Image
            src="/images/services/medication-reminders.jpg"
            alt="Smartphone showing medication reminder notifications"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}









