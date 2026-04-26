import type { Metadata } from 'next'
import { getPostsByLang } from '@/lib/blog'
import BlogCard from '@/components/blog/BlogCard'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'

const SITE_URL = 'https://www.smpsjp.com'

export const metadata: Metadata = {
  title: 'Blog | SM Plastic Surgery Korea',
  description:
    'SM Plastic Surgery official blog. Expert guides on breast augmentation, eye surgery, and skin treatments in Seoul Gangnam.',
  alternates: {
    canonical: `${SITE_URL}/en/blog`,
    languages: {
      ja: `${SITE_URL}/blog`,
      en: `${SITE_URL}/en/blog`,
      'x-default': `${SITE_URL}/blog`,
    },
  },
  openGraph: {
    title: 'Blog | SM Plastic Surgery Korea',
    description:
      'Expert guides on breast augmentation, eye surgery, and skincare from our clinical team in Gangnam, Seoul.',
    url: `${SITE_URL}/en/blog`,
    type: 'website',
  },
}

export default function EnBlogPage() {
  const posts = getPostsByLang('en')

  return (
    <>
      <Navigation />
      <div className="max-w-content mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium text-brand tracking-widest uppercase mb-3">Blog</p>
          <h1 className="text-3xl font-bold text-text-main mb-4">SM Plastic Surgery Blog</h1>
          <p className="text-text-sub max-w-xl mx-auto">
            Expert guides on breast augmentation, eye surgery, and skincare from our clinical team in Gangnam, Seoul.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-24 text-text-sub">
            <p className="text-lg">No articles yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} lang="en" />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
