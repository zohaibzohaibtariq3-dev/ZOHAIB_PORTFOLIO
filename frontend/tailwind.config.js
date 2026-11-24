/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080808',
        'secondary-bg': '#111111',
        'surface-card': '#141414',
        'surface-card-hover': '#1A1A1A',
        'primary-red': '#FF3030',
        'bright-red': '#FF4545',
        'dark-red': '#8B0000',
        'deep-red': '#3D0A0A',
        'border-subtle': '#292929',
        'border-red': 'rgba(255, 48, 48, 0.3)',
        'text-main': '#FFFFFF',
        'text-secondary': '#A1A1AA',
        'text-muted': '#71717A',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { opacity: 0.4, filter: 'drop-shadow(0 0 15px rgba(255,48,48,0.4))' },
          '100%': { opacity: 0.9, filter: 'drop-shadow(0 0 30px rgba(255,48,48,0.8))' },
        }
      },
      boxShadow: {
        'red-sm': '0 0 15px -3px rgba(255, 48, 48, 0.25)',
        'red-md': '0 0 25px -2px rgba(255, 48, 48, 0.35)',
        'red-lg': '0 0 45px 0 rgba(255, 48, 48, 0.45)',
        'red-glow': '0 0 60px 10px rgba(255, 48, 48, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
