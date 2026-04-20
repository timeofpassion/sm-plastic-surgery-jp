const CHECKLIST = [
  "현재 가슴 상태와 고민",
  "원하는 결과의 방향 (참고 사진 환영)",
  "이전 수술 경험 (해당 시)",
  "방한 가능한 시기",
  "예산 범위",
];

const LINE_URL = "https://line.me/R/ti/p/@952nqpbr";

export default function Consultation() {
  return (
    <section
      id="consultation"
      className="py-12 lg:py-[70px] flex justify-center bg-bg-sub-alt"
    >
      <div className="w-full max-w-content px-6 text-center">
        <span className="font-serif-display italic text-[0.95rem] text-accent-gold tracking-wider block mb-5">
          상담 예약
        </span>

        <h2 className="font-serif-display text-[1.6rem] sm:text-[2rem] lg:text-[3rem] font-medium leading-[1.25] mb-6 keep-all">
          상담을 원하시면{" "}
          <span className="inline-block bg-brand text-white px-3 py-1">
            LINE
          </span>
          으로 문의해주세요.
        </h2>

        <p className="text-[1.05rem] lg:text-[1.15rem] text-text-sub max-w-[640px] mx-auto mb-14 font-light keep-all">
          일본 전문 통역 담당자가 일본어로 1:1 응대해드립니다.
          <br />
          상담부터 수술, 귀국 후 사후관리까지 동일한 담당자가 함께합니다.
        </p>

        {/* LINE CTA */}
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-track-location="consultation"
          className="inline-flex items-center justify-center gap-3 bg-[#06C755] text-white text-[1.1rem] lg:text-[1.25rem] font-semibold py-5 px-12 rounded-full shadow-lg shadow-[#06C755]/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#06C755]/40 mb-20"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738C5.384.566 0 4.935 0 10.304c0 4.811 4.27 8.843 10.035 9.608.39.084.922.258 1.057.592.122.302.079.775.038 1.085l-.164 1.026c-.045.303-.24 1.186 1.049.647 1.291-.54 6.957-4.098 9.489-7.016 1.749-1.918 2.496-3.862 2.496-5.942zM7.591 13.078H5.206a.515.515 0 01-.515-.514V7.788a.515.515 0 111.03 0v4.264h1.87a.515.515 0 110 1.026zm2.02-.514a.515.515 0 11-1.03 0V7.788a.515.515 0 111.03 0v4.776zm5.761 0a.515.515 0 01-.927.307l-2.44-3.321v2.999a.515.515 0 11-1.03 0V7.788a.515.515 0 01.928-.307l2.44 3.322v-3a.515.515 0 111.029 0v4.776zm3.889-2.903a.515.515 0 110 1.03h-1.871v1.187h1.871a.515.515 0 110 1.03h-2.386a.515.515 0 01-.514-.514V7.788a.515.515 0 01.514-.515h2.386a.515.515 0 110 1.03h-1.871v1.358z" />
          </svg>
          LINE으로 상담 시작하기
        </a>

        {/* Checklist */}
        <div className="max-w-[640px] mx-auto bg-white border border-border-default p-8 lg:p-10 mb-14">
          <h3 className="font-serif-display text-[1.1rem] font-semibold text-text-main mb-5">
            상담 전 준비하시면 좋아요
          </h3>
          <ul className="text-left space-y-3">
            {CHECKLIST.map((item) => (
              <li
                key={item}
                className="relative pl-5 text-[0.95rem] text-text-sub before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-2.5 before:h-px before:bg-accent-gold"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
