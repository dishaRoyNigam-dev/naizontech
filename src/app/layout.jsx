import '../index.css'

export const viewport = {
  themeColor: '#f8f8f5',
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  metadataBase: new URL('https://naizon.in'),
  title: {
    default: 'NAIZON | Web Development, AI Tools & Tech Solutions',
    template: '%s',
  },
  description:
    'NAIZON is a website development company serving Delhi and Gurgaon with professional web design, custom development and ecommerce solutions.',
  icons: {
    icon: [
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://naizon.in',
    siteName: 'NAIZON — Website Development & Digital Solutions',
    title: 'NAIZON | Web Development, AI Tools & Tech Solutions',
    description:
      'Professional website design, custom web development and ecommerce solutions for growing businesses.',
    images: [{ url: '/images/hero.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NAIZON | Web Development, AI Tools & Tech Solutions',
    description:
      'Professional website design, custom web development and ecommerce solutions for growing businesses.',
    images: ['/images/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="m-0 overflow-x-hidden overscroll-y-none bg-[#f8f8f5] text-[#172033] antialiased">
        {children}
      </body>
    </html>
  )
}
