/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pops': ['Poppins', 'sans-serif']
      },
      maxWidth: {
        'container': '1536px',
      },
      colors: {
        'primary': '#4364F7',
        'secondary': '#4CAF4F',
        'third': '#1C1E53',
        'overlay': 'rgba(0,0,0,0.60)',
        'shadow': '4px 4px 4px 4px rgba(0.25, 0.25, 0.25, 0.25);'
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      },
    },
  },
  plugins: [],
}
