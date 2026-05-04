import Link from 'next/link'
import Image from 'next/image'
import type { BlogPost } from '@/types/blog'

const CATEGORY_COLORS: Record<string, string> = {
  '豊胸手術': 'bg-brand/10 text-brand',
  '目元整形': 'bg-emerald-50 text-emerald-700',
  '肌・リフティング': 'bg-purple-50 text-purple-700',
  'クリニック情報': 'bg-amber-50 text-amber-700',
  'Breast Surgery': 'bg-brand/10 text-brand',
  'Eye Surgery': 'bg-emerald-50 text-emerald-700',
  'Skin & Lifting': 'bg-purple-50 text-purple-700',
  'Clinic Info': 'bg-amber-50 text-amber-700',
}

interface BlogCardProps {
  post: BlogPost
  lang?: 'ja' | 'en' | 'ko'
}

export default function BlogCard({ post, lang = 'ja' }: BlogCardProps) {
  const locale = lang === 'en' ? 'en-US' : lang === 'ko' ? 'ko-KR' : 'ja-JP'
  const date = new Date(post.publishedAt).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const readMore = lang === 'en' ? 'Read more →' : lang === 'ko' ? '더 보기 →' : '続きを読む →'
  const readTime = lang === 'en'
    ? `${post.readingTime} min read`
    : lang === 'ko'
    ? `${post.readingTime}분 소요`
    : `${post.readingTime}分で読める`

  return (
    <Link
      href={lang === 'en' ? `/en/blog/${post.slug}` : `/blog/${post.slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-border-default hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-48 bg-bg-sub overflow-hidden">
        {post.thumbnail ? (
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#c8ddf0] via-[#a8c4e0] to-[#6898c8]">
            <span className="text-white/50 text-[0.65rem] font-medium tracking-[0.2em] uppercase">{post.category}</span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${
              CATEGORY_COLORS[post.category] ?? 'bg-bg-sub text-text-sub'
            }`}
          >
            {post.category}
          </span>
          {post.readingTime && (
            <span className="text-xs text-text-sub">{readTime}</span>
          )}
        </div>

        <h2 className="text-base font-semibold text-text-main line-clamp-2 group-hover:text-brand transition-colors">
          {post.title}
        </h2>

        <p className="text-sm text-text-sub line-clamp-3 flex-1">{post.description}</p>

        <div className="flex items-center justify-between pt-2 border-t border-border-default">
          <time className="text-xs text-text-sub">{date}</time>
          <span className="text-xs font-medium text-brand group-hover:underline">
            {readMore}
          </span>
        </div>
      </div>
    </Link>
  )
}
