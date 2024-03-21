/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui:{
    themes: ["nord", "luxury"],
    darkTheme: "luxury",
  },
  plugins: [
    require("daisyui")
  ],
}

