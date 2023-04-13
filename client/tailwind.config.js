/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      xs: '480px',
    },
    fontFamily: {
      serif: ['DM Sans', 'sans-serif'],
      serif: ['Poppins', 'sans-serif'],
    },
  },
};
