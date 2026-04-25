const CHANNELS = [
  { name: "LINE", href: "https://line.me/R/ti/p/@952nqpbr" },
  { name: "YouTube", href: "https://www.youtube.com/@smplasticsurgery" },
  { name: "Instagram", href: "https://www.instagram.com/sm_official_jp" },
  { name: "Ameba", href: "https://ameblo.jp/sm-official-jp/" },
  { name: "TikTok", href: "https://www.tiktok.com/@smps_jp8888" },
  { name: "X", href: "https://x.com/smps8888" },
];

const TRUST = [
  { label: "강남언니 평점", value: "9.7 / 10" },
  { label: "환자 리뷰", value: "872건+" },
  { label: "개원", value: "2013년" },
  { label: "집도 전문의", value: "서울아산병원" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-border-default"
      style={{ background: "linear-gradient(135deg, #EEF4FC 0%, #F3F7FD 55%, #ffffff 100%)" }}
    >
      {/* Decorative circles — desktop only */}
      <div className="pointer-events-none select-none absolute right-0 top-0 w-[55%] h-full hidden lg:block overflow-hidden">
        <div className="absolute right-[-120px] top-[-80px] w-[500px] h-[500px] rounded-full border border-[#1253A6]/8" />
        <div className="absolute right-[-50px] top-[-10px] w-[360px] h-[360px] rounded-full border border-[#2B9FE8]/10 bg-[#1253A6]/[0.03]" />
        <div className="absolute right-[90px] top-[70px] w-[230px] h-[230px] rounded-full bg-[#2B9FE8]/[0.06]" />
        <div className="absolute right-[170px] top-[110px] w-[140px] h-[140px] rounded-full bg-[#1253A6]/[0.07]" />
        <div className="absolute right-[30px] bottom-[50px] w-[190px] h-[190px] rounded-full border border-[#2B9FE8]/10" />
        <div className="absolute right-[200px] bottom-[30px] w-[90px] h-[90px] rounded-full bg-[#2B9FE8]/[0.05]" />
      </div>

      <div className="relative z-[1] w-full max-w-content mx-auto px-6 pt-14 lg:pt-20 pb-12 lg:pb-16">

        <span className="text-[0.72rem] uppercase tracking-[0.2em] text-accent-gold font-semibold block mb-5">
          SM Plastic Surgery — 강남 · 서울
        </span>

        <h1 className="font-serif-display text-[2.5rem] sm:text-[3.2rem] lg:text-[5rem] font-medium text-text-main leading-[1.1] tracking-tight keep-all mb-6 opacity-0 animate-fade-up">
          가슴성형을
          <br />
          <span className="text-brand">&lsquo;의학&rsquo;</span>으로
          {" "}설계합니다.
        </h1>

        <p className="text-[1rem] lg:text-[1.2rem] text-text-sub leading-[1.85] max-w-lg mb-10 opacity-0 animate-fade-up [animation-delay:0.15s]">
          서울대 의대 출신 이무영 원장이,
          <br />
          12년째 같은 자리에서 직접 집도합니다.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-10 opacity-0 animate-fade-up [animation-delay:0.25s]">
          <a
            href="https://line.me/R/ti/p/@952nqpbr"
            target="_blank"
            rel="noopener noreferrer"
            data-track-location="hero"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#06C755] text-white text-[0.88rem] font-medium rounded-full transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
              <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738C5.384.566 0 4.935 0 10.304c0 4.811 4.27 8.843 10.035 9.608.39.084.922.258 1.057.592.122.302.079.775.038 1.085l-.164 1.026c-.045.303-.24 1.186 1.049.647 1.291-.54 6.957-4.098 9.489-7.016 1.749-1.918 2.496-3.862 2.496-5.942z" />
            </svg>
            LINE으로 상담하기
          </a>
          <a
            href="#procedures"
            className="text-[0.88rem] font-medium text-text-sub hover:text-text-main transition-colors flex items-center gap-1.5"
          >
            수술 정보 보기 ↓
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 opacity-0 animate-fade-up [animation-delay:0.35s]">
          <span className="text-[0.68rem] uppercase tracking-[0.15em] text-text-sub">채널</span>
          {CHANNELS.map((ch) => (
            <a
              key={ch.name}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              data-social={ch.name.toLowerCase()}
              className="text-[0.8rem] font-medium text-text-sub hover:text-text-main transition-colors underline-offset-2 hover:underline"
            >
              {ch.name}
            </a>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#1253A6]/15 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 opacity-0 animate-fade-up [animation-delay:0.45s]">
          {TRUST.map((item) => (
            <div key={item.label} className="pl-3 border-l-2 border-[#2B9FE8]">
              <div className="text-[0.68rem] uppercase tracking-[0.12em] text-text-sub mb-1.5">
                {item.label}
              </div>
              <div className="text-[1.1rem] lg:text-[1.3rem] font-semibold text-text-main font-serif-display">
                {item.value}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


