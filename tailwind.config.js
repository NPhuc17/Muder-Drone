/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'neon': '0 0 .2rem #fff,0 0 .2rem #fff,0 0 2rem #ffd500,0 0 0.8rem #ffd500,0 0 2.8rem #ffd500,inset 0 0 1.3rem #ffd500',
      },
      colors:{
        'yellow_neon': '#ffd500',
        'murder_purple':'#280033',
      },
      borderRadius:{
        'custom_bd':'100% 0% 100% 0% / 0% 50% 65% 100% ',
      },
      backgroundImage:{
        "N":"url('./src/img/Image_(13).png')",
      },
    },
  },
  plugins: [],
}