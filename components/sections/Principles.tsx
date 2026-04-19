const PRINCIPLES = [
  {
    num: "①",
    title: "원장 직접 집도",
    desc: "상담부터 수술, 회복 체크까지 이무영 원장이 담당합니다. 상담 때 만난 의사와 수술실에서 만나는 의사가 다른 일은 없습니다.",
    image: "/doctor.png",
  },
  {
    num: "②",
    title: "하이브리드 가슴성형",
    desc: "보형물만 넣지 않습니다. 보형물로 볼륨의 토대를 만들고, 자가 지방을 가장자리에 이식해 '가슴 위쪽이 도드라지는' 부자연스러움을 줄입니다. 촉감은 지방이, 형태는 보형물이 책임지는 방식입니다.",
    image: "/breast.png",
  },
  {
    num: "③",
    title: "재수술 수용",
    desc: "구형구축·비대칭·이물감으로 두 번째 상담을 받으러 오는 환자를 12년간 꾸준히 봐왔습니다. 이전 수술 기록이 없어도 초음파·CT로 현재 상태를 파악해 재수술 계획을 세웁니다.",
    image: "/resurgery.png",
  },
];

export default function Principles() {
  return (
    <section id="why-sm" className="py-20 lg:py-[120px] flex justify-center">
      <div className="w-full max-w-content px-6">
        <span className="font-serif-display italic text-[0.9rem] text-accent-gold tracking-widest block mb-4">
          WHY SM — 에스엠의 세 가지 원칙
        </span>
        <h2 className="font-serif-display text-[2rem] sm:text-[2.4rem] lg:text-[2.8rem] font-medium leading-[1.3] mb-16 keep-all">
          일본인 환자가 에스엠을 고르는 이유
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.num}
              className="group relative flex flex-col bg-white border border-border-default overflow-hidden opacity-0 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:bg-brand hover:border-brand hover:shadow-2xl hover:shadow-brand/30"
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
                <span className="font-serif-display text-[1.5rem] text-brand mb-3 transition-all group-hover:scale-110 group-hover:text-white origin-left">
                  {p.num}
                </span>
                <h3 className="font-serif-display text-[1.75rem] lg:text-[1.9rem] font-bold text-brand mb-5 pb-4 border-b border-border-default keep-all leading-tight transition-colors group-hover:text-white group-hover:border-white/30">
                  {p.title}
                </h3>
                <p className="text-[0.95rem] text-text-sub leading-[1.8] keep-all text-justify transition-colors group-hover:text-white">
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
