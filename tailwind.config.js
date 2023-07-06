/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-bebas)'],
    },
    extend: {
      screens: {
        tablet: { 'raw': '((min-device-width: 480px) and (orientation: portrait)) or ((min-device-height: 480px) and (orientation: landscape))' },
        desktop: { 'raw': '(min-device-width: 1024px)' }
      },
      spacing: {
        18: '4.5rem'
      },
      colors: {
        dark: '#1B1B1B'
      },
      borderWidth: {
        3: '3px'
      },
      zIndex: {
        '-1': '-1'
      },
      blur: {
        sm: '5px',
      },
      animation: {
        'wiggle': 'wiggle 2.5s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateX(0rem)' },
          '25%': { transform: 'translateX(-1.25rem)' },
          '50%': { transform: 'translateX(1.25rem)' },
          '75%': { transform: 'translateX(-1.25rem)' },
          '100%': { transform: 'translateX(0rem)' },
        }
      },
      minWidth: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem'
      }
    },
  },
  plugins: [],
}
