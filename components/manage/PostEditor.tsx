'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { marked } from 'marked'
import type { BlogPost, BlogCategory } from '@/types/blog'
import dynamic from 'next/dynamic'
import AmebaRewriter from './AmebaRewriter'
import BlogGenerator from './BlogGenerator'

const RichEditor = dynamic(() => import('./RichEditor'), { ssr: false })

const CATEGORIES: { value: BlogCategory; label: string }[] = [
  { value: '豊胸手術', label: '가슴 수술' },
  { value: '目元整形', label: '눈성형' },
  { value: '肌・リフティング', label: '피부·리프팅' },
  { value: 'クリニック情報', label: '클리닉 정보' },
]

interface PostEditorProps {
  initialPost?: Partial<BlogPost>
}

function mdToHtml(content: string): string {
  if (!content) return ''
  // 이미 HTML이면 그대로 반환 (기존 마크다운 포스트만 변환)
  if (content.trimStart().startsWith('<')) return content
  return marked.parse(content) as string
}

export default function ManagePostEditor({ initialPost }: PostEditorProps) {
  const router = useRouter()
  const isEdit = !!initialPost?.slug

  const [title, setTitle] = useState(initialPost?.title ?? '')
  const [description, setDescription] = useState(initialPost?.description ?? '')
  const [content, setContent] = useState<string>(() => mdToHtml(initialPost?.content ?? ''))
  const [category, setCategory] = useState<BlogCategory>(initialPost?.category ?? '豊胸手術')
  const [tags, setTags] = useState(initialPost?.tags?.join(', ') ?? '')
  const [keywords, setKeywords] = useState(initialPost?.seoKeywords?.join(', ') ?? '')
  const [thumbnail, setThumbnail] = useState(initialPost?.thumbnail ?? '')
  const [isPublished, setIsPublished] = useState(initialPost?.isPublished ?? false)
  const [sourceType, setSourceType] = useState<BlogPost['sourceType']>(
    initialPost?.sourceType ?? 'original'
  )

  const [tab, setTab] = useState<'editor' | 'preview' | 'seo' | 'ameba' | 'generator'>('editor')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const generateSlug = useCallback(() => {
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, '')
    const ascii = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .slice(0, 30)
    return ascii ? `${ascii}-${date}` : `post-${date}`
  }, [title])

  function applyResult(result: { title: string; content: string; description: string }, type: BlogPost['sourceType']) {
    setTitle(result.title)
    // 결과가 HTML이면 그대로, 마크다운이면 변환
    setContent(result.content.trimStart().startsWith('<') ? result.content : mdToHtml(result.content))
    setDescription(result.description)
    setSourceType(type)
    setTab('editor')
  }

  async function handleSave(publish?: boolean) {
    if (!title.trim()) {
      setError('제목을 입력하세요')
      return
    }
    setSaving(true)
    setError('')

    const slug = initialPost?.slug ?? generateSlug()
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
      readingTime: Math.max(1, Math.ceil(content.replace(/<[^>]+>/g, '').replace(/\s+/g, '').length / 500)),
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
      router.push('/blog/manage')
      router.refresh()
    } else {
      setError('저장에 실패했습니다. 다시 시도해주세요.')
      setSaving(false)
    }
  }

  const titleLen = title.length
  const descLen = description.length

  const TAB_CONFIG = [
    { key: 'editor', label: '✏️ 편집' },
    { key: 'preview', label: '👁 미리보기' },
    { key: 'seo', label: '🔍 SEO 확인' },
    { key: 'ameba', label: '🔄 아메바리 라이트' },
    { key: 'generator', label: '✨ 블로그 생성기' },
  ] as const

  return (
    <div className="max-w-6xl mx-auto">
      {/* 탭 */}
      <div className="flex border-b border-gray-200 mb-6 gap-1 overflow-x-auto">
        {TAB_CONFIG.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-4 py-2.5 text-sm font-medium rounded-t-lg whitespace-nowrap transition-colors ${
              tab === key
                ? 'bg-white border border-b-white border-gray-200 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 편집 탭 */}
      {tab === 'editor' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 메인 에디터 */}
          <div className="lg:col-span-2 space-y-4">
            {/* 제목 */}
            <div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border-0 border-b-2 border-gray-200 focus:border-blue-500 px-1 py-3 text-2xl font-bold text-gray-900 placeholder-gray-300 focus:outline-none transition-colors"
                placeholder="기사 제목을 입력하세요"
              />
            </div>

            {/* 리치 에디터 */}
            <RichEditor
              content={content}
              onChange={setContent}
              placeholder="내용을 입력하세요. 툴바에서 서식을 선택하거나 마크다운 단축키(** = 굵게, # = 제목)를 사용할 수 있습니다."
            />
          </div>

          {/* 사이드바 */}
          <div className="space-y-4">
            {/* 공개 설정 */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3">
              <h3 className="font-medium text-gray-900 text-sm">공개 설정</h3>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isPublished}
                  onChange={(e) => setIsPublished(e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm text-gray-700">공개하다</span>
              </label>
              <div className="flex gap-2 pt-1">
                <button
                  onClick={() => handleSave(false)}
                  disabled={saving}
                  className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm py-2 rounded-lg transition-colors disabled:opacity-50"
                >
                  초안 저장
                </button>
                <button
                  onClick={() => handleSave(true)}
                  disabled={saving}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-lg transition-colors disabled:opacity-50"
                >
                  {saving ? '저장 중...' : '공개하다'}
                </button>
              </div>
              {error && <p className="text-xs text-red-600">{error}</p>}
            </div>

            {/* 카테고리 태그 */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3">
              <h3 className="font-medium text-gray-900 text-sm">카테고리 태그</h3>
              <div>
                <label className="block text-xs text-gray-500 mb-1">카테고리</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as BlogCategory)}
                  className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">태그 (쉼표 구분)</label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="풍흉 수술, 한국 성형"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">출처 유형</label>
                <select
                  value={sourceType}
                  onChange={(e) => setSourceType(e.target.value as BlogPost['sourceType'])}
                  className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="original">오리지널</option>
                  <option value="ameba-rewrite">아메바 리라이트</option>
                  <option value="blog-generated">AI 블로그 생성</option>
                </select>
              </div>
            </div>

            {/* 썸네일 */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3">
              <h3 className="font-medium text-gray-900 text-sm">썸네일</h3>
              <input
                type="text"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="/images/blog/xxxx.jpg"
              />
              {thumbnail && (
                <img src={thumbnail} alt="썸네일 미리보기" className="w-full rounded-lg object-cover aspect-video" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
              )}
            </div>
          </div>
        </div>
      )}

      {/* 미리보기 탭 */}
      {tab === 'preview' && (
        <div className="bg-white rounded-xl border border-gray-200 p-8 max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{title || '(제목 미입력)'}</h1>
          <p className="text-sm text-gray-400 mb-6">미리보기</p>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      )}

      {/* SEO 탭 */}
      {tab === 'seo' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-2xl mx-auto space-y-6">
          <h2 className="font-semibold text-gray-900">SEO 미리보기</h2>

          {/* Google SERP 목업 */}
          <div className="border border-gray-100 rounded-xl p-5 bg-white shadow-sm">
            <p className="text-xs text-gray-400 mb-3">Google 검색 결과 이미지</p>
            <p className="text-blue-700 text-lg font-medium hover:underline cursor-pointer line-clamp-1">
              {title || '제목을 입력하세요'} | SM美容外科医院
            </p>
            <p className="text-green-700 text-xs mt-0.5 mb-1">
              https://www.smpsjp.com/blog/{initialPost?.slug ?? '(slug)'}
            </p>
            <p className="text-gray-600 text-sm line-clamp-2">
              {description || '설명문을 입력하세요...'}
            </p>
          </div>

          {/* 글자 수 카운터 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-sm font-medium text-gray-700">제목</label>
                <span className={`text-xs ${titleLen > 60 ? 'text-red-500' : 'text-gray-400'}`}>
                  {titleLen}/60자
                </span>
              </div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {titleLen > 60 && <p className="text-xs text-red-500 mt-1">60자 이내를 권장합니다</p>}
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-sm font-medium text-gray-700">메타 설명문</label>
                <span className={`text-xs ${descLen > 120 ? 'text-red-500' : 'text-gray-400'}`}>
                  {descLen}/120자
                </span>
              </div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              {descLen > 120 && <p className="text-xs text-red-500 mt-1">120자 이내를 권장합니다</p>}
            </div>
          </div>

          {/* SEO 키워드 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              SEO 키워드 (쉼표 구분)
            </label>
            <input
              type="text"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="하이브리드 풍흉, 한국 풍흉, SM미용외과"
            />
          </div>
        </div>
      )}

      {/* 아메바 리라이터 탭 */}
      {tab === 'ameba' && (
        <AmebaRewriter
          onApply={(r) => applyResult(r, 'ameba-rewrite')}
        />
      )}

      {/* 블로그 생성기 탭 */}
      {tab === 'generator' && (
        <BlogGenerator
          onApply={(r) => applyResult(r, 'blog-generated')}
        />
      )}
    </div>
  )
}
