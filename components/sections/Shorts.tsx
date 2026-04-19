"use client";

import { useState } from "react";

// YouTube Shorts 영상 ID만 입력하면 자동으로 썸네일/링크가 생성됩니다.
// ID 얻는 법: https://www.youtube.com/shorts/ABC123 → "ABC123"
const SHORTS_IDS = [
  "ZlQannrpbSc",
  "hUHT8Aj5Ct4",
  "3deedDPJVrE",
  "GySjwoiW4A8",
  "5BZDn089MTA",
  "ihQYBj3RAvA",
];

const CHANNEL_SHORTS_URL = "https://www.youtube.com/@smplasticsurgery/shorts";

const VISIBLE = 6;

export default function Shorts() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(SHORTS_IDS.length / VISIBLE);
  const currentItems = SHORTS_IDS.slice(
    page * VISIBLE,
    page * VISIBLE + VISIBLE
  );

  return (
    <section id="shorts" className="py-12 lg:py-[60px] flex justify-center">
      <div className="w-full max-w-content px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10 lg:mb-14">
          <h2 className="font-serif-display text-[2rem] sm:text-[2.4rem] lg:text-[2.8rem] font-bold text-text-main">
            SMPS Shorts
          </h2>
          <a
            href={CHANNEL_SHORTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-text-main hover:text-brand transition-colors"
          >
            <span className="text-[0.9rem] lg:text-[1rem] font-semibold tracking-wider">
              MORE VIEW
            </span>
            <span className="w-9 h-9 rounded-full bg-brand flex items-center justify-center transition-transform group-hover:scale-110">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
              >
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </span>
          </a>
        </div>

        {/* Shorts Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 lg:gap-4">
          {currentItems.map((id) => (
            <a
              key={id}
              href={`https://www.youtube.com/shorts/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full aspect-[9/16] bg-neutral-100 overflow-hidden group cursor-pointer"
            >
              <img
                src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                <div className="w-12 h-12 rounded-full bg-white/95 flex items-center justify-center shadow-lg">
                  <div
                    className="w-0 h-0 ml-1"
                    style={{
                      borderStyle: "solid",
                      borderWidth: "7px 0 7px 11px",
                      borderColor:
                        "transparent transparent transparent #1e3a5f",
                    }}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination dots */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`페이지 ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === page ? "bg-brand" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
