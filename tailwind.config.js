/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        ethnocentric: ['poppins', 'inter'],
      },
    },
  },
  plugins: [],
};
