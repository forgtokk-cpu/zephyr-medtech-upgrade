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
  tagline: 'Zephyr MedTech - 医疗器械行业AI解决方案专家',
  icp: '粤ICP备2025407443号',
  clients: [
    { src: '/clients_logo_1.png', alt: '医疗器械企业A' },
    { src: '/clients_logo_2.png', alt: '医疗器械企业B' },
    { src: '/clients_logo_3.png', alt: '医疗器械企业C' },
    { src: '/clients_logo_4.png', alt: '医疗器械企业D' },
    { src: '/clients_logo_5.png', alt: '医疗器械企业E' },
  ],
}

export type NavItem = typeof site.nav[number]
