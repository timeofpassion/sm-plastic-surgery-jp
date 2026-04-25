'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { BlogPost } from '@/types/blog'

interface AdminPostListProps {
  posts: BlogPost[]
}

export default function AdminPostList({ posts: initialPosts }: AdminPostListProps) {
  const [posts, setPosts] = useState(initialPosts)
  const [loading, setLoading] = useState<string | null>(null)
  const router = useRouter()

  async function togglePublish(post: BlogPost) {
    setLoading(post.slug)
    const updated = { ...post, isPublished: !post.isPublished, updatedAt: new Date().toISOString() }
    await fetch(`/api/blog/${post.slug}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    })
    setPosts((prev) => prev.map((p) => (p.slug === post.slug ? updated : p)))
    setLoading(null)
  }

  async function deletePost(slug: string) {
    if (!confirm('この記事を削除しますか？')) return
    setLoading(slug)
    await fetch(`/api/blog/${slug}`, { method: 'DELETE' })
    setPosts((prev) => prev.filter((p) => p.slug !== slug))
    setLoading(null)
    router.refresh()
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400">
        <p>まだ記事がありません。</p>
        <Link href="/admin/new" className="mt-4 inline-block text-blue-600 hover:underline text-sm">
          最初の記事を作成する →
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="text-left px-4 py-3 font-medium text-gray-600">タイトル</th>
            <th className="text-left px-4 py-3 font-medium text-gray-600 hidden md:table-cell">カテゴリ</th>
            <th className="text-left px-4 py-3 font-medium text-gray-600 hidden md:table-cell">更新日</th>
            <th className="text-left px-4 py-3 font-medium text-gray-600">状態</th>
            <th className="text-right px-4 py-3 font-medium text-gray-600">操作</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {posts.map((post) => {
            const date = new Date(post.updatedAt).toLocaleDateString('ja-JP')
            return (
              <tr key={post.slug} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">
                  <div className="font-medium text-gray-900 line-clamp-1">{post.title}</div>
                  {post.sourceType === 'ameba-rewrite' && (
                    <span className="text-xs text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full mt-1 inline-block">
                      アメバリライト
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{post.category}</td>
                <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{date}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => togglePublish(post)}
                    disabled={loading === post.slug}
                    className={`text-xs font-medium px-2.5 py-1 rounded-full transition-colors ${
                      post.isPublished
                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                  >
                    {post.isPublished ? '公開中' : '下書き'}
                  </button>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/edit/${post.slug}`}
                      className="text-blue-600 hover:underline text-xs"
                    >
                      編集
                    </Link>
                    <button
                      onClick={() => deletePost(post.slug)}
                      disabled={loading === post.slug}
                      className="text-red-500 hover:underline text-xs disabled:opacity-50"
                    >
                      削除
                    </button>
                    {post.isPublished && (
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="text-gray-400 hover:text-gray-600 text-xs"
                      >
                        表示 ↗
                      </Link>
                    )}
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
