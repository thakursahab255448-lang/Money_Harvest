/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FEFAE0',
        cream: {
          50: '#FFFDF5',
          100: '#FEFAE0',
          200: '#F5F8E6',
          300: '#E9EDC9',
          400: '#CCD5AE',
        },
        forest: {
          DEFAULT: '#2F3625',
          dark: '#1F2418',
          light: '#424C34',
        },
        olive: {
          DEFAULT: '#55613F',
          dark: '#3A4229',
          light: '#6B7052',
          muted: '#8B8F6E',
        },
        bronze: {
          DEFAULT: '#8F6B44',
          dark: '#6E5636',
          light: '#A67C52',
          soft: '#D4A373',
        },
        border: '#E3DEC4',
        sand: '#F2EBD4',
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'lux': '0 4px 20px -2px rgba(47, 54, 37, 0.08)',
        'lux-hover': '0 8px 30px -4px rgba(47, 54, 37, 0.12)',
      }
    },
  },
  plugins: [],
};
