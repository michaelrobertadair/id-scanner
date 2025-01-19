/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        primary: '#007AFF',
        success: '#34C759',
        error: '#FF3B30',
        text: {
          primary: '#FFFFFF',
          secondary: '#8E8E93'
        }
      },
      animation: {
        'scanner': 'scanner 2s linear infinite',
      },
      keyframes: {
        scanner: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [],
}