/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        marine_blue: '#02295a',
        purplish_blue: '#473dff',
        pastel_blue: '#adbeff',
        light_blue: '#bfe2fd',
        strawberry_red: '#ed3548'
      },
      neutral: {
        cool_gray: '#9699ab',
        light_gray: '#d6d9e6',
        magnolia: '#f0f6ff',
        alabaster: '#fafbff',
        white: '#ffffff'
      }
    }
  },
  plugins: [],
}
