/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        bgPink: "hsl(322, 100%, 66%)",
        bgDarkCyan: "hsl(192, 100%, 9%)",
        bgPaleCyan: "hsl(193, 100%, 96%)",
        darkGrayishBlue: "hsl(208, 11%, 55%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
      },
    },
  },
  plugins: [],
};
