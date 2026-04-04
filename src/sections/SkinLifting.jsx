import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import useScrollReveal from '../hooks/useScrollReveal'

const items = [
  {
    title: '텐써마 (Thermage)',
    body: '고주파 에너지로 깊은 진피층의 콜라겐을 자극합니다. 피부 탄력 회복과 자연스러운 리프팅 효과.',
  },
  {
    title: '텐써라 (Tensera)',
    body: '리프팅과 피부결 개선을 동시에 구현하는 장비입니다. 시술 직후부터 효과를 체감할 수 있습니다.',
  },
  {
    title: '이마축소술',
    body: '헤어라인을 조정하여 이마 비율을 개선합니다. 얼굴 전체의 밸런스가 달라집니다.',
  },
  {
    title: '지방흡입',
    body: '가슴 수술과 같은 날 병행 가능합니다. 팔뚝, 복부, 허벅지 등 전신 라인을 정리합니다.',
  },
]

export default function SkinLifting() {
  const revealHeader = useScrollReveal()
  const revealCard0 = useScrollReveal()
  const revealCard1 = useScrollReveal()
  const revealCard2 = useScrollReveal()
  const revealCard3 = useScrollReveal()
  const cardRefs = [revealCard0, revealCard1, revealCard2, revealCard3]

  return (
    <section className="py-24 lg:py-32 bg-white" id="skin-lifting">
      <Container>
        {/* Header */}
        <div ref={revealHeader} className="reveal text-center mb-16">
          <SectionLabel centered>SKIN & LIFTING</SectionLabel>
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-text-dark mb-4 keep-all"
            style={{ fontFamily: 'var(--font-serif-kr)' }}
          >
            수술 후 피부까지, <em className="accent-underline">완성도를 높이세요.</em>
          </h2>
          <p className="text-text-gray text-base lg:text-lg keep-all max-w-[480px] mx-auto">
            가슴성형 방문 시 함께 받을 수 있는 비수술 시술입니다.<br />
            추가 방문 없이 같은 날 진행 가능합니다.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              ref={cardRefs[i]}
              className={`reveal reveal-delay-${i + 1} card-hover bg-bg-alt rounded-2xl p-8 border border-border`}
            >
              <h3 className="text-lg font-semibold text-text-dark mb-4 keep-all">{item.title}</h3>
              <p className="text-text-gray text-[14px] leading-relaxed keep-all">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
