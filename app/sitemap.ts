import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.zephyrmedtech.com'
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/demo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/services/compliance`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/authoring`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/translation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/analytics`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
