const TRUST = [
  { label: "カンナム・オンニ 評価", value: "9.7 / 10" },
  { label: "患者レビュー", value: "872件+" },
  { label: "開業", value: "2013年" },
  { label: "執刀専門医", value: "ソウル大出身" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* 우측 이미지 영역 placeholder — 추후 실제 영상/이미지로 교체 */}
      <div className="absolute inset-0 lg:left-[38%]">
        <div className="w-full h-full bg-gradient-to-br from-[#c8ddf0] via-[#a8c4e0] to-[#7aa8d0]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 30%, #ffffff55 0%, transparent 60%), radial-gradient(ellipse at 70% 70%, #1b499c33 0%, transparent 50%)",
          }}
        />
      </div>

      {/* 그라디언트 오버레이 */}
      {/* 데스크탑: 좌→우 페이드 */}
      <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-white via-white/95 from-[20%] via-[38%] to-transparent" />
      {/* 모바일: 좌측 집중 오버레이 */}
      <div className="absolute inset-0 lg:hidden bg-gradient-to-r from-white/96 from-[0%] via-white/80 via-[55%] to-white/10" />

      {/* 텍스트 콘텐츠 */}
      <div className="relative z-[2] w-full max-w-content mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-[520px]">

          {/* 영어 라벨 */}
          <span className="label-en block mb-6">
            12年、同じ場所で。
          </span>

          {/* 메인 헤딩 */}
          <h1 className="text-[2.4rem] sm:text-[3rem] lg:text-[3.8rem] font-bold text-text-main leading-[1.15] tracking-tight keep-all mb-8 opacity-0 animate-fade-up">
            胸成形を
            <br />
            医学として
            <br />
            設計します
          </h1>

          {/* 보조 카피 */}
          <div className="text-[0.95rem] lg:text-[1rem] text-text-sub leading-[2] mb-10 opacity-0 animate-fade-up [animation-delay:0.15s]">
            <p>韓国・江南で12年。</p>
            <p>ソウル大医学部出身の李戊永院長が直接執刀。</p>
            <p>流行ではなく、医学として</p>
            <p>胸成形を設計します。</p>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4 mb-12 opacity-0 animate-fade-up [animation-delay:0.25s]">
            <a
              href="https://line.me/R/ti/p/@952nqpbr"
              target="_blank"
              rel="noopener noreferrer"
              data-track-location="hero"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-brand text-white text-[0.88rem] font-semibold rounded-full transition-all hover:bg-brand-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/20"
            >
              ご相談・お問い合わせ
            </a>
            <a
              href="https://line.me/R/ti/p/@952nqpbr"
              target="_blank"
              rel="noopener noreferrer"
              data-track-location="hero-line"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#06C755] text-white text-[0.82rem] font-medium rounded-full transition-opacity hover:opacity-90"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738C5.384.566 0 4.935 0 10.304c0 4.811 4.27 8.843 10.035 9.608.39.084.922.258 1.057.592.122.302.079.775.038 1.085l-.164 1.026c-.045.303-.24 1.186 1.049.647 1.291-.54 6.957-4.098 9.489-7.016 1.749-1.918 2.496-3.862 2.496-5.942z" />
              </svg>
              LINE 無料相談
            </a>
          </div>

          {/* Trust 배지 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-brand/15 opacity-0 animate-fade-up [animation-delay:0.35s]">
            {TRUST.map((item) => (
              <div key={item.label} className="pl-3 border-l-2 border-brand/30">
                <div className="text-[0.62rem] uppercase tracking-[0.1em] text-text-sub mb-1">
                  {item.label}
                </div>
                <div className="text-[1rem] lg:text-[1.1rem] font-bold text-text-main">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
