import './globals.css'
import type { Metadata } from 'next'
import { Lato, Oswald } from 'next/font/google'


const lato = Lato({
  subsets: ['latin'],
  weight: ['300','400'],
  display: 'swap',
  variable: '--font-lato'

})
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['600'],
  display: 'swap',
  variable: '--font-oswald'
})


export const metadata: Metadata = {
  title: 'KC',
  description: 'Full Stack Web Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${lato.variable}`}>
        {children}
      </body>
    </html>
  )
}
