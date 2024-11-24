import './globals.css'
import type { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'STHL',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Analytics/>
      <body className='bg-[#0f0f0f] w-full min-h-screen flex items-center justify-center'>{children}</body>
    </html>
  )
}

