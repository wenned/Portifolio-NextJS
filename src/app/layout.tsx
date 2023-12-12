import type { Metadata } from 'next'
import { Poiret_One } from 'next/font/google'
import './globals.css'

const pioret = Poiret_One({ weight:['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wenned Silva',
  description: 'Portifolio de Projetos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pioret.className}>{children}</body>
    </html>
  )
}
