type Props = {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  body: string;
  reverse?: boolean;
};

export default function SplitFeature({ image, imageAlt, eyebrow, title, body, reverse }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <div className="lg:col-span-6">
          <figure className="relative rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(16,37,77,0.06)] ring-1 ring-brand-navy/10">
            <img 
              src={image} 
              alt={imageAlt} 
              className="w-full h-[320px] object-cover"
              width={500}
              height={320}
            />
          </figure>
        </div>
        <div className="lg:col-span-6">
          {eyebrow && (
            <p className="text-xs font-semibold tracking-widest text-brand-gray uppercase">
              {eyebrow}
            </p>
          )}
          <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-brand-navy">
            {title}
          </h3>
          <p className="mt-4 text-slate-600 leading-relaxed">
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}
















