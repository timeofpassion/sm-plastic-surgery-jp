import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import AdminPostList from '@/components/admin/AdminPostList'

export default function AdminPage() {
  const posts = getAllPosts(true)

  const published = posts.filter((p) => p.isPublished).length
  const drafts = posts.filter((p) => !p.isPublished).length

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">ブログ記事</h1>
          <p className="text-sm text-gray-500 mt-1">
            全{posts.length}件 — 公開中 {published}件 / 下書き {drafts}件
          </p>
        </div>
        <Link
          href="/admin/new"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors"
        >
          + 新規作成
        </Link>
      </div>

      <AdminPostList posts={posts} />
    </div>
  )
}
