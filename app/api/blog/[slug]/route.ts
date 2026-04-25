import { NextResponse } from 'next/server'
import { getPostBySlug, savePost, deletePost } from '@/lib/blog'
import { isAdminAuthenticated } from '@/lib/admin-auth'
import type { BlogPost } from '@/types/blog'

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const post = getPostBySlug(params.slug)
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(post)
}

export async function PUT(req: Request, { params }: { params: { slug: string } }) {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const post: BlogPost = await req.json()
  savePost({ ...post, slug: params.slug })
  return NextResponse.json({ ok: true })
}

export async function DELETE(_: Request, { params }: { params: { slug: string } }) {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const deleted = deletePost(params.slug)
  if (!deleted) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ ok: true })
}
