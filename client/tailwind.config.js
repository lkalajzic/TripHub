/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#316BFF',
        'primary-red': '#FF543D',
        'primary-purple': '#878CFF',
        'secondary-orange': '#FFAF4E',
        'secondary-sky': '#A4CDE3',
        'blue-hover': '#1E5AF4',

        sidebar: '#333333',
        c1: '#141416',
        c2: '#222529',
        c3: '#3B3E44',
        c4v: '#4A4E54',
        c4: '#84878B',
        c5: '#B1B5C3',
        c6: '#E7ECF3',
        c7: '#F4F5F6',
        c8: '#FCFCFD',
        c9: '#FFFFFF',
      },
      xs: '480px',
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      'heading-hero': ['80px', { lineHeight: '100px', fontWeight: 700 }],
      'heading-1': [
        '48px',
        { lineHeight: '70px', fontWeight: 700, letterSpacing: -0.05 },
      ],
      'heading-2': [
        '40px',
        { lineHeight: '60px', fontWeight: 700, letterSpacing: -0.05 },
      ],
      'heading-3': [
        '34px',
        { lineHeight: '44px', fontWeight: 500, letterSpacing: -0.05 },
      ],
      'heading-4': ['24px', { lineHeight: '36px', fontWeight: 500 }],
      'body-18': ['18px', { lineHeight: '23px', fontWeight: 500 }],
      'body-16': ['16px', { lineHeight: '24px', fontWeight: 500 }],
      'caption-16': ['16px', { lineHeight: '24px', fontWeight: 400 }],
      'caption-14': ['14px', { lineHeight: '21px', fontWeight: 500 }],
      'checkbox-14': ['14px', { lineHeight: '21px', fontWeight: 400 }],
      'caption-12': ['12px', { lineHeight: '20px', fontWeight: 500 }],
    },
  },
};
