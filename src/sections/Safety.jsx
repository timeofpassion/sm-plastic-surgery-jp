import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import useScrollReveal from '../hooks/useScrollReveal'

const items = [
  {
    num: '01',
    title: '전담 마취과 전문의',
    body: '마취 전 과정을 전담 마취과 전문의가 관리합니다. 수술 시작부터 회복까지 환자 곁을 지킵니다.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: '02',
    title: '실시간 생체 모니터링',
    body: '심박, 혈압, 산소포화도, 체온 등 수술 중 모든 활력징후를 실시간으로 감시합니다.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    num: '03',
    title: '응급 대응 프로토콜',
    body: '만일의 상황에 대비한 응급 장비와 단계별 대응 매뉴얼을 상시 운영합니다.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <line x1="12" y1="8" x2="12" y2="14" />
        <line x1="9" y1="11" x2="15" y2="11" />
      </svg>
    ),
  },
  {
    num: '04',
    title: '수술 후 전담 회복 관리',
    body: '의식이 완전히 돌아올 때까지 전담 간호 인력이 1:1로 관리합니다.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
]

export default function Safety() {
  const revealHeader = useScrollReveal()
  const revealCard0 = useScrollReveal()
  const revealCard1 = useScrollReveal()
  const revealCard2 = useScrollReveal()
  const revealCard3 = useScrollReveal()
  const cardRefs = [revealCard0, revealCard1, revealCard2, revealCard3]

  return (
    <section className="py-24 lg:py-32 bg-bg-alt" id="safety">
      <Container>
        {/* Header */}
        <div ref={revealHeader} className="reveal text-center mb-16">
          <SectionLabel centered>SAFETY FIRST</SectionLabel>
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-text-dark mb-4 keep-all"
            style={{ fontFamily: 'var(--font-serif-kr)' }}
          >
            안전에 대한 <em className="accent-underline">철저한 기준</em>
          </h2>
          <p className="text-text-gray text-base lg:text-lg max-w-[560px] mx-auto keep-all">
            가슴성형은 전신마취가 필요한 수술입니다.
            에스엠성형외과는 독립된 안전마취센터를 운영하며,
            &ldquo;수술 실력&rdquo;만큼 &ldquo;안전 시스템&rdquo;에도 투자합니다.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <div
              key={item.num}
              ref={cardRefs[i]}
              className={`reveal reveal-delay-${i + 1} card-hover bg-white rounded-2xl p-8 border border-border text-center`}
            >
              <div className="text-primary mb-5 flex justify-center">{item.icon}</div>
              <span
                className="text-[12px] tracking-[0.15em] text-text-gray block mb-3"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {item.num}
              </span>
              <h3 className="text-lg font-semibold text-text-dark mb-3 keep-all">{item.title}</h3>
              <p className="text-text-gray text-[14px] leading-relaxed keep-all">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
