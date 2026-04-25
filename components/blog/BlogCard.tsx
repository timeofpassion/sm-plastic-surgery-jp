import Link from 'next/link'
import Image from 'next/image'
import type { BlogPost } from '@/types/blog'

const CATEGORY_COLORS: Record<string, string> = {
  '豊胸手術': 'bg-brand/10 text-brand',
  '目元整形': 'bg-emerald-50 text-emerald-700',
  '肌・リフティング': 'bg-purple-50 text-purple-700',
  'クリニック情報': 'bg-amber-50 text-amber-700',
}

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  const date = new Date(post.publishedAt).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Link
      href={`/blog/${post.slug}`}
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
          <div className="w-full h-full flex items-center justify-center text-4xl text-text-sub/30">
            ✦
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
            <span className="text-xs text-text-sub">{post.readingTime}分で読める</span>
          )}
        </div>

        <h2 className="text-base font-semibold text-text-main line-clamp-2 group-hover:text-brand transition-colors">
          {post.title}
        </h2>

        <p className="text-sm text-text-sub line-clamp-3 flex-1">{post.description}</p>

        <div className="flex items-center justify-between pt-2 border-t border-border-default">
          <time className="text-xs text-text-sub">{date}</time>
          <span className="text-xs font-medium text-brand group-hover:underline">
            続きを読む →
          </span>
        </div>
      </div>
    </Link>
  )
}
