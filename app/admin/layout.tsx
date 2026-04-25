export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-lg font-bold text-gray-900">SM美容外科 — 管理パネル</span>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <a href="/admin" className="text-gray-600 hover:text-gray-900">
            記事一覧
          </a>
          <a href="/admin/new" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            + 新規作成
          </a>
          <a href="/" target="_blank" className="text-gray-400 hover:text-gray-600">
            サイトを見る →
          </a>
        </nav>
      </header>
      <main className="p-6">{children}</main>
    </div>
  )
}
