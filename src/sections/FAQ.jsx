import { useState } from 'react'
import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import useScrollReveal from '../hooks/useScrollReveal'

const faqs = [
  {
    q: '가슴성형과 눈성형을 같은 날 받을 수 있나요?',
    a: '네, 가능합니다. 에스엠성형외과에서는 가슴성형과 눈성형을 같은 날 함께 진행할 수 있습니다. 수술 전 종합 상담을 통해 동시 수술의 적합 여부를 판단하며, 회복 일정도 함께 설계합니다. 한 번의 방문으로 두 시술을 마칠 수 있어 시간적·경제적으로 효율적입니다.',
  },
  {
    q: '다운타임은 어느 정도인가요?',
    a: '가슴확대술 기준, 수술 다음 날부터 가벼운 일상생활이 가능합니다. 본격적인 운동은 4~6주 후부터 권장합니다. 붓기와 멍은 개인차가 있으나 대부분 2~3주 내에 가라앉습니다. 수술 후 2~3일 차에 귀가하시는 분이 많습니다.',
  },
  {
    q: '사용하는 보형물 브랜드는 무엇인가요?',
    a: '미국 FDA 승인을 받은 멘토(Mentor) 보형물을 사용합니다. 멘토는 전 세계적으로 가장 오래 사용되어 온 보형물 브랜드 중 하나이며, 안전성과 내구성이 검증되어 있습니다. 수술 시 정품 보증서를 함께 발급해 드립니다.',
  },
  {
    q: '타 병원에서 수술 후 재수술도 가능한가요?',
    a: '네, 가능합니다. 구축(캡슐 구축), 비대칭, 위치 이상, 이물감, 형태 불만족 등 다양한 재수술 케이스를 상담하고 있습니다. 재수술은 이전 수술의 상태를 정확히 파악하는 것이 가장 중요하므로, 충분한 상담과 검사 후 수술 여부와 방법을 결정합니다.',
  },
  {
    q: '귀국 후 사후 관리는 어떻게 받나요?',
    a: '귀국 후에도 메신저(LINE, 카카오톡)를 통해 원장에게 직접 경과 사진을 보내주시면 원격으로 회복 상태를 확인해 드립니다. 이상 징후가 있을 경우 즉시 대응 안내를 해드리며, 필요 시 재방문 일정을 조율합니다. 수술 후 관리까지 책임지는 것이 에스엠의 원칙입니다.',
  },
  {
    q: '상담만 받고 수술을 결정하지 않아도 되나요?',
    a: '물론입니다. 상담은 무료이며, 상담 후 수술을 강요하지 않습니다. 충분히 고민하신 후 결정하시면 됩니다. 온라인으로 사전 상담을 받으신 후, 방한 일정에 맞춰 대면 상담을 진행하는 것도 가능합니다.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const revealHeader = useScrollReveal()
  const revealAccordion = useScrollReveal()

  return (
    <section className="py-24 lg:py-32 bg-white" id="faq">
      <Container>
        {/* Header */}
        <div ref={revealHeader} className="reveal text-center mb-14">
          <SectionLabel centered>FAQ</SectionLabel>
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-text-dark keep-all"
            style={{ fontFamily: 'var(--font-serif-kr)' }}
          >
            자주 묻는 질문
          </h2>
        </div>

        {/* Accordion */}
        <div ref={revealAccordion} className="reveal max-w-[800px] mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              open={openIndex === i}
              onToggle={(e) => {
                if (e.target.open) setOpenIndex(i)
              }}
              className="bg-bg-alt rounded-2xl border border-border overflow-hidden group"
            >
              <summary className="flex items-start gap-4 p-6 cursor-pointer select-none">
                <span
                  className="shrink-0 w-8 h-8 rounded-lg bg-primary text-white text-[11px] flex items-center justify-center font-medium"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Q{i + 1}
                </span>
                <span className="text-text-dark text-[15px] lg:text-base font-medium pt-1 keep-all flex-1">{faq.q}</span>
                <svg
                  className="ml-auto shrink-0 w-5 h-5 text-text-gray transition-transform duration-300 mt-1"
                  style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <div className="px-6 pb-6 pl-[56px]">
                <p className="text-text-gray text-[15px] leading-relaxed keep-all">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}
