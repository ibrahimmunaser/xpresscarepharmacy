'use client';

import { useState } from 'react';

type NewsletterSlimProps = {
  title: string;
  description: string;
};

export default function NewsletterSlim({ title, description }: NewsletterSlimProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Placeholder form action - log to console for now
      console.log('Newsletter subscription:', email);
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <section className="py-16 bg-brand-navy">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-2xl font-semibold text-white mb-2 lg:text-3xl">
          {title}
        </h2>
        <p className="text-white/80 mb-8">
          {description}
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting || !email.trim()}
              className="px-6 py-3 bg-white text-brand-navy rounded-md font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-navy disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          
          {message && (
            <p className="mt-3 text-sm text-white/80">
              {message}
            </p>
          )}
          
          <p className="mt-4 text-sm text-white/60">
            We respect your privacy and will never share your information.
          </p>
        </form>
      </div>
    </section>
  );
}














