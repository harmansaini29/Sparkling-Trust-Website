/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"],
      },
      colors: {
        gold: "#C5A059",
        earth: "#1A1A1A",
      },
      animation: {
        'bounce-slow': 'bounce-slow 4s infinite',
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { 
            transform: 'translateY(-5%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)' 
          },
          '50%': { 
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)' 
          },
        }
      }
    },
  },
  plugins: [],
};