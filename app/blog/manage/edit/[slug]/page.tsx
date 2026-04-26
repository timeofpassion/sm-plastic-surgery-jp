import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/blog'
import ManagePostEditor from '@/components/manage/PostEditor'

export default function EditPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <div>
      <h1 className="text-xl font-bold text-gray-900 mb-6">기사 편집</h1>
      <ManagePostEditor initialPost={post} />
    </div>
  )
}
