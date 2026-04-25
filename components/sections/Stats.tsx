const STATS = [
  {
    label: "의료진 활동 연혁 년수",
    value: "24",
    unit: "years",
    note: "2002년 의사면허 취득",
  },
  {
    label: "수술 전후 사진 개수",
    value: "1,234",
    unit: "개",
    note: "2026년 4월 기준",
  },
  {
    label: "강남역 같은 자리에서",
    value: "4,695",
    unit: "days",
    note: "2013년 6월 10일 개원",
  },
];

export default function Stats() {
  return (
    <section
      className="relative py-14 lg:py-20 flex justify-center text-white"
      style={{
        background: "linear-gradient(135deg, #0A2859 0%, #1253A6 60%, #0D3D6E 100%)",
      }}
    >
      <div className="absolute inset-0 bg-[rgba(10,12,15,0.65)] z-[1]" />

      <div className="relative z-[2] w-full max-w-content px-6 text-center">
        <p className="text-[1rem] font-light tracking-[0.2em] mb-3 opacity-90">
          에스엠성형외과의
        </p>
        <h2 className="font-serif-display text-[2.2rem] sm:text-[2.6rem] lg:text-[3.2rem] mb-16 lg:mb-20">
          신뢰를 쌓은 시간
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-white py-10 lg:py-12 px-6 rounded-sm shadow-2xl text-text-main flex flex-col items-center opacity-0"
              style={{
                animation: `fadeUp 1.2s cubic-bezier(0.25, 1, 0.5, 1) ${
                  0.4 + i * 0.1
                }s forwards`,
              }}
            >
              <span className="bg-neutral-800 text-white text-[0.75rem] py-1 px-4 rounded-full mb-6 tracking-wider">
                {stat.label}
              </span>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-serif-display text-[3rem] lg:text-[3.8rem] font-bold text-brand leading-none">
                  {stat.value}
                </span>
                <span className="text-[1.1rem] text-text-sub font-normal">
                  {stat.unit}
                </span>
              </div>
              <span className="text-[0.85rem] text-gray-500 font-light">
                {stat.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
