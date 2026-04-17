"use client";

import { useState } from "react";

const EXCHANGES = [
  { src: "/share_01.jpg", alt: "해외 의료진 교류 1" },
  { src: "/share_02.jpg", alt: "해외 의료진 교류 2" },
  { src: "/share_03.jpg", alt: "해외 의료진 교류 3" },
  { src: "/share_04.jpg", alt: "해외 의료진 교류 4" },
  { src: "/share_05.jpg", alt: "해외 의료진 교류 5" },
  { src: "/share_06.jpg", alt: "해외 의료진 교류 6" },
];

const PAPERS = [
  { src: "/paper_01.png", alt: "해외 논문 1" },
  { src: "/paper_02.png", alt: "해외 논문 2" },
  { src: "/paper_03.png", alt: "해외 논문 3" },
];

const VISIBLE = 3;

export default function International() {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, EXCHANGES.length - VISIBLE);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section
      id="international"
      className="py-20 lg:py-[120px] bg-[#2b3240] text-white"
    >
      {/* 해외 의료진과의 교류 */}
      <div className="w-full max-w-content mx-auto px-6 mb-24 lg:mb-32">
        <h2 className="text-center text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] font-bold mb-12 lg:mb-16 tracking-tight">
          해외 의료진과의 교류
        </h2>

        <div className="relative">
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="이전"
            className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white/15 hover:bg-white/25 transition-colors flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="overflow-hidden mx-12 lg:mx-16">
            <div
              className="flex gap-5 lg:gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(-${index} * (100% / ${VISIBLE}) - ${
                  index * (VISIBLE === 1 ? 0 : 20 / VISIBLE)
                }px))`,
              }}
            >
              {EXCHANGES.map((item, i) => (
                <div
                  key={i}
                  className="shrink-0 rounded-md overflow-hidden bg-white/5 aspect-[4/3]"
                  style={{
                    width: `calc((100% - ${(VISIBLE - 1) * 24}px) / ${VISIBLE})`,
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            disabled={index >= maxIndex}
            aria-label="다음"
            className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white/15 hover:bg-white/25 transition-colors flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* 해외 논문 · 발표 */}
      <div className="w-full max-w-content mx-auto px-6">
        <h2 className="text-center text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] font-bold mb-12 lg:mb-16 tracking-tight">
          해외 논문 · 발표
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {PAPERS.map((paper, i) => (
            <div
              key={i}
              className="rounded-md overflow-hidden bg-white aspect-[3/4] shadow-lg shadow-black/30"
            >
              <img
                src={paper.src}
                alt={paper.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
