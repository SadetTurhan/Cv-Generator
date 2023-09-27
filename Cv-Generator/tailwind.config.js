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
        'pinkLavender':'#EEC1EB',
        'lavenderWeb':'#d0d6ea',
        'verdigris':'#38a3a5',
        'ghostWhite':'#EBEDF3'
      },
    },
  },
  plugins: [],
}

