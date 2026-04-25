import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { marked } from 'marked'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import BlogContent from '@/components/blog/BlogContent'
import Link from 'next/link'

const SITE_URL = 'https://www.smpsjp.com'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  const url = `${SITE_URL}/blog/${post.slug}`

  return {
    title: post.title,
    description: post.description,
    keywords: post.seoKeywords,
    alternates: {
      canonical: url,
      languages: { 'ja-JP': url, 'ko-KR': url },
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

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post || !post.isPublished) notFound()

  const html = marked.parse(post.content) as string

  const date = new Date(post.publishedAt).toLocaleDateString('ja-JP', {
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
    author: {
      '@type': 'Organization',
      name: 'SM美容外科医院',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'SM美容外科医院',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo_smps.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}` },
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

      <article className="max-w-[740px] mx-auto px-4 py-16">
        {/* パンくずリスト */}
        <nav className="flex items-center gap-2 text-sm text-text-sub mb-8">
          <Link href="/" className="hover:text-brand transition-colors">
            ホーム
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-brand transition-colors">
            ブログ
          </Link>
          <span>/</span>
          <span className="text-text-main line-clamp-1">{post.title}</span>
        </nav>

        {/* ヘッダー */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-brand/10 text-brand">
              {post.category}
            </span>
            {post.readingTime && (
              <span className="text-xs text-text-sub">{post.readingTime}分で読める</span>
            )}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-text-main leading-snug mb-4">
            {post.title}
          </h1>
          <p className="text-text-sub text-sm">{date} 公開</p>
        </header>

        {/* コンテンツ */}
        <BlogContent html={html as string} />

        {/* フッターCTA */}
        <div className="mt-16 p-8 bg-bg-sub rounded-2xl text-center">
          <p className="text-sm text-text-sub mb-2">気になることはLINEで気軽にご相談ください</p>
          <p className="font-semibold text-text-main mb-5">
            SM美容外科 — 日本語スタッフ在籍、無料オンライン相談受付中
          </p>
          <a
            href="https://line.me/R/ti/p/@952nqpbr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white font-medium px-6 py-3 rounded-full transition-colors"
          >
            LINE で無料相談する
          </a>
        </div>

        {/* ブログ一覧に戻る */}
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-sm text-brand hover:underline">
            ← ブログ一覧に戻る
          </Link>
        </div>
      </article>
    </>
  )
}
