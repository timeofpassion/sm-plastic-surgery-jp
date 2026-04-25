import PostEditor from '@/components/admin/PostEditor'

export default function NewPostPage() {
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-900 mb-6">新規記事作成</h1>
      <PostEditor />
    </div>
  )
}
