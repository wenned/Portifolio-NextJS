import type { Metadata } from 'next'
import './globals.css'
import { wsfont } from "../../src/app/ui/fonts";

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
      <body className={wsfont.className}>{children}</body>
    </html>
  )
}
