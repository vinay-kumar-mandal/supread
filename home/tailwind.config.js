/** Build: npx tailwindcss -i ./src/input.css -o ./style.css --minify */
module.exports = {
  content: ['./index.html', './script.js'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      colors: { ink: '#02030d' },
      backgroundImage: {
        'doc-grad': 'linear-gradient(90deg,#8a2cf6 0%,#c62fe0 30%,#ff4f9a 62%,#ff9a3c 100%)',
        'btn-grad': 'linear-gradient(90deg,#6a25f0,#9b3df7)',
      },
      keyframes: {
        fadeUp: { from: { opacity: 0, transform: 'translateY(28px)' }, to: { opacity: 1, transform: 'none' } },
        fadeDown: { from: { opacity: 0, transform: 'translateY(-20px)' }, to: { opacity: 1, transform: 'none' } },
        pop: { from: { opacity: 0, scale: '.88' }, to: { opacity: 1, scale: '1' } },
        float: { '0%,100%': { translate: '0 0' }, '50%': { translate: '0 -9px' } },
        shimmer: { from: { backgroundPosition: '0% 0' }, to: { backgroundPosition: '60% 0' } },
        glow: { from: { filter: 'drop-shadow(0 0 4px rgba(167,139,250,.4))' }, to: { filter: 'drop-shadow(0 0 12px rgba(192,132,252,1))' } },
      },
      animation: {
        'fade-up': 'fadeUp .9s cubic-bezier(.2,.7,.2,1) both',
        'fade-down': 'fadeDown .8s cubic-bezier(.2,.7,.2,1) both',
        shimmer: 'shimmer 6s ease-in-out infinite alternate',
        glow: 'glow 3.5s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};
