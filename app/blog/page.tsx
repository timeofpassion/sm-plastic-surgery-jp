import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import BlogCard from '@/components/blog/BlogCard'
import type { BlogCategory } from '@/types/blog'

const SITE_URL = 'https://www.smpsjp.com'

export const metadata: Metadata = {
  title: 'ブログ | SM美容外科医院',
  description:
    '韓国江南SM美容外科の公式ブログ。豊胸手術・目元整形・肌治療に関する最新情報、患者様の声、手術解説記事をお届けします。',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: 'ブログ | SM美容外科医院',
    description:
      '韓国江南SM美容外科の公式ブログ。豊胸・目元・肌の最新情報をお届けします。',
    url: `${SITE_URL}/blog`,
    type: 'website',
  },
}

const CATEGORIES: BlogCategory[] = ['豊胸手術', '目元整形', '肌・リフティング', 'クリニック情報']

interface PageProps {
  searchParams: { category?: string }
}

export default function BlogPage({ searchParams }: PageProps) {
  const posts = getAllPosts()
  const activeCategory = searchParams.category as BlogCategory | undefined

  const filtered = activeCategory
    ? posts.filter((p) => p.category === activeCategory)
    : posts

  return (
    <div className="max-w-content mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <p className="text-sm font-medium text-brand tracking-widest uppercase mb-3">Blog</p>
        <h1 className="text-3xl font-bold text-text-main mb-4">クリニックブログ</h1>
        <p className="text-text-sub max-w-xl mx-auto">
          豊胸・目元整形・肌治療に関する情報を、SM美容外科の専門チームがお届けします。
        </p>
      </div>

      {/* カテゴリフィルター */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        <a
          href="/blog"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !activeCategory
              ? 'bg-brand text-white'
              : 'bg-bg-sub text-text-sub hover:bg-brand/10 hover:text-brand'
          }`}
        >
          すべて
        </a>
        {CATEGORIES.map((cat) => (
          <a
            key={cat}
            href={`/blog?category=${encodeURIComponent(cat)}`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-brand text-white'
                : 'bg-bg-sub text-text-sub hover:bg-brand/10 hover:text-brand'
            }`}
          >
            {cat}
          </a>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-24 text-text-sub">
          <p className="text-lg">まだ記事がありません。</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
