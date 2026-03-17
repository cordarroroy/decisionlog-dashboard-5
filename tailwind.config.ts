import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          // Primary / Nav — Slate Blue
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569', // ← primary
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        emerald: {
          50:  '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981', // ← CTA / success
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        surface: {
          bg:     '#f9fafb', // ← off-white background
          card:   '#ffffff',
          border: '#e5e7eb',
          muted:  '#f3f4f6',
        },
      },
      boxShadow: {
        'card':        '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)',
        'card-hover':  '0 10px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.06)',
        'card-focus':  '0 0 0 3px rgb(16 185 129 / 0.25)',
        'nav':         '1px 0 0 0 #e5e7eb',
      },
      borderRadius: {
        'xl2': '1rem',
        'xl3': '1.25rem',
      },
      transitionTimingFunction: {
        'bounce-sm': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'fade-in':      'fadeIn 0.35s ease-out',
        'slide-up':     'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'skeleton':     'skeleton 1.5s ease-in-out infinite',
        'badge-pop':    'badgePop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'banner-slide': 'bannerSlide 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'count-up':     'countUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        skeleton: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.4' },
        },
        badgePop: {
          '0%':   { transform: 'scale(0.7)', opacity: '0' },
          '100%': { transform: 'scale(1)',   opacity: '1' },
        },
        bannerSlide: {
          '0%':   { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        countUp: {
          '0%':   { opacity: '0', transform: 'scale(0.85)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}

export default config
