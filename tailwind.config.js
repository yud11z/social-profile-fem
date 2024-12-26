/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "greenStyle" : 'hsl(75, 94%, 57%)',
        "greenStyleHover" : 'hsl(75, 94%, 37%)',
        "whiteStyle" : 'hsl(0, 0%, 100%)',
        "gray700" : 'hsl(0, 0%, 20%)',
        "gray800" : 'hsl(0, 0%, 12%)',
        "gray900" : 'hsl(0, 0%, 8%)',
    
      },
    },
  },
  
  plugins: [],
}