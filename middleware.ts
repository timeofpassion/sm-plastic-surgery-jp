import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // /admin/* → /blog/manage/*
  if (pathname.startsWith('/admin')) {
    const newPath = pathname.replace('/admin', '/blog/manage')
    return NextResponse.redirect(new URL(newPath, request.url))
  }

  // /blog/admin/* → /blog/manage/*
  if (pathname.startsWith('/blog/admin')) {
    const newPath = pathname.replace('/blog/admin', '/blog/manage')
    return NextResponse.redirect(new URL(newPath, request.url))
  }

  // /blog/manage/* 인증 보호
  if (pathname.startsWith('/blog/manage') && !pathname.startsWith('/blog/manage/login')) {
    const session = request.cookies.get('admin_session')
    if (session?.value !== 'authenticated') {
      return NextResponse.redirect(new URL('/blog/manage/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/blog/admin/:path*',
    '/blog/manage/:path*',
  ],
}
