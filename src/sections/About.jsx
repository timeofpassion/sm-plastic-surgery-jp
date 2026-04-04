import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import QuoteBox from '../components/QuoteBox'
import useScrollReveal from '../hooks/useScrollReveal'

export default function About() {
  const revealLeft = useScrollReveal()
  const revealRight = useScrollReveal()
  const revealCreds = useScrollReveal()

  const credentials = [
    '서울대학교 의과대학 졸업',
    '서울아산병원 성형외과 전문의',
    '대한 유방성형 연구회 회원',
    '대한 지방성형 연구회 회원',
    '대한성형외과학회 정회원',
    'BR바람성형외과 원장 역임',
    'BK성형외과 원장 역임',
    'Global 자랑스런 한국인 선정',
  ]

  return (
    <section className="py-24 lg:py-32 bg-white" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Text */}
          <div ref={revealLeft} className="reveal-left">
            <SectionLabel>ABOUT THE DOCTOR</SectionLabel>

            <h2
              className="text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold text-text-dark mb-8 keep-all"
              style={{ fontFamily: 'var(--font-serif-kr)' }}
            >
              원장 이무영,{' '}
              <em className="accent-underline">20년의 기록</em>
            </h2>

            <div className="space-y-5 text-text-gray text-base lg:text-[17px] leading-loose mb-10 keep-all">
              <p>
                서울대학교 의과대학을 졸업하고,
                서울아산병원 성형외과 전문의 과정을 마쳤습니다.
              </p>
              <p>
                2013년 강남역에 에스엠성형외과를 개원한 이후
                12년간 같은 자리에서 가슴성형만을 깊이 파고들었습니다.
              </p>
              <p>
                다 잘하는 의사가 아닌,
                가슴을 가장 잘 아는 의사가 되겠다고 결심한 이유입니다.
              </p>
            </div>

            {/* Credentials */}
            <div ref={revealCreds} className="reveal reveal-delay-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {credentials.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-text-dark">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Quote + Card */}
          <div ref={revealRight} className="reveal-right flex flex-col gap-8">
            <QuoteBox
              text="가슴 수술은 단순히 크기를 키우는 것이 아닙니다. 체형, 흉곽 구조, 피부 탄력, 그리고 환자의 일상까지 모두 고려해야 비로소 '자연스러운 결과'가 됩니다."
              author="이무영 원장"
            />

            {/* Doctor profile card */}
            <div className="bg-white rounded-2xl p-6 border border-border flex items-center gap-5 shadow-sm">
              <div
                className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold shrink-0"
                style={{ fontFamily: 'var(--font-serif-en)' }}
              >
                L
              </div>
              <div>
                <p className="font-semibold text-text-dark text-lg">이무영 원장</p>
                <p className="text-text-gray text-sm mt-0.5">성형외과 전문의</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
