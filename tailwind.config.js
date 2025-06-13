/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gris-fondo': 'oklch(91.7% 0.08 205.041)',
        'botones': 'oklch(37.9% 0.146 265.522)',
        'botones-enlaces' : 'oklch(60.6% 0.25 292.717)',
        'color-cards' : 'oklch(74.6% 0.16 232.661)',
        'color-header' : 'oklch(81.1% 0.111 293.571)',

      }
    },
  },
  plugins: [],
} 