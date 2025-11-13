import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { site } from '@/content/site'
import Script from 'next/script'

export const metadata: Metadata = {
  title: site.tagline,
  description: 'Zephyr MedTech为医疗器械企业提供专业的AI翻译、文档审核、合规管理和数据分析解决方案，助力产品快速进入全球市场，提升运营效率。专注于AI驱动的效率革命。',
  icons: { icon: '/logo.png' },
  metadataBase: new URL('https://www.zephyrmedtech.com'),
  openGraph: {
    title: site.tagline,
    description: 'Zephyr MedTech为医疗器械企业提供专业的AI翻译、文档审核、合规管理和数据分析解决方案，助力产品快速进入全球市场，提升运营效率。',
    url: 'https://www.zephyrmedtech.com',
    siteName: site.brandName,
    images: [{ url: '/logo.png' }],
    type: 'website',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.tagline,
    description: 'Zephyr MedTech为医疗器械企业提供专业的AI翻译、文档审核、合规管理和数据分析解决方案，助力产品快速进入全球市场。',
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
