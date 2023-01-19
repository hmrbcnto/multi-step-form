/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'steps-image-desktop': "url('/src/assets/images/bg-sidebar-desktop.svg')",
        'steps-image-mobile': "url('/src/assets/images/bg-sidebar-mobile.svg')"
      }
    },
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
    },
    screens: {
      // 'mobile': '375px',
      'desktop': '375px'
    }
  },
  plugins: [],
}
