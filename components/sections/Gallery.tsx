"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

const BA_PAIRS = [
  {
    id: 1,
    label: "가슴 확대 / 증례1",
    before: "/ba_가슴_01_before.png",
    after: "/ba_가슴_01_after.png",
  },
  {
    id: 2,
    label: "하이브리드 가슴성형 / 증례1",
    before: "/ba_가슴_02_before.png",
    after: "/ba_가슴_02_after.png",
  },
];

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    containScroll: "keepSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="gallery" className="bg-white pt-0">
      <div
        className="bg-brand overflow-hidden"
        style={{ borderRadius: "80px 80px 0 0" }}
      >
        <div className="py-20 lg:py-32">

          {/* 섹션 헤더 */}
          <div className="w-full max-w-content mx-auto px-6 text-center mb-16">
            <span
              className="label-en block mb-6"
              style={{ color: "#ffffff", textDecorationColor: "rgba(255,255,255,0.6)" }}
            >
              Before &amp; After
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.8rem] font-bold text-white leading-[1.35] keep-all">
              에스엠성형외과의
              <br />
              비포·애프터는
              <br />
              과장된 가공·연출을 지양합니다.
            </h2>
          </div>

          {/* 슬라이더 */}
          <div className="mb-10">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-5 pl-[10%] md:pl-[20%]">
                {BA_PAIRS.map((pair) => (
                  <div
                    key={pair.id}
                    className="flex-[0_0_80%] md:flex-[0_0_60%] shrink-0"
                  >
                    <div className="border-4 border-white/80 rounded-2xl overflow-hidden">
                      <div className="relative grid grid-cols-2">
                        {/* Before */}
                        <div className="relative" style={{ aspectRatio: "4/5" }}>
                          <img
                            src={pair.before}
                            alt={`${pair.label} Before`}
                            className="absolute inset-0 w-full h-full object-cover object-top"
                          />
                          <span className="absolute bottom-3 left-3 text-white text-[0.72rem] font-bold bg-black/50 px-2 py-0.5 rounded-sm z-[1]">
                            Before
                          </span>
                        </div>
                        {/* After */}
                        <div className="relative" style={{ aspectRatio: "4/5" }}>
                          <img
                            src={pair.after}
                            alt={`${pair.label} After`}
                            className="absolute inset-0 w-full h-full object-cover object-top"
                          />
                          <span className="absolute bottom-3 left-3 text-white text-[0.72rem] font-bold bg-black/50 px-2 py-0.5 rounded-sm z-[1]">
                            After
                          </span>
                        </div>
                        {/* 가운데 화살표 */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand border-2 border-white flex items-center justify-center shadow-lg pointer-events-none z-[2]">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                            <polyline points="9 6 15 12 9 18" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-white/60 text-[0.8rem] mt-4">{pair.label}</p>
                  </div>
                ))}
                {/* 우측 여백 */}
                <div className="flex-[0_0_10%] md:flex-[0_0_20%] shrink-0" />
              </div>
            </div>

            {/* 이전/다음 버튼 */}
            <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all"
                aria-label="前へ"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={scrollNext}
                className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all"
                aria-label="次へ"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </button>
            </div>
          </div>

          {/* 하단 본문 */}
          <div className="w-full max-w-content mx-auto px-6 text-center">
            <p className="text-white/70 text-[0.9rem] lg:text-[0.95rem] leading-[2] keep-all">
              모든 결과는
              <br />
              실제 수술 과정과 회복을 바탕으로 하며,
              <br />
              환자 체형에 따른 차이를 충분히 설명합니다.
              <br />
              결과는 사진보다 진단과 과정이 중요합니다.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
