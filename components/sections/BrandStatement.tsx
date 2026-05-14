export default function BrandStatement() {
  return (
    <section
      id="brand-statement"
      className="relative overflow-hidden bg-black"
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Logo top */}
      <div className="relative z-10 pt-10 lg:pt-14 flex justify-center">
        <img
          src="/logo_smps.png"
          alt="SM Plastic Surgery"
          className="h-8 lg:h-10 w-auto"
          style={{
            filter: "brightness(1.2) invert(1)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
        {/* Left empty - image bleeds in via absolute bg above */}
        <div className="hidden lg:block" />

        <div>
          <h2 className="font-serif-display font-bold text-[1.75rem] sm:text-[2.3rem] lg:text-[3.4rem] leading-[1.25] text-white keep-all mb-6 lg:mb-8">
            에스엠성형외과는 가슴과 눈성형에 <span className="text-accent-gold">집중</span>하는 클리닉입니다.
          </h2>

          <p className="text-[0.95rem] lg:text-[1.05rem] text-white/90 leading-[1.9] keep-all mb-10 max-w-[520px]">
            에스엠성형외과는 2013년 개원 이후 강남역 동일 위치를 지키고 있습니다. 원장 이전·분원 없이, 개원 12년째 같은 원장이 같은 자리에서 환자를 맞이합니다. 1년 후, 5년 후에도 같은 문을 열면 같은 원장이 기다립니다.
            <br />
            <br />
            LINE 상담부터 예약·방한 안내·수술실 통역·귀국 후 문의사항 응대까지 일본 전담 통역이 전 과정을 담당합니다. '통역이 있는 병원'이 아닌 '끝까지 책임지는 전담 통역이 있는 병원'입니다.
            <br />
            <br />
            흉곽·피부 상태·생활 패턴을 진단해 그 사람만의 방법을 설계합니다. '왜 이 환자에겐 이 방법이 최적인가'를 설명할 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
