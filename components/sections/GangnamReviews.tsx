"use client";

import { useEffect, useState } from "react";

const REVIEWS = [
  "/gangnam_review_02.png",
  "/gangnam_review_03.png",
  "/gangnam_review_04.png",
  "/gangnam_review_05.png",
  "/gangnam_review_06.png",
];

const LINE_URL = "https://line.me/R/ti/p/@952nqpbr";

const VISIBLE = 3;

export default function GangnamReviews() {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const maxIndex = Math.max(0, REVIEWS.length - VISIBLE);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  // ESC key to close lightbox
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section
      id="gangnam-reviews"
      className="pt-8 pb-12 lg:pt-10 lg:pb-[70px] flex justify-center bg-bg-sub-alt"
    >
      <div className="w-full max-w-content px-6">
        <div className="flex items-center gap-3 mb-3">
          <img
            src="/gangnam.png"
            alt="강남언니"
            className="w-7 h-7 object-contain"
          />
          <span className="font-serif-display italic text-[0.95rem] text-accent-gold tracking-wider">
            강남언니 리뷰
          </span>
        </div>
        <h2 className="font-serif-display text-[1.6rem] sm:text-[2rem] lg:text-[2.8rem] font-medium leading-[1.3] mb-10 keep-all">
          실제 환자들의 생생한 후기
        </h2>

        {/* Hero card — code-generated (no model photo) */}
        <div className="mb-10 lg:mb-12 w-full max-w-[780px] mx-auto bg-white border border-border-default rounded-md overflow-hidden shadow-md">
          {/* Top app bar */}
          <div className="flex items-center justify-between px-5 py-3 bg-white border-b border-border-default">
            <div className="flex items-center gap-2">
              <img src="/gangnam.png" alt="" className="w-6 h-6 object-contain" />
              <span className="font-bold text-[0.95rem] text-[#ff5c3a] tracking-tight">
                カンナムオンニ
              </span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9ca3af"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span className="text-[0.75rem] text-gray-500 px-2.5 py-1 border border-border-default rounded-full">
                ログイン/登録
              </span>
            </div>
          </div>

          {/* Blue banner with SMPS mark */}
          <div
            className="relative h-[200px] sm:h-[240px] flex items-center justify-center overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #1e3a5f 0%, #2c5282 55%, #0f1f38 100%)",
            }}
          >
            {/* decorative circles */}
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-14 -right-10 w-52 h-52 rounded-full bg-white/5" />

            <div className="relative flex flex-col items-center text-white text-center px-4">
              <div className="font-black text-[3rem] sm:text-[4rem] leading-none tracking-tight mb-3">
                SMPS
              </div>
              <div className="text-[0.8rem] sm:text-[0.9rem] opacity-90 tracking-[0.3em] uppercase mb-2">
                SM Plastic Surgery
              </div>
              <div className="text-[0.7rem] opacity-70 tracking-[0.2em]">
                韓国 江南 · EST. 2013
              </div>
            </div>
          </div>

          {/* Info section */}
          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-[1.25rem] sm:text-[1.4rem] font-bold text-text-main">
                SM美容外科医院
              </h3>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d1d5db"
                strokeWidth="1.8"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#f5b800"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="font-bold text-text-main text-[1rem]">9.6</span>
              <span className="text-text-sub text-[0.9rem]">口コミ 887件</span>
            </div>

            <div className="flex items-start gap-2 text-[0.85rem] text-text-sub">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="shrink-0 mt-0.5"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>
                Sinnonhyeon stn. · 435, Gangnam-daero, Seocho-gu, Seoul, Korea
              </span>
            </div>

            <div className="mt-5 pt-4 border-t border-border-default grid grid-cols-3 text-center text-[0.8rem]">
              <div className="pb-2 border-b-2 border-text-main font-semibold text-text-main">
                クリニック情報
              </div>
              <div className="text-text-sub">イベント料金</div>
              <div className="text-text-sub">施術口コミ</div>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="relative mb-10">
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="이전"
            className="absolute left-0 lg:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white border border-border-default shadow-md flex items-center justify-center transition-all hover:border-brand disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="overflow-hidden mx-10 lg:mx-14">
            <div
              className="flex gap-5 lg:gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(-${index} * (100% / ${VISIBLE}) - ${
                  (index * 20) / VISIBLE
                }px))`,
              }}
            >
              {REVIEWS.map((src, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setLightbox(src)}
                  className="shrink-0 rounded-md overflow-hidden bg-white border border-border-default transition-all hover:border-brand hover:shadow-lg cursor-zoom-in"
                  style={{
                    width: `calc((100% - ${(VISIBLE - 1) * 24}px) / ${VISIBLE})`,
                  }}
                >
                  <img
                    src={src}
                    alt={`강남언니 리뷰 ${i + 1}`}
                    className="w-full h-auto block"
                  />
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            disabled={index >= maxIndex}
            aria-label="다음"
            className="absolute right-0 lg:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white border border-border-default shadow-md flex items-center justify-center transition-all hover:border-brand disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center text-center">
          <p className="text-[0.95rem] lg:text-[1.05rem] text-text-sub mb-5 keep-all">
            더 많은 리뷰와 Before/After를 보고 싶다면 라인으로 연락주세요
          </p>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-track-location="gangnam_reviews"
            className="inline-flex items-center gap-2 bg-[#06C755] text-white text-[0.95rem] lg:text-[1rem] font-semibold py-3.5 px-8 rounded-full shadow-md shadow-[#06C755]/25 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#06C755]/40"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738C5.384.566 0 4.935 0 10.304c0 4.811 4.27 8.843 10.035 9.608.39.084.922.258 1.057.592.122.302.079.775.038 1.085l-.164 1.026c-.045.303-.24 1.186 1.049.647 1.291-.54 6.957-4.098 9.489-7.016 1.749-1.918 2.496-3.862 2.496-5.942zM7.591 13.078H5.206a.515.515 0 01-.515-.514V7.788a.515.515 0 111.03 0v4.264h1.87a.515.515 0 110 1.026zm2.02-.514a.515.515 0 11-1.03 0V7.788a.515.515 0 111.03 0v4.776zm5.761 0a.515.515 0 01-.927.307l-2.44-3.321v2.999a.515.515 0 11-1.03 0V7.788a.515.515 0 01.928-.307l2.44 3.322v-3a.515.515 0 111.029 0v4.776zm3.889-2.903a.515.515 0 110 1.03h-1.871v1.187h1.871a.515.515 0 110 1.03h-2.386a.515.515 0 01-.514-.514V7.788a.515.515 0 01.514-.515h2.386a.515.515 0 110 1.03h-1.871v1.358z" />
            </svg>
            LINE으로 문의하기
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[300] bg-black/85 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button
            type="button"
            aria-label="닫기"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <img
            src={lightbox}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-w-[92vw] max-h-[90vh] object-contain rounded-sm shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
