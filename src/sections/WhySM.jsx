import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import useScrollReveal from '../hooks/useScrollReveal'

const cards = [
  {
    num: '01',
    title: '원장 직접 집도, 예외 없음',
    body: '상담에서 수술 설계, 집도, 사후 관리까지 원장 한 사람이 처음부터 끝까지 담당합니다. "누가 수술하는지 모르겠다"는 불안은 없습니다.',
    tagline: 'One Doctor. Full Responsibility.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    ),
  },
  {
    num: '02',
    title: '하이브리드 가슴성형',
    body: '멘토(Mentor) 보형물로 볼륨을 잡고, 자가 지방이식으로 경계선의 자연스러움을 완성합니다. "했는데 안 한 것 같은" 결과를 추구합니다.',
    tagline: 'Implant + Fat Graft Hybrid.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
  {
    num: '03',
    title: '재수술, 피하지 않습니다',
    body: '타 병원 수술 후 구축, 비대칭, 이물감. 다른 곳에서 거절당한 케이스도 상담합니다. 재수술이야말로 경험의 깊이가 드러나는 영역입니다.',
    tagline: 'Revision Surgery Specialist.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
]

export default function WhySM() {
  const revealHeader = useScrollReveal()
  const revealCard0 = useScrollReveal()
  const revealCard1 = useScrollReveal()
  const revealCard2 = useScrollReveal()
  const cardRefs = [revealCard0, revealCard1, revealCard2]

  return (
    <section className="py-24 lg:py-32 bg-bg-alt" id="why-sm">
      <Container>
        {/* Header */}
        <div ref={revealHeader} className="reveal text-center mb-16">
          <SectionLabel centered>WHY SM</SectionLabel>
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-text-dark mb-4 keep-all"
            style={{ fontFamily: 'var(--font-serif-kr)' }}
          >
            왜 에스엠에서 가슴성형인가
          </h2>
          <p className="text-text-gray text-base lg:text-lg keep-all max-w-[480px] mx-auto">
            가슴성형은 의사의 경험이 결과를 결정합니다.<br />
            에스엠이 다른 세 가지 이유.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <div
              key={card.num}
              ref={cardRefs[i]}
              className={`reveal reveal-delay-${i + 1} card-hover rounded-2xl p-8 lg:p-10 border border-border flex flex-col bg-white`}
            >
              {/* Num + Icon */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[12px] tracking-[0.15em] text-text-gray" style={{ fontFamily: 'var(--font-mono)' }}>
                  {card.num}
                </span>
                <span className="text-primary">{card.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-text-dark mb-4 keep-all">
                {card.title}
              </h3>

              {/* Body */}
              <p className="text-text-gray text-[15px] leading-relaxed flex-1 keep-all mb-6">
                {card.body}
              </p>

              {/* Tagline */}
              <p
                className="text-primary text-[13px] italic border-t border-border pt-5"
                style={{ fontFamily: 'var(--font-serif-en)' }}
              >
                {card.tagline}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
