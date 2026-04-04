import { useState, useEffect } from 'react'

const links = [
  { label: '원장 소개', href: '#about' },
  { label: '시술 안내', href: '#procedures' },
  { label: '안전 시스템', href: '#safety' },
  { label: '후기', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'navbar-solid py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-5 lg:px-[60px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={`text-lg tracking-[0.08em] font-semibold transition-colors duration-300 ${
            scrolled ? 'text-primary' : 'text-white'
          }`}
          style={{ fontFamily: 'var(--font-serif-en)' }}
        >
          SM
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium tracking-wide transition-colors duration-300 hover:text-primary ${
                scrolled ? 'text-text-dark' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#reservation"
          className={`hidden lg:inline-flex items-center text-[13px] font-medium px-5 py-2.5 rounded-lg transition-all duration-300 ${
            scrolled
              ? 'bg-primary text-white hover:bg-dark-blue'
              : 'bg-white/15 text-white border border-white/30 hover:bg-white/25'
          }`}
        >
          예약
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden flex flex-col gap-1.5 p-1 transition-colors ${
            scrolled ? 'text-text-dark' : 'text-white'
          }`}
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-border mt-2 shadow-lg">
          <div className="max-w-[1100px] mx-auto px-5 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-text-dark text-[15px] font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservation"
              onClick={() => setMobileOpen(false)}
              className="btn-fx btn-primary-fx inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg text-sm font-medium mt-2"
            >
              무료 상담 예약하기
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
