export default function Footer() {
  return (
    <footer className="py-20 flex justify-center border-t border-border-default" style={{ background: "linear-gradient(160deg, #071830 0%, #0A2458 60%, #0D2E6A 100%)" }}>
      <div className="w-full max-w-content px-6">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-10 mb-14">
          <div>
            <h5 className="text-[0.75rem] text-[#2B9FE8] uppercase mb-3 font-semibold tracking-wider">
              Address
            </h5>
            <p className="text-[0.9rem] text-white/80 leading-[1.8] keep-all">
              서울시 서초구 강남대로 435 주류성빌딩 9층
              <br />
              (강남역 3번 출구 도보 3분)
            </p>
          </div>
          <div>
            <h5 className="text-[0.75rem] text-[#2B9FE8] uppercase mb-3 font-semibold tracking-wider">
              Hours
            </h5>
            <p className="text-[0.9rem] text-white/80 leading-[1.8]">
              평일 10:00–19:00
              <br />
              토요일 10:00–16:00
              <br />
              일요일·공휴일 휴진
            </p>
          </div>
          <div>
            <h5 className="text-[0.75rem] text-[#2B9FE8] uppercase mb-3 font-semibold tracking-wider">
              Clinic
            </h5>
            <p className="text-[0.9rem] text-white/80 leading-[1.8]">
              대표원장 이무영
              <br />
              에스엠성형외과의원
            </p>
          </div>
        </div>
        <div className="pt-10 border-t border-white/10 text-[0.8rem] text-white/40 leading-relaxed">
          의료법 제56조 의료광고 규정을 준수합니다. 수술 결과는 개인차가 있으며,
          부작용(출혈·감염·비대칭·혈종·보형물 관련 합병증 등)이 발생할 수 있습니다.
          상세 상담 시 안내드립니다.
        </div>
      </div>
    </footer>
  );
}
