/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        deck: {
          950: '#070a10',
          900: '#0c121e',
          850: '#101826',
          800: '#141f32',
          700: '#1e2e48',
          600: '#2c4266',
        },
        tactical: {
          amber: '#f59e0b',
          gold: '#eab308',
          cyan: '#06b6d4',
          sky: '#38bdf8',
          steel: '#94a3b8',
        },
      },
    },
  },
  plugins: [],
};
