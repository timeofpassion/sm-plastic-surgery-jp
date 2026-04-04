import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import useScrollReveal from '../hooks/useScrollReveal'

const reviews = [
  {
    category: '하이브리드 가슴성형',
    date: '2024.09',
    text: '자연스럽게 안 되면 어쩌나 걱정을 정말 많이 했어요. 원장님이 체형을 보시고 \'이 방법이 가장 자연스럽다\'고 근거를 설명해 주셔서 믿고 맡겼습니다. 결과는 기대 이상이에요.',
  },
  {
    category: '가슴확대',
    date: '2026.03',
    text: '수술 3일차인데 생각보다 훨씬 덜 아파요. 원장님이 사전에 회복 과정을 꼼꼼하게 설명해 주셔서 불안감 없이 진행할 수 있었습니다. 너무 만족합니다.',
  },
  {
    category: '가슴 재수술',
    date: '2025.11',
    text: '다른 병원에서 수술 후 구축이 와서 재수술로 찾아갔어요. 전 수술의 문제점을 정확히 짚어주시고, 충분히 상담한 후에 진행해 주셔서 진짜 믿음이 갔습니다.',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#2D9CDB" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const revealHeader = useScrollReveal()
  const revealStats = useScrollReveal()
  const revealCards = useScrollReveal()

  return (
    <section className="py-24 lg:py-32 bg-bg-alt" id="reviews">
      <Container>
        {/* Header */}
        <div ref={revealHeader} className="reveal text-center mb-12">
          <SectionLabel centered>PATIENT REVIEWS</SectionLabel>
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-text-dark mb-4 keep-all"
            style={{ fontFamily: 'var(--font-serif-kr)' }}
          >
            환자의 <em className="accent-underline">진짜 이야기</em>
          </h2>
        </div>

        {/* Stats bar */}
        <div ref={revealStats} className="reveal flex items-center justify-center gap-8 lg:gap-14 mb-14 py-8 border-y border-border">
          {[
            { value: '9.7', unit: '점', label: '강남언니 평점' },
            { value: '872', unit: '건+', label: '누적 리뷰' },
            { value: '477', unit: '건', label: '의사 후기' },
          ].map((stat, i) => (
            <div key={i} className="text-center flex items-center gap-8 lg:gap-14">
              {i > 0 && <div className="w-px h-12 bg-border -ml-8 lg:-ml-14" />}
              <div>
                <div className="text-primary text-3xl lg:text-4xl font-bold" style={{ fontFamily: 'var(--font-serif-en)' }}>
                  {stat.value}
                  <span className="text-accent text-base font-normal ml-1">{stat.unit}</span>
                </div>
                <div className="text-text-gray text-[12px] mt-2">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Review cards */}
        <div ref={revealCards} className="reveal grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {reviews.map((review, i) => (
            <div key={i} className="card-hover bg-white rounded-2xl p-8 border border-border">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] bg-light-blue text-primary px-3 py-1.5 rounded-md font-medium">
                  {review.category}
                </span>
                <span className="text-text-gray text-[12px]">{review.date}</span>
              </div>
              <Stars />
              <p className="text-text-gray text-[15px] leading-relaxed mt-4 keep-all">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-text-gray text-[13px]">
          ※ 리뷰 출처: 강남언니 앱 실제 환자 후기
        </p>
      </Container>
    </section>
  )
}
