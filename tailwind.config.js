/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        coffee: {
          light: '#D4A373',
          DEFAULT: '#8B4513',
          dark: '#3E2723',
        },
        cream: '#FDF6E3',
      },
    },
  },
  plugins: [],
};