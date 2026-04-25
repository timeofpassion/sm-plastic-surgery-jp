export type BlogCategory =
  | '豊胸手術'
  | '目元整形'
  | '肌・リフティング'
  | 'クリニック情報'

export interface BlogPost {
  id: string
  slug: string
  title: string
  description: string
  content: string
  category: BlogCategory
  tags: string[]
  publishedAt: string
  updatedAt: string
  isPublished: boolean
  thumbnail?: string
  seoKeywords: string[]
  readingTime?: number
  sourceType?: 'original' | 'ameba-rewrite'
}
