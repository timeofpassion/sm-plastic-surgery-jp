const NUMBERS = [
  {
    label: "累計手術件数",
    value: "[TBD_SURGERY_COUNT]",
    unit: "例",
    note: "2026年5月現在",
  },
  {
    label: "開業から",
    value: "12",
    unit: "年",
    note: "2013年6月開業",
  },
];

export default function Stats() {
  return (
    <section className="relative py-20 lg:py-32 flex justify-center overflow-hidden bg-[#f3f7f9]">
      {/* 배경 추상 텍스처 워터마크 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 50%, #1b499c0a 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, #313f760a 0%, transparent 55%)",
        }}
      />

      <div className="relative z-[1] w-full max-w-content px-6 text-center">
        <span className="label-en block mb-5">
          The Proven Numbers
        </span>
        <p className="text-[0.95rem] lg:text-[1rem] text-text-sub leading-[1.85] mb-16 keep-all">
          この数字は単純な経験の量ではなく
          <br />
          <strong className="text-text-main font-semibold">判断が蓄積された結果です。</strong>
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-[680px] mx-auto">
          {NUMBERS.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl p-10 lg:p-12"
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(4px)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <p className="text-[0.85rem] text-brand font-medium mb-6 tracking-wide">
                {item.label}
              </p>
              <div className="flex items-baseline justify-center gap-2 mb-3">
                <span className="text-[3.5rem] lg:text-[4.5rem] font-bold text-brand leading-none">
                  {item.value}
                </span>
                <span className="text-[1.2rem] text-text-sub font-normal">
                  {item.unit}
                </span>
              </div>
              <p className="text-[0.78rem] text-text-sub/60">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
