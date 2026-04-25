'use client'

import { useEffect, useRef } from 'react'

interface BlogContentProps {
  html: string
}

export default function BlogContent({ html }: BlogContentProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    // h2, h3에 앵커 id 자동 부여 (SEO + 목차)
    ref.current.querySelectorAll('h2, h3').forEach((el) => {
      if (!el.id) {
        el.id = el.textContent?.trim().replace(/\s+/g, '-').slice(0, 50) ?? ''
      }
    })
  }, [html])

  return (
    <div
      ref={ref}
      className="blog-content prose max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
