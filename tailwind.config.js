/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f4f8',
          100: '#d9e6f2',
          200: '#b3cce5',
          300: '#8cb3d8',
          400: '#6699cb',
          500: '#4080be',
          600: '#336699',
          700: '#264d73',
          800: '#1a334d',
          900: '#0d1a26',
          navy: '#10254D',
          gray: '#787875',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['2.75rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.25', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }]
      },
      boxShadow: {
        'card': '0 8px 24px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'button': '0 2px 8px rgba(77, 163, 106, 0.2)',
        'header': '0 2px 8px rgba(0,0,0,0.06)'
      },
      borderRadius: {
        'card': '12px',
        'section': '16px'
      },
      maxWidth: {
        content: '1200px',
      },
      container: {
        center: true,
        padding: '1.25rem',
        screens: {
          '2xl': '1280px',
        },
      },
      spacing: {
        'section-mobile': '40px',
        'section-tablet': '48px',
        'section-desktop': '72px',
        '18': '4.5rem',
      }
    },
  },
  plugins: [],
}
