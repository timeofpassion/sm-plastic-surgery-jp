import { cookies } from 'next/headers'

const SESSION_COOKIE = 'admin_session'
const SESSION_VALUE = 'authenticated'

export function isAdminAuthenticated(): boolean {
  const cookieStore = cookies()
  return cookieStore.get(SESSION_COOKIE)?.value === SESSION_VALUE
}

export function getSessionCookieName() {
  return SESSION_COOKIE
}

export function getSessionCookieValue() {
  return SESSION_VALUE
}
