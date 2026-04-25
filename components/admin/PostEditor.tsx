'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { marked } from 'marked'
import type { BlogPost, BlogCategory } from '@/types/blog'
import AmebaRewriter from './AmebaRewriter'

const CATEGORIES: BlogCategory[] = ['豊胸手術', '目元整形', '肌・リフティング', 'クリニック情報']

interface PostEditorProps {
  initialPost?: Partial<BlogPost>
}

export default function PostEditor({ initialPost }: PostEditorProps) {
  const router = useRouter()
  const isEdit = !!initialPost?.slug

  const [title, setTitle] = useState(initialPost?.title ?? '')
  const [description, setDescription] = useState(initialPost?.description ?? '')
  const [content, setContent] = useState(initialPost?.content ?? '')
  const [category, setCategory] = useState<BlogCategory>(initialPost?.category ?? '豊胸手術')
  const [tags, setTags] = useState(initialPost?.tags?.join(', ') ?? '')
  const [keywords, setKeywords] = useState(initialPost?.seoKeywords?.join(', ') ?? '')
  const [thumbnail, setThumbnail] = useState(initialPost?.thumbnail ?? '')
  const [isPublished, setIsPublished] = useState(initialPost?.isPublished ?? false)
  const [sourceType, setSourceType] = useState<'original' | 'ameba-rewrite'>(
    initialPost?.sourceType ?? 'original'
  )

  const [preview, setPreview] = useState('')
  const [tab, setTab] = useState<'editor' | 'preview' | 'seo' | 'ameba'>('editor')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setPreview(marked.parse(content) as string)
  }, [content])

  function applyAmebaRewrite(rewritten: { title: string; content: string; description: string }) {
    setTitle(rewritten.title)
    setContent(rewritten.content)
    setDescription(rewritten.description)
    setSourceType('ameba-rewrite')
    setTab('editor')
  }

  const generateSlugFromTitle = useCallback(() => {
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, '')
    const ascii = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .slice(0, 30)
    return ascii ? `${ascii}-${date}` : `post-${date}`
  }, [title])

  async function handleSave(publish?: boolean) {
    if (!title.trim()) {
      setError('タイトルを入力してください')
      return
    }
    setSaving(true)
    setError('')

    const slug = initialPost?.slug ?? generateSlugFromTitle()
    const now = new Date().toISOString()

    const post: BlogPost = {
      id: slug,
      slug,
      title: title.trim(),
      description: description.trim(),
      content,
      category,
      tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
      seoKeywords: keywords.split(',').map((k) => k.trim()).filter(Boolean),
      thumbnail: thumbnail.trim() || undefined,
      isPublished: publish ?? isPublished,
      publishedAt: initialPost?.publishedAt ?? now,
      updatedAt: now,
      readingTime: Math.max(1, Math.ceil(content.replace(/\s+/g, '').length / 500)),
      sourceType,
    }

    const method = isEdit ? 'PUT' : 'POST'
    const url = isEdit ? `/api/blog/${slug}` : '/api/blog'

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    })

    if (res.ok) {
      router.push('/admin')
      router.refresh()
    } else {
      setError('保存に失敗しました。もう一度お試しください。')
      setSaving(false)
    }
  }

  const titleLen = title.length
  const descLen = description.length

  return (
    <div className="max-w-5xl mx-auto">
      {/* タブ */}
      <div className="flex border-b border-gray-200 mb-6 gap-1">
        {(['editor', 'preview', 'seo', 'ameba'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2.5 text-sm font-medium rounded-t-lg transition-colors ${
              tab === t
                ? 'bg-white border border-b-white border-gray-200 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {t === 'editor' && '✏️ 編集'}
            {t === 'preview' && '👁 プレビュー'}
            {t === 'seo' && '🔍 SEO確認'}
            {t === 'ameba' && '🔄 アメバリライト'}
          </button>
        ))}
      </div>

      {tab === 'editor' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* メインエディタ */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">タイトル *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="記事タイトルを入力"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">本文 (Markdown)</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={24}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                placeholder="## 見出し&#10;&#10;本文をMarkdown形式で入力してください..."
              />
              <p className="text-xs text-gray-400 mt-1">
                読了時間: 約{Math.max(1, Math.ceil(content.replace(/\s+/g, '').length / 500))}分
              </p>
            </div>
          </div>

          {/* サイドバー */}
          <div className="space-y-4">
            {/* 公開設定 */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3">
              <h3 className="font-medium text-gray-900 text-sm">公開設定</h3>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isPublished}
                  onChange={(e) => setIsPublished(e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm text-gray-700">公開する</span>
              </label>
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => handleSave(false)}
                  disabled={saving}
                  className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm py-2 rounded-lg transition-colors disabled:opacity-50"
                >
                  下書き保存
                </button>
                <button
                  onClick={() => handleSave(true)}
                  disabled={saving}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-lg transition-colors disabled:opacity-50"
                >
                  {saving ? '保存中...' : '公開する'}
                </button>
              </div>
              {error && <p className="text-xs text-red-600">{error}</p>}
            </div>

            {/* カテゴリ・タグ */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3">
              <h3 className="font-medium text-gray-900 text-sm">カテゴリ・タグ</h3>
              <div>
                <label className="block text-xs text-gray-500 mb-1">カテゴリ</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as BlogCategory)}
                  className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">タグ (カンマ区切り)</label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="豊胸手術, 韓国整形"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">出典タイプ</label>
                <select
                  value={sourceType}
                  onChange={(e) => setSourceType(e.target.value as 'original' | 'ameba-rewrite')}
                  className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="original">オリジナル</option>
                  <option value="ameba-rewrite">アメバリライト</option>
                </select>
              </div>
            </div>

            {/* サムネイル */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3">
              <h3 className="font-medium text-gray-900 text-sm">サムネイル</h3>
              <input
                type="text"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="/images/blog/xxxx.jpg"
              />
            </div>
          </div>
        </div>
      )}

      {tab === 'preview' && (
        <div className="bg-white rounded-xl border border-gray-200 p-8 max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{title || '(タイトル未入力)'}</h1>
          <p className="text-sm text-gray-400 mb-6">プレビュー</p>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: preview }}
          />
        </div>
      )}

      {tab === 'seo' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-2xl mx-auto space-y-6">
          <h2 className="font-semibold text-gray-900">SEOプレビュー</h2>

          {/* Google SERP モック */}
          <div className="border border-gray-100 rounded-xl p-5 bg-white shadow-sm">
            <p className="text-xs text-gray-400 mb-3">Google 検索結果イメージ</p>
            <p className="text-blue-700 text-lg font-medium hover:underline cursor-pointer line-clamp-1">
              {title || 'タイトルを入力してください'} | SM美容外科医院
            </p>
            <p className="text-green-700 text-xs mt-0.5 mb-1">
              https://www.smpsjp.com/blog/{initialPost?.slug ?? '(slug)'}
            </p>
            <p className="text-gray-600 text-sm line-clamp-2">
              {description || '説明文を入力してください...'}
            </p>
          </div>

          {/* 文字数カウンター */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-sm font-medium text-gray-700">タイトル</label>
                <span className={`text-xs ${titleLen > 60 ? 'text-red-500' : 'text-gray-400'}`}>
                  {titleLen}/60文字
                </span>
              </div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {titleLen > 60 && (
                <p className="text-xs text-red-500 mt-1">60文字以内を推奨します</p>
              )}
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-sm font-medium text-gray-700">メタ説明文</label>
                <span className={`text-xs ${descLen > 120 ? 'text-red-500' : 'text-gray-400'}`}>
                  {descLen}/120文字
                </span>
              </div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              {descLen > 120 && (
                <p className="text-xs text-red-500 mt-1">120文字以内を推奨します</p>
              )}
            </div>
          </div>

          {/* SEOキーワード */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              SEOキーワード (カンマ区切り)
            </label>
            <input
              type="text"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ハイブリッド豊胸, 韓国 豊胸, SM美容外科"
            />
          </div>
        </div>
      )}

      {tab === 'ameba' && (
        <AmebaRewriter onApply={applyAmebaRewrite} />
      )}
    </div>
  )
}
