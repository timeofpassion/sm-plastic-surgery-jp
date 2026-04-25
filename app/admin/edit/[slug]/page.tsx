import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/blog'
import PostEditor from '@/components/admin/PostEditor'

export default function EditPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <div>
      <h1 className="text-xl font-bold text-gray-900 mb-6">記事を編集</h1>
      <PostEditor initialPost={post} />
    </div>
  )
}
