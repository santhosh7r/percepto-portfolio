import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050505',
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  title: 'Percepto | Strategic Branding & Positioning',
  description: 'Strategic branding and positioning agency. We shape perception. We build power.',
  generator: 'v0.app',
  metadataBase: new URL('https://percepto.com'),
  openGraph: {
    title: 'Percepto | Strategic Branding & Positioning',
    description: 'Strategic branding and positioning agency. We shape perception. We build power.',
    type: 'website',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Percepto | Strategic Branding & Positioning',
    description: 'Strategic branding and positioning agency.',
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-black scroll-smooth">
      <body className="font-sans antialiased bg-black text-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
