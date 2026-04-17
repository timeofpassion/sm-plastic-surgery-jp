export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-[120px] flex justify-center">
      <div className="w-full max-w-content px-6">
        <span className="font-serif-display italic text-[0.95rem] text-accent-gold tracking-wider block mb-5">
          후기 · 사회적 증거
        </span>
        <h2 className="font-serif-display text-[2.2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-medium leading-[1.25] mb-16 lg:mb-20 keep-all">
          12년이 남긴 숫자
        </h2>

        <div className="grid md:grid-cols-3 gap-px bg-border-default border border-border-default mb-16">
          {/* 강남언니 */}
          <div className="bg-[#fdfdfd] py-14 px-10 flex flex-col items-center text-center transition-colors hover:bg-gray-50">
            <div className="text-[0.75rem] font-semibold text-white bg-text-main py-1 px-2.5 rounded-sm mb-3 tracking-wide">
              강남언니
            </div>
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4].map((i) => (
                <svg
                  key={i}
                  className="w-4 h-4 fill-brand"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <svg
                className="w-4 h-4 fill-brand opacity-70"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <div className="font-serif-display text-[2.4rem] lg:text-[2.8rem] font-semibold text-brand leading-none mb-3">
              9.7{" "}
              <span className="text-[1.2rem] text-gray-300 font-normal">/ 10</span>
            </div>
            <div className="text-[0.95rem] text-text-sub">
              강남언니 고객 만족 평점
            </div>
          </div>

          {/* 리뷰 수 */}
          <div className="bg-white py-14 px-10 flex flex-col items-center text-center transition-colors hover:bg-gray-50">
            <div className="mb-6 text-accent-gold">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 11-7.6-7.6 8.38 8.38 0 013.8.9L21 3.5v8z" />
              </svg>
            </div>
            <div className="font-serif-display text-[2.4rem] lg:text-[2.8rem] font-semibold text-text-main leading-none mb-3">
              872
            </div>
            <div className="text-[0.95rem] text-text-sub">누적 리얼 후기 데이터</div>
          </div>

          {/* 개원연도 */}
          <div className="bg-white py-14 px-10 flex flex-col items-center text-center transition-colors hover:bg-gray-50">
            <div className="mb-6 text-accent-gold">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM16 2v4M8 2v4M3 10h18" />
              </svg>
            </div>
            <div className="font-serif-display text-[2.4rem] lg:text-[2.8rem] font-semibold text-text-main leading-none mb-3">
              2013
            </div>
            <div className="text-[0.95rem] text-text-sub">
              개원 이래 이전 없는 신뢰
            </div>
          </div>
        </div>

        <p className="text-center text-gray-400 text-[0.85rem] font-light">
          *상세 수술 후기는 한국 의료법에 따라 회원 로그인 후 열람
        </p>
      </div>
    </section>
  );
}
