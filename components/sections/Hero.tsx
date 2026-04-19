export default function Hero() {
  return (
    <section
      id="hero"
      className="relative lg:min-h-screen lg:flex lg:items-center lg:justify-center pt-10 pb-14 lg:py-0 bg-bg-base lg:bg-[linear-gradient(to_right,#ffffff_55%,#f5f6f8_55%)]"
    >
      <div className="w-full max-w-content px-6 grid lg:grid-cols-2 gap-8 lg:gap-20 lg:items-center relative z-[2]">
        {/* Hero content */}
        <div className="order-1 py-0 lg:py-16 opacity-0 animate-fade-up">
          <span className="font-serif-display italic text-[0.9rem] text-accent-gold tracking-widest block mb-6">
            PREMIUM BREAST AUGMENTATION
          </span>

          <h1 className="font-serif-display text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-medium text-text-main leading-[1.15] tracking-tight mb-8 keep-all">
            가슴성형,
            <br />
            깊이 있게 합니다.
          </h1>

          <div className="w-10 h-px bg-brand mb-8" />

          <h2 className="text-[1.3rem] lg:text-[1.45rem] font-medium text-text-main leading-snug mb-12 keep-all">
            서울대 의대 출신 이무영 원장이,
            <br />
            12년째 같은 자리에서 직접 집도합니다.
          </h2>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="https://line.me/R/ti/p/@952nqpbr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-[0.9rem] font-medium tracking-wide bg-brand text-white border border-brand rounded-full min-w-[220px] transition-all hover:bg-brand-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/20"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2.5 fill-current"
              >
                <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.122.301.079.766.038 1.08l-.164 1.02c-.045.281-.24 1.139 1.002.616 1.24-.523 6.694-3.951 9.176-6.764C23.232 14.394 24 12.454 24 10.304z" />
              </svg>
              LINE으로 상담하기
            </a>
          </div>

        </div>

        {/* Hero Visual — Trust Board as main visual */}
        <div className="order-2 relative w-full opacity-0 animate-fade-left">
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <TrustCard label="Rating" value="강남언니 9.7" icon="star" />
            <TrustCard label="Experience" value="리뷰 872건" icon="file" />
            <TrustCard label="Established" value="개원 2013" icon="calendar" />
            <TrustCard
              label="Credentials"
              value="아산병원 전문의"
              icon="activity"
            />
          </div>
          <span className="hidden lg:block mt-8 text-center text-[0.65rem] text-text-sub tracking-[0.3em] uppercase">
            SEOUL · KR — EST. 2013
          </span>
        </div>
      </div>
    </section>
  );
}

function TrustCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: "star" | "file" | "calendar" | "activity";
}) {
  const iconPaths: Record<string, React.ReactNode> = {
    calendar: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </>
    ),
  };

  return (
    <div className="flex flex-col items-start gap-4 p-6 lg:p-8 bg-white border border-border-default rounded-sm transition-all hover:border-brand hover:shadow-lg hover:shadow-blue-100/60">
      {/* Icon */}
      <div className="w-11 h-11 flex items-center justify-center">
        {icon === "star" || icon === "file" ? (
          <img
            src="/gangnam.png"
            alt="강남언니"
            className="w-10 h-10 object-contain"
          />
        ) : icon === "activity" ? (
          <img
            src="/asan.jpg"
            alt="서울아산병원"
            className="w-10 h-10 object-contain rounded-sm"
          />
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8"
            stroke="#1e3a5f"
            strokeWidth="1.5"
            fill="none"
          >
            {iconPaths[icon]}
          </svg>
        )}
      </div>

      {/* Label */}
      <span className="text-[0.7rem] uppercase tracking-[0.15em] text-accent-gold font-semibold">
        {label}
      </span>

      {/* Value */}
      <div className="text-[1.1rem] lg:text-[1.25rem] font-semibold text-text-main leading-tight keep-all">
        {value}
      </div>
    </div>
  );
}
