'use client';

import { useState, useEffect } from 'react';
import { GoogleReview } from '@/lib/googleReviews';

interface TestimonialsProps {
  testimonials: GoogleReview[];
  darkBackground?: boolean;
}

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div 
      aria-label={`${rating} out of 5 stars`} 
      className="flex justify-center gap-1 mb-6"
      role="img"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials({ testimonials, darkBackground = false }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section 
      aria-labelledby="about-testimonials" 
      className={`py-12 md:py-16 ${darkBackground ? 'bg-brand-navy' : 'bg-white'}`}
    >
      <div className="container mx-auto max-w-[1100px] px-4 md:px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 
            id="about-testimonials" 
            className={`text-2xl md:text-3xl font-semibold ${darkBackground ? 'text-white' : 'text-brand-navy'}`}
          >
            What Our Community Says About Us
          </h2>
          <p className={`mt-3 max-w-2xl mx-auto ${darkBackground ? 'text-gray-200' : 'text-brand-gray'}`}>
            Real Google reviews from the families and individuals we're proud to serve in Detroit.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Review Card */}
          <div className={`relative overflow-hidden rounded-2xl shadow-lg border ${
            darkBackground ? 'bg-white border-gray-100' : 'bg-white border-gray-100'
          }`}>
            <div className="px-8 md:px-16 py-12 min-h-[280px] flex items-center justify-center">
              <div className="text-center">
                {/* Stars */}
                <StarRating rating={testimonials[currentIndex].stars} />

                {/* Review Text */}
                <blockquote className={`text-lg md:text-xl leading-relaxed mb-6 italic ${
                  darkBackground ? 'text-brand-gray' : 'text-brand-gray'
                }`}>
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Author Name */}
                {testimonials[currentIndex].author && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-semibold text-blue-800">{testimonials[currentIndex].author}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2 ${
                  index === currentIndex
                    ? `${darkBackground ? 'bg-white w-8' : 'bg-brand-navy w-8'}`
                    : `${darkBackground ? 'bg-white/50 hover:bg-white/70' : 'bg-gray-300 hover:bg-gray-400'}`
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}





