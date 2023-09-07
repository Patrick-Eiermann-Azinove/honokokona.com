import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Honokokona - Japan Dragons Spices',
  description: 'An ingredient found growing close the volcanoes of Japan. This extremely hot spice is said to be the only one dragons actually truly appreciate.',
  keywords: "honokokona, japan dragons spices, petfood dragon, treat, dragon Treat",
  openGraph: {
    title: 'Honokokona - Japan Dragons Spices',
    description: 'An ingredient found growing close the volcanoes of Japan. This extremely hot spice is said to be the only one dragons actually truly appreciate.',
    images: "/honokokona.webp"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
