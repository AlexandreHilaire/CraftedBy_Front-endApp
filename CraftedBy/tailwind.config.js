/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui:{
    themes: ["cupcake", "coffee"],
    darkTheme: "coffee",
  },
  plugins: [
    require("daisyui")
  ],
}

