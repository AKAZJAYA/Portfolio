/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',    // Dark Blue
        secondary: '#F3F4F6',  // Light Gray
        accent: '#38B2AC',     // Teal
        'text-dark': '#2D3748' // Dark Gray
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'serif': ['Merriweather', 'Georgia', 'serif'],
      },
      textShadow: {
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.2)',
        },
      })
    },
  ],
}