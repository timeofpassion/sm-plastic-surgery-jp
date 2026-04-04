import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import useScrollReveal from '../hooks/useScrollReveal'

const procedures = [
  {
    tag: 'SIGNATURE',
    tagExtra: '대표 시술',
    title: '하이브리드 가슴성형',
    subtitle: '멘토 보형물 × 자가 지방이식',
    body: '보형물의 안정적인 볼륨 위에 자가 지방으로 자연스러운 윤곽을 더합니다. "만져도 모르는" 촉감, "봐도 모르는" 형태가 목표입니다.',
    points: [
      'FDA 승인 멘토(Mentor) 보형물 사용',
      '체형·흉곽 3D 분석 기반 맞춤 설계',
      '이중 레이어로 보형물 경계 자연 처리',
      '원장 직접 지방 채취 및 정제',
    ],
    accent: true,
  },
  {
    tag: 'STANDARD',
    tagExtra: null,
    title: '가슴확대술',
    subtitle: '멘토 보형물',
    body: '체형 분석을 통해 보형물 종류, 크기, 삽입 위치를 결정합니다. 수술 다음 날부터 일상 복귀가 가능합니다.',
    points: [
      '원형 / 물방울 형태 선택',
      '겨드랑이 / 유륜 절개 위치 선택',
      '수술 후 2~3일 내 귀가 가능',
      '보형물 정품 보증서 발급',
    ],
    accent: false,
  },
  {
    tag: 'REVISION',
    tagExtra: '재수술 전문',
    title: '가슴 재수술',
    subtitle: '교정 및 개선',
    body: '이전 수술의 문제를 정확히 진단하고, 원인에 맞는 교정 계획을 세웁니다. "한 번 더 실패할까 봐" 두려운 마음, 충분히 이해합니다.',
    points: [
      '타 병원 수술 케이스 수용',
      '구축·비대칭·위치 이상 교정',
      '보형물 교체 및 제거',
      '충분한 사전 상담 후 수술 여부 결정',
    ],
    accent: false,
  },
]

export default function Procedures() {
  const revealHeader = useScrollReveal()
  const revealCard0 = useScrollReveal()
  const revealCard1 = useScrollReveal()
  const revealCard2 = useScrollReveal()
  const cardRefs = [revealCard0, revealCard1, revealCard2]

  return (
    <section className="py-24 lg:py-32 bg-white" id="procedures">
      <Container>
        {/* Header */}
        <div ref={revealHeader} className="reveal text-center mb-16">
          <SectionLabel centered>BREAST SURGERY</SectionLabel>
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-text-dark mb-4 keep-all"
            style={{ fontFamily: 'var(--font-serif-kr)' }}
          >
            가슴성형 <em className="accent-underline">시술 안내</em>
          </h2>
          <p className="text-text-gray text-base lg:text-lg keep-all max-w-[480px] mx-auto">
            체형과 목표에 따라 최적의 방법이 다릅니다.<br />
            충분한 상담 후, 맞는 방법을 함께 결정합니다.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {procedures.map((proc, i) => (
            <div
              key={i}
              ref={cardRefs[i]}
              className={`reveal reveal-delay-${i + 1} card-hover rounded-2xl p-8 lg:p-10 border flex flex-col ${
                proc.accent
                  ? 'border-primary bg-gradient-to-b from-light-blue to-white'
                  : 'border-border bg-white'
              }`}
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span
                  className={`text-[10px] tracking-[0.15em] uppercase font-medium px-3 py-1.5 rounded-md ${
                    proc.accent ? 'bg-primary text-white' : 'bg-light-blue text-primary'
                  }`}
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {proc.tag}
                </span>
                {proc.tagExtra && (
                  <span className="text-[10px] tracking-[0.1em] text-primary border border-primary/30 px-3 py-1.5 rounded-md">
                    {proc.tagExtra}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-text-dark mb-1.5 keep-all">{proc.title}</h3>
              <p className="text-text-gray text-sm mb-5">{proc.subtitle}</p>

              {/* Body */}
              <p className="text-text-gray text-[15px] leading-relaxed mb-6 keep-all">
                {proc.body}
              </p>

              {/* Points */}
              <ul className="space-y-3 mt-auto">
                {proc.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-[13px] text-text-dark">
                    <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
