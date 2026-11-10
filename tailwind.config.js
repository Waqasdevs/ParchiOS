/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {50:"#F7F4FB", 100:"#EFEAF6", 200:"#E1D9EE", 300:"#CBC0DF", 400:"#B0A3C9", 500:"#8F82A9", 600:"#6B5C86", 700:"#4A3C63", 800:"#2E2043", 900:"#1E1230", 950:"#150B22"},
        amber: {50:"#FFF6EF", 100:"#FFEADB", 200:"#FFD6BA", 300:"#FFC29B", 400:"#F7B58D", 500:"#EE9F6F", 600:"#D9834F", 700:"#B5663A", 800:"#8F4E2C", 900:"#6B3A22", 950:"#3F2013"},
        emerald: {50:"#EEF8F2", 100:"#D9F0E3", 200:"#B6E1C9", 300:"#8ACBA8", 400:"#62B58A", 500:"#3F9B6D", 600:"#2F7E58", 700:"#266548", 800:"#1F513A", 900:"#1A4130", 950:"#0E2519"},
        cobalt: '#170D21',
        lavender: {
          DEFAULT: '#C9B8F2',
          muted: 'rgba(173, 150, 241, 0.16)',
        },
        lime: {
          DEFAULT: '#E4DAF9',
          muted: 'rgba(88, 246, 177, 0.15)',
        },
        surface: {
          0: '#000000',
          1: '#170D21',
          2: '#231532',
          3: '#2E1D40',
          4: '#3A2850',
          5: '#4A3563',
        },
        apple: {
          bg: 'rgb(var(--apple-bg) / <alpha-value>)',
          card: 'rgb(var(--apple-card) / <alpha-value>)',
          text: 'rgb(var(--apple-text) / <alpha-value>)',
          gray: 'rgb(var(--apple-gray) / <alpha-value>)',
          border: 'rgb(var(--apple-border) / <alpha-value>)',
          blue: '#A98BE8',
          green: '#5FBF94',
          'green-hover': '#4FAE84',
          orange: '#F7B58D',
          red: '#E5646E',
          purple: '#AF52DE',
          teal: '#5AC8FA',
          indigo: '#5856D6',
        },
      },
      fontFamily: {
        sans: [
          '"Geist"',
          '"Manrope"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
        mono: [
          '"Geist Mono"',
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
        ],
      },
      transitionTimingFunction: {
        weighted: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      boxShadow: {
        'apple-sm': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'apple-md': '0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04)',
        'apple-lg': '0 12px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
        'apple-modal': '0 24px 64px rgba(0, 0, 0, 0.18)',
      },
    },
  },
  plugins: [],
};
