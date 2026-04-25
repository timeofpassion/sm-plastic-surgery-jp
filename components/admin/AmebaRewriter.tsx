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
      setError('アメブロの本文を入力してください')
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
      setError(data.error ?? 'リライトに失敗しました。APIキーを確認してください。')
    }
    setLoading(false)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* 入力側 */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">アメブロ原文</h3>
          <p className="text-xs text-gray-500">
            アメブロから記事本文をコピー＆ペーストしてください。AIが重複コンテンツにならないよう70%以上書き換えます。
          </p>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">元のタイトル (任意)</label>
          <input
            type="text"
            value={originalTitle}
            onChange={(e) => setOriginalTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="アメブロの記事タイトル"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">本文</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={16}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y font-mono"
            placeholder="アメブロの記事本文をここに貼り付けてください..."
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
              AI リライト中...（30秒程度かかります）
            </span>
          ) : (
            '🔄 AI でリライト実行'
          )}
        </button>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-700 space-y-1">
          <p className="font-medium">✅ 重複コンテンツ回避のポイント</p>
          <ul className="list-disc ml-4 space-y-0.5">
            <li>AIが段落構成・語彙・表現を70%以上書き換え</li>
            <li>アメブロ発行から1〜2週間後に公開推奨</li>
            <li>このサイトのURLがcanonicalとなりGoogleに原本として認識される</li>
          </ul>
        </div>
      </div>

      {/* 結果側 */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
        <h3 className="font-semibold text-gray-900">リライト結果</h3>

        {!result && !loading && (
          <div className="flex items-center justify-center h-64 text-gray-300 text-center">
            <div>
              <div className="text-4xl mb-3">✦</div>
              <p className="text-sm">左側に原文を入力して<br />「AI でリライト実行」を押してください</p>
            </div>
          </div>
        )}

        {loading && (
          <div className="flex items-center justify-center h-64 text-gray-400">
            <div className="text-center">
              <div className="text-3xl mb-3 animate-pulse">✦</div>
              <p className="text-sm">Claude AIがリライト中...</p>
            </div>
          </div>
        )}

        {result && (
          <>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">新しいタイトル</label>
              <div className="bg-gray-50 rounded-lg px-3 py-2 text-sm font-medium text-gray-900 border border-gray-200">
                {result.title}
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">メタ説明文</label>
              <div className="bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 border border-gray-200">
                {result.description}
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">本文 (Markdown)</label>
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
              このリライト結果をエディタに適用する →
            </button>
          </>
        )}
      </div>
    </div>
  )
}
