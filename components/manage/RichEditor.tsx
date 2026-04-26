'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import Placeholder from '@tiptap/extension-placeholder'
import { TextStyle } from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import Highlight from '@tiptap/extension-highlight'
import { useCallback, useState } from 'react'

interface RichEditorProps {
  content: string
  onChange: (html: string) => void
  placeholder?: string
}

type ToolbarButtonProps = {
  onClick: () => void
  active?: boolean
  title: string
  children: React.ReactNode
  disabled?: boolean
}

function Btn({ onClick, active, title, children, disabled }: ToolbarButtonProps) {
  return (
    <button
      type="button"
      onMouseDown={(e) => {
        e.preventDefault()
        onClick()
      }}
      disabled={disabled}
      title={title}
      className={`w-8 h-8 flex items-center justify-center rounded text-sm transition-colors disabled:opacity-30 ${
        active
          ? 'bg-blue-100 text-blue-700'
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      {children}
    </button>
  )
}

function Divider() {
  return <span className="w-px h-5 bg-gray-200 mx-1" />
}

export default function RichEditor({ content, onChange, placeholder }: RichEditorProps) {
  const [linkUrl, setLinkUrl] = useState('')
  const [showLinkInput, setShowLinkInput] = useState(false)
  const [imgUrl, setImgUrl] = useState('')
  const [showImgInput, setShowImgInput] = useState(false)

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] } }),
      Underline,
      Link.configure({ openOnClick: false, HTMLAttributes: { class: 'text-blue-600 underline' } }),
      Image.configure({ HTMLAttributes: { class: 'max-w-full rounded-lg my-4' } }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Placeholder.configure({ placeholder: placeholder ?? '내용을 입력하세요...' }),
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
    ],
    content,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class:
          'min-h-[480px] p-5 focus:outline-none prose prose-sm max-w-none prose-headings:font-bold prose-a:text-blue-600',
      },
    },
  })

  const applyLink = useCallback(() => {
    if (!editor) return
    if (!linkUrl) {
      editor.chain().focus().unsetLink().run()
    } else {
      editor.chain().focus().setLink({ href: linkUrl }).run()
    }
    setLinkUrl('')
    setShowLinkInput(false)
  }, [editor, linkUrl])

  const insertImage = useCallback(() => {
    if (!editor || !imgUrl) return
    editor.chain().focus().setImage({ src: imgUrl }).run()
    setImgUrl('')
    setShowImgInput(false)
  }, [editor, imgUrl])

  if (!editor) return null

  return (
    <div className="border border-gray-300 rounded-xl overflow-hidden bg-white">
      {/* 툴바 */}
      <div className="border-b border-gray-200 bg-gray-50 px-3 py-2 flex flex-wrap items-center gap-0.5 sticky top-[57px] z-10">
        {/* 단락 스타일 */}
        <select
          value={
            editor.isActive('heading', { level: 2 })
              ? 'h2'
              : editor.isActive('heading', { level: 3 })
                ? 'h3'
                : 'p'
          }
          onChange={(e) => {
            const val = e.target.value
            if (val === 'h2') editor.chain().focus().toggleHeading({ level: 2 }).run()
            else if (val === 'h3') editor.chain().focus().toggleHeading({ level: 3 }).run()
            else editor.chain().focus().setParagraph().run()
          }}
          className="h-8 px-2 text-sm border border-gray-200 rounded bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400"
        >
          <option value="p">본문</option>
          <option value="h2">제목 2</option>
          <option value="h3">제목 3</option>
        </select>

        <Divider />

        {/* 텍스트 서식 */}
        <Btn
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive('bold')}
          title="굵게 (Ctrl+B)"
        >
          <strong>B</strong>
        </Btn>
        <Btn
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive('italic')}
          title="기울임 (Ctrl+I)"
        >
          <em>I</em>
        </Btn>
        <Btn
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          active={editor.isActive('underline')}
          title="밑줄 (Ctrl+U)"
        >
          <span className="underline">U</span>
        </Btn>
        <Btn
          onClick={() => editor.chain().focus().toggleStrike().run()}
          active={editor.isActive('strike')}
          title="취소선"
        >
          <span className="line-through">S</span>
        </Btn>

        <Divider />

        {/* 하이라이트 */}
        <Btn
          onClick={() => editor.chain().focus().toggleHighlight({ color: '#FEF08A' }).run()}
          active={editor.isActive('highlight', { color: '#FEF08A' })}
          title="노란 형광펜"
        >
          <span className="text-xs font-medium" style={{ background: '#FEF08A', padding: '1px 3px', borderRadius: 2 }}>A</span>
        </Btn>

        <Divider />

        {/* 정렬 */}
        <Btn
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          active={editor.isActive({ textAlign: 'left' })}
          title="왼쪽 정렬"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="15" y2="12"/><line x1="3" y1="18" x2="18" y2="18"/></svg>
        </Btn>
        <Btn
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          active={editor.isActive({ textAlign: 'center' })}
          title="가운데 정렬"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
        </Btn>
        <Btn
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          active={editor.isActive({ textAlign: 'right' })}
          title="오른쪽 정렬"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="9" y1="12" x2="21" y2="12"/><line x1="6" y1="18" x2="21" y2="18"/></svg>
        </Btn>

        <Divider />

        {/* 목록 */}
        <Btn
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive('bulletList')}
          title="불릿 목록"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><circle cx="4" cy="6" r="1.5" fill="currentColor"/><circle cx="4" cy="12" r="1.5" fill="currentColor"/><circle cx="4" cy="18" r="1.5" fill="currentColor"/></svg>
        </Btn>
        <Btn
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive('orderedList')}
          title="번호 목록"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><text x="2" y="8" fontSize="7" fill="currentColor" stroke="none">1.</text><text x="2" y="14" fontSize="7" fill="currentColor" stroke="none">2.</text><text x="2" y="20" fontSize="7" fill="currentColor" stroke="none">3.</text></svg>
        </Btn>
        <Btn
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          active={editor.isActive('blockquote')}
          title="인용"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
        </Btn>

        <Divider />

        {/* 링크 */}
        <Btn
          onClick={() => {
            setShowImgInput(false)
            setLinkUrl(editor.getAttributes('link').href ?? '')
            setShowLinkInput((v) => !v)
          }}
          active={editor.isActive('link') || showLinkInput}
          title="링크 삽입"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        </Btn>

        {/* 이미지 */}
        <Btn
          onClick={() => {
            setShowLinkInput(false)
            setShowImgInput((v) => !v)
          }}
          active={showImgInput}
          title="이미지 삽입"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </Btn>

        <Divider />

        {/* 구분선 */}
        <Btn
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          title="구분선"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </Btn>

        <Divider />

        {/* 실행 취소 / 다시 실행 */}
        <Btn
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          title="실행 취소 (Ctrl+Z)"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/></svg>
        </Btn>
        <Btn
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          title="다시 실행 (Ctrl+Y)"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 14 20 9 15 4"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/></svg>
        </Btn>
      </div>

      {/* 링크 입력 패널 */}
      {showLinkInput && (
        <div className="border-b border-gray-200 bg-blue-50 px-4 py-2 flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500 shrink-0"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          <input
            type="url"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && applyLink()}
            placeholder="https://..."
            className="flex-1 text-sm border border-gray-200 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400"
            autoFocus
          />
          <button
            type="button"
            onClick={applyLink}
            className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
          >
            적용
          </button>
          {editor.isActive('link') && (
            <button
              type="button"
              onClick={() => {
                editor.chain().focus().unsetLink().run()
                setShowLinkInput(false)
              }}
              className="text-sm text-red-500 hover:text-red-700"
            >
              제거
            </button>
          )}
          <button
            type="button"
            onClick={() => setShowLinkInput(false)}
            className="text-gray-400 hover:text-gray-600 ml-1"
          >
            ✕
          </button>
        </div>
      )}

      {/* 이미지 URL 입력 패널 */}
      {showImgInput && (
        <div className="border-b border-gray-200 bg-green-50 px-4 py-2 flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600 shrink-0"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          <input
            type="url"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && insertImage()}
            placeholder="이미지 URL (https://...)"
            className="flex-1 text-sm border border-gray-200 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-green-400"
            autoFocus
          />
          <button
            type="button"
            onClick={insertImage}
            disabled={!imgUrl}
            className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors disabled:opacity-50"
          >
            삽입
          </button>
          <button
            type="button"
            onClick={() => setShowImgInput(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
      )}

      {/* 에디터 본문 */}
      <EditorContent editor={editor} />

      {/* 하단 글자 수 */}
      <div className="border-t border-gray-100 px-4 py-1.5 flex justify-end text-xs text-gray-400">
        {editor.storage.characterCount?.characters() ?? editor.getText().length}자
      </div>

      <style>{`
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #9ca3af;
          pointer-events: none;
          height: 0;
        }
        .ProseMirror:focus { outline: none; }
        .ProseMirror h2 { font-size: 1.25rem; font-weight: 700; margin: 1.2em 0 0.5em; }
        .ProseMirror h3 { font-size: 1.05rem; font-weight: 700; margin: 1em 0 0.4em; }
        .ProseMirror p { margin: 0.5em 0; line-height: 1.75; }
        .ProseMirror ul { list-style: disc; padding-left: 1.5em; margin: 0.5em 0; }
        .ProseMirror ol { list-style: decimal; padding-left: 1.5em; margin: 0.5em 0; }
        .ProseMirror li { margin: 0.2em 0; }
        .ProseMirror blockquote { border-left: 3px solid #e5e7eb; padding-left: 1em; color: #6b7280; margin: 0.8em 0; }
        .ProseMirror hr { border: none; border-top: 1px solid #e5e7eb; margin: 1.5em 0; }
        .ProseMirror a { color: #2563eb; text-decoration: underline; }
        .ProseMirror code { background: #f3f4f6; padding: 0.1em 0.3em; border-radius: 3px; font-size: 0.9em; }
        .ProseMirror pre { background: #1f2937; color: #f9fafb; padding: 1em; border-radius: 8px; margin: 0.8em 0; overflow-x: auto; }
        .ProseMirror pre code { background: transparent; padding: 0; }
        .ProseMirror mark { padding: 0.1em 0.15em; border-radius: 2px; }
      `}</style>
    </div>
  )
}
