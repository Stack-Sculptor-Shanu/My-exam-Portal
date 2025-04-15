/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',
        secondary: '#9333ea', 
        backgroundLight: '#f3f4f6', 
        backgroundDark: '#1f2937',  
      },
    },
  },
  plugins: [],
}