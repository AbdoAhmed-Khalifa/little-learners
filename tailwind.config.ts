import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          65: '#FF8D4C',
          70: '#FF9E66',
          75: '#FFAE80',
          80: '#FFBE99',
          90: '#FFDECC',
          95: '#FFEFE5',
          97: '#FFF5F0',
          99: '#FFFCFA',
        },
        dark: {
          10: '#191919',
          15: '#262626',
          20: '#333333',
          30: '#4C4C4D',
          35: '#59595A',
          40: '#656567',
          60: '#98989A',
          70: '#B3B3B3',
        },
      },
      fontFamily: {
        outfit: ['var(--font-outfit)'],
        raleway: ['var(--font-raleway)'],
      },
      boxShadow: {
        'card': '4px 4px 0px 2px rgba(30,30,30,1)',
        'button': '2px 2px 0px 2px rgba(30,30,30,1)',
        "line":"4px 1px 0px 4px rgba(255,190,153,1)"
        
      },
    },
  },
  plugins: [],
} satisfies Config;
