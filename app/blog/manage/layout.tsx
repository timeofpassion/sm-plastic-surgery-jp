import Link from 'next/link'

export default function ManageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-6">
          <Link href="/blog/manage" className="text-base font-bold text-gray-900">
            SM 미용 수술 — 관리 패널
          </Link>
          <nav className="hidden md:flex items-center gap-1 text-sm">
            <Link
              href="/blog/manage"
              className="px-3 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              기사 목록
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            사이트 보기 →
          </Link>
          <Link
            href="/blog/manage/new"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            + 새로 만들기
          </Link>
        </div>
      </header>
      <main className="p-6">{children}</main>
    </div>
  )
}
