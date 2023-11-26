import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head';
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abhijith Electronic Solutions',
  description: 'Abhijith Electronic Solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
