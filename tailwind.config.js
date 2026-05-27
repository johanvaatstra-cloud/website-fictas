/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#060d1f',
          900: '#0a1628',
          800: '#0d1f3c',
        },
      },
    },
  },
  plugins: [],
}
