"use client";

import { useState, useEffect } from "react";

const OPEN_DATE = new Date("2013-06-10");

export default function Stats() {
  const [daysSinceOpen, setDaysSinceOpen] = useState<number | null>(null);

  useEffect(() => {
    setDaysSinceOpen(Math.floor((Date.now() - OPEN_DATE.getTime()) / (1000 * 60 * 60 * 24)));
  }, []);

  const NUMBERS = [
    {
      label: "의료진 활동 연혁 년수",
      value: "24",
      unit: "years.",
      note: "2002년 의사면허 취득",
    },
    {
      label: "수술 전후 사진 개수",
      value: "1,234",
      unit: "개",
      note: "2026년 5월 현재",
    },
    {
      label: "강남역 같은 자리에서",
      value: daysSinceOpen !== null ? String(daysSinceOpen) : "—",
      unit: "days.",
      note: "2013년 6월 10일 개원",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 flex justify-center overflow-hidden bg-[#f3f7f9]">
      {/* 배경 추상 텍스처 워터마크 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 50%, #1b499c0a 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, #313f760a 0%, transparent 55%)",
        }}
      />

      <div className="relative z-[1] w-full max-w-content px-6 text-center">
        <span className="label-en block mb-5">
          The Proven Numbers
        </span>
        <p className="text-[0.95rem] lg:text-[1rem] text-text-sub leading-[1.85] mb-16 keep-all">
          이 숫자는 단순한 경험의 양이 아닌
          <br />
          <strong className="text-text-main font-semibold">판단이 축적된 결과입니다.</strong>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          {NUMBERS.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl p-8 lg:p-10"
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(4px)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <p className="text-[0.82rem] text-brand font-medium mb-5 tracking-wide">
                {item.label}
              </p>
              <div className="flex items-baseline justify-center gap-1.5 mb-3">
                <span className="text-[2.8rem] lg:text-[3.2rem] font-bold text-brand leading-none">
                  {item.value}
                </span>
                {item.unit && (
                  <span className="text-[1rem] text-text-sub font-normal">
                    {item.unit}
                  </span>
                )}
              </div>
              <p className="text-[0.75rem] text-text-sub/60">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
