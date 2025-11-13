export const site = {
  brandName: 'Zephyr MedTech',
  logoSrc: '/logo.png',
  nav: [
    { label: '首页', href: '/' },
    { label: '解决方案', href: '/services' },
    { label: '关于我们', href: '/about' },
  ],
  contact: {
    email: 'info@zephyrmedtech.com',
    address: '中国 · 深圳',
  },
  tagline: '巽沐风泽医疗科技 - 专注于医疗器械企业AI提效解决方案',
  icp: '粤ICP备2025407443号',
  clients: [
    { src: '/clients_logo_1.png', alt: 'Client A' },
    { src: '/clients_logo_2.png', alt: 'Client B' },
    { src: '/clients_logo_3.png', alt: 'Client C' },
    { src: '/clients_logo_4.png', alt: 'Client D' },
    { src: '/clients_logo_5.png', alt: 'Client E' },
  ],
}

export type NavItem = typeof site.nav[number]
