/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#003135',
          deep: '#024950',
          rust: '#964734',
          blue: '#0FA4AF',
          cyan: '#AFDDE5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 14px 45px -26px rgba(15, 23, 42, 0.26)',
        'card-hover': '0 24px 55px -28px rgba(15, 164, 175, 0.32)',
      },
    },
  },
  plugins: [],
};
