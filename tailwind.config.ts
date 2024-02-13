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
        wide: '-.28em',
        widest: '-0.4em',
       },

       colors: {
        'ws-hov':'#E3DCA1',
        'ws-l': '#f0c27b',
        'ws-c': '#B55EA5',
        'ws-r': '#4b1248',
        'ws-new':'#07edadff'
      },

      fontFamily: {
        wsfont: ['Poiret One', 'sans-serif'],
      },

      keyframes: {
        openConteiner: {
          '0%': { width: '0' },
          '100%': { width: '100%' }, 
          }
        },

        animation :{
          'open_conteiner' : 'openConteiner 2s',
        },

    },
  },
  plugins: [],
}
export default config
