export default function BrandStatement() {
  return (
    <section
      id="brand-statement"
      className="relative overflow-hidden bg-gradient-to-br from-[#eaf1fb] via-[#d8e6f5] to-[#a9c4e2]"
    >
      {/* Right side doctor photo */}
      <div
        className="absolute right-0 top-0 w-full lg:w-1/2 h-full bg-cover bg-center opacity-90 lg:opacity-100"
        style={{
          backgroundImage: "url('/herosection.png')",
          backgroundPosition: "center top",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 30%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 30%, black 100%)",
        }}
      />
      {/* Mobile overlay for readability */}
      <div className="absolute inset-0 lg:hidden bg-white/70" />

      {/* Logo top */}
      <div className="relative z-10 pt-10 lg:pt-14 flex justify-center">
        <img
          src="/logo_smps.png"
          alt="SM Plastic Surgery"
          className="h-8 lg:h-10 w-auto opacity-90"
          style={{
            filter:
              "brightness(0.45) hue-rotate(208deg) saturate(2.2) contrast(1.1)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
        <div>
          <h2 className="font-serif-display font-bold text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.25] text-text-main keep-all mb-8">
            가슴성형을{" "}
            <span className="text-brand">&lsquo;시술&rsquo;</span>이 아닌
            <br />
            <span className="text-brand">&lsquo;의학&rsquo;</span>으로
            설계합니다.
          </h2>

          <p className="text-[0.95rem] lg:text-[1.05rem] text-text-main/80 leading-[1.9] keep-all mb-10 max-w-[520px]">
            모든 수술이 서울대 의대 출신 이무영 원장의 직접 진단으로 시작됩니다.
            <br />
            한 분 한 분의 흉곽·피부·생활 패턴을 읽고 그에 맞춰 설계하는 맞춤 수술.
            <br />
            유행보다 본질을, 장비보다 원장의 12년 손기술을 중시하는
            <br />
            에스엠성형외과입니다.
          </p>

          <a
            href="https://line.me/R/ti/p/@952nqpbr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-white text-[0.95rem] lg:text-[1rem] font-medium py-4 px-8 rounded-full transition-all hover:bg-brand-hover hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/20"
          >
            상담 · 문의하기
            <span className="text-[1.1rem]">→</span>
          </a>
        </div>

        {/* Right empty - image bleeds in via absolute bg above */}
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
