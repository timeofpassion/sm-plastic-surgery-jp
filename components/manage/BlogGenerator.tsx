'use client'

import { useState } from 'react'

interface GenerateResult {
  title: string
  content: string
  description: string
}

interface BlogGeneratorProps {
  onApply: (result: GenerateResult) => void
}

export default function BlogGenerator({ onApply }: BlogGeneratorProps) {
  const [mode, setMode] = useState<'reference' | 'topic'>('reference')
  const [reference, setReference] = useState('')
  const [topic, setTopic] = useState('')
  const [lang, setLang] = useState<'ja' | 'ko'>('ja')
  const [result, setResult] = useState<GenerateResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleGenerate() {
    if (mode === 'reference' && !reference.trim()) {
      setError('참고 원고를 입력하세요')
      return
    }
    if (mode === 'topic' && !topic.trim()) {
      setError('주제를 입력하세요')
      return
    }
    setLoading(true)
    setError('')
    setResult(null)

    const res = await fetch('/api/ai-generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        reference: mode === 'reference' ? reference : undefined,
        topic: mode === 'topic' ? topic : undefined,
        lang,
      }),
    })

    if (res.ok) {
      const data = await res.json()
      setResult(data)
    } else {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? '생성에 실패했습니다. API 키를 확인하세요.')
    }
    setLoading(false)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* 입력 패널 */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">블로그 생성기</h3>
          <p className="text-xs text-gray-500">
            참고 원고나 주제를 입력하면 에스엠성형외과 스타일의 새 블로그 포스트를 AI가 창작합니다.
          </p>
        </div>

        {/* 모드 선택 */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setMode('reference')}
            className={`flex-1 text-sm py-2 rounded-lg border transition-colors ${
              mode === 'reference'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400'
            }`}
          >
            참고 원고로 생성
          </button>
          <button
            type="button"
            onClick={() => setMode('topic')}
            className={`flex-1 text-sm py-2 rounded-lg border transition-colors ${
              mode === 'topic'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400'
            }`}
          >
            주제로 생성
          </button>
        </div>

        {/* 출력 언어 */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">출력 언어</label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setLang('ja')}
              className={`flex-1 text-sm py-1.5 rounded-lg border transition-colors ${
                lang === 'ja'
                  ? 'bg-red-50 text-red-700 border-red-300'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-red-300'
              }`}
            >
              🇯🇵 일본어
            </button>
            <button
              type="button"
              onClick={() => setLang('ko')}
              className={`flex-1 text-sm py-1.5 rounded-lg border transition-colors ${
                lang === 'ko'
                  ? 'bg-blue-50 text-blue-700 border-blue-300'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-blue-300'
              }`}
            >
              🇰🇷 한국어
            </button>
          </div>
        </div>

        {/* 입력 영역 */}
        {mode === 'reference' ? (
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              참고 원고 <span className="text-gray-400">(어떤 출처든 붙여넣기)</span>
            </label>
            <textarea
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              rows={14}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
              placeholder="기존 블로그 글, 논문, 설명자료 등 아무 글이나 붙여넣으세요.
AI가 에스엠성형외과 스타일로 완전히 새로운 글을 만들어드립니다."
            />
          </div>
        ) : (
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">주제</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="예: 가슴 재수술을 결심하게 되는 이유와 에스엠의 접근법"
            />
            <p className="text-xs text-gray-400 mt-1">주제만 입력하면 AI가 전체 글을 작성합니다</p>
          </div>
        )}

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          onClick={handleGenerate}
          disabled={loading || (mode === 'reference' ? !reference.trim() : !topic.trim())}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium py-2.5 rounded-lg transition-colors"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" className="opacity-75" />
              </svg>
              AI 블로그 생성 중... (약 30초)
            </span>
          ) : (
            '✨ AI 블로그 생성'
          )}
        </button>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs text-blue-700 space-y-1">
          <p className="font-medium">블로그 생성기 vs 아메바 리라이터</p>
          <ul className="list-disc ml-4 space-y-0.5 text-blue-600">
            <li><strong>생성기</strong> — 참고 원고를 영감으로 삼아 완전히 새로운 글 창작</li>
            <li><strong>리라이터</strong> — 아메바 글을 동일 의미로 표현만 바꿔 중복 회피</li>
          </ul>
        </div>
      </div>

      {/* 결과 패널 */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
        <h3 className="font-semibold text-gray-900">생성 결과</h3>

        {!result && !loading && (
          <div className="flex items-center justify-center h-64 text-gray-300 text-center">
            <div>
              <div className="text-4xl mb-3">✨</div>
              <p className="text-sm">왼쪽에서 원고나 주제를 입력하고<br />「AI 블로그 생성」을 누르세요</p>
            </div>
          </div>
        )}

        {loading && (
          <div className="flex items-center justify-center h-64 text-gray-400">
            <div className="text-center">
              <div className="text-3xl mb-3 animate-pulse">✨</div>
              <p className="text-sm">Claude AI가 블로그를 작성하고 있습니다...</p>
            </div>
          </div>
        )}

        {result && (
          <>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">제목</label>
              <div
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => setResult({ ...result, title: e.currentTarget.textContent ?? '' })}
                className="bg-gray-50 rounded-lg px-3 py-2 text-sm font-medium text-gray-900 border border-gray-200 min-h-[36px] focus:outline-none focus:ring-1 focus:ring-blue-400"
              >
                {result.title}
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">메타 설명문</label>
              <div
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => setResult({ ...result, description: e.currentTarget.textContent ?? '' })}
                className="bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 border border-gray-200 min-h-[48px] focus:outline-none focus:ring-1 focus:ring-blue-400"
              >
                {result.description}
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">본문 미리보기</label>
              <div
                className="bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 border border-gray-200 max-h-48 overflow-y-auto blog-preview"
                dangerouslySetInnerHTML={{ __html: result.content }}
              />
            </div>
            <button
              onClick={() => onApply(result)}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg transition-colors"
            >
              이 내용을 에디터에 적용 →
            </button>
          </>
        )}
      </div>

      <style>{`
        .blog-preview h2 { font-size: 1rem; font-weight: 700; margin: 0.8em 0 0.3em; }
        .blog-preview h3 { font-size: 0.9rem; font-weight: 700; margin: 0.6em 0 0.2em; }
        .blog-preview p { margin: 0.3em 0; }
        .blog-preview ul { list-style: disc; padding-left: 1.2em; }
        .blog-preview li { margin: 0.15em 0; }
      `}</style>
    </div>
  )
}
