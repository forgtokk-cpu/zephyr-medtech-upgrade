import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { site } from '@/content/site'
import Script from 'next/script'

export const metadata: Metadata = {
  title: site.tagline,
  description: 'Zephyr MedTech专注医疗器械行业AI解决方案，提供专业的AI翻译、文档撰写、合规管理和数据分析服务，助力产品快速进入全球市场，提升运营效率，加速全球化进程。',
  icons: { icon: '/logo.png' },
  metadataBase: new URL('https://www.zephyrmedtech.com'),
  openGraph: {
    title: site.tagline,
    description: 'Zephyr MedTech专注医疗器械行业AI解决方案，提供专业的AI翻译、文档撰写、合规管理和数据分析服务，助力产品快速进入全球市场，提升运营效率，加速全球化进程。',
    url: 'https://www.zephyrmedtech.com',
    siteName: site.brandName,
    images: [{ url: '/logo.png' }],
    type: 'website',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.tagline,
    description: 'Zephyr MedTech专注医疗器械行业AI解决方案，提供专业的AI翻译、文档撰写、合规管理和数据分析服务，助力产品快速进入全球市场，提升运营效率，加速全球化进程。',
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
