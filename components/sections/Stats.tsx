"use client";

import { useState, useEffect, useRef } from "react";

const OPEN_DATE = new Date("2013-06-10");
const COUNT_DURATION = 1900; // ms — easeOutExpo

// 자체 카운트업 hook — requestAnimationFrame 기반, 외부 의존성 없음
function useCountUp(target: number, duration: number, start: boolean) {
  const [value, setValue] = useState(target);
  const hasStartedRef = useRef(false);
  useEffect(() => {
    if (!start || hasStartedRef.current) return;
    hasStartedRef.current = true;
    setValue(0);
    let frame: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = Math.min((now - startTime) / duration, 1);
      // easeOutExpo
      const eased = elapsed === 1 ? 1 : 1 - Math.pow(2, -10 * elapsed);
      setValue(Math.round(eased * target));
      if (elapsed < 1) {
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, start]);
  return value;
}

export default function Stats() {
  const [daysSinceOpen, setDaysSinceOpen] = useState<number>(0);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setDaysSinceOpen(
      Math.floor((Date.now() - OPEN_DATE.getTime()) / (1000 * 60 * 60 * 24))
    );
    if (typeof window !== "undefined") {
      setReducedMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    }
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const startCount = visible && !reducedMotion;

  const v1 = useCountUp(24, COUNT_DURATION, startCount);
  const v2 = useCountUp(1234, COUNT_DURATION, startCount);
  const v3 = useCountUp(daysSinceOpen, COUNT_DURATION, startCount && daysSinceOpen > 0);

  const NUMBERS = [
    {
      label: "의료진 활동 연혁 년수",
      value: v1.toString(),
      unit: "years.",
      note: "2002년 의사면허 취득",
    },
    {
      label: "수술 전후 사진 개수",
      value: v2.toLocaleString(),
      unit: "개",
      note: "2026년 5월 현재",
    },
    {
      label: "강남역 같은 자리에서",
      value: daysSinceOpen > 0 ? v3.toLocaleString() : "—",
      unit: "days.",
      note: "2013년 6월 10일 개원",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 flex justify-center overflow-hidden bg-[#f3f7f9]"
    >
      {/* 배경: space 인테리어 이미지 — 미세 blur (인테리어 윤곽 살짝 보이는 정도) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/space.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(4px)",
          transform: "scale(1.05)",
        }}
      />
      {/* 흰 오버레이 — 60%로 완화 */}
      <div className="absolute inset-0 pointer-events-none bg-white/60" />
      {/* 배경 추상 텍스처 워터마크 (위에 얹힘) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 50%, #1b499c0a 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, #313f760a 0%, transparent 55%)",
        }}
      />

      <div className="relative z-[1] w-full max-w-content px-6 text-center">
        <span className="label-en block mb-5">The Proven Numbers</span>
        <p className="text-[0.95rem] lg:text-[1rem] text-text-sub leading-[1.85] mb-16 keep-all">
          이 숫자는 단순한 경험의 양이 아닌
          <br />
          <strong className="text-text-main font-semibold">
            판단이 축적된 결과입니다.
          </strong>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          {NUMBERS.map((item, i) => (
            <div
              key={item.label}
              className={`rounded-2xl p-6 lg:p-8 transition-all duration-700 ease-out ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(4px)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                transitionDelay: visible ? `${i * 150}ms` : "0ms",
              }}
            >
              <p className="mb-5">
                <span className="label-pill">{item.label}</span>
              </p>
              <div className="flex items-baseline justify-center gap-1.5 mb-3">
                <span className="text-7xl lg:text-8xl font-extrabold text-brand leading-none tabular-nums">
                  {item.value}
                </span>
                {item.unit && (
                  <span className="text-[1rem] text-text-sub font-normal">
                    {item.unit}
                  </span>
                )}
              </div>
              <p className="text-[0.75rem] text-text-sub/60">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
