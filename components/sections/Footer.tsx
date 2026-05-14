const MAP_LINK = "https://maps.app.goo.gl/FJaPvLH2QK8hqwBc9";
const LINE_URL = "https://line.me/R/ti/p/@952nqpbr";

const USEFUL_LINKS = [
  { label: "주력 시술", href: "#procedures" },
  { label: "대표원장", href: "#director" },
  { label: "Before & After", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "상담·문의", href: "#consultation" },
];

const SOCIAL_LINKS = [
  {
    label: "LINE",
    href: LINE_URL,
    bg: "#06C755",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738C5.384.566 0 4.935 0 10.304c0 4.811 4.27 8.843 10.035 9.608.39.084.922.258 1.057.592.122.302.079.775.038 1.085l-.164 1.026c-.045.303-.24 1.186 1.049.647 1.291-.54 6.957-4.098 9.489-7.016 1.749-1.918 2.496-3.862 2.496-5.942z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sm_official_jp",
    bg: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@smplasticsurgery",
    bg: "#FF0000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/smps8888",
    bg: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@smps_jp8888",
    bg: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V8.52a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.39z" />
      </svg>
    ),
  },
  {
    label: "Ameba",
    href: "https://ameblo.jp/sm-official-jp/",
    bg: "#FFFFFF",
    icon: <img src="/logo_ameba.png" alt="Ameba" className="w-5 h-5 object-contain" />,
  },
];

export default function Footer() {
  return (
    <footer className="flex justify-center" style={{ background: "#162030" }}>
      <div className="w-full max-w-content px-6 pt-16 pb-10">

        {/* 4컬럼 그리드 — shadcn Footer 패턴 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">

          {/* 1. 로고 + 회사 설명 + 주소 */}
          <div className="lg:col-span-1">
            <img
              src="/logo_smps.png"
              alt="SM美容外科"
              className="h-8 mb-4"
              style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
            />
            <p className="text-white/60 text-[0.85rem] leading-[1.85] mb-5 keep-all">
              강남역 12년, 가슴성형을 의학으로 설계합니다. 서울대 의대 출신 이무영 원장이 직접 집도합니다.
            </p>
            <p className="text-[0.78rem] text-white/55 leading-[1.7]">
              서울시 서초구 강남대로 435
              <br />
              주류성빌딩 9층
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

          {/* 2. 주요 메뉴 */}
          <div>
            <h5 className="text-[0.72rem] text-[#7EC8E3] uppercase mb-4 font-semibold tracking-[0.2em]">
              주요 메뉴
            </h5>
            <ul className="space-y-2.5">
              {USEFUL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.88rem] text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. 진료 시간 + Follow */}
          <div>
            <h5 className="text-[0.72rem] text-[#7EC8E3] uppercase mb-4 font-semibold tracking-[0.2em]">
              Hours
            </h5>
            <p className="text-[0.85rem] text-white/65 leading-[1.85] mb-6">
              평일 10:00–19:00
              <br />
              토요일 10:00–16:00
              <br />
              일요일·공휴일 휴진
            </p>
            <h5 className="text-[0.72rem] text-[#7EC8E3] uppercase mb-3 font-semibold tracking-[0.2em]">
              Follow
            </h5>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-sm transition-transform hover:scale-110"
                  style={{ background: s.bg }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 4. LINE CTA — newsletter 대체 */}
          <div>
            <h5 className="text-[0.72rem] text-[#7EC8E3] uppercase mb-4 font-semibold tracking-[0.2em]">
              LINE 무료 상담
            </h5>
            <p className="text-[0.82rem] text-white/55 leading-[1.7] mb-4 keep-all">
              전담 스태프가 1:1로 응대합니다. 일본어 상담 가능.
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-track-location="footer"
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full text-white text-[0.85rem] font-semibold transition-opacity hover:opacity-90"
              style={{ background: "#06C755" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738C5.384.566 0 4.935 0 10.304c0 4.811 4.27 8.843 10.035 9.608.39.084.922.258 1.057.592.122.302.079.775.038 1.085l-.164 1.026c-.045.303-.24 1.186 1.049.647 1.291-.54 6.957-4.098 9.489-7.016 1.749-1.918 2.496-3.862 2.496-5.942z" />
              </svg>
              LINE으로 상담하기
            </a>
            <p className="text-[0.72rem] text-white/35 mt-3 text-center">
              TEL: +82-507-1324-3707
              <br />
              E-mail: jp@sm-ps.co.kr
            </p>
          </div>

        </div>

        {/* 사업자 정보 행 */}
        <div className="py-6 border-t border-white/10 text-[0.75rem] text-white/35 leading-[2.2] space-y-0.5">
          <p>
            대표자: 이무영　｜　사업자등록번호: [TBD_BUSINESS_REG]　｜　주소: 서울시 서초구 강남대로 435 주류성빌딩 9층
          </p>
        </div>

        {/* 의료고지 + Copyright */}
        <div className="pt-6 border-t border-white/10">
          {/* [REVIEW_LEGAL] 한국 의료광고법 표기 기준 검토 필요 - 라이브 머지 전 확정 */}
          <p className="text-[0.78rem] text-white/35 leading-[1.8] mb-4 keep-all">
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
