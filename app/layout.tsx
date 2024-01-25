import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SiteHeader } from '@/components/SiteHeader'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextJs Movies',
  description: 'Movies Database using TMDB API and NextJs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} scrollbar-thumb-orange-400 scrollbar-thin scrollbar-track-gray-100 overflow-x-hidden bg-[#141414] text-white`}
      >
        <main className="mx-auto h-full max-w-full px-3 py-3">
          <SiteHeader />
          {children}
        </main>
      </body>
    </html>
  )
}
