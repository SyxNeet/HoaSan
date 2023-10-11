/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pageComponents/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgButton: 'linear-gradient(180deg, #0572AF 0%, #128ACE 100%)'
      }
    },
    colors: {
      primaryColor: '#FFD220',
      textPrimary: '#213D55',
      textSecondary: '#0774B2',
      subTextColor: '#006198',
      textButtonColor: '#0086C7'
    },
    fontFamily: {
      sans: ['Averta Std CY', 'Arial', 'sans-serif'],
      mark: ['Mark Pro']
    }
  },
  plugins: []
}
