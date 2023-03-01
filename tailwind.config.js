/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {

      screens: {
        sm: "480px",
        onlySm: {"max":"480px"},
        md: "768px",
        lg: "976px",
        xl: "1440px"
      },

      fontFamily: {
        vietnamPro: "Be Vietnam Pro"
      }
    },
  },
  plugins: [],
}
