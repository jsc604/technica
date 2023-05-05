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
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'instagram-gradient': 'linear-gradient(45deg, rgba(254, 218, 117, 1) 0%, rgba(250, 126, 30, 1) 20%, rgba(214, 41, 118, 1) 40%, rgba(150, 47, 191, 1) 60%, rgba(79, 91, 213, 1) 100%)',
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
        'facebook': '#4267B2',
        'youtube': '#FF0000',
        'twitter': '#1DA1F2',
        'instagram': '#d62976',
      },
    },
  },
  plugins: [],
}
