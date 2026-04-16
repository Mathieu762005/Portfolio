/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        // Le fond très sombre
        'dark-bg': '#0f172a', 
        // Le gris pour tes cartes
        'dark-card': '#1e293b',
        // Ton Orange personnalisé
        'brand-orange': {
          DEFAULT: '#f97316',
          dark: '#ea580c',
          light: '#fb923c',
        }
      }
    },
  },
  plugins: [],
}