/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f5f7fa',
          100: '#e6ebf2',
          200: '#c3cfe0',
          300: '#9db2cd',
          400: '#6d8ab5',
          500: '#4a6c9c',
          600: '#37547f',
          700: '#2d4468',
          800: '#273a58',
          900: '#0f1b33',
          950: '#0a1225',
        },
        ivory: {
          50: '#fdfcf8',
          100: '#faf7ee',
          200: '#f3ecd9',
          300: '#e9dcb7',
          400: '#dcc791',
        },
        gold: {
          100: '#f7efdc',
          300: '#e7cf97',
          500: '#c9a96a',
          600: '#b48d4a',
        },
        ink: {
          500: '#6b7280',
          700: '#374151',
          900: '#111827',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 1px 2px rgba(15,27,51,0.04), 0 8px 24px rgba(15,27,51,0.06)',
        portrait: '0 4px 10px rgba(15,27,51,0.08), 0 20px 50px rgba(15,27,51,0.18)',
      },
      letterSpacing: {
        tightest: '-0.035em',
        eyebrow: '0.18em',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
