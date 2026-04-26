import ManagePostEditor from '@/components/manage/PostEditor'

export default function NewPostPage() {
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-900 mb-6">신규 기사 작성</h1>
      <ManagePostEditor />
    </div>
  )
}
