/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gris-fondo': 'oklch(21% 0.034 264.665)',
        'botones': 'oklch(37.9% 0.146 265.522)',
        'botones-enlaces' : 'oklch(76.8% 0.233 130.85)',
        'color-cards' : 'oklch(74.6% 0.16 232.661)' 
      }
    },
  },
  plugins: [],
} 