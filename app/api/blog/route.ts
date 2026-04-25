import { NextResponse } from 'next/server'
import { getAllPosts, savePost } from '@/lib/blog'
import { isAdminAuthenticated } from '@/lib/admin-auth'
import type { BlogPost } from '@/types/blog'

export async function GET() {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const posts = getAllPosts(true)
  return NextResponse.json(posts)
}

export async function POST(req: Request) {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const post: BlogPost = await req.json()
  savePost(post)
  return NextResponse.json({ ok: true })
}
