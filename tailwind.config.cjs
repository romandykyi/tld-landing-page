/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        imperial: '#001F3F',
        gold: '#D4AF37',
        crimson: '#7D0A0A',
        ivory: '#F5F5DC',
        gunmetal: '#2C2C2C',
      },
    },
  },
  plugins: [],
};
