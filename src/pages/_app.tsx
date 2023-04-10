import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Poppins } from 'next/font/google'
import { Inter } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300','400', '500'],
  variable: '--font-poppins'
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-inter'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} ${inter.variable} font-poppins`}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
