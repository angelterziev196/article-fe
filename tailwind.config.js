/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      backgroundImage: {
        'hero-background': 'url("../static/images/hero-background.jpg")'
      },
      colors: {
        'dark-gray': 'rgba(84, 84, 84)',
        'transparent-nav': 'rgba(36, 36, 36)',
        'mine-shaft': '#242424',
        'old-brick': '#981B1B',
        'mine-shaft-transparent': 'rgba(36, 36, 36, 0.4)',
        silver: '#BABABA'
      }
    }
  },
  plugins: []
};
