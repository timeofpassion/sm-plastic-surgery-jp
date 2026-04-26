import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import ManagePostList from '@/components/manage/PostList'

export const dynamic = 'force-dynamic'

export default function ManagePage() {
  const posts = getAllPosts(true)

  const published = posts.filter((p) => p.isPublished).length
  const drafts = posts.filter((p) => !p.isPublished).length

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">블로그 기사</h1>
          <p className="text-sm text-gray-500 mt-1">
            총 {posts.length}건 — 공개 중 {published}건 / 임시저장 {drafts}건
          </p>
        </div>
        <Link
          href="/blog/manage/new"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors"
        >
          + 새 기사 작성
        </Link>
      </div>

      <ManagePostList posts={posts} />
    </div>
  )
}
