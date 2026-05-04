const MAP_LINK = "https://maps.app.goo.gl/FJaPvLH2QK8hqwBc9";
const LINE_URL = "https://line.me/R/ti/p/@952nqpbr";

export default function Footer() {
  return (
    <footer className="flex justify-center" style={{ background: "#162030" }}>
      <div className="w-full max-w-content px-6 pt-16 pb-10">

        {/* 로고 + 클리닉명 */}
        <div className="mb-12">
          <img
            src="/logo_smps.png"
            alt="SM美容外科"
            className="h-8 mb-3"
            style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
          />
          <p className="text-white/40 text-[0.78rem] tracking-wide">에스엠성형외과</p>
        </div>

        {/* 3열 그리드 */}
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-10 mb-12">
          <div>
            <h5 className="text-[0.72rem] text-[#7EC8E3] uppercase mb-3 font-semibold tracking-[0.2em]">
              Access
            </h5>
            <p className="text-[0.9rem] text-white/70 leading-[1.8]">
              서울시 서초구 강남대로 435 주류성빌딩 9층
              <br />
              <span className="text-white/45 text-[0.82rem]">(강남역 3번 출구 도보 3분)</span>
            </p>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-[0.78rem] text-[#7EC8E3] hover:underline"
            >
              Google 지도로 확인 →
            </a>
          </div>
          <div>
            <h5 className="text-[0.72rem] text-[#7EC8E3] uppercase mb-3 font-semibold tracking-[0.2em]">
              Hours
            </h5>
            <p className="text-[0.9rem] text-white/70 leading-[1.8]">
              평일 10:00–19:00
              <br />
              토요일 10:00–16:00
              <br />
              일요일·공휴일 휴진
            </p>
          </div>
          <div>
            <h5 className="text-[0.72rem] text-[#7EC8E3] uppercase mb-3 font-semibold tracking-[0.2em]">
              Clinic
            </h5>
            <p className="text-[0.9rem] text-white/70 leading-[1.8]">
              원장 이무영
              <br />
              에스엠성형외과
            </p>
          </div>
        </div>

        {/* 사업자 정보 행 */}
        <div className="py-6 border-t border-white/10 text-[0.75rem] text-white/35 leading-[2.2] space-y-0.5">
          <p>
            TEL: +82-507-1324-3707　｜　E-mail: jp@sm-ps.co.kr　｜
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/55 transition-colors"
            >
              LINE: @952nqpbr
            </a>
          </p>
          <p>
            대표자: 이무영　｜　사업자등록번호: [TBD_BUSINESS_REG]　｜　주소: 서울시 서초구 강남대로 435 주류성빌딩 9층
          </p>
        </div>

        {/* 의료고지 + Copyright */}
        <div className="pt-6 border-t border-white/10">
          {/* [REVIEW_LEGAL] 한국 의료광고법 표기 기준 검토 필요 - 라이브 머지 전 확정 */}
          <p className="text-[0.78rem] text-white/35 leading-[1.8] mb-4">
            시술 결과는 개인차가 있습니다. 출혈·감염·비대칭·혈종·보형물 관련 합병증 등의 부작용이 발생할 수 있습니다. 자세한 내용은 상담 시 설명드립니다.
            <br />
            본 페이지는 의료광고 가이드라인에 따라 제작되었습니다.
          </p>
          <p className="text-[0.72rem] text-white/25">
            © 2013-2026 에스엠성형외과 All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
