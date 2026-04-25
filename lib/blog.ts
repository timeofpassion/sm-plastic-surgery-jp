import fs from 'fs'
import path from 'path'
import type { BlogPost } from '@/types/blog'

const DATA_DIR = path.join(process.cwd(), 'data', 'blog')

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
}

export function getAllPosts(includeUnpublished = false): BlogPost[] {
  ensureDataDir()
  const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.json'))
  const posts: BlogPost[] = files
    .map((file) => {
      try {
        const raw = fs.readFileSync(path.join(DATA_DIR, file), 'utf-8')
        return JSON.parse(raw) as BlogPost
      } catch {
        return null
      }
    })
    .filter((p): p is BlogPost => p !== null)
    .filter((p) => includeUnpublished || p.isPublished)

  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getPostBySlug(slug: string): BlogPost | null {
  ensureDataDir()
  const filePath = path.join(DATA_DIR, `${slug}.json`)
  if (!fs.existsSync(filePath)) return null
  try {
    const raw = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(raw) as BlogPost
  } catch {
    return null
  }
}

export function savePost(post: BlogPost): void {
  ensureDataDir()
  const filePath = path.join(DATA_DIR, `${post.slug}.json`)
  fs.writeFileSync(filePath, JSON.stringify(post, null, 2), 'utf-8')
}

export function deletePost(slug: string): boolean {
  const filePath = path.join(DATA_DIR, `${slug}.json`)
  if (!fs.existsSync(filePath)) return false
  fs.unlinkSync(filePath)
  return true
}

export function generateSlug(title: string): string {
  // 일본어/한국어 → 로마자 transliterate 대신 날짜+랜덤으로 안전한 slug 생성
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '')
  const random = Math.random().toString(36).slice(2, 7)
  // ASCII만 있는 경우 그것도 사용
  const ascii = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 30)
  return ascii ? `${ascii}-${date}` : `post-${date}-${random}`
}

export function estimateReadingTime(content: string): number {
  // 일본어는 분당 약 400-600자, 여기서는 500자로 계산
  const chars = content.replace(/\s+/g, '').length
  return Math.max(1, Math.ceil(chars / 500))
}
