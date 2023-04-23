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
      fontFamily: {
        sans: ['var(--font-eina01)'],
      },
      boxShadow: {
        'full': '0 0 12px 4px rgba(0, 0, 0, 0.3)',
        // 'top-left-right': '0 -8px 12px -4px rgba(0, 0, 0, 0.3), -8px 0 12px -4px rgba(0, 0, 0, 0.3), 8px 0 12px -4px rgba(0, 0, 0, 0.3)',
        'top-left-right': '0 -12px 12px -4px rgba(0, 0, 0, 0.3), -8px 0 12px -4px rgba(0, 0, 0, 0.3), 8px 0 12px -4px rgba(0, 0, 0, 0.3)',

      },
      height: {
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '80vh': '80vh',
      },
    },
  },
  plugins: [],
}
