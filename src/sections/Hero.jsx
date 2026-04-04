import useScrollReveal from '../hooks/useScrollReveal'

export default function Hero() {
  const revealBadge = useScrollReveal()
  const revealHeadline = useScrollReveal()
  const revealSub = useScrollReveal()
  const revealCta = useScrollReveal()
  const revealStats = useScrollReveal()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
          alt="SM Plastic Surgery"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/70 via-[#0a1628]/50 to-[#0a1628]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-5 lg:px-[60px] w-full pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-[680px]">
          {/* Badge */}
          <div ref={revealBadge} className="reveal flex flex-wrap items-center gap-3 mb-8">
            <span
              className="inline-block bg-white/15 backdrop-blur-sm text-white text-[11px] tracking-[0.2em] uppercase font-medium px-4 py-2 rounded-md border border-white/20"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              BREAST SPECIALIST
            </span>
            <span className="text-white/60 text-[12px] tracking-wide">
              GANGNAM &middot; SINCE 2013 &middot; Seoul National University
            </span>
          </div>

          {/* Headline */}
          <div ref={revealHeadline} className="reveal reveal-delay-1 mb-8">
            <h1>
              <span
                className="block text-white/70 text-xl lg:text-2xl tracking-[0.12em] mb-4 font-medium"
                style={{ fontFamily: 'var(--font-serif-en)' }}
              >
                SM PLASTIC SURGERY
              </span>
              <span
                className="block text-white text-4xl lg:text-6xl xl:text-7xl leading-[1.15] font-bold keep-all"
                style={{ fontFamily: 'var(--font-serif-kr)' }}
              >
                가슴성형,{' '}
                <span className="text-accent">한 사람만</span>{' '}
                합니다.
              </span>
            </h1>
          </div>

          {/* Sub copy */}
          <p ref={revealSub} className="reveal reveal-delay-2 text-white/70 text-base lg:text-lg leading-relaxed mb-10 max-w-[520px] keep-all">
            서울대 의대 출신, 20년 경력의 성형외과 전문의 한 사람이
            상담부터 수술, 사후 관리까지 직접 책임집니다.
            대리 집도는 없습니다.
          </p>

          {/* CTA buttons */}
          <div ref={revealCta} className="reveal reveal-delay-3 flex flex-wrap gap-4 mb-16">
            <a
              href="#reservation"
              className="btn-fx btn-primary-fx inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg text-[15px] font-medium"
            >
              무료 상담 예약하기
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="#procedures"
              className="btn-fx inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg text-[15px] font-medium hover:bg-white/10 transition-colors"
            >
              시술 자세히 보기
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div ref={revealStats} className="reveal reveal-delay-4 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/15">
          {[
            { value: '9.7', unit: '/10', label: '강남언니 평점' },
            { value: '872', unit: '+', label: '누적 리뷰' },
            { value: '12', unit: ' YRS', label: '강남역 한자리' },
            { value: '20', unit: '+YRS', label: '임상 경력' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-white text-2xl lg:text-3xl font-bold" style={{ fontFamily: 'var(--font-serif-en)' }}>
                {stat.value}
                <span className="text-accent text-sm font-normal">{stat.unit}</span>
              </div>
              <div className="text-white/50 text-[11px] mt-1.5 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator">
        <svg className="w-6 h-6 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  )
}
