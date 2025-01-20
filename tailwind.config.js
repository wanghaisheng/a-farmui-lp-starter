/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'farm-primary': 'var(--farm-primary)',
        'farm-secondary': 'var(--farm-secondary)',
        'farm-success': 'var(--farm-success)',
        'farm-error': 'var(--farm-error)',
      }
    },
  },
  plugins: [],
}