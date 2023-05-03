/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'full': '0 0 12px 4px rgba(0, 0, 0, 0.3)',
        'top-left-right': '0 -12px 12px -4px rgba(0, 0, 0, 0.3), -8px 0 12px -4px rgba(0, 0, 0, 0.3), 8px 0 12px -4px rgba(0, 0, 0, 0.3)',

      },
      height: {
        '100': '25rem',
        '104': '26rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '80vh': '80vh',
        '70vh': '70vh',
        '60vh': '60vh',
        '50vh': '50vh',
        '40vh': '40vh',
        '30vh': '30vh',
        '20vh': '20vh',
      },
      screens: {
        'ml': '900px',
      },
      colors: {
        'font': '#EDEDED',
        'background': '#161617',
        'gold': '#FFD700',
      },
    },
  },
  plugins: [],
}
