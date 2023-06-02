/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['Menlo', 'monospace'],
      DEFAULT: ['Roboto', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-banner': "url('./assets/NetflixBanner.jpg')",
      },
      colors: {
        'r-button-hover': '#c11119',
        'r-button': '#e50914',
        'card-login': '#000000bf',
      },
    },
  },
  plugins: [],
}