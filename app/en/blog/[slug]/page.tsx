import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import Link from 'next/link'
import { marked } from 'marked'
import { getPostsByLang, getPostBySlug } from '@/lib/blog'
import BlogContent from '@/components/blog/BlogContent'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'

const SITE_URL = 'https://www.smpsjp.com'
const LINE_URL = 'https://line.me/R/ti/p/@952nqpbr'
const MESSENGER_URL = 'https://m.me/smplasticsurgery'

export async function generateStaticParams() {
  const posts = getPostsByLang('en')
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post || (post.lang ?? 'ja') !== 'en') return {}

  const url = `${SITE_URL}/en/blog/${post.slug}`
  return {
    title: post.title,
    description: post.description,
    keywords: post.seoKeywords,
    alternates: {
      canonical: url,
      languages: {
        ja: `${SITE_URL}/blog/${post.slug}`,
        en: url,
        'x-default': `${SITE_URL}/blog/${post.slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      tags: post.tags,
      images: post.thumbnail ? [{ url: post.thumbnail }] : [],
    },
  }
}

export default async function EnBlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post || !post.isPublished) notFound()
  if ((post.lang ?? 'ja') !== 'en') notFound()

  const html = marked.parse(post.content) as string

  const date = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    keywords: post.seoKeywords.join(', '),
    inLanguage: 'en',
    author: {
      '@type': 'Organization',
      name: 'SM Plastic Surgery',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'SM Plastic Surgery',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo_smps.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/en/blog/${post.slug}` },
    ...(post.thumbnail && { image: `${SITE_URL}${post.thumbnail}` }),
  }

  return (
    <>
      <Script
        id={`article-schema-${post.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navigation />
      <article className="max-w-[740px] mx-auto px-4 py-16">
        <nav className="flex items-center gap-2 text-sm text-text-sub mb-8">
          <Link href="/en/" className="hover:text-brand transition-colors">Home</Link>
          <span>/</span>
          <Link href="/en/blog" className="hover:text-brand transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-text-main line-clamp-1">{post.title}</span>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-brand/10 text-brand">
              {post.category}
            </span>
            {post.readingTime && (
              <span className="text-xs text-text-sub">{post.readingTime} min read</span>
            )}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-text-main leading-snug mb-4">
            {post.title}
          </h1>
          <p className="text-text-sub text-sm">{date} Published</p>
        </header>

        <BlogContent html={html} />

        <div className="mt-16 p-8 bg-bg-sub rounded-2xl text-center">
          <p className="text-sm text-text-sub mb-2">Have questions? Reach out via Messenger or LINE</p>
          <p className="font-semibold text-text-main mb-5">
            SM Plastic Surgery — English support available, free online consultation
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={MESSENGER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0084FF] hover:opacity-90 text-white font-medium px-6 py-3 rounded-full transition-opacity"
            >
              Contact via Messenger
            </a>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#06C755] hover:opacity-90 text-white font-medium px-6 py-3 rounded-full transition-opacity"
            >
              LINE
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/en/blog" className="text-sm text-brand hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </article>
      <Footer />
    </>
  )
}
