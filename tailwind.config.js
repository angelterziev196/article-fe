/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': 'url("../static/images/hero-background.jpg")'
      },
      colors: {
        'dark-gray': 'rgba(84, 84, 84)',
        'transparent-nav': 'rgba(36, 36, 36)',
        'mine-shaft': '#242424'
      }
    }
  },
  plugins: []
};
