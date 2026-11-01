/** Build: npx tailwindcss -i ./src/input.css -o ./style.css --minify */
module.exports = {
  content: ['./index.html', './script.js'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'], mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'] },
      colors: { ink: '#02030d' },
      backgroundImage: {
        'btn-grad': 'linear-gradient(90deg,#6a25f0,#9b3df7)',
        'pink-grad': 'linear-gradient(90deg,#7c3aed,#c026d3 55%,#ec4899)',
        'title-grad': 'linear-gradient(90deg,#8b3dff 0%,#c13bf0 45%,#ff4fa0 100%)',
      },
      keyframes: {
        fadeUp: { from: { opacity: 0, transform: 'translateY(22px)' }, to: { opacity: 1, transform: 'none' } },
        fadeDown: { from: { opacity: 0, transform: 'translateY(-16px)' }, to: { opacity: 1, transform: 'none' } },
        float: { '0%,100%': { transform: 'translateY(0) rotate(-2deg)' }, '50%': { transform: 'translateY(-14px) rotate(2deg)' } },
        ping2: { '0%': { boxShadow: '0 0 0 0 rgba(74,222,128,.6)' }, '100%': { boxShadow: '0 0 0 8px rgba(74,222,128,0)' } },
      },
      animation: {
        'fade-up': 'fadeUp .8s cubic-bezier(.2,.7,.2,1) both',
        'fade-down': 'fadeDown .7s cubic-bezier(.2,.7,.2,1) both',
        float: 'float 7s ease-in-out infinite',
        beacon: 'ping2 1.8s ease-out infinite',
      },
    },
  },
  plugins: [],
};
