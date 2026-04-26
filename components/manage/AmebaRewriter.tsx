'use client'

import { useState } from 'react'

interface RewriteResult {
  title: string
  content: string
  description: string
}

interface AmebaRewriterProps {
  onApply: (result: RewriteResult) => void
}

export default function AmebaRewriter({ onApply }: AmebaRewriterProps) {
  const [input, setInput] = useState('')
  const [originalTitle, setOriginalTitle] = useState('')
  const [result, setResult] = useState<RewriteResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleRewrite() {
    if (!input.trim()) {
      setError('아메바 원본 본문을 입력해주세요')
      return
    }
    setLoading(true)
    setError('')
    setResult(null)

    const res = await fetch('/api/ai-rewrite', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: input, title: originalTitle }),
    })

    if (res.ok) {
      const data = await res.json()
      setResult(data)
    } else {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? '리라이트에 실패했습니다. API 키를 확인해주세요.')
    }
    setLoading(false)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* 입력 */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">아메바 원문</h3>
          <p className="text-xs text-gray-500">
            아메바 블로그에서 기사 본문을 복사·붙여넣기 하세요. AI가 중복 콘텐츠가 되지 않도록 70% 이상 다시 씁니다.
          </p>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">원본 제목 (선택)</label>
          <input
            type="text"
            value={originalTitle}
            onChange={(e) => setOriginalTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="아메바 기사 제목"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">본문</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={16}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y font-mono"
            placeholder="아메바 기사 본문을 여기에 붙여넣으세요..."
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          onClick={handleRewrite}
          disabled={loading || !input.trim()}
          className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-medium py-2.5 rounded-lg transition-colors"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" className="opacity-75" />
              </svg>
              AI 리라이트 중...（30초 정도 걸립니다）
            </span>
          ) : (
            '🔄 AI로 리라이트 실행'
          )}
        </button>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-700 space-y-1">
          <p className="font-medium">✅ 중복 콘텐츠 회피 포인트</p>
          <ul className="list-disc ml-4 space-y-0.5">
            <li>AI가 단락 구성·어휘·표현을 70% 이상 재작성</li>
            <li>아메바 발행 후 1~2주 뒤 공개 권장</li>
            <li>이 사이트의 URL이 canonical이 되어 Google이 원본으로 인식</li>
          </ul>
        </div>
      </div>

      {/* 결과 */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
        <h3 className="font-semibold text-gray-900">리라이트 결과</h3>

        {!result && !loading && (
          <div className="flex items-center justify-center h-64 text-gray-300 text-center">
            <div>
              <div className="text-4xl mb-3">✦</div>
              <p className="text-sm">왼쪽에 원문을 입력하고<br />「AI로 리라이트 실행」을 누르세요</p>
            </div>
          </div>
        )}

        {loading && (
          <div className="flex items-center justify-center h-64 text-gray-400">
            <div className="text-center">
              <div className="text-3xl mb-3 animate-pulse">✦</div>
              <p className="text-sm">Claude AI가 리라이트 중...</p>
            </div>
          </div>
        )}

        {result && (
          <>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">새 제목</label>
              <div className="bg-gray-50 rounded-lg px-3 py-2 text-sm font-medium text-gray-900 border border-gray-200">
                {result.title}
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">메타 설명문</label>
              <div className="bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 border border-gray-200">
                {result.description}
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">본문 (HTML)</label>
              <textarea
                value={result.content}
                onChange={(e) => setResult({ ...result, content: e.target.value })}
                rows={12}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
              />
            </div>
            <button
              onClick={() => onApply(result)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors"
            >
              이 리라이트 결과를 에디터에 적용 →
            </button>
          </>
        )}
      </div>
    </div>
  )
}
