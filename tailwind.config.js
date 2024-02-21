/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#204354 ",
        card_1:'#fdefe6',
        card_2:"#d6e5fb",
        card_3:"#ceebe9",
        card_4:"#e2f2b2",
        hero_bg:"#d6e5fb",
        text_color:"#3c8dbc"
      },
      fontFamily:{
        'protest':["Protest Revolution", 'sans-serif']
      }
    },
  },
  plugins: [],
}