/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pistachio':'#87CE78',
        'atomicTangerine':'#FCA17D',
        'pinkLavender':'#EEC1EB'
      },
    },
  },
  plugins: [],
}

