/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation:{
        fadeIn: "fadeIn 0.5s ease-in forwards"
      },
      keyframes:{
        fadeIn:{
          "0%": { opacity: 0},
          "100%": { opacity: 1 }
        }
      },
      variants: {
        animation: ["motion-safe"]
      },
      cursor: {
        default: 'url(https://keithlau2015.github.io/portfolio/cursor/cursor.png), default',
        pointer: 'url(https://keithlau2015.github.io/portfolio/cursor/cursor.png), pointer',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
  ],
}
