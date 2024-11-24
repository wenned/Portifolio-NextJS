import { transform } from 'next/dist/build/swc'
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
        'ws-c': '#c2c2c2',
        'ws-body': '#1c1c24',
        'ws-new':'#07edadff',
        'ws-projeto' : '#c9fdef'
      },

      fontFamily: {
        wsfont: ['Poiret One', 'sans-serif'],
      },

      keyframes: {
        screver: {
          '0%': { width: '0%' },
          '100%': { width: '90%' },
          },
          brRetorn: {
            '0%': { borderRadius: '50%', width: '7rem', left: 'auto' },
            '50%': { borderRadius: '0%', width: '7rem', left: 'auto' }, // Bordas ficam retas, largura fixa
            '100%': { borderRadius: '0%', width: '74vw', left: '0' },  // Cresce para a esquerda até a borda da página
          }

        },

        animation :{
          'spin-slow': 'spin 5s linear infinite',
          'retorno': 'screver 1s ease-in-out forwards',
          'kl' : 'brRetorn 2s ease-in-out forwards'
        },

    },
  },
  plugins: [],
}
export default config
