import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AQI Location Viewer',
  description: 'Air Quality Index for multiple locations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={inter.className}>
        <div
          className='w-full flex flex-row justify-center'
        >
          <p className='text-4xl'>
            Air Quality Index Location Viewer
          </p>
        </div>
        {children}
      </body>
    </html>
  )
}
