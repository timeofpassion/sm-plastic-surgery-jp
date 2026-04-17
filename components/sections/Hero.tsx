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
              className="inline-flex items-center justify-center px-8 py-4 text-[0.9rem] font-medium tracking-wide bg-brand text-white border border-brand rounded-sm min-w-[200px] transition-all hover:bg-brand-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/15"
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

          {/* Trust Board */}
          <div className="border-t-2 border-text-main pt-8 grid grid-cols-2 gap-x-5 gap-y-6">
            <TrustItem label="Rating" value="강남언니 9.7" icon="star" />
            <TrustItem label="Experience" value="리뷰 872건" icon="file" />
            <TrustItem label="Established" value="개원 2013" icon="calendar" />
            <TrustItem label="Credentials" value="아산병원 전문의" icon="activity" />
          </div>
        </div>

        {/* Hero Visual */}
        <div className="order-2 relative h-[420px] sm:h-[500px] lg:h-[700px] w-full flex items-center justify-center opacity-0 animate-fade-left">
          <div className="hidden lg:block absolute top-0 right-0 w-4/5 h-full border border-border-default translate-x-5 -translate-y-5 z-[1]" />
          <div className="relative w-full lg:w-[90%] h-full lg:h-[90%] z-[2] overflow-hidden shadow-2xl shadow-black/10">
            <img
              src="/doctor_white.png"
              alt="이무영 원장"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <span className="hidden lg:block absolute -bottom-8 right-0 text-[0.6rem] text-text-sub tracking-[0.2em] origin-bottom-right -rotate-90">
            SEOUL. KR — EST. 2013
          </span>
        </div>
      </div>
    </section>
  );
}

function TrustItem({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: "star" | "file" | "calendar" | "activity";
}) {
  const iconPaths: Record<string, React.ReactNode> = {
    star: (
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    ),
    file: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </>
    ),
    activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="text-[0.7rem] uppercase tracking-[0.15em] text-accent-gold font-semibold">
        {label}
      </span>
      <div className="text-[1.05rem] lg:text-[1.1rem] font-semibold text-text-main flex items-center gap-2">
        {icon === "star" || icon === "file" ? (
          <img
            src="/gangnam.png"
            alt="강남언니"
            className="w-5 h-5 shrink-0 object-contain"
          />
        ) : icon === "activity" ? (
          <img
            src="/asan.jpg"
            alt="서울아산병원"
            className="w-5 h-5 shrink-0 object-contain"
          />
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 shrink-0"
            stroke="#c5a880"
            strokeWidth="1.8"
            fill="none"
          >
            {iconPaths[icon]}
          </svg>
        )}
        {value}
      </div>
    </div>
  );
}
