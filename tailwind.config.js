/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:'class',
  theme: {
    colors:{
      'black':'#171717',
      'grey':'#444444',
      'red':'#DA0037',
      'white':'#EDEDED'
    }
  },  
  
  plugins: [],
}
