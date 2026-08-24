import type { Metadata } from 'next'
import { Noto_Serif, Noto_Serif_KR } from 'next/font/google'
import '../styles/globals.css'

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-noto-serif',
  adjustFontFallback: false,
})

const notoSerifKR = Noto_Serif_KR({
  weight: ['200', '300', '400', '500', '600', '700', '900'],
  variable: '--font-noto-serif-kr',
  preload: false,
  adjustFontFallback: false,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${notoSerif.variable} ${notoSerifKR.variable}`}>
        {children}
      </body>
    </html>
  )
}
