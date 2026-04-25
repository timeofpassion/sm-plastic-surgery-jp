import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import BlogCard from '@/components/blog/BlogCard'

export default function LatestBlog() {
  const posts = getAllPosts().slice(0, 3)

  if (posts.length === 0) return null

  return (
    <section className="py-20 bg-bg-sub" id="blog">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-brand tracking-widest uppercase mb-3">Blog</p>
          <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-4">
            クリニックブログ
          </h2>
          <p className="text-text-sub max-w-md mx-auto text-sm">
            豊胸・目元・肌治療に関する最新情報をお届けします
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-brand text-brand hover:bg-brand hover:text-white font-medium px-6 py-3 rounded-full transition-colors"
          >
            ブログ記事をもっと見る →
          </Link>
        </div>
      </div>
    </section>
  )
}
