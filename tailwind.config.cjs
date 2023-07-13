/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px'
    // },
    colors: {
      ...colors,
      // dark
      'dark-primary': '#18191a',
      'dark-secondary': '#242526',
      'dark-text-secondary': '#f7fafc',
      'dark-text-primary': '#ffb9fa',
      'dark-text-accent': '#a6eff1',
      // light
      'light-primary': '#ffffff',
      'light-secondary': 'rgb(247, 249, 249)',
      'light-text-secondary': '#2d3748',
      'light-text-primary': ' #ffb9fa',
      'light-text-accent': '#a6eff1'
    },
    // fontFamily: {
    //   maison: ['Maison Neue Book', 'maison']
    // },
    // extend: {
    //   spacing: {
    //     128: '32rem',
    //     144: '36rem'
    //   },
    //   borderRadius: {
    //     '4xl': '2rem'
    //   }
    // },
    plugins: []
  }
}
