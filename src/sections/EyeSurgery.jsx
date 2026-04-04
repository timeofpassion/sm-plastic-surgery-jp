import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import QuoteBox from '../components/QuoteBox'
import useScrollReveal from '../hooks/useScrollReveal'

const items = [
  {
    num: '01',
    title: '쌍꺼풀 수술',
    body: '자연유착법(매몰) / 절개법 선택 가능',
    sub: '붓기 적은 자연유착법 · 또렷한 라인의 절개법',
  },
  {
    num: '02',
    title: '상하안검 수술',
    body: '눈꺼풀 처짐·지방 제거로 또렷한 눈매',
    sub: '피로해 보이는 인상 개선 · 동안 효과',
  },
]

export default function EyeSurgery() {
  const revealHeader = useScrollReveal()
  const revealCard0 = useScrollReveal()
  const revealCard1 = useScrollReveal()
  const revealQuote = useScrollReveal()
  const cardRefs = [revealCard0, revealCard1]

  return (
    <section className="py-24 lg:py-32 bg-bg-alt" id="eye-surgery">
      <Container>
        {/* Header */}
        <div ref={revealHeader} className="reveal text-center mb-16">
          <SectionLabel centered>EYE SURGERY</SectionLabel>
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-text-dark mb-4 keep-all"
            style={{ fontFamily: 'var(--font-serif-kr)' }}
          >
            가슴만이 아닙니다.<br />
            <em className="accent-underline">눈성형</em>도 에스엠에서.
          </h2>
          <p className="text-text-gray text-base lg:text-lg max-w-[520px] mx-auto keep-all">
            방한 1회로 가슴성형과 눈성형을 함께 받을 수 있습니다.
            같은 원장, 같은 병원에서 한 번에 해결하세요.
            별도 병원을 찾아다닐 필요가 없습니다.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {items.map((item, i) => (
            <div
              key={item.num}
              ref={cardRefs[i]}
              className={`reveal reveal-delay-${i + 1} card-hover bg-white rounded-2xl p-8 lg:p-10 border border-border`}
            >
              <span className="text-[12px] tracking-[0.15em] text-text-gray block mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
                {item.num}
              </span>
              <h3 className="text-xl font-semibold text-text-dark mb-3 keep-all">{item.title}</h3>
              <p className="text-text-gray text-[15px] mb-2 keep-all">{item.body}</p>
              <p className="text-text-gray text-[14px] keep-all">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div ref={revealQuote} className="reveal max-w-[680px] mx-auto">
          <QuoteBox
            text="소중한 방문 한 번으로 가슴과 눈을 함께 받으실 수 있습니다. 두 번 오실 필요 없도록, 일정과 회복까지 함께 설계합니다."
            author="이무영 원장"
          />
        </div>
      </Container>
    </section>
  )
}
