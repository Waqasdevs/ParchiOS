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
        neutral: {50:"#FAF6EE", 100:"#F3EDE0", 200:"#E7DFCE", 300:"#D3C9B4", 400:"#ADA390", 500:"#8A8071", 600:"#675F52", 700:"#463F35", 800:"#2C2822", 900:"#1C1915", 950:"#12100D"},
        amber: {50:"#FBF6EC", 100:"#F5EBD5", 200:"#EBD8AE", 300:"#DEC38A", 400:"#C9A978", 500:"#B8935A", 600:"#9A7745", 700:"#7A5E37", 800:"#5B462A", 900:"#443420", 950:"#271E12"},
        emerald: {50:"#EEF8F2", 100:"#D9F0E3", 200:"#B6E1C9", 300:"#8ACBA8", 400:"#62B58A", 500:"#3F9B6D", 600:"#2F7E58", 700:"#266548", 800:"#1F513A", 900:"#1A4130", 950:"#0E2519"},
        ivory: '#F6F0E4',
        ink: '#15130F',
        rush: '#D92B1F',
        cobalt: '#15130F',
        lavender: {
          DEFAULT: '#F6F0E4',
          muted: 'rgba(246, 240, 228, 0.12)',
        },
        lime: {
          DEFAULT: '#F6F0E4',
          muted: 'rgba(217, 43, 31, 0.12)',
        },
        surface: {
          0: '#000000',
          1: '#15130F',
          2: '#201D18',
          3: '#2C2822',
          4: '#3A352D',
          5: '#4A443A',
        },
        apple: {
          bg: 'rgb(var(--apple-bg) / <alpha-value>)',
          card: 'rgb(var(--apple-card) / <alpha-value>)',
          text: 'rgb(var(--apple-text) / <alpha-value>)',
          gray: 'rgb(var(--apple-gray) / <alpha-value>)',
          border: 'rgb(var(--apple-border) / <alpha-value>)',
          blue: '#D92B1F',
          green: '#6E9E7E',
          'green-hover': '#5E8F6E',
          orange: '#C9A978',
          red: '#D92B1F',
          purple: '#AF52DE',
          teal: '#5AC8FA',
          indigo: '#5856D6',
        },
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
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
