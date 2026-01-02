/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'epic-black': '#0a0a0a',
        'epic-gray': '#1a1a1a',
        'epic-white': '#f5f5f5',
        'epic-accent': '#3b82f6', // A nice blue, shipping/ocean vibe
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

