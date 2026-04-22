const PRINCIPLES = [
  {
    num: "①",
    title: "한 병원, 한 원장, 12년의 일관성",
    desc: "대부분 강남 성형외과는 분원을 내거나 원장이 이전합니다. 에스엠은 2013년 이후 강남역 한 자리. 1년 후, 5년 후에도 같은 문을 열면 같은 원장이 기다립니다. 관광지 성형이 아닌 의료기관으로 에스엠을 보게 되는 이유입니다.",
    image: "/doctor.png",
  },
  {
    num: "②",
    title: "일본 전문통역, '담당자 원스톱' 시스템",
    desc: "'일본어 통역이 있는 병원'과 '일본 환자를 끝까지 책임지는 전담 통역이 있는 병원'은 다릅니다. 상담(LINE)부터 예약·방한 안내·수술실 통역·귀국 후 경과 체크까지 전담 통역이 전 과정을 담당합니다.",
    image: "/일본통역사.png",
  },
  {
    num: "③",
    title: "'유행'이 아닌 '의학'으로 설계",
    desc: "한국식 과장된 결과가 아닌 의학적 근거 기반 설계. 흉곽·피부·생활 패턴을 진단해 그 사람만의 방법을 찾습니다. 유방성형 연구회에서 쌓은 학술적 근거로 '왜 이 환자에겐 이 방법이 최적인가'를 설명할 수 있는 성형외과입니다.",
    image: "/의학설계.png",
  },
];

export default function Principles() {
  return (
    <section id="why-sm" className="py-12 lg:py-[70px] flex justify-center">
      <div className="w-full max-w-content px-6">
        <span className="font-serif-display italic text-[0.9rem] text-accent-gold tracking-widest block mb-4">
          WHY SM — 에스엠의 세 가지 원칙
        </span>
        <h2 className="font-serif-display text-[1.6rem] sm:text-[2rem] lg:text-[2.8rem] font-medium leading-[1.3] mb-16 keep-all">
          일본인 환자가 에스엠을 고르는 이유
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.num}
              className="group relative flex flex-col bg-white border border-border-default overflow-hidden opacity-0 transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:border-brand hover:shadow-xl hover:shadow-blue-100/60"
              style={{
                animation: `fadeUp 1.2s cubic-bezier(0.25, 1, 0.5, 1) ${
                  i * 0.1
                }s forwards`,
              }}
            >
              <div className="w-full aspect-[4/3] overflow-hidden bg-bg-sub-alt">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col p-8 lg:p-10">
                <span className="font-serif-display text-[1.5rem] text-brand mb-3 origin-left">
                  {p.num}
                </span>
                <h3 className="font-serif-display text-[1.5rem] lg:text-[1.65rem] font-semibold text-brand mb-5 pb-4 border-b border-border-default keep-all leading-tight">
                  {p.title}
                </h3>
                <p className="text-[0.95rem] text-text-sub leading-[1.8] keep-all text-justify">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
