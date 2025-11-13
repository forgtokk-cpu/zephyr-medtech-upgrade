import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { site } from '@/content/site'
import Script from 'next/script'

export const metadata: Metadata = {
  title: site.brandName,
  description: site.tagline,
  icons: { icon: '/logo.png' },
  openGraph: {
    title: site.brandName,
    description: site.tagline,
    url: 'https://www.zephyrmedtech.com',
    siteName: site.brandName,
    images: [{ url: '/logo.png' }],
    type: 'website',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.brandName,
    description: site.tagline,
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: site.brandName,
            url: 'https://www.zephyrmedtech.com',
            logo: '/logo.png',
            contactPoint: [{ email: site.contact.email, telephone: site.contact.phone, contactType: 'customer service' }],
          })}
        </Script>
        <Analytics />
      </body>
    </html>
  )
}
