import { ShieldCheckIcon, CubeIcon, TruckIcon, LifebuoyIcon } from '@heroicons/react/24/outline';
import { content } from './content';

const iconMap = {
  'Medication Reviews You Can Trust': ShieldCheckIcon,
  'Customized Packaging': CubeIcon,
  'Reliable Delivery': TruckIcon,
  'Support When You Need It': LifebuoyIcon,
};

export default function ProblemSolution() {
  const { featuresA } = content;
  
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-6">
          <figure className="relative rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(16,37,77,0.06)] ring-1 ring-brand-navy/10">
            <img 
              src="/images/image 17.png" 
              alt="Caregiver assisting resident with blanket, wheelchair in scene" 
              className="w-full h-[320px] object-cover"
              width={500}
              height={320}
            />
          </figure>
        </div>
        <div className="lg:col-span-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy">
            Taking the Stress Out of Medications
          </h2>
          <p className="mt-4 text-slate-600">
            We provide comprehensive support to make administration simple and reliable for your facility.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {featuresA.map(({ title, body }) => {
              const Icon = iconMap[title as keyof typeof iconMap] || ShieldCheckIcon;
              return (
                <li key={title} className="flex gap-3">
                  <span className="mt-1 h-8 w-8 shrink-0 rounded-md bg-brand-navy/10 text-brand-navy grid place-items-center">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-brand-navy">{title}</p>
                    <p className="text-sm text-slate-600">{body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mt-6">
            <a 
              href="#contact" 
              className="text-brand-navy underline underline-offset-4 hover:no-underline focus:outline-none focus:ring-2 focus:ring-brand-navy/40"
              data-analytics="click_contact_from_problem_solution"
            >
              Talk to a pharmacist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}















