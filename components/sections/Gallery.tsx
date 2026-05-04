"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

const BA_PAIRS = [
  { id: 1, label: "豊胸拡大 / 症例1" },
  { id: 2, label: "ハイブリッド豊胸 / 症例1" },
  { id: 3, label: "豊胸再手術 / 症例1" },
];

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: false,
    containScroll: "keepSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="gallery" className="bg-white pt-0">
      {/* 상단 곡선 cutout — 흰 배경에서 블루로 자연스럽게 */}
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
              SM美容外科の
              <br />
              ビフォー・アフターは、
              <br />
              過剰な加工や演出を控えます。
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
                    {/* Before/After 카드 */}
                    <div className="border-4 border-white/80 rounded-2xl overflow-hidden">
                      <div className="relative grid grid-cols-2">
                        {/* Before placeholder */}
                        <div
                          className="flex items-center justify-center bg-gray-200 relative"
                          style={{ aspectRatio: "4/5" }}
                        >
                          <span className="text-gray-400 text-[0.72rem] font-medium">[TBD_BA_PHOTOS]</span>
                          <span className="absolute bottom-3 left-3 text-white text-[0.72rem] font-bold bg-black/50 px-2 py-0.5 rounded-sm">
                            Before
                          </span>
                        </div>
                        {/* After placeholder */}
                        <div
                          className="flex items-center justify-center bg-gray-300 relative"
                          style={{ aspectRatio: "4/5" }}
                        >
                          <span className="text-gray-500 text-[0.72rem] font-medium">[TBD_BA_PHOTOS]</span>
                          <span className="absolute bottom-3 left-3 text-white text-[0.72rem] font-bold bg-black/50 px-2 py-0.5 rounded-sm">
                            After
                          </span>
                        </div>
                        {/* 가운데 화살표 */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand border-2 border-white flex items-center justify-center shadow-lg pointer-events-none z-[1]">
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
              すべての結果は<br />
              実際の手術過程と回復をもとにし、<br />
              患者の体型による差を十分に説明します。<br />
              結果は写真より診断と過程が重要だと考えています。
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
