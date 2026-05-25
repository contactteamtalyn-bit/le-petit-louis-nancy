import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Le Petit Louis · bistrot Nancy × Art Nouveau ──
        bistrot: {
          DEFAULT: '#1B2E20', // vert bistrot profond
          deep: '#132017',    // vert encore plus sombre (sections sombres)
          soft: '#2C4533',    // vert adouci
        },
        creme: '#F5EDD8',     // crème beurre
        blanc: '#FDFAF4',     // blanc cassé
        miel: {
          DEFAULT: '#C4A255', // or miel
          deep: '#A8842F',    // or miel foncé (texte sur clair)
          light: '#D9BE80',
        },
        brun: {
          DEFAULT: '#3D2810', // brun chaud
          soft: '#5C4326',
        },
      },
      fontFamily: {
        cardo: ['var(--font-cardo)', 'Cardo', 'Georgia', 'serif'],
        'cardo-it': ['var(--font-cardo-it)', 'var(--font-cardo)', 'Georgia', 'serif'],
        mulish: ['var(--font-mulish)', 'Mulish', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.32em',
      },
      maxWidth: {
        wrap: '1200px',
      },
      transitionTimingFunction: {
        louis: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'soft-bounce': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        'sway': {
          '0%,100%': { transform: 'rotate(-1.5deg)' },
          '50%': { transform: 'rotate(1.5deg)' },
        },
      },
      animation: {
        'soft-bounce': 'soft-bounce 2.4s ease-in-out infinite',
        'sway': 'sway 6s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
