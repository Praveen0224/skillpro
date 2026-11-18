/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#040714',
          card: 'rgba(11, 19, 43, 0.65)',
          border: 'rgba(0, 240, 255, 0.25)',
          blue: '#0066ff',
          cyan: '#00f0ff',
          neon: '#00ffcc',
          purple: '#8b5cf6',
          violet: '#a855f7',
          pink: '#f43f5e',
          amber: '#fbbf24',
          dark: '#02040a',
          navy: '#070d1e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
        display: ['Space Grotesk', 'Rajdhani', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, rgba(0,240,255,0.15) 0%, rgba(139,92,246,0.15) 50%, rgba(0,102,255,0.15) 100%)',
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.12) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 70%)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'grid-slide': 'gridSlide 20s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0,240,255,0.4))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 35px rgba(139,92,246,0.8))' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        gridSlide: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        }
      }
    },
  },
  plugins: [],
}

