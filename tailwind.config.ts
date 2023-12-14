import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      letterSpacing: {
        wide: '-.25em',
        widest: '-0.4em',
       },

       colors: {
        'ws-hov':'#E3DCA1',
        'ws-l': '#f0c27b',
        'ws-c': '#B55EA5',
        'ws-r': '#4b1248'
      },

      keyframes: {
        fr: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }

    },
  },
  plugins: [],
}
export default config
