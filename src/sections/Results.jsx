import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import useScrollReveal from '../hooks/useScrollReveal'

const cases = [
  { num: '01', tag: '하이브리드 가슴성형', desc: '보형물 + 자가지방, 자연스러운 볼륨' },
  { num: '02', tag: '가슴확대술', desc: '멘토 보형물, 체형 맞춤 설계' },
  { num: '03', tag: '가슴 재수술', desc: '구축 교정, 형태 개선' },
  { num: '04', tag: '체형 맞춤', desc: '마른 체형 맞춤 하이브리드' },
]

export default function Results() {
  const revealHeader = useScrollReveal()
  const revealGrid = useScrollReveal()
  const revealDisclaimer = useScrollReveal()

  return (
    <section className="py-24 lg:py-32 bg-white" id="results">
      <Container>
        {/* Header */}
        <div ref={revealHeader} className="reveal text-center mb-16">
          <SectionLabel centered>RESULTS</SectionLabel>
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-text-dark mb-4 keep-all"
            style={{ fontFamily: 'var(--font-serif-kr)' }}
          >
            실제 결과로 <em className="accent-underline">증명합니다</em>
          </h2>
          <p className="text-text-gray text-base lg:text-lg keep-all max-w-[480px] mx-auto">
            보정 없는 실제 환자 사진입니다.<br />
            모든 사진은 환자 본인의 서면 동의를 받았습니다.
          </p>
        </div>

        {/* Case cards */}
        <div ref={revealGrid} className="reveal grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10">
          {cases.map((c) => (
            <div key={c.num} className="card-hover rounded-2xl overflow-hidden border border-border bg-white">
              {/* Placeholder image */}
              <div className="relative aspect-[3/4] bg-gradient-to-b from-border to-light-blue flex items-center justify-center">
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] tracking-wider uppercase bg-white/90 text-text-gray px-2.5 py-1 rounded-md" style={{ fontFamily: 'var(--font-mono)' }}>BEFORE</span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="text-[9px] tracking-wider uppercase bg-primary/90 text-white px-2.5 py-1 rounded-md" style={{ fontFamily: 'var(--font-mono)' }}>AFTER</span>
                </div>
                <span className="text-text-gray/30 text-sm">Image</span>
              </div>
              {/* Info */}
              <div className="p-5">
                <span className="text-[10px] tracking-[0.15em] text-text-gray" style={{ fontFamily: 'var(--font-mono)' }}>
                  CASE {c.num}
                </span>
                <p className="text-primary text-[13px] font-medium mt-1.5">{c.tag}</p>
                <p className="text-text-gray text-[12px] mt-1 keep-all">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimers */}
        <div ref={revealDisclaimer} className="reveal text-center text-text-gray text-[13px] space-y-1.5">
          <p>※ 수술 결과는 개인에 따라 차이가 있을 수 있습니다.</p>
          <p>※ 더 많은 전후사진은 상담 시 확인 가능합니다.</p>
        </div>
      </Container>
    </section>
  )
}
