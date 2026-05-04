"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

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
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="gallery" className="bg-white pt-0">
      {/* Swiper 슬라이드 스케일 효과 */}
      <style>{`
        .ba-swiper .swiper-slide {
          width: 92%;
          transition: transform 0.4s ease, opacity 0.4s ease;
          transform: scale(0.94);
          opacity: 0.8;
        }
        @media (min-width: 768px) {
          .ba-swiper .swiper-slide {
            width: 62%;
            transform: scale(0.82);
            opacity: 0.7;
          }
        }
        .ba-swiper .swiper-slide-active {
          transform: scale(1) !important;
          opacity: 1 !important;
        }
      `}</style>

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

          {/* Swiper 슬라이더 */}
          <div className="mb-10" style={{ paddingTop: "12px", paddingBottom: "12px" }}>
            <Swiper
              className="ba-swiper"
              modules={[Autoplay]}
              centeredSlides={true}
              slidesPerView="auto"
              spaceBetween={20}
              loop={true}
              autoplay={{ delay: 1500, disableOnInteraction: false, pauseOnMouseEnter: true }}
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
            >
              {BA_PAIRS.map((pair) => (
                <SwiperSlide key={pair.id}>
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
                </SwiperSlide>
              ))}
            </Swiper>

            {/* 이전/다음 버튼 */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all"
                aria-label="이전"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all"
                aria-label="다음"
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
