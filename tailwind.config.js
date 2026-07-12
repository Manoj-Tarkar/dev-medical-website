/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#16A34A',
          50: '#EAFBF1',
          100: '#D2F6E1',
          200: '#A6ECC3',
          300: '#79E1A5',
          400: '#3FCD7E',
          500: '#16A34A',
          600: '#12873D',
          700: '#0F6B31',
          800: '#0B4F24',
          900: '#073317',
        },
        secondary: {
          DEFAULT: '#2563EB',
          50: '#EAF1FE',
          100: '#CFE0FD',
          400: '#4F83F1',
          500: '#2563EB',
          600: '#1D4FBE',
          700: '#163C8F',
        },
        accent: '#22C55E',
        surface: '#F8FAFC',
        dark: {
          DEFAULT: '#0F172A',
          card: '#161F35',
          border: '#233150',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        capsule: '999px',
        xl2: '1.25rem',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(15, 23, 42, 0.08)',
        card: '0 4px 24px -4px rgba(22, 163, 74, 0.12)',
        glow: '0 0 0 4px rgba(34, 197, 94, 0.15)',
      },
      backgroundImage: {
        'pulse-line': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 40'%3E%3Cpath d='M0 20 H150 L165 5 L180 35 L195 20 H400' fill='none' stroke='%2316A34A' stroke-width='2'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatY: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseLine: {
          '0%': { strokeDashoffset: 400 },
          '100%': { strokeDashoffset: 0 },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        floatY: 'floatY 4s ease-in-out infinite',
        pulseLine: 'pulseLine 2s ease-out forwards',
      },
    },
  },
  plugins: [],
}
