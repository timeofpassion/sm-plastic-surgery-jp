import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Star, MessageCircle, Building2, Stethoscope } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
  const features = [
    {
      id: "gangnam-reviews",
      icon: Star,
      title: "강남언니 평가",
      description: "강남언니에서 검증된 실제 환자 평가를 통해 에스엠성형외과의 수술 만족도와 서비스 품질을 확인할 수 있습니다. 투명한 리뷰 커뮤니티에서 신뢰할 수 있는 정보를 얻으세요.",
    },
    {
      id: "patient-reviews",
      icon: MessageCircle,
      title: "환자 리뷰",
      description: "수술을 받은 환자들의 생생한 경험담과 변화 과정을 직접 확인하세요. 실제 환자들의 솔직한 후기는 수술 결과와 회복 과정을 이해하는 데 가장 중요한 자료입니다.",
    },
    {
      id: "establishment",
      icon: Building2,
      title: "개원 12년",
      description: "2013년 강남역에 개원한 이래 한 자리를 지켜온 에스엠성형외과. 12년간 같은 원장이 책임지는 지속성과 신뢰성이 우리의 기본 약속입니다.",
    },
    {
      id: "surgeon-expertise",
      icon: Stethoscope,
      title: "집도 전문의",
      description: "서울대학교 의과대학 졸업, 서울아산병원 성형외과 전문의 과정 수료. 가슴성형과 눈수술에 특화된 전문의가 모든 수술을 직접 집도합니다.",
    },
  ]

  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          <div className="flex justify-center">
            <img
              src="/doctor.png"
              alt="에스엠성형외과 원장"
              className="w-full max-w-sm h-auto rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.4rem] font-bold text-text-main leading-[1.3] mb-6 keep-all">
              에스엠성형외과가 <span className="text-accent-gold">신뢰받는 이유</span>
            </h2>
            <p className="text-text-sub text-[0.95rem] lg:text-[1rem] leading-[1.7] keep-all">
              12년 동시성과 전문성, 그리고 환자 중심의 운영으로 강남역 성형외과 중 최고의 신뢰를 구축했습니다.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-sm gap-6 md:max-w-full md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const IconComponent = feature.icon
            return (
              <Card key={feature.id} className="group border-0 rounded-2xl bg-blue-600 shadow-none transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-3">
                  <CardDecorator>
                    <IconComponent className="size-6 text-white" aria-hidden />
                  </CardDecorator>
                  <h3 className="mt-6 font-bold text-[1.1rem] text-white">{feature.title}</h3>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-white/90 leading-[1.8] keep-all">{feature.description}</p>
                </CardContent>

                {/* 우측 하단 액센트 라인 */}
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-full" />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div aria-hidden className="relative mx-auto size-20 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
    <div className="absolute inset-0 [--border:black] dark:[--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
    <div className="bg-white absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l">{children}</div>
  </div>
)
