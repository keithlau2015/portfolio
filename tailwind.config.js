/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation:{
        fadeIn: "fadeIn 0.5s ease-in forwards",
        infiniteScroll: "moveBg 10s linear infinite"
      },
      keyframes:{
        fadeIn:{
          "0%": { 
            opacity: '0',
            transform: 'translateY(-50px)'
          },
          "100%": { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        moveBg:{
          "0%": { 
            opacity: '1',
            backgroundPosition: '0 0'
          },
          "100%": { 
            opacity: '1',
            backgroundPosition: '0 2000px' 
          }
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
