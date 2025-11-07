const testimonials = [
  {
    quote: "My mom stopped missing her evening medications—caregiving is so much easier now.",
    author: "Sarah M.",
    role: "Daughter & Caregiver"
  },
  {
    quote: "Having all my refills synced with the monthly Dispill call is a lifesaver for my busy schedule.",
    author: "Robert K.",
    role: "Dispill Patient"
  },
  {
    quote: "Traveling with the tear-off pods is so convenient. I never worry about forgetting my medications.",
    author: "Maria L.",
    role: "Frequent Traveler"
  }
];

export default function Testimonials() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mt-10 mb-6">
        What Our Patients Say
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-200 bg-white shadow-sm p-6"
          >
            <blockquote className="text-slate-600 leading-relaxed mb-4">
              "{testimonial.quote}"
            </blockquote>
            <div className="border-t border-slate-200 pt-4">
              <cite className="not-italic">
                <div className="font-semibold text-brand-navy">
                  {testimonial.author}
                </div>
                <div className="text-sm text-slate-600">
                  {testimonial.role}
                </div>
              </cite>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}









