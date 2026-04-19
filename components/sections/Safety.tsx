const SAFETY = [
  {
    title: "마취과 전문의 상주",
    desc: "언제든 어떠한 상황에서도 빠르게 대처하기 위하여 마취과 전문의가 상주하고 있습니다.",
    image: "/전문의상주.png",
  },
  {
    title: "실시간 모니터링",
    desc: "병원에 상주하는 마취과 전문의가 수술 중 최첨단 의료장비를 이용해 실시간으로 모니터링을 하기 때문에 혹시라도 발생할 수 있는 모든 응급상황에 대처할 수 있습니다.",
    image: "/실시간모니터링.png",
  },
  {
    title: "응급처치시스템",
    desc: "언제든 어떠한 상황에서도 빠르게 대처하기 위하여 마취과 전문의가 상주하고 있습니다.",
    image: "/응급처치시스템.png",
  },
  {
    title: "검사시스템",
    desc: "수술 전 혈액검사, 심전도검사, 간기능검사 등 철저한 건강검진을 실시하여 환자의 몸 상태를 점검하고 마취를 위해 적합한 신체적 조건을 파악합니다.",
    image: "/검사시스템.png",
  },
];

export default function Safety() {
  return (
    <section
      id="safety"
      className="py-20 lg:py-[120px] flex justify-center bg-bg-base"
    >
      <div className="w-full max-w-content px-6">
        <span className="font-serif-display italic text-[0.9rem] text-accent-gold tracking-widest block mb-4">
          안전마취센터
        </span>
        <h2 className="font-serif-display text-[2rem] sm:text-[2.4rem] lg:text-[2.8rem] font-medium leading-[1.3] mb-6 keep-all">
          수술보다 에스엠성형외과가 최우선으로 생각하는 것은{" "}
          <span className="inline-block bg-brand text-white px-3 py-1">
            환자의 안전
          </span>
          입니다.
        </h2>
        <p className="text-[1.1rem] text-text-sub mb-16 max-w-[780px] leading-[1.8] keep-all">
          수술 결과가 좋아도 마취에서 문제가 생기면 의미가 없습니다.
          <br />
          에스엠성형외과는 안전한 수술을 위해{" "}
          <strong className="text-text-main font-semibold">
            마취과 전문의 상주, 실시간 모니터링, 응급처치시스템, 검사시스템
          </strong>
          의 4가지 시스템이 완벽히 구비되어 있습니다.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {SAFETY.map((item, i) => (
            <div
              key={item.title}
              className="group relative flex flex-col bg-white border border-border-default overflow-hidden opacity-0 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:bg-brand hover:border-brand hover:shadow-2xl hover:shadow-brand/30"
              style={{
                animation: `fadeUp 1.2s cubic-bezier(0.25, 1, 0.5, 1) ${
                  i * 0.08
                }s forwards`,
              }}
            >
              <div className="w-full aspect-[4/3] overflow-hidden bg-bg-sub-alt">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col p-6 lg:p-8">
                <h3 className="font-serif-display text-[1.35rem] lg:text-[1.5rem] font-bold text-brand mb-4 pb-4 border-b border-border-default keep-all leading-tight transition-colors group-hover:text-white group-hover:border-white/30">
                  {item.title}
                </h3>
                <p className="text-[0.9rem] text-text-sub leading-[1.7] keep-all transition-colors group-hover:text-white">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border-default pt-10 mt-5">
          <p className="font-serif-display text-[1.15rem] text-text-main leading-[1.8] max-w-[800px]">
            마취 사고는 예방 가능합니다.{" "}
            <strong className="text-brand font-medium">
              그 예방에 병원의 자원이 얼마나 들어가는지가 병원을 고르는 기준이
              되어야 합니다.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
