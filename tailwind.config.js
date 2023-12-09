/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
            '0%': {
                opacity: '0%',
                transform: 'translateY(50px)',
            },
            '100%': {
              opacity: '100%',
                transform: 'translateY(0px)',
            },
        },

    },
    animation: {
        'fade-in-up': 'fade-in-up 1.4s ease-out',
    }
},
},
variants: {},
plugins: [],
}
