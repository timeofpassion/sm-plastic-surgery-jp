import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getSessionCookieName, getSessionCookieValue } from '@/lib/admin-auth'

export async function POST(req: Request) {
  const { password } = await req.json()

  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'ADMIN_PASSWORD not configured' }, { status: 500 })
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const cookieStore = cookies()
  cookieStore.set(getSessionCookieName(), getSessionCookieValue(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7日間
    path: '/',
  })

  return NextResponse.json({ ok: true })
}
