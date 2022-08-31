/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Roboto Slab', 'serif'],
        body: ['Roboto', 'sans-serif']
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'none',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },
      animation: {
        'bounce-slow': "bounce-slow 1.5s infinite"
      }
    },
  },
  plugins: [],
}
