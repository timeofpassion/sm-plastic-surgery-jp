const CHANNELS = [
  {
    name: "LINE",
    href: "https://line.me/R/ti/p/@952nqpbr",
    bg: "#06C755",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738C5.384.566 0 4.935 0 10.304c0 4.811 4.27 8.843 10.035 9.608.39.084.922.258 1.057.592.122.302.079.775.038 1.085l-.164 1.026c-.045.303-.24 1.186 1.049.647 1.291-.54 6.957-4.098 9.489-7.016 1.749-1.918 2.496-3.862 2.496-5.942zM7.591 13.078H5.206a.515.515 0 01-.515-.514V7.788a.515.515 0 111.03 0v4.264h1.87a.515.515 0 110 1.026zm2.02-.514a.515.515 0 11-1.03 0V7.788a.515.515 0 111.03 0v4.776zm5.761 0a.515.515 0 01-.927.307l-2.44-3.321v2.999a.515.515 0 11-1.03 0V7.788a.515.515 0 01.928-.307l2.44 3.322v-3a.515.515 0 111.029 0v4.776zm3.889-2.903a.515.515 0 110 1.03h-1.871v1.187h1.871a.515.515 0 110 1.03h-2.386a.515.515 0 01-.514-.514V7.788a.515.515 0 01.514-.515h2.386a.515.515 0 110 1.03h-1.871v1.358z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@smplasticsurgery",
    bg: "#FF0000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sm_official_jp",
    bg: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Ameba",
    href: "https://ameblo.jp/sm-official-jp/",
    bg: "#FFFFFF",
    icon: <img src="/logo_ameba.png" alt="Ameba" className="w-4 h-4 object-contain" />,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@smps_jp8888",
    bg: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V8.52a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.39z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/smps8888",
    bg: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
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
        <div className="absolute right-[-120px] top-[-80px] w-[500px] h-[500px] rounded-full border border-[#5B9BD5]/8" />
        <div className="absolute right-[-50px] top-[-10px] w-[360px] h-[360px] rounded-full border border-[#7EC8E3]/10 bg-[#5B9BD5]/[0.03]" />
        <div className="absolute right-[90px] top-[70px] w-[230px] h-[230px] rounded-full bg-[#7EC8E3]/[0.06]" />
        <div className="absolute right-[170px] top-[110px] w-[140px] h-[140px] rounded-full bg-[#5B9BD5]/[0.07]" />
        <div className="absolute right-[30px] bottom-[50px] w-[190px] h-[190px] rounded-full border border-[#7EC8E3]/10" />
        <div className="absolute right-[200px] bottom-[30px] w-[90px] h-[90px] rounded-full bg-[#7EC8E3]/[0.05]" />
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

        <div className="flex flex-wrap items-center gap-3 opacity-0 animate-fade-up [animation-delay:0.35s]">
{CHANNELS.map((ch) => (
            <a
              key={ch.name}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ch.name}
              data-social={ch.name.toLowerCase()}
              title={ch.name}
              className="w-7 h-7 rounded-full flex items-center justify-center shadow-sm transition-transform hover:scale-110 hover:shadow-md border border-black/10"
              style={{ background: ch.bg, color: ch.name === "Ameba" ? "#000" : "#fff" }}
            >
              {ch.icon}
            </a>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#5B9BD5]/15 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 opacity-0 animate-fade-up [animation-delay:0.45s]">
          {TRUST.map((item) => (
            <div key={item.label} className="pl-3 border-l-2 border-[#7EC8E3]">
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


