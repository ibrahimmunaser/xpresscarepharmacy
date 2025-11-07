import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Xpress Care Pharmacy - A Pharmacy That Feels Like Family',
  description: 'As a locally owned pharmacy, we take the time to understand your health needs and guide you with care—every step of the way. Free delivery, online refills, and personalized service.',
  keywords: 'pharmacy, prescription, medication, free delivery, online refill, transfer prescriptions, local pharmacy, health care',
  authors: [{ name: 'Xpress Care Pharmacy' }],
  creator: 'Xpress Care Pharmacy',
  publisher: 'Xpress Care Pharmacy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Xpress Care Pharmacy - A Pharmacy That Feels Like Family',
    description: 'Locally owned pharmacy with free delivery, online refills, and personalized care for your health needs.',
    siteName: 'Xpress Care Pharmacy',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xpress Care Pharmacy - A Pharmacy That Feels Like Family',
    description: 'Locally owned pharmacy with free delivery, online refills, and personalized care.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#2f976f" />
      </head>
      <body className="antialiased text-brand-navy">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        
        {/* Structured Data for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Pharmacy',
              name: SITE.name,
              url: SITE.url,
              telephone: SITE.phone,
              faxNumber: SITE.fax,
              address: {
                '@type': 'PostalAddress',
                streetAddress: [SITE.address.line1, SITE.address.line2].filter(Boolean).join(', '),
                addressLocality: SITE.address.city,
                addressRegion: SITE.address.state,
                postalCode: SITE.address.zip,
                addressCountry: 'US',
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
