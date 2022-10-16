const plugin= require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        'screenX3':'calc(100vh * 3)'
      },
      backgroundColor:{
        'primarybg':'#12242F'
      },
      textColor: {
        'primary':'#A0F266'
      },
      fontFamily:{
        'permanentMark':'Permanent Marker , cursive'
      },
      borderColor:{
        'primary':'#A0F266'
      }
    }
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant('hrselect','&>hr')
    })
  ],
}
