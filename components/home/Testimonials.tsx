import Link from 'next/link'
import { StarIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid'

interface Testimonial {
  id: string
  stars: number
  text: string
  author: string
  location?: string
  initials?: string
}

interface TestimonialsProps {
  title: string
  testimonials: Testimonial[]
}

export default function Testimonials({ title, testimonials }: TestimonialsProps) {
  return (
    <section className="py-20 bg-brand-navy relative overflow-hidden">
      {/* Medical Icons Pattern Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Grid Pattern - White Icons with 50% opacity */}
        
        {/* Row 1 */}
        <div className="absolute top-[8%] left-[8%] opacity-50 transform rotate-12">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <div className="absolute top-[8%] left-[23%] opacity-50 transform rotate-[-10deg]">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <ellipse cx="12" cy="12" rx="8" ry="3"/>
            <line x1="12" y1="9" x2="12" y2="15" strokeWidth="1"/>
          </svg>
        </div>
        <div className="absolute top-[8%] left-[38%] opacity-50 transform rotate-8">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M20 7l-2-2-3 3-4-4-3 3-2-2M7 17l2 2 3-3 4 4 3-3 2 2M4 12h16"/>
          </svg>
        </div>
        <div className="absolute top-[8%] left-[53%] opacity-50 transform rotate-[-15deg]">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="6" y="3" width="12" height="18" rx="2"/>
            <line x1="9" y1="7" x2="15" y2="7"/>
            <line x1="9" y1="11" x2="15" y2="11"/>
          </svg>
        </div>
        <div className="absolute top-[8%] left-[68%] opacity-50 transform rotate-10">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 2v20M2 12h20"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </div>
        <div className="absolute top-[8%] left-[83%] opacity-50 transform rotate-[-12deg]">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="7" y="7" width="10" height="10" rx="1"/>
            <line x1="7" y1="12" x2="17" y2="12"/>
          </svg>
        </div>

        {/* Row 2 */}
        <div className="absolute top-[28%] left-[12%] opacity-50 transform rotate-[-8deg]">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 8l4-4 4 4M8 4v12M16 16l4 4 4-4M20 20V8"/>
          </svg>
        </div>
        <div className="absolute top-[28%] left-[28%] opacity-50 transform rotate-12">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <ellipse cx="12" cy="12" rx="8" ry="3"/>
            <line x1="12" y1="9" x2="12" y2="15" strokeWidth="1"/>
          </svg>
        </div>
        <div className="absolute top-[28%] left-[44%] opacity-50 transform rotate-[-10deg]">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <div className="absolute top-[28%] left-[60%] opacity-50 transform rotate-8">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 2v20M2 12h20"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </div>
        <div className="absolute top-[28%] left-[76%] opacity-50 transform rotate-[-15deg]">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="6" y="3" width="12" height="18" rx="2"/>
            <line x1="9" y1="7" x2="15" y2="7"/>
            <line x1="9" y1="11" x2="15" y2="11"/>
          </svg>
        </div>
        <div className="absolute top-[28%] left-[88%] opacity-50 transform rotate-10">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M20 7l-2-2-3 3-4-4-3 3-2-2M7 17l2 2 3-3 4 4 3-3 2 2M4 12h16"/>
          </svg>
        </div>

        {/* Row 3 */}
        <div className="absolute top-[48%] left-[6%] opacity-50 transform rotate-12">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="7" y="7" width="10" height="10" rx="1"/>
            <line x1="7" y1="12" x2="17" y2="12"/>
          </svg>
        </div>
        <div className="absolute top-[48%] left-[20%] opacity-50 transform rotate-[-12deg]">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 2v20M2 12h20"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </div>
        <div className="absolute top-[48%] left-[35%] opacity-50 transform rotate-8">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <ellipse cx="12" cy="12" rx="8" ry="3"/>
            <line x1="12" y1="9" x2="12" y2="15" strokeWidth="1"/>
          </svg>
        </div>
        <div className="absolute top-[48%] left-[50%] opacity-50 transform rotate-[-10deg]">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <div className="absolute top-[48%] left-[65%] opacity-50 transform rotate-12">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="6" y="3" width="12" height="18" rx="2"/>
            <line x1="9" y1="7" x2="15" y2="7"/>
            <line x1="9" y1="11" x2="15" y2="11"/>
          </svg>
        </div>
        <div className="absolute top-[48%] left-[80%] opacity-50 transform rotate-[-8deg]">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M20 7l-2-2-3 3-4-4-3 3-2-2M7 17l2 2 3-3 4 4 3-3 2 2M4 12h16"/>
          </svg>
        </div>

        {/* Row 4 */}
        <div className="absolute top-[68%] left-[10%] opacity-50 transform rotate-[-15deg]">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 8l4-4 4 4M8 4v12M16 16l4 4 4-4M20 20V8"/>
          </svg>
        </div>
        <div className="absolute top-[68%] left-[25%] opacity-50 transform rotate-10">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <ellipse cx="12" cy="12" rx="8" ry="3"/>
            <line x1="12" y1="9" x2="12" y2="15" strokeWidth="1"/>
          </svg>
        </div>
        <div className="absolute top-[68%] left-[40%] opacity-50 transform rotate-[-12deg]">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="7" y="7" width="10" height="10" rx="1"/>
            <line x1="7" y1="12" x2="17" y2="12"/>
          </svg>
        </div>
        <div className="absolute top-[68%] left-[55%] opacity-50 transform rotate-8">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 2v20M2 12h20"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </div>
        <div className="absolute top-[68%] left-[70%] opacity-50 transform rotate-[-10deg]">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <div className="absolute top-[68%] left-[85%] opacity-50 transform rotate-12">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="6" y="3" width="12" height="18" rx="2"/>
            <line x1="9" y1="7" x2="15" y2="7"/>
            <line x1="9" y1="11" x2="15" y2="11"/>
          </svg>
        </div>

        {/* Row 5 */}
        <div className="absolute top-[88%] left-[15%] opacity-50 transform rotate-[-8deg]">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M20 7l-2-2-3 3-4-4-3 3-2-2M7 17l2 2 3-3 4 4 3-3 2 2M4 12h16"/>
          </svg>
        </div>
        <div className="absolute top-[88%] left-[32%] opacity-50 transform rotate-10">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <ellipse cx="12" cy="12" rx="8" ry="3"/>
            <line x1="12" y1="9" x2="12" y2="15" strokeWidth="1"/>
          </svg>
        </div>
        <div className="absolute top-[88%] left-[48%] opacity-50 transform rotate-[-15deg]">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 2v20M2 12h20"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </div>
        <div className="absolute top-[88%] left-[64%] opacity-50 transform rotate-12">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="7" y="7" width="10" height="10" rx="1"/>
            <line x1="7" y1="12" x2="17" y2="12"/>
          </svg>
        </div>
        <div className="absolute top-[88%] left-[80%] opacity-50 transform rotate-[-10deg]">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 8l4-4 4 4M8 4v12M16 16l4 4 4-4M20 20V8"/>
          </svg>
        </div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/30 via-transparent to-brand-navy/30"></div>
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            {title}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their experience.
          </p>
        </div>

        {/* Horizontal testimonials layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative border border-white/20">
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <ChatBubbleLeftIcon className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex mb-4 pt-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.stars
                        ? 'text-yellow-400'
                        : 'text-white/30'
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-white/90 mb-6 leading-relaxed text-lg">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 border border-white/30">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.initials || testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white">
                    {testimonial.author}
                  </p>
                  {testimonial.location && (
                    <p className="text-sm text-white/80">
                      {testimonial.location}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center px-8 py-4 bg-white text-brand-navy font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Read More Reviews
          </Link>
        </div>
      </div>
    </section>
  )
}
