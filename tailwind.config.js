/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F8F5EF',
          50: '#FFFFFF',
          100: '#FAF8F4',
          200: '#F8F5EF',
          300: '#EFEAE0',
          400: '#E4DDD0',
        },
        sage: {
          DEFAULT: '#8BA995',
          light: '#A4C0AE',
          soft: '#E8F0EA',
          muted: '#F1F6F3',
          dark: '#6F8F79',
        },
        forest: {
          DEFAULT: '#344C40',
          deep: '#22332B',
          light: '#446253',
          hover: '#2A3D33',
        },
        lavender: {
          DEFAULT: '#C7B8E5',
          light: '#EBE5F7',
          soft: '#F5F2FB',
          dark: '#A795D3',
        },
        blush: {
          DEFAULT: '#E9A5BC',
          light: '#F8E0E9',
          soft: '#FCF2F6',
          dark: '#D57C9B',
        },
        gold: {
          DEFAULT: '#D4AF75',
          light: '#E7CE9F',
          dark: '#B89255',
        },
        sunny: {
          DEFAULT: '#FFEAA7',
          light: '#FFF5D6',
          peach: '#FFDFBA',
          dark: '#FDCB6E',
        },
        charcoal: {
          DEFAULT: '#302F38',
          muted: '#6B6A75',
          subtle: '#9694A0',
          dark: '#1C1B20',
        },
        border: {
          DEFAULT: '#E5E1D8',
          subtle: '#ECE8E1',
          sage: '#C3D8CB',
          lavender: '#DFD7F2',
          pink: '#F3D2DE',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'subtle': '0 2px 10px -2px rgba(48, 47, 56, 0.05), 0 1px 4px -1px rgba(48, 47, 56, 0.02)',
        'card': '0 6px 20px -3px rgba(48, 47, 56, 0.07), 0 2px 8px -1px rgba(139, 169, 149, 0.08)',
        'card-hover': '0 16px 36px -4px rgba(52, 76, 64, 0.14), 0 6px 16px -2px rgba(139, 169, 149, 0.12)',
        'sage-glow': '0 0 25px -4px rgba(139, 169, 149, 0.35)',
        'lavender-glow': '0 0 25px -4px rgba(199, 184, 229, 0.4)',
        'blush-glow': '0 0 20px -4px rgba(233, 165, 188, 0.35)',
        'elevation': '0 20px 45px -10px rgba(52, 76, 64, 0.12), 0 0 1px 1px rgba(139, 169, 149, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-pink': 'pulsePink 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulsePink: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.03)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
}
