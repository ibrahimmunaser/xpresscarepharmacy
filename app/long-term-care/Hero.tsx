import { content } from './content';

export default function Hero() {
  const { hero } = content;
  
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-14 pb-12 md:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6">
          <p className="text-xs font-semibold tracking-widest text-white/80 uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-white">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90 leading-relaxed">
            {hero.sub}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a 
              href="#referral" 
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-brand-navy hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
              data-analytics="click_referral_from_hero"
            >
              Submit your referral
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-white text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Contact us
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <figure className="relative rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(16,37,77,0.06)] ring-1 ring-brand-navy/10">
            <img 
              src={hero.image} 
              alt={hero.imageAlt} 
              className="w-full h-[360px] object-cover" 
              width={600}
              height={360}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}










