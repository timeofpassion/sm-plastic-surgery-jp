import type { MetadataRoute } from 'next'
import { getPostsByLang } from '@/lib/blog'

const SITE_URL = 'https://www.smpsjp.com'
const now = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  const jaPosts = getPostsByLang('ja').map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const enPosts = getPostsByLang('en').map((post) => ({
    url: `${SITE_URL}/en/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    ...jaPosts,
    {
      url: `${SITE_URL}/en/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/en/blog`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    ...enPosts,
  ]
}
