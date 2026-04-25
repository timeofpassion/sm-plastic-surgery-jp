const ITEMS = [
  {
    title: "마취과 전문의 상주",
    desc: "언제든 어떠한 상황에서도 빠르게 대처하기 위하여 마취과 전문의가 수술 시작부터 회복실 퇴실까지 직접 관리합니다.",
    image: "/전문의상주.png",
  },
  {
    title: "실시간 모니터링",
    desc: "최첨단 의료장비를 이용해 수술 중 활력징후를 실시간으로 모니터링하여 혹시라도 발생할 수 있는 모든 응급상황에 대처합니다.",
    image: "/실시간모니터링.png",
  },
  {
    title: "응급처치시스템",
    desc: "AED, 응급 약품, 산소 공급 장치를 수술실 내 상시 비치하고 있으며 응급상황 발생 즉시 대응할 수 있는 체계가 완비되어 있습니다.",
    image: "/응급처치시스템.png",
  },
  {
    title: "안심 리커버리 시스템",
    desc: "수술의 완성도뿐만 아니라 환자분의 빠른 일상 복귀를 가장 중요하게 생각합니다. 일본에서 오신 환자분들이 안심하고 귀국길에 오르실 수 있도록 맞춤형 사후 관리를 제공합니다.",
    image: "/검사시스템.png",
  },
];

export default function Safety() {
  return (
    <section id="safety" className="py-12 lg:py-[70px] bg-[#F3F7FD]">
      <div className="w-full max-w-content mx-auto px-6">

        {/* 헤더 */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-serif-display italic text-[0.9rem] text-accent-gold tracking-widest block mb-4">
            안전마취센터
          </span>
          <h2 className="font-serif-display text-[1.6rem] sm:text-[2rem] lg:text-[2.6rem] font-medium leading-[1.3] mb-5 keep-all">
            수술보다 에스엠성형외과가 최우선으로 생각하는 것은{" "}
            <span className="inline-block bg-brand text-white px-3 py-1">
              환자의 안전
            </span>
            입니다.
          </h2>
          <p className="text-[0.95rem] text-text-sub leading-[1.8] keep-all">
            수술 결과가 좋아도 마취에서 문제가 생기면 의미가 없습니다.
            <br />
            에스엠성형외과는 4가지 안전 시스템이 완벽히 구비되어 있습니다.
          </p>
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-full aspect-[4/3] overflow-hidden rounded-none bg-bg-sub-alt mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-[1.05rem] font-semibold text-text-main mb-2 keep-all leading-tight">
                {item.title}
              </h3>
              <p className="text-[0.875rem] text-text-sub leading-[1.8] keep-all">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 하단 문구 */}
        <div className="border-t border-border-default mt-14 pt-8 text-center">
          <p className="font-serif-display text-[1rem] text-text-main leading-[1.8]">
            마취 사고는 예방 가능합니다.{" "}
            <strong className="text-brand font-medium">
              그 예방에 병원의 자원이 얼마나 들어가는지가 병원을 고르는 기준이 되어야 합니다.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
